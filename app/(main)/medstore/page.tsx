"use client"
import { useState, useEffect, useRef } from "react"
import {
  ShoppingBag, Search, X, Plus, Check, Scissors, Truck, Menu,
  Star, Trash2, Package, ArrowRight, Upload, Image as ImageIcon,
  MoveLeft, MoveRight, Edit3, Loader2, ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  MessageCircle
} from "lucide-react"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"

export type { Product, ProductColor } from "@/types/medstore"
import type { Product, ProductColor } from "@/types/medstore"
import { INITIAL_PRODUCTS } from "@/lib/data/medstoreProducts"
import { ProductImage } from "@/components/medstore/ProductImage"

export const ALL_APPAREL_SIZES = [
  "XXS", "XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL", "5XL", "6XL", "7XL", "8XL"
]

export const CART_STORAGE_KEY = "podguide_medstore_cart"
export const WHATSAPP_ORDER_NUMBER = "0784881010"
export const WHATSAPP_INTL_NUMBER = "27784881010"

interface CartItem {
  product: Product
  selectedColor: ProductColor
  selectedSize: string
  withEmbroidery: boolean
  embroideryName: string
  quantity: number
}

export const TANC_CATEGORIES = [
  { id: "all", label: "All Items" },
  { id: "sets", label: "Scrub Sets" },
  { id: "scrubs", label: "Scrub Tops" },
  { id: "pants", label: "Joggers & Pants" },
  { id: "coats", label: "Lab Coats & Gowns" },
  { id: "jackets", label: "Doctor's Jackets" },
  { id: "underscrubs", label: "Underscrubs" },
  { id: "stethoscopes", label: "Stethoscopes" },
  { id: "caps", label: "Scrub Caps" },
  { id: "accessories", label: "Accessories" },
]

export const POPULAR_COLORS = [
  { name: "All Colours", hex: "#374151", key: "all" },
  { name: "Midnight Black", hex: "#111827", key: "black" },
  { name: "Deep Navy", hex: "#1e3a8a", key: "navy" },
  { name: "Royal Blue", hex: "#1d4ed8", key: "royal" },
  { name: "Hunter Green", hex: "#14532d", key: "hunter" },
  { name: "Ceil Blue", hex: "#60a5fa", key: "ceil" },
  { name: "Burgundy Wine", hex: "#831843", key: "burgundy" },
  { name: "Olive Green", hex: "#3f6212", key: "olive" },
  { name: "Charcoal Grey", hex: "#374151", key: "charcoal" },
  { name: "Raspberry", hex: "#e11d48", key: "raspberry" },
  { name: "Petrol Blue", hex: "#0e7490", key: "petrol" },
  { name: "Lavender", hex: "#a855f7", key: "lavender" },
  { name: "Crisp White", hex: "#ffffff", key: "white" },
]

export function getCategoryTitle(catId: string): string {
  const titles: Record<string, string> = {
    "all": "All Items",
    "tanc-scrubs-all": "TANC Scrubs",
    "core-scrubs": "Core Scrubs",
    "lite-scrubs": "LITE Scrubs",
    "sets": "Scrub Sets",
    "scrubs": "Scrub Tops",
    "pants": "Scrub Pants",
    "jackets": "Doctor's Jackets",
    "coats": "Lab Coats & Gowns",
    "scrublab": "ScrubLab",
    "scrublab-women": "ScrubLab Women",
    "scrublab-men": "ScrubLab Men",
    "printed-tops": "Printed Scrub Tops",
    "printed-caps": "Printed Scrub Caps",
    "all-accessories": "All Accessories",
    "stethoscopes": "Stethoscopes",
    "caps": "Scrub Caps",
    "accessories": "Accessories & Gear",
    "underscrubs": "Underscrubs",
  }
  return titles[catId] || catId
}

export function matchCategory(product: Product, catId: string): boolean {
  if (catId === "all") return true
  const nameLower = product.name.toLowerCase()
  const techLower = (product.fabricTech || "").toLowerCase()
  const descLower = (product.description || "").toLowerCase()

  if (catId === "stethoscopes") {
    return nameLower.includes("stethoscope") || nameLower.includes("littmann")
  }
  if (catId === "caps") {
    return (nameLower.includes("cap") || nameLower.includes("headwear")) && !nameLower.includes("stethoscope")
  }
  if (catId === "accessories") {
    return product.collection === "accessories" && !nameLower.includes("stethoscope") && !nameLower.includes("littmann") && !nameLower.includes("cap")
  }
  if (catId === "all-accessories") {
    return product.collection === "accessories" || nameLower.includes("stethoscope") || nameLower.includes("littmann") || nameLower.includes("cap")
  }
  if (catId === "core-scrubs") {
    const isApparel = ["scrubs", "sets", "pants"].includes(product.collection)
    return isApparel && (nameLower.includes("core") || techLower.includes("core") || (!nameLower.includes("lite") && !nameLower.includes("scrublab")))
  }
  if (catId === "lite-scrubs") {
    const isApparel = ["scrubs", "sets", "pants"].includes(product.collection)
    return isApparel && (nameLower.includes("lite") || techLower.includes("lite") || descLower.includes("lite"))
  }
  if (catId === "scrublab") {
    return nameLower.includes("scrublab") || techLower.includes("silvalab") || descLower.includes("scrublab")
  }
  if (catId === "scrublab-women") {
    return (nameLower.includes("women") || nameLower.includes("female") || nameLower.includes("lily") || nameLower.includes("cleo")) && !nameLower.includes("stethoscope")
  }
  if (catId === "scrublab-men") {
    return (nameLower.includes("men") || nameLower.includes("male") || nameLower.includes("leo")) && !nameLower.includes("women") && !nameLower.includes("female") && !nameLower.includes("stethoscope")
  }
  if (catId === "printed-tops") {
    return product.collection === "scrubs" && (nameLower.includes("print") || descLower.includes("print"))
  }
  if (catId === "printed-caps") {
    return (nameLower.includes("cap") || nameLower.includes("headwear")) && (nameLower.includes("print") || nameLower.includes("animals") || nameLower.includes("aid") || nameLower.includes("buds") || nameLower.includes("dino"))
  }
  if (catId === "sets") {
    return product.collection === "sets" && !nameLower.includes("stethoscope") && !nameLower.includes("littmann")
  }
  if (catId === "scrubs") {
    return product.collection === "scrubs" && !nameLower.includes("cap") && !nameLower.includes("stethoscope")
  }
  if (catId === "pants") {
    return product.collection === "pants" && !nameLower.includes("stethoscope")
  }
  if (catId === "jackets") {
    return product.collection === "jackets" && !nameLower.includes("stethoscope")
  }
  if (catId === "coats") {
    return product.collection === "coats" && !nameLower.includes("stethoscope")
  }
  if (catId === "tanc-scrubs-all") {
    return ["scrubs", "sets", "pants", "jackets", "coats", "underscrubs"].includes(product.collection) && !nameLower.includes("stethoscope")
  }
  return product.collection === catId
}

export function getProductColorImage(product: Product, color?: ProductColor | null): string {
  const allImgs = product.imageUrls && product.imageUrls.length > 0
    ? product.imageUrls
    : (product.imageUrl ? [product.imageUrl] : [])
  if (!color) return allImgs[0] || ""
  if (color.imageUrl) return color.imageUrl

  const cleanColorWords = color.name
    .toLowerCase()
    .split(/[\s\-_/]+/)
    .filter(w => w.length > 2 && !["and", "the", "dark", "deep", "light"].includes(w))

  if (cleanColorWords.length > 0) {
    const matched = allImgs.find(url => {
      const u = url.toLowerCase()
      return cleanColorWords.some(w => u.includes(w))
    })
    if (matched) return matched
  }

  return allImgs[0] || ""
}

const COLLECTIONS = TANC_CATEGORIES

interface MedStorePageProps {
  isAdmin?: boolean
}

export default function MedStorePage({ isAdmin: initialIsAdmin = false }: MedStorePageProps) {
  const supabase = createClient()
  const [isAdmin, setIsAdmin] = useState(initialIsAdmin)
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS)

  const [selectedCollection, setSelectedCollection] = useState<string>("all")
  const [selectedColorFilter, setSelectedColorFilter] = useState<string>("all")
  const [search, setSearch] = useState<string>("")
  const [colorSelections, setColorSelections] = useState<Record<string, ProductColor>>({})
  const [hoveredColors, setHoveredColors] = useState<Record<string, ProductColor | null>>({})

  // Mega nav state
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [showMobileNav, setShowMobileNav] = useState(false)
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)

  // Product Detail Modal
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null)
  const [activeModalImageIdx, setActiveModalImageIdx] = useState(0)
  const [modalColor, setModalColor] = useState<ProductColor>(INITIAL_PRODUCTS[0].colors[0])
  const [modalSize, setModalSize] = useState<string>("M")
  const [withEmbroidery, setWithEmbroidery] = useState<boolean>(false)
  const [embroideryName, setEmbroideryName] = useState<string>("")
  const [showFullDesc, setShowFullDesc] = useState<boolean>(false)

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCartDrawer, setShowCartDrawer] = useState<boolean>(false)

  // Admin Merch Editor Modal state
  const [showAdminModal, setShowAdminModal] = useState(false)
  const [editingProductId, setEditingProductId] = useState<string | null>(null)
  const [prodName, setProdName] = useState("")
  const [prodCollection, setProdCollection] = useState<Product["collection"]>("scrubs")
  const [prodPriceZAR, setProdPriceZAR] = useState(320)
  const [prodPriceUSD, setProdPriceUSD] = useState(18)
  const [prodBadge, setProdBadge] = useState("")
  const [prodTech, setProdTech] = useState("")
  const [prodDesc, setProdDesc] = useState("")
  const [prodIcon, setProdIcon] = useState("👕")
  const [prodImages, setProdImages] = useState<string[]>([])
  const [prodColors, setProdColors] = useState<ProductColor[]>([
    { name: "Navy Blue", hex: "#1e3a8a" },
    { name: "Midnight Black", hex: "#111827" }
  ])
  const [prodSizes, setProdSizes] = useState<string[]>(["S", "M", "L", "XL"])
  const [prodSpecs, setProdSpecs] = useState<string[]>([])

  const [uploadingImage, setUploadingImage] = useState(false)
  const [savingProduct, setSavingProduct] = useState(false)
  const [customColorName, setCustomColorName] = useState("")
  const [customColorHex, setCustomColorHex] = useState("#1e3a8a")
  const [customSpecInput, setCustomSpecInput] = useState("")
  const [customUrlInput, setCustomUrlInput] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Check user and fetch live products
  useEffect(() => {
    const init = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          const { data: profile } = await supabase
            .from("student_profiles")
            .select("is_admin")
            .eq("user_id", user.id)
            .single()

          if (profile?.is_admin) setIsAdmin(true)
        }

        const { data: dbProds, error } = await supabase
          .from("medstore_products")
          .select("*")
          .eq("is_active", true)
          .order("display_order", { ascending: true })

        if (!error && dbProds && dbProds.length > 0) {
          const mapped: Product[] = dbProds.map((p: any) => ({
            id: p.id,
            name: p.name,
            collection: p.collection,
            priceZAR: Number(p.price_zar) || 0,
            priceUSD: Number(p.price_usd) || 0,
            rating: p.rating || 4.9,
            reviewsCount: p.reviews_count || 100,
            badge: p.badge || undefined,
            fabricTech: p.fabric_tech || undefined,
            imageUrl: p.image_url || undefined,
            imageUrls: Array.isArray(p.image_urls) ? p.image_urls : (p.image_url ? [p.image_url] : []),
            imageIcon: p.image_icon || "🛍️",
            description: p.description || "",
            colors: Array.isArray(p.colors) ? p.colors : [],
            sizes: Array.isArray(p.sizes) ? p.sizes : ["S", "M", "L", "XL"],
            specs: Array.isArray(p.specs) ? p.specs : [],
            isAdminAdded: true
          }))
          setProducts(mapped)
        }
      } catch (err) {
        console.warn("Using initial product catalog:", err)
      }
    }
    init()

    // 1. Load saved cart from localStorage
    try {
      if (typeof window !== "undefined") {
        const savedCart = localStorage.getItem(CART_STORAGE_KEY)
        if (savedCart) {
          const parsed = JSON.parse(savedCart)
          if (Array.isArray(parsed) && parsed.length > 0) {
            setCart(parsed)
          }
        }
      }
    } catch (e) {
      console.warn("Could not load cart from storage:", e)
    }
  }, [])

  // 2. Persist cart to localStorage whenever it changes
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
      }
    } catch (e) {
      console.warn("Could not save cart to storage:", e)
    }
  }, [cart])

  const getActiveColor = (product: Product) =>
    colorSelections[product.id] || product.colors[0] || { name: "Default", hex: "#111827" }

  const handleColorSelect = (productId: string, color: ProductColor, e: React.MouseEvent) => {
    e.stopPropagation()
    setColorSelections(prev => ({ ...prev, [productId]: color }))
  }

  const openProductModal = (product: Product) => {
    setActiveModalProduct(product)
    const activeColor = getActiveColor(product)
    setModalColor(activeColor)

    const isApparel = ['sets', 'scrubs', 'pants', 'jackets', 'coats', 'underscrubs'].includes(product.collection)
    const availableSizes = isApparel ? ALL_APPAREL_SIZES : product.sizes
    setModalSize(availableSizes.includes("M") ? "M" : availableSizes[0] || "M")
    setWithEmbroidery(false)
    setEmbroideryName("")
    setShowFullDesc(false)
    setActiveModalImageIdx(0)
  }

  const handleModalColorSelect = (color: ProductColor) => {
    setModalColor(color)
    setActiveModalImageIdx(0)
    if (activeModalProduct) {
      setColorSelections(prev => ({ ...prev, [activeModalProduct.id]: color }))
    }
  }

  const formatPrice = (zar: number, usd: number) => `$${usd.toFixed(2)}`

  const addToCart = (product: Product) => {
    setCart(prev => {
      // Check if duplicate item exists (same product, color, size, embroidery)
      const existingIdx = prev.findIndex(item =>
        item.product.id === product.id &&
        item.selectedColor.name === modalColor.name &&
        item.selectedSize === modalSize &&
        item.withEmbroidery === withEmbroidery &&
        item.embroideryName === (withEmbroidery ? embroideryName : "")
      )
      if (existingIdx !== -1) {
        const next = [...prev]
        next[existingIdx].quantity += 1
        return next
      }
      return [...prev, {
        product,
        selectedColor: modalColor,
        selectedSize: modalSize,
        withEmbroidery,
        embroideryName: withEmbroidery ? embroideryName : "",
        quantity: 1
      }]
    })
    setActiveModalProduct(null)
    toast.success(`Added ${product.name} to cart`, {
      description: `${modalColor.name}, Size ${modalSize}${withEmbroidery ? ", Embroidered" : ""}`
    })
    setShowCartDrawer(true)
  }

  const updateCartQuantity = (index: number, delta: number) => {
    setCart(prev => {
      const updated = [...prev]
      const current = updated[index]
      if (!current) return prev
      const newQty = current.quantity + delta
      if (newQty <= 0) {
        return updated.filter((_, i) => i !== index)
      }
      updated[index] = { ...current, quantity: newQty }
      return updated
    })
  }

  const removeCartItem = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
    toast.info("Item removed from cart")
  }

  const clearEntireCart = () => {
    if (confirm("Are you sure you want to empty your cart?")) {
      setCart([])
      toast.info("Cart emptied")
    }
  }

  const getCartSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.product.priceUSD * item.quantity, 0)
  }

  const getCartEmbroideryTotal = () => {
    return cart.reduce((sum, item) => sum + (item.withEmbroidery ? 4 * item.quantity : 0), 0)
  }

  const getCartTotalAmount = () => {
    return getCartSubtotal() + getCartEmbroideryTotal()
  }

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty. Please select products first.")
      return
    }

    const totalUSD = getCartTotalAmount()
    const totalItemsCount = cart.reduce((acc, it) => acc + it.quantity, 0)

    let message = `🩺 *NEW PODGUIDE / TANC ORDER*\n`
    message += `────────────────────────────\n`
    message += `📦 *Order Summary (${totalItemsCount} total item${totalItemsCount > 1 ? "s" : ""}):*\n\n`

    cart.forEach((item, idx) => {
      const embCost = item.withEmbroidery ? 4 : 0
      const unitTotal = item.product.priceUSD + embCost
      const itemSubtotal = unitTotal * item.quantity

      message += `${idx + 1}️⃣ *${item.product.name}*\n`
      message += `   • *Collection:* ${item.product.collection.toUpperCase()}\n`
      message += `   • *Colour:* ${item.selectedColor.name}\n`
      message += `   • *Size:* ${item.selectedSize}\n`
      message += `   • *Quantity:* ${item.quantity}\n`
      if (item.withEmbroidery && item.embroideryName) {
        message += `   • *Custom Embroidery:* "${item.embroideryName}" (+$4.00)\n`
      } else if (item.withEmbroidery) {
        message += `   • *Custom Embroidery:* Medical Embroidery (+$4.00)\n`
      }
      message += `   • *Unit Price:* $${item.product.priceUSD.toFixed(2)} USD\n`
      message += `   • *Item Total:* $${itemSubtotal.toFixed(2)} USD\n`
      if (item.product.fabricTech) {
        message += `   • *Material:* ${item.product.fabricTech}\n`
      }
      message += `\n`
    })

    message += `────────────────────────────\n`
    message += `💰 *TOTAL AMOUNT:* $${totalUSD.toFixed(2)} USD\n`
    message += `🚚 *Campus Delivery:* FREE Drop\n`
    message += `📞 *Order Destination:* ${WHATSAPP_ORDER_NUMBER}\n`
    message += `────────────────────────────\n`
    message += `Hi! I would like to place this order from PodGuide MedStore. Please confirm stock availability and send payment details. Thank you!`

    const encoded = encodeURIComponent(message)
    const waUrl = `https://wa.me/${WHATSAPP_INTL_NUMBER}?text=${encoded}`
    window.open(waUrl, "_blank")
  }

  // Open Admin Add Modal
  const openNewProductModal = () => {
    setEditingProductId(null)
    setProdName("")
    setProdCollection("scrubs")
    setProdPriceZAR(320)
    setProdPriceUSD(18)
    setProdBadge("")
    setProdTech("LABx™ 4-Way Stretch")
    setProdDesc("")
    setProdIcon("👕")
    setProdImages([])
    setProdColors([
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Midnight Black", hex: "#111827" }
    ])
    setProdSizes(["S", "M", "L", "XL"])
    setProdSpecs(["4-Way Stretch", "Antimicrobial finish"])
    setShowAdminModal(true)
  }

  // Open Admin Edit Modal
  const openEditProductModal = (p: Product, e: React.MouseEvent) => {
    e.stopPropagation()
    setEditingProductId(p.id)
    setProdName(p.name)
    setProdCollection(p.collection)
    setProdPriceZAR(p.priceZAR)
    setProdPriceUSD(p.priceUSD)
    setProdBadge(p.badge || "")
    setProdTech(p.fabricTech || "")
    setProdDesc(p.description)
    setProdIcon(p.imageIcon || "🛍️")
    setProdImages(p.imageUrls && p.imageUrls.length > 0 ? p.imageUrls : (p.imageUrl ? [p.imageUrl] : []))
    setProdColors(p.colors || [])
    setProdSizes(p.sizes || ["S", "M", "L", "XL"])
    setProdSpecs(p.specs || [])
    setShowAdminModal(true)
  }

  // Upload image from file
  const handleUploadImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadingImage(true)

    try {
      const fd = new FormData()
      fd.append("file", file)
      const res = await fetch("/api/medstore/upload", { method: "POST", body: fd })
      const data = await res.json()
      if (res.ok && data.url) {
        setProdImages(prev => [...prev, data.url])
        toast.success("Picture uploaded successfully")
      } else {
        toast.error(data.error || "Failed to upload picture")
      }
    } catch (err: any) {
      toast.error(err.message || "Upload failed")
    } finally {
      setUploadingImage(false)
      if (fileInputRef.current) fileInputRef.current.value = ""
    }
  }

  // Add picture by URL
  const handleAddImageUrl = () => {
    if (!customUrlInput.trim()) return
    setProdImages(prev => [...prev, customUrlInput.trim()])
    setCustomUrlInput("")
    toast.success("Picture added")
  }

  // Reorder / Move picture
  const handleMoveImage = (idx: number, dir: "left" | "right") => {
    if (dir === "left" && idx > 0) {
      setProdImages(prev => {
        const copy = [...prev]
        const temp = copy[idx - 1]
        copy[idx - 1] = copy[idx]
        copy[idx] = temp
        return copy
      })
    } else if (dir === "right" && idx < prodImages.length - 1) {
      setProdImages(prev => {
        const copy = [...prev]
        const temp = copy[idx + 1]
        copy[idx + 1] = copy[idx]
        copy[idx] = temp
        return copy
      })
    }
  }

  const handleSetCover = (idx: number) => {
    if (idx === 0) return
    setProdImages(prev => {
      const target = prev[idx]
      const rest = prev.filter((_, i) => i !== idx)
      return [target, ...rest]
    })
    toast.success("Cover picture set")
  }

  const handleRemoveImage = (idx: number) => {
    setProdImages(prev => prev.filter((_, i) => i !== idx))
  }

  // Save (Create / Update)
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prodName.trim()) {
      toast.error("Product name is required")
      return
    }

    setSavingProduct(true)
    const payload = {
      id: editingProductId || `merch-${Date.now()}`,
      name: prodName.trim(),
      collection: prodCollection,
      price_zar: Number(prodPriceZAR) || 0,
      price_usd: Number(prodPriceUSD) || 0,
      badge: prodBadge.trim() || null,
      fabric_tech: prodTech.trim() || null,
      image_url: prodImages[0] || null,
      image_urls: prodImages,
      image_icon: prodIcon || "🛍️",
      description: prodDesc.trim() || "",
      colors: prodColors,
      sizes: prodSizes,
      specs: prodSpecs
    }

    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: editingProductId ? "update_merch" : "create_merch",
          payload: editingProductId ? { id: editingProductId, updates: payload } : payload
        })
      })
      const data = await res.json()

      if (res.ok) {
        const savedProd: Product = {
          id: payload.id,
          name: payload.name,
          collection: payload.collection,
          priceZAR: payload.price_zar,
          priceUSD: payload.price_usd,
          badge: payload.badge || undefined,
          fabricTech: payload.fabric_tech || undefined,
          imageUrl: payload.image_url || undefined,
          imageUrls: payload.image_urls,
          imageIcon: payload.image_icon,
          description: payload.description,
          colors: payload.colors,
          sizes: payload.sizes,
          specs: payload.specs,
          rating: 4.9,
          reviewsCount: 120,
          isAdminAdded: true
        }

        if (editingProductId) {
          setProducts(prev => prev.map(p => p.id === editingProductId ? savedProd : p))
          toast.success(`Updated "${savedProd.name}"`)
        } else {
          setProducts(prev => [savedProd, ...prev])
          toast.success(`Published "${savedProd.name}"`)
        }
        setShowAdminModal(false)
      } else {
        toast.error(data.error || "Failed to save product")
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to save")
    } finally {
      setSavingProduct(false)
    }
  }

  // Delete product
  const handleDeleteProduct = async (productId: string, name: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (!confirm(`Delete "${name}" from MedStore?`)) return

    try {
      const res = await fetch("/api/admin/actions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "delete_merch",
          payload: { productId }
        })
      })
      if (res.ok) {
        setProducts(prev => prev.filter(p => p.id !== productId))
        toast.success(`Deleted "${name}"`)
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to delete")
    }
  }

  const filteredProducts = products.filter(product => {
    // Category filter
    const matchesCollection = matchCategory(product, selectedCollection)

    // Color filter
    let matchesColor = true
    if (selectedColorFilter !== "all") {
      const cKey = selectedColorFilter.toLowerCase()
      matchesColor =
        product.colors.some(c => c.name.toLowerCase().includes(cKey)) ||
        product.name.toLowerCase().includes(cKey) ||
        product.description.toLowerCase().includes(cKey)
    }

    // Search query matching
    let matchesSearch = true
    if (search.trim()) {
      const terms = search.toLowerCase().trim().split(/\s+/).filter(Boolean)
      matchesSearch = terms.every(term => {
        return (
          product.name.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          (product.fabricTech && product.fabricTech.toLowerCase().includes(term)) ||
          (product.badge && product.badge.toLowerCase().includes(term)) ||
          (product.collection && product.collection.toLowerCase().includes(term)) ||
          (product.specs && product.specs.some(s => s.toLowerCase().includes(term))) ||
          (product.colors && product.colors.some(c => c.name.toLowerCase().includes(term)))
        )
      })
    }

    return matchesCollection && matchesColor && matchesSearch
  }).sort((a, b) => {
    const getProductRank = (product: Product): number => {
  const name = product.name.toLowerCase();
  const col = product.collection;
  // Core sets (best sellers)
  if (col === "sets" || name.includes("set") || name.includes("suit")) return 1;
  // TANC Lite scrubs (lite) next priority
  if (col === "scrubs" && name.includes("lite")) return 2;
  // Lab coats next
  if (col === "coats" || name.includes("lab coat") || name.includes("consultation coat")) return 3;
  // Jackets (soft‑shell & Doctor's) next
  if (col === "jackets" || name.includes("jacket") || name.includes("fleece")) return 4;
  // Underscrubs after jackets
  if (col === "underscrubs") return 5;
  // Generic scrubs after underscrubs
  if (col === "scrubs") return 6;
  // Pants next
  if (col === "pants" || name.includes("pant") || name.includes("jogger") || name.includes("trouser")) return 7;
  // Stethoscopes
  if (name.includes("stethoscope") || name.includes("littmann")) return 8;
  // Caps / headwear
  if (name.includes("cap") || name.includes("headwear")) return 9;
  // Other accessories and items
  return 10;
    }
    const rankDiff = getProductRank(a) - getProductRank(b)
    if (rankDiff !== 0) return rankDiff
    return (b.reviewsCount || 0) - (a.reviewsCount || 0)
  })

  const getCategoryCount = (catId: string) => {
    return products.filter(p => matchCategory(p, catId)).length
  }

  return (
    <div className="max-w-7xl mx-auto pb-24 space-y-0">

      {/* ── TANC MEGA NAV ── */}
      {(() => {
        const navFilter = (filter: string) => {
          setSelectedCollection(filter)
          setSearch("")
          setSelectedColorFilter("all")
          setOpenDropdown(null)
          setShowMobileNav(false)
          document.getElementById("medstore-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
        }

        const navSections = [
          {
            label: "TANC Scrubs",
            key: "tanc-scrubs",
            columns: [
              {
                heading: "Scrubs Range",
                items: [
                  { label: "Shop All TANC Scrubs", filter: "tanc-scrubs-all" },
                  { label: "Core Scrubs", filter: "core-scrubs" },
                  { label: "LITE Scrubs", filter: "lite-scrubs" },
                  { label: "Scrub Sets", filter: "sets" },
                  { label: "Scrub Tops", filter: "scrubs" },
                  { label: "Scrub Pants", filter: "pants" },
                ],
              },
              {
                heading: "Outerwear & Lab",
                items: [
                  { label: "Doctor's Jackets", filter: "jackets" },
                  { label: "Lab Coats & Gowns", filter: "coats" },
                  { label: "Underscrubs", filter: "underscrubs" },
                ],
              },
            ],
          },
          {
            label: "ScrubLab",
            key: "scrublab",
            columns: [
              {
                heading: "Women",
                items: [
                  { label: "Shop All Women", filter: "scrublab-women" },
                  { label: "Scrub Tops", filter: "scrublab-women" },
                  { label: "Scrub Pants", filter: "pants" },
                  { label: "Printed Scrub Tops", filter: "printed-tops" },
                  { label: "Printed Scrub Caps", filter: "printed-caps" },
                ],
              },
              {
                heading: "Men",
                items: [
                  { label: "Shop All Men", filter: "scrublab-men" },
                  { label: "Scrub Tops", filter: "scrublab-men" },
                  { label: "Scrub Pants", filter: "pants" },
                  { label: "Printed Scrub Tops", filter: "printed-tops" },
                ],
              },
            ],
          },
          {
            label: "Accessories",
            key: "accessories",
            columns: [
              {
                heading: "Diagnostics & Gear",
                items: [
                  { label: "All Accessories", filter: "all-accessories" },
                  { label: "Stethoscopes", filter: "stethoscopes" },
                  { label: "Scrub Caps", filter: "caps" },
                  { label: "Active Socks & Gear", filter: "accessories" },
                ],
              },
            ],
          },
        ]

        return (
          <>
            {/* Desktop nav */}
            <nav className="hidden md:flex items-center justify-between border-b border-[#1a1a1a] mb-8 -mx-4 px-4 bg-[#0A0F1C]/95 backdrop-blur sticky top-0 z-40">
              <div className="flex items-center gap-1">
                {navSections.map(section => (
                  <div
                    key={section.key}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(section.key)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className={`flex items-center gap-1.5 px-4 py-3 text-xs font-bold uppercase tracking-widest transition-colors ${openDropdown === section.key ? "text-brand" : "text-gray-400 hover:text-white"}`}>
                      {section.label}
                      <ChevronDown size={11} className={`transition-transform ${openDropdown === section.key ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === section.key && (
                      <div className="absolute top-full left-0 z-50 mt-0 flex gap-6 bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl shadow-2xl shadow-black/60 p-5 min-w-[340px]">
                        {section.columns.map(col => (
                          <div key={col.heading} className="min-w-[130px]">
                            <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand mb-2.5">{col.heading}</p>
                            <ul className="space-y-2">
                              {col.items.map(item => (
                                <li key={item.label}>
                                  <button
                                    onClick={() => navFilter(item.filter)}
                                    className="text-xs text-gray-400 hover:text-white transition-colors text-left whitespace-nowrap block"
                                  >
                                    {item.label}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* Direct link to Colour Guide */}
                <button
                  onClick={() => document.getElementById("colour-guide")?.scrollIntoView({ behavior: "smooth" })}
                  className="px-4 py-3 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors"
                >
                  Colour Guide
                </button>
              </div>

              {selectedCollection !== "all" && (
                <button
                  onClick={() => setSelectedCollection("all")}
                  className="text-xs font-bold text-brand hover:underline flex items-center gap-1"
                >
                  <span>Reset to All</span>
                  <X size={12} />
                </button>
              )}
            </nav>

            {/* Mobile nav toggle */}
            <div className="md:hidden flex items-center justify-between border-b border-[#1a1a1a] mb-6 pb-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">Browse Collection</span>
              <button onClick={() => setShowMobileNav(v => !v)} className="flex items-center gap-2 text-xs font-bold text-gray-300 hover:text-white bg-[#111] px-3 py-1.5 rounded-lg border border-[#222]">
                <Menu size={15} /> Categories
              </button>
            </div>

            {/* Mobile nav drawer */}
            {showMobileNav && (
              <div className="md:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" onClick={() => setShowMobileNav(false)}>
                <div className="absolute right-0 top-0 h-full w-72 bg-[#0d0d0d] border-l border-[#1f1f1f] overflow-y-auto p-5" onClick={e => e.stopPropagation()}>
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#1f1f1f]">
                    <span className="text-sm font-black text-white uppercase tracking-widest">Categories</span>
                    <button onClick={() => setShowMobileNav(false)}><X size={18} className="text-gray-400" /></button>
                  </div>
                  {navSections.map(section => (
                    <div key={section.key} className="mb-4">
                      <button
                        onClick={() => setOpenMobileSection(openMobileSection === section.key ? null : section.key)}
                        className="flex items-center justify-between w-full text-xs font-black uppercase tracking-widest text-white py-2.5 border-b border-[#1f1f1f]"
                      >
                        {section.label}
                        <ChevronDown size={12} className={`transition-transform ${openMobileSection === section.key ? "rotate-180" : ""}`} />
                      </button>
                      {openMobileSection === section.key && (
                        <div className="pt-3 pl-2 space-y-4">
                          {section.columns.map(col => (
                            <div key={col.heading}>
                              <p className="text-[9px] font-black uppercase tracking-[0.2em] text-brand mb-2">{col.heading}</p>
                              <ul className="space-y-2">
                                {col.items.map(item => (
                                  <li key={item.label}>
                                    <button
                                      onClick={() => navFilter(item.filter)}
                                      className="text-xs text-gray-400 hover:text-white transition-colors text-left block w-full py-0.5"
                                    >
                                      {item.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  {/* Colour Guide link in mobile drawer */}
                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setShowMobileNav(false)
                        setTimeout(() => document.getElementById("colour-guide")?.scrollIntoView({ behavior: "smooth" }), 100)
                      }}
                      className="w-full text-left text-xs font-black uppercase tracking-widest text-gray-300 hover:text-white py-2.5 border-b border-[#1f1f1f]"
                    >
                      Colour Guide
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )
      })()}

      {/* ── STORE HERO HEADER ── */}
      <div className="border-b border-[#1a1a1a] pb-8 mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">
                Official Partner
              </span>
              <span className="w-12 h-px bg-brand/40" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                TANC® Medical Wear &bull; South Africa
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
              MED<span className="text-brand">STORE</span>
            </h1>
            <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
              LABx™ 4-way stretch scrubs, HydroShield™ doctor's jackets, and Littmann stethoscopes.
              Custom medical embroidery available on all apparel.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 flex-wrap">
            {/* USD-only badge */}
            <span className="px-3 py-1.5 bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl text-xs font-bold text-green-400">USD ($)</span>

            {/* Admin Add Merch Button */}
            {isAdmin && (
              <button
                onClick={openNewProductModal}
                className="px-4 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg shadow-brand/20"
              >
                <Plus size={14} /> Add Product
              </button>
            )}

            {/* Cart Button */}
            <button
              onClick={() => setShowCartDrawer(true)}
              className="relative px-4 py-2.5 bg-[#0f0f0f] border border-[#1f1f1f] hover:border-brand/60 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg"
            >
              <ShoppingBag size={14} className="text-brand" />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-brand text-white font-black text-[10px] flex items-center gap-1 shadow">
                  <span>{cart.reduce((a, b) => a + b.quantity, 0)}</span>
                  <span>&bull;</span>
                  <span>${getCartTotalAmount().toFixed(2)}</span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── TRUST BADGES ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { icon: <Truck size={14} />, label: "Next Day Dispatch" },
          { icon: <Scissors size={14} />, label: "Custom Embroidery" },
          { icon: <Star size={14} fill="currentColor" />, label: "4.9 Avg Rating" },
          { icon: <Package size={14} />, label: "Campus Delivery" },
        ].map(badge => (
          <div
            key={badge.label}
            className="flex items-center gap-2 bg-[#0d0d0d] border border-[#1a1a1a] px-4 py-3 rounded-xl text-xs text-gray-400"
          >
            <span className="text-brand flex-shrink-0">{badge.icon}</span>
            <span className="font-medium">{badge.label}</span>
          </div>
        ))}
      </div>

      {/* ── SEARCH & ACTIVE CATEGORY ── */}
      <div className="space-y-4 mb-8">
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search within catalog (e.g. Cleo, Lily, Littmann, Doctor's Jacket)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand/60 rounded-xl pl-10 pr-10 py-3 text-xs text-white placeholder:text-gray-600 outline-none transition-all shadow-inner"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
              title="Clear search"
            >
              <X size={13} />
            </button>
          )}
        </div>

        {/* Active collection label & results count */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-1">
          <div className="flex items-center gap-2 flex-wrap text-gray-400">
            <span>
              Showing <strong className="text-white">{filteredProducts.length}</strong> of {products.length} products
            </span>
            {(selectedCollection !== "all" || search) && (
              <>
                <span className="text-gray-600">&bull;</span>
                <div className="flex items-center gap-1.5 flex-wrap">
                  {selectedCollection !== "all" && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#161616] border border-[#2a2a2a] text-[11px] text-brand font-bold">
                      <span>{getCategoryTitle(selectedCollection)}</span>
                      <button onClick={() => setSelectedCollection("all")} className="text-gray-500 hover:text-white">
                        <X size={11} />
                      </button>
                    </span>
                  )}
                  {search && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#161616] border border-[#2a2a2a] text-[11px] text-gray-300">
                      <span>&ldquo;{search}&rdquo;</span>
                      <button onClick={() => setSearch("")} className="text-gray-500 hover:text-white">
                        <X size={11} />
                      </button>
                    </span>
                  )}
                </div>
              </>
            )}
          </div>

          {(selectedCollection !== "all" || search) && (
            <button
              onClick={() => {
                setSelectedCollection("all")
                setSearch("")
              }}
              className="text-[11px] text-brand hover:underline font-bold"
            >
              View All Products
            </button>
          )}
        </div>
      </div>

      {/* ── PRODUCTS GRID ── */}
      {filteredProducts.length === 0 ? (
        <div className="bg-[#0b0b0b] border border-[#1a1a1a] rounded-2xl p-12 text-center max-w-xl mx-auto my-12 space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mx-auto">
            <ShoppingBag size={28} />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-white">No medical wear matches found</h3>
            <p className="text-xs text-gray-400">
              We couldn't find any items matching your active category, colour, or search terms.
            </p>
          </div>
          <button
            onClick={() => {
              setSearch("")
              setSelectedCollection("all")
              setSelectedColorFilter("all")
            }}
            className="px-5 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-brand/20"
          >
            Clear All Filters
          </button>
        </div>
      ) : (
        <div id="medstore-grid" className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map(product => {
            const activeColor = getActiveColor(product)
            const previewColor = hoveredColors[product.id] || activeColor
            const allImgs = product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls : (product.imageUrl ? [product.imageUrl] : [])
            const coverImg = getProductColorImage(product, previewColor)

            return (
              <div
                key={product.id}
                onClick={() => openProductModal(product)}
                className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-brand/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group cursor-pointer relative shadow-lg"
              >
                <div>
                  {/* Image / Icon container with ProductImage and live colour shifting */}
                  <div className="relative w-full aspect-square bg-[#0e0e0e] flex items-center justify-center overflow-hidden">
                    <ProductImage
                      key={coverImg}
                      src={coverImg}
                      alt={`${product.name} - ${previewColor?.name || ""}`}
                      fallbackIcon={product.imageIcon}
                    />

                    {/* Multi-picture badge */}
                    {allImgs.length > 1 && (
                      <span className="absolute bottom-2.5 right-2.5 text-[9px] font-bold text-white bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1 z-10 pointer-events-none">
                        <ImageIcon size={10} /> {allImgs.length}
                      </span>
                    )}

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3 z-10 pointer-events-none">
                        <span className="text-[9px] font-black uppercase tracking-wider text-white bg-brand px-2.5 py-1 rounded-md shadow-md">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Admin Quick Action Controls */}
                    {isAdmin && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <button
                          onClick={e => openEditProductModal(product, e)}
                          className="p-1.5 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                          title="Edit product"
                        >
                          <Edit3 size={13} />
                        </button>
                        <button
                          onClick={e => handleDeleteProduct(product.id, product.name, e)}
                          className="p-1.5 text-gray-400 hover:text-brand rounded-lg hover:bg-brand/10 transition-colors"
                          title="Delete product"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Info block */}
                  <div className="p-3.5 sm:p-5 space-y-2.5 sm:space-y-3">
                    <div className="space-y-1">
                      {product.fabricTech && (
                        <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand block truncate">
                          {product.fabricTech}
                        </span>
                      )}
                      <h3 className="text-xs sm:text-sm font-bold text-white leading-snug group-hover:text-brand transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 line-clamp-2 leading-relaxed hidden sm:block">
                        {product.description}
                      </p>
                    </div>

                    {/* Colour shifting swatches with hover and selection */}
                    {product.colors && product.colors.length > 0 && (
                      <div className="space-y-1 pt-0.5 sm:pt-1">
                        <div className="flex items-center justify-between text-[10px] sm:text-[11px]">
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-gray-500">
                            Colour
                          </span>
                          <span className="text-[9px] sm:text-[10px] text-gray-300 font-semibold truncate max-w-[90px] sm:max-w-[130px]">
                            {previewColor?.name || "Standard"}
                          </span>
                        </div>
                        <div
                          className="flex items-center gap-1 sm:gap-1.5 flex-wrap"
                          onMouseLeave={() => setHoveredColors(prev => ({ ...prev, [product.id]: null }))}
                        >
                          {product.colors.slice(0, 5).map(color => {
                            const isCurrent = previewColor?.name === color.name
                            return (
                              <button
                                key={color.name}
                                type="button"
                                onMouseEnter={() => setHoveredColors(prev => ({ ...prev, [product.id]: color }))}
                                onClick={e => handleColorSelect(product.id, color, e)}
                                title={`${color.name} (Hover to preview, click to select)`}
                                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border transition-all duration-150 relative ${
                                  isCurrent
                                    ? "scale-125 border-brand ring-2 ring-brand/40 shadow-sm"
                                    : "border-white/20 hover:scale-110 opacity-75 hover:opacity-100"
                                }`}
                                style={{ backgroundColor: color.hex }}
                              >
                                {isCurrent && (
                                  <span className="absolute inset-0 m-auto w-1 h-1 rounded-full bg-white shadow" />
                                )}
                              </button>
                            )
                          })}
                          {product.colors.length > 5 && (
                            <span className="text-[9px] text-gray-500 font-bold self-center">
                              +{product.colors.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Price + CTA */}
                <div className="px-3.5 sm:px-5 pb-3.5 sm:pb-5 pt-2 flex items-center justify-between border-t border-[#141414]">
                  <div>
                    <span className="text-sm sm:text-base font-black text-white block leading-tight">
                      {formatPrice(product.priceZAR, product.priceUSD)}
                    </span>
                    <span className="text-[9px] sm:text-[10px] text-gray-600">Free drop</span>
                  </div>
                  <button
                    onClick={e => {
                      e.stopPropagation()
                      openProductModal(product)
                    }}
                    className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-[11px] sm:text-xs transition-all shadow-md shadow-brand/20 flex items-center gap-1"
                  >
                    <span>Select</span>
                    <ArrowRight size={11} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ── COLOUR GUIDE (INTERACTIVE SHADE SHIFTER) ── */}
      <div id="colour-guide" className="mt-16 border-t border-[#1a1a1a] pt-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand">Reference & Filter</span>
            <h2 className="text-2xl font-black text-white mt-1">Colour Guide (35 Shades)</h2>
            <p className="text-xs text-gray-400 mt-1">
              Click any colour swatch below to filter the catalog and shift all scrubs to that shade.
            </p>
          </div>
          {selectedColorFilter !== "all" && (
            <button
              onClick={() => setSelectedColorFilter("all")}
              className="text-xs font-bold text-brand hover:underline flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Reset Colour Filter</span>
              <X size={12} />
            </button>
          )}
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
          {[
            { name: "Midnight Black", hex: "#111827", key: "black" },
            { name: "Deep Navy", hex: "#1e3a8a", key: "navy" },
            { name: "Royal Blue", hex: "#1d4ed8", key: "royal" },
            { name: "Hunter Green", hex: "#14532d", key: "hunter" },
            { name: "Bottle Green", hex: "#064e3b", key: "bottle" },
            { name: "Olive Green", hex: "#3f6212", key: "olive" },
            { name: "Forest Green", hex: "#166534", key: "forest" },
            { name: "OT Green", hex: "#047857", key: "ot" },
            { name: "Mint Green", hex: "#6ee7b7", key: "mint" },
            { name: "Ceil Blue", hex: "#60a5fa", key: "ceil" },
            { name: "Powder Blue", hex: "#93c5fd", key: "powder" },
            { name: "Petrol Blue", hex: "#0e7490", key: "petrol" },
            { name: "Caribbean Blue", hex: "#0284c7", key: "caribbean" },
            { name: "Summit Blue", hex: "#3b82f6", key: "summit" },
            { name: "True Blue", hex: "#2563eb", key: "true" },
            { name: "Baby Blue", hex: "#bae6fd", key: "baby blue" },
            { name: "Airforce Blue", hex: "#475569", key: "airforce" },
            { name: "Burgundy Wine", hex: "#831843", key: "burgundy" },
            { name: "Maroon", hex: "#701a2e", key: "maroon" },
            { name: "Raspberry", hex: "#e11d48", key: "raspberry" },
            { name: "Cerise", hex: "#be185d", key: "cerise" },
            { name: "Baby Pink", hex: "#fbcfe8", key: "baby pink" },
            { name: "Coral", hex: "#f97316", key: "coral" },
            { name: "Mustard", hex: "#d97706", key: "mustard" },
            { name: "Violet", hex: "#7c3aed", key: "violet" },
            { name: "Purple", hex: "#6b21a8", key: "purple" },
            { name: "Lavender", hex: "#a855f7", key: "lavender" },
            { name: "Mauve", hex: "#c084fc", key: "mauve" },
            { name: "Crisp White", hex: "#ffffff", key: "white" },
            { name: "Charcoal Grey", hex: "#374151", key: "charcoal" },
            { name: "Slate Grey", hex: "#475569", key: "slate" },
          ].map(colour => {
            const isSelected = selectedColorFilter.toLowerCase() === colour.key.toLowerCase()
            return (
              <button
                key={colour.name}
                type="button"
                onClick={() => {
                  setSelectedColorFilter(colour.key)
                  // Shift matched products to this color
                  const updatedSelections: Record<string, ProductColor> = {}
                  products.forEach(p => {
                    const match = p.colors?.find(c => c.name.toLowerCase().includes(colour.key.toLowerCase()) || colour.name.toLowerCase().includes(c.name.toLowerCase()))
                    if (match) {
                      updatedSelections[p.id] = match
                    }
                  })
                  setColorSelections(prev => ({ ...prev, ...updatedSelections }))
                  toast.success(`Filtering by ${colour.name}`, {
                    description: "All matching scrubs shifted to this colour"
                  })
                  document.getElementById("medstore-grid")?.scrollIntoView({ behavior: "smooth" })
                }}
                className={`flex flex-col items-center gap-2 p-2.5 rounded-2xl border transition-all text-center group cursor-pointer ${
                  isSelected
                    ? "bg-white/10 border-brand ring-2 ring-brand/40 shadow-lg"
                    : "bg-[#0d0d0d] border-[#1f1f1f] hover:border-white/20 hover:scale-105"
                }`}
              >
                <div
                  className="w-12 h-12 rounded-xl border border-white/10 shadow-inner group-hover:scale-110 transition-transform relative"
                  style={{ backgroundColor: colour.hex }}
                >
                  {isSelected && (
                    <span className="absolute inset-0 m-auto w-3 h-3 rounded-full bg-white shadow-md" />
                  )}
                </div>
                <span className={`text-[10px] font-bold leading-tight group-hover:text-white transition-colors line-clamp-1 ${
                  isSelected ? "text-brand" : "text-gray-400"
                }`}>
                  {colour.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── PRODUCT DETAIL MODAL ── */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="bg-[#0c0c0c] border border-[#222] rounded-3xl w-full max-w-5xl overflow-hidden shadow-2xl my-auto flex flex-col md:flex-row max-h-[92vh] relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image Carousel / Showcase (Left Column on Desktop) */}
            {(() => {
              const modalImages = (() => {
                if (modalColor && modalColor.imageUrls && modalColor.imageUrls.length > 0) {
                  return modalColor.imageUrls
                }
                if (modalColor && modalColor.imageUrl) {
                  return [modalColor.imageUrl]
                }
                const colorMatch = getProductColorImage(activeModalProduct, modalColor)
                if (colorMatch) {
                  return [colorMatch]
                }
                return activeModalProduct.imageUrls && activeModalProduct.imageUrls.length > 0
                  ? activeModalProduct.imageUrls
                  : (activeModalProduct.imageUrl ? [activeModalProduct.imageUrl] : [])
              })()
              const currentImg = modalImages[activeModalImageIdx] || modalImages[0]

              return (
                <div className="w-full md:w-[58%] lg:w-[60%] bg-[#080808] border-b md:border-b-0 md:border-r border-[#1f1f1f] flex flex-col justify-between relative flex-shrink-0">
                  {/* Close button for mobile inside image container */}
                  <button
                    onClick={() => setActiveModalProduct(null)}
                    aria-label="Close dialog"
                    className="md:hidden absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-gray-300 hover:text-white transition-colors z-20"
                  >
                    <X size={16} />
                  </button>

                  {/* Badges on image */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
                    {activeModalProduct.badge && (
                      <span className="text-[9px] font-black uppercase tracking-wider text-white bg-brand px-2.5 py-1 rounded-md shadow-md">
                        {activeModalProduct.badge}
                      </span>
                    )}
                    {activeModalProduct.fabricTech && (
                      <span className="text-[9px] font-bold uppercase tracking-wider text-brand-light bg-black/80 backdrop-blur-md border border-brand/30 px-2 py-0.5 rounded-md shadow">
                        {activeModalProduct.fabricTech}
                      </span>
                    )}
                  </div>

                  {/* Active Color Pill on image */}
                  <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-2 bg-black/75 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-xl">
                    <span
                      className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                      style={{ backgroundColor: modalColor.hex }}
                    />
                    <span className="text-[11px] font-bold text-white tracking-wide">
                      {modalColor.name}
                    </span>
                  </div>

                  {/* Main Large Image Container */}
                  <div className="w-full h-80 sm:h-96 md:h-[480px] lg:h-[540px] flex items-center justify-center overflow-hidden relative p-4 sm:p-6">
                    <ProductImage
                      key={currentImg}
                      src={currentImg}
                      alt={`${activeModalProduct.name} - ${modalColor.name}`}
                      fallbackIcon={activeModalProduct.imageIcon}
                      containerClassName="w-full h-full flex items-center justify-center relative"
                      className="w-full h-full object-contain drop-shadow-2xl transition-all duration-300"
                    />

                    {/* Left/Right gallery arrows if multiple pictures */}
                    {modalImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setActiveModalImageIdx(prev => (prev > 0 ? prev - 1 : modalImages.length - 1))}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-brand transition-all z-10 shadow-lg"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveModalImageIdx(prev => (prev < modalImages.length - 1 ? prev + 1 : 0))}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-brand transition-all z-10 shadow-lg"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Miniature Thumbnail strip if multiple images */}
                  {modalImages.length > 1 && (
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-black/90 backdrop-blur-md justify-center border-t border-white/5 overflow-x-auto">
                      {modalImages.map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveModalImageIdx(i)}
                          className={`w-12 h-12 rounded-xl overflow-hidden border transition-all flex items-center justify-center bg-[#141414] flex-shrink-0 ${
                            activeModalImageIdx === i ? "border-brand scale-105 shadow-md shadow-brand/40 ring-1 ring-brand" : "border-white/10 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img
                            src={img}
                            alt="thumb"
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            className="w-full h-full object-contain p-0.5"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })()}

            {/* Modal Right Column: Details, Minimizable Description, Controls & CTA */}
            <div className="w-full md:w-[42%] lg:w-[40%] flex flex-col justify-between p-5 sm:p-6 md:p-7 overflow-y-auto max-h-[50vh] md:max-h-[92vh] space-y-5">
              <div className="space-y-4">
                {/* Header: Collection + Close button (desktop) */}
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand">
                    {activeModalProduct.collection ? `${activeModalProduct.collection} collection` : "Medical Wear"}
                  </span>
                  <button
                    onClick={() => setActiveModalProduct(null)}
                    aria-label="Close dialog"
                    className="hidden md:flex w-8 h-8 rounded-full bg-white/5 border border-white/10 items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Title + Price */}
                <div>
                  <h2 className="text-lg sm:text-xl font-black text-white leading-tight">
                    {activeModalProduct.name}
                  </h2>
                  <div className="flex items-baseline gap-3 mt-2">
                    <span className="text-2xl font-black text-white">
                      {formatPrice(activeModalProduct.priceZAR, activeModalProduct.priceUSD)}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      Medical Student Special
                    </span>
                  </div>
                </div>

                {/* Minimizable / Collapsible Description */}
                <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-3.5 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Description
                    </span>
                    <button
                      type="button"
                      onClick={() => setShowFullDesc(prev => !prev)}
                      className="text-[11px] font-bold text-brand hover:underline inline-flex items-center gap-1"
                    >
                      {showFullDesc ? (
                        <><span>Minimize</span><ChevronUp size={12} /></>
                      ) : (
                        <><span>Read more</span><ChevronDown size={12} /></>
                      )}
                    </button>
                  </div>
                  <p className={`text-xs text-gray-400 leading-relaxed ${showFullDesc ? "" : "line-clamp-2"}`}>
                    {activeModalProduct.description}
                  </p>
                </div>

                {/* Specs / Features (Compact Chips) */}
                {activeModalProduct.specs && activeModalProduct.specs.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                      Key Highlights
                    </span>
                    <div className="grid grid-cols-2 gap-1.5">
                      {activeModalProduct.specs.slice(0, 4).map(spec => (
                        <div key={spec} className="flex items-center gap-1.5 text-[11px] text-gray-300 bg-white/5 border border-white/5 rounded-lg px-2 py-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                          <span className="truncate">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Color Selection (Interactive Live Swatches) */}
                {activeModalProduct.colors && activeModalProduct.colors.length > 0 && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                        Colour: <span className="text-white font-bold">{modalColor.name}</span>
                      </label>
                      <span className="text-[10px] text-gray-500">
                        {activeModalProduct.colors.length} {activeModalProduct.colors.length === 1 ? "shade" : "shades"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap max-h-32 overflow-y-auto pr-1">
                      {activeModalProduct.colors.map(color => (
                        <button
                          key={color.name}
                          type="button"
                          onClick={() => handleModalColorSelect(color)}
                          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                            modalColor.name === color.name
                              ? "bg-white/10 border-brand text-white shadow-sm ring-1 ring-brand/50"
                              : "bg-[#111] border-[#222] text-gray-400 hover:text-white hover:border-[#333]"
                          }`}
                        >
                          <span
                            className="w-3 h-3 rounded-full border border-white/20 shadow-inner flex-shrink-0"
                            style={{ backgroundColor: color.hex }}
                          />
                          <span className="text-[11px]">{color.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selection (XXS to 8XL) */}
                {(() => {
                  const isApparel = ['sets', 'scrubs', 'pants', 'jackets', 'coats', 'underscrubs'].includes(activeModalProduct.collection)
                  const availableSizes = isApparel ? ALL_APPAREL_SIZES : activeModalProduct.sizes

                  if (!availableSizes || availableSizes.length === 0) return null

                  return (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                          Size: <span className="text-white font-bold">{modalSize}</span>
                        </label>
                        {isApparel && (
                          <span className="text-[10px] text-gray-500 font-medium">XXS to 8XL</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {availableSizes.map(size => (
                          <button
                            key={size}
                            type="button"
                            onClick={() => setModalSize(size)}
                            className={`min-w-[42px] px-2 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                              modalSize === size
                                ? "bg-brand text-white border-brand shadow-sm shadow-brand/20 scale-105"
                                : "bg-[#111] border-[#222] text-gray-400 hover:text-white hover:border-[#333]"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })()}

                {/* Custom Embroidery */}
                <div className="bg-[#111] border border-[#1f1f1f] rounded-xl p-3.5 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Scissors size={14} className="text-brand" />
                      <div>
                        <p className="text-xs font-bold text-white">Custom Medical Embroidery</p>
                        <p className="text-[10px] text-gray-500">+$4.00 &bull; Name + Title</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={withEmbroidery}
                      onChange={e => setWithEmbroidery(e.target.checked)}
                      className="w-4 h-4 accent-brand cursor-pointer"
                    />
                  </div>
                  {withEmbroidery && (
                    <input
                      type="text"
                      placeholder="e.g. Dr. T. Moyo, MBChB"
                      value={embroideryName}
                      onChange={e => setEmbroideryName(e.target.value)}
                      className="w-full bg-[#181818] border border-[#2a2a2a] focus:border-brand rounded-xl px-3 py-2 text-xs text-white placeholder:text-gray-600 outline-none"
                    />
                  )}
                </div>
              </div>

              {/* Add to Cart CTA */}
              <div className="pt-4 border-t border-[#1f1f1f] space-y-2">
                <button
                  onClick={() => addToCart(activeModalProduct)}
                  className="w-full py-3.5 bg-brand hover:bg-red-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand/25 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag size={15} /> Add to Cart &bull; {formatPrice(activeModalProduct.priceZAR, activeModalProduct.priceUSD)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── ADMIN ADD / EDIT PRODUCT MODAL ── */}
      {showAdminModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setShowAdminModal(false)}
        >
          <div
            className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl w-full max-w-2xl p-6 sm:p-7 space-y-6 shadow-2xl my-8 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-150"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand block mb-0.5">
                  Admin: MedStore
                </span>
                <h3 className="text-base font-black text-white">
                  {editingProductId ? "Edit Merchandise Product" : "Add New Merchandise Product"}
                </h3>
              </div>
              <button
                onClick={() => setShowAdminModal(false)}
                className="w-7 h-7 rounded-lg bg-[#111] border border-[#1f1f1f] flex items-center justify-center text-gray-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            <form onSubmit={handleSaveProduct} className="space-y-5">
              {/* Basic Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. TANC Signature Soft-Shell Doctor's Jacket"
                    value={prodName}
                    onChange={e => setProdName(e.target.value)}
                    className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Collection *
                  </label>
                  <select
                    value={prodCollection}
                    onChange={e => setProdCollection(e.target.value as any)}
                    className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                  >
                    <option value="jackets">Doctor's Jackets</option>
                    <option value="scrubs">Tops</option>
                    <option value="pants">Pants & Joggers</option>
                    <option value="sets">ScrubLab Sets</option>
                    <option value="coats">Lab Coats</option>
                    <option value="accessories">Accessories & Diagnostic</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Price (ZAR - Internal) *
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={prodPriceZAR}
                    onChange={e => setProdPriceZAR(Number(e.target.value))}
                    className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Price (USD) *
                  </label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={prodPriceUSD}
                    onChange={e => setProdPriceUSD(Number(e.target.value))}
                    className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Badge
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bestseller"
                    value={prodBadge}
                    onChange={e => setProdBadge(e.target.value)}
                    className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Emoji Icon
                  </label>
                  <input
                    type="text"
                    maxLength={2}
                    value={prodIcon}
                    onChange={e => setProdIcon(e.target.value)}
                    className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none text-center"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  Fabric Tech / Material Formulation
                </label>
                <input
                  type="text"
                  placeholder="e.g. LABx™ 4-Way Stretch + SilvaLab™ Antimicrobial"
                  value={prodTech}
                  onChange={e => setProdTech(e.target.value)}
                  className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  Product Description
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe tailoring, ward suitability, pocket layout..."
                  value={prodDesc}
                  onChange={e => setProdDesc(e.target.value)}
                  className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none resize-none"
                />
              </div>

              {/* Picture Gallery Management */}
              <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-4 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand block">
                      Picture Gallery ({prodImages.length} Pictures)
                    </span>
                    <p className="text-[11px] text-gray-500">
                      Upload from phone/PC or paste URLs. Reorder or set cover with arrow controls.
                    </p>
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleUploadImageFile}
                    accept="image/*"
                    className="hidden"
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={uploadingImage}
                    className="px-3 py-1.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5 shadow-md shadow-brand/20 disabled:opacity-50"
                  >
                    {uploadingImage ? <Loader2 size={13} className="animate-spin" /> : <Upload size={13} />}
                    Upload from Device
                  </button>
                </div>

                {/* URL Input */}
                <div className="flex gap-2">
                  <input
                    type="url"
                    placeholder="Or paste external image URL (https://...)..."
                    value={customUrlInput}
                    onChange={e => setCustomUrlInput(e.target.value)}
                    className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none flex-1"
                  />
                  <button
                    type="button"
                    onClick={handleAddImageUrl}
                    className="px-3 py-2 bg-[#161616] hover:bg-[#222] border border-[#2a2a2a] text-gray-300 hover:text-white rounded-xl text-xs font-bold transition-colors flex-shrink-0"
                  >
                    Add URL
                  </button>
                </div>

                {/* Picture Cards Strip */}
                {prodImages.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                    {prodImages.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className={`relative rounded-xl overflow-hidden bg-[#141414] border flex flex-col group ${
                          idx === 0 ? "border-brand/60 shadow-lg shadow-brand/10" : "border-[#242424]"
                        }`}
                      >
                        <div className="relative aspect-video w-full bg-black/40 overflow-hidden">
                          <img src={imgUrl} alt={`Preview ${idx + 1}`} className="w-full h-full object-cover" />
                          {idx === 0 && (
                            <span className="absolute top-1.5 left-1.5 bg-brand text-white text-[9px] font-black uppercase px-2 py-0.5 rounded shadow">
                              Primary Cover
                            </span>
                          )}
                        </div>

                        {/* Controls */}
                        <div className="p-2 bg-[#111] border-t border-[#1f1f1f] flex items-center justify-between gap-1">
                          <div className="flex items-center gap-1">
                            <button
                              type="button"
                              onClick={() => handleMoveImage(idx, "left")}
                              disabled={idx === 0}
                              className="p-1 rounded bg-[#181818] text-gray-400 hover:text-white disabled:opacity-30 transition-colors"
                              title="Move left"
                            >
                              <MoveLeft size={12} />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleMoveImage(idx, "right")}
                              disabled={idx === prodImages.length - 1}
                              className="p-1 rounded bg-[#181818] text-gray-400 hover:text-white disabled:opacity-30 transition-colors"
                              title="Move right"
                            >
                              <MoveRight size={12} />
                            </button>
                          </div>

                          {idx !== 0 && (
                            <button
                              type="button"
                              onClick={() => handleSetCover(idx)}
                              className="text-[10px] font-bold text-gray-400 hover:text-brand px-1.5 py-0.5 rounded transition-colors"
                            >
                              Make Cover
                            </button>
                          )}

                          <button
                            type="button"
                            onClick={() => handleRemoveImage(idx)}
                            className="p-1 text-gray-500 hover:text-brand transition-colors rounded"
                            title="Remove picture"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 text-gray-600 text-xs border border-dashed border-[#222] rounded-xl">
                    No pictures attached. Upload a photo or paste a link above.
                  </div>
                )}
              </div>

              {/* Color Palette */}
              <div className="bg-[#0e0e0e] border border-[#1f1f1f] rounded-2xl p-4 space-y-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand block">
                    Available Colours
                  </span>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {prodColors.map((col, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5 bg-[#141414] border border-[#242424] px-2.5 py-1.5 rounded-xl text-xs text-white"
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: col.hex }} />
                      <span className="font-semibold">{col.name}</span>
                      <button
                        type="button"
                        onClick={() => setProdColors(prev => prev.filter((_, i) => i !== idx))}
                        className="text-gray-500 hover:text-brand ml-1"
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 items-center pt-2 border-t border-[#1a1a1a]">
                  <input
                    type="color"
                    value={customColorHex}
                    onChange={e => setCustomColorHex(e.target.value)}
                    className="w-8 h-8 rounded-lg bg-transparent cursor-pointer border border-[#333]"
                  />
                  <input
                    type="text"
                    placeholder="Custom color name (e.g. Sage Green)..."
                    value={customColorName}
                    onChange={e => setCustomColorName(e.target.value)}
                    className="w-full bg-[#111] border border-[#222] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none flex-1"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      if (!customColorName.trim()) return
                      setProdColors(prev => [...prev, { name: customColorName.trim(), hex: customColorHex }])
                      setCustomColorName("")
                    }}
                    className="px-3 py-2 bg-[#161616] hover:bg-[#222] border border-[#2a2a2a] text-gray-300 hover:text-white rounded-xl text-xs font-bold transition-colors flex-shrink-0"
                  >
                    Add Color
                  </button>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  disabled={savingProduct}
                  className="flex-1 py-3 bg-brand hover:bg-red-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand/25 disabled:opacity-50"
                >
                  {savingProduct ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                  {editingProductId ? "Save Product Changes" : "Publish to MedStore"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAdminModal(false)}
                  className="px-5 py-3 bg-[#111] border border-[#1f1f1f] hover:border-[#2b2b2b] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ── CART DRAWER (LOCALSTORAGE PERSISTENT + WHATSAPP TO 0784881010) ── */}
      {showCartDrawer && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
          onClick={() => setShowCartDrawer(false)}
        >
          <div
            className="w-full max-w-md bg-[#0a0a0a] border-l border-[#1f1f1f] h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-250"
            onClick={e => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#1a1a1a] flex items-center justify-between bg-[#0d0d0d]">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-brand">
                  <ShoppingBag size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-white uppercase tracking-wider">Your MedStore Cart</h3>
                  <p className="text-[10px] text-gray-500 font-medium">
                    {cart.length === 0
                      ? "0 items"
                      : `${cart.reduce((a, b) => a + b.quantity, 0)} item${cart.reduce((a, b) => a + b.quantity, 0) > 1 ? "s" : ""} saved in browser`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowCartDrawer(false)}
                className="w-8 h-8 rounded-lg bg-[#141414] border border-[#222] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                title="Close cart"
              >
                <X size={15} />
              </button>
            </div>

            {/* Drawer Items Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 space-y-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-gray-600 mx-auto">
                    <ShoppingBag size={28} />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-white">Your cart is empty</p>
                    <p className="text-xs text-gray-500 max-w-xs mx-auto">
                      Explore our official TANC scrubs, doctor's jackets, and Littmann stethoscopes.
                    </p>
                  </div>
                  <button
                    onClick={() => setShowCartDrawer(false)}
                    className="px-5 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-brand/20"
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.map((item, idx) => {
                    const itemCover = getProductColorImage(item.product, item.selectedColor)
                    const embroideryCost = item.withEmbroidery ? 4 : 0
                    const unitPrice = item.product.priceUSD + embroideryCost
                    const itemSubtotal = unitPrice * item.quantity

                    return (
                      <div
                        key={idx}
                        className="bg-[#0e0e0e] border border-[#1c1c1c] rounded-2xl p-3.5 flex gap-3 items-start relative group transition-colors hover:border-[#2a2a2a]"
                      >
                        {/* Thumbnail */}
                        <div className="w-16 h-16 rounded-xl bg-[#141414] border border-white/5 flex-shrink-0 overflow-hidden flex items-center justify-center relative">
                          {itemCover ? (
                            <img
                              src={itemCover}
                              alt={item.product.name}
                              className="w-full h-full object-contain p-1"
                              referrerPolicy="no-referrer"
                            />
                          ) : (
                            <span className="text-2xl">{item.product.imageIcon}</span>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <h4 className="text-xs font-bold text-white truncate leading-snug">
                            {item.product.name}
                          </h4>

                          {/* Color + Size pills */}
                          <div className="flex items-center gap-1.5 flex-wrap text-[10px]">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#161616] border border-[#242424] text-gray-300">
                              <span
                                className="w-2 h-2 rounded-full border border-white/20"
                                style={{ backgroundColor: item.selectedColor.hex }}
                              />
                              {item.selectedColor.name}
                            </span>
                            <span className="px-2 py-0.5 rounded-md bg-[#161616] border border-[#242424] text-gray-300 font-bold">
                              Size {item.selectedSize}
                            </span>
                          </div>

                          {/* Custom Embroidery badge */}
                          {item.withEmbroidery && (
                            <div className="text-[10px] text-amber-400 flex items-center gap-1 font-medium">
                              <Scissors size={10} />
                              <span className="truncate">
                                {item.embroideryName ? `"${item.embroideryName}"` : "Medical Embroidery"} (+$4)
                              </span>
                            </div>
                          )}

                          {/* Quantity & Price */}
                          <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center gap-1.5 bg-[#141414] border border-[#242424] rounded-lg p-0.5">
                              <button
                                type="button"
                                onClick={() => updateCartQuantity(idx, -1)}
                                className="w-5 h-5 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold"
                                title="Decrease quantity"
                              >
                                -
                              </button>
                              <span className="text-xs font-black text-white px-1.5 min-w-[18px] text-center">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => updateCartQuantity(idx, 1)}
                                className="w-5 h-5 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors text-xs font-bold"
                                title="Increase quantity"
                              >
                                +
                              </button>
                            </div>

                            <div className="text-right">
                              <span className="text-xs font-black text-white block">
                                ${itemSubtotal.toFixed(2)}
                              </span>
                              {item.quantity > 1 && (
                                <span className="text-[9px] text-gray-500">
                                  (${unitPrice.toFixed(2)} ea)
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Delete button */}
                        <button
                          type="button"
                          onClick={() => removeCartItem(idx)}
                          className="text-gray-600 hover:text-brand transition-colors p-1"
                          title="Remove item from cart"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Drawer Footer with Order Breakdown and WhatsApp */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-[#1a1a1a] bg-[#0c0c0c] space-y-4">
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-gray-400">
                    <span>Items Subtotal</span>
                    <span className="text-white font-medium">${getCartSubtotal().toFixed(2)} USD</span>
                  </div>
                  {getCartEmbroideryTotal() > 0 && (
                    <div className="flex items-center justify-between text-amber-400 text-[11px]">
                      <span>Custom Embroidery</span>
                      <span>+${getCartEmbroideryTotal().toFixed(2)} USD</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-gray-400">
                    <span>Campus Delivery</span>
                    <span className="text-green-400 font-bold text-[11px] uppercase">Free Drop</span>
                  </div>
                  <div className="border-t border-[#1f1f1f] pt-2 flex items-center justify-between">
                    <span className="text-sm font-black text-white">Total Amount</span>
                    <span className="text-xl font-black text-white">
                      ${getCartTotalAmount().toFixed(2)} <span className="text-xs text-gray-500 font-normal">USD</span>
                    </span>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-black font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-[#25D366]/20 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageCircle size={16} className="fill-black" />
                  <span>Send Order via WhatsApp &bull; 0784881010</span>
                </button>

                <div className="flex items-center justify-between text-[10px] text-gray-500 pt-1">
                  <span>Cart saved automatically &bull; Delete anytime</span>
                  <button
                    onClick={clearEntireCart}
                    className="text-gray-500 hover:text-brand transition-colors font-bold"
                  >
                    Empty Cart
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
