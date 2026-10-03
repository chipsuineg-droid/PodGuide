"use client"
import { useState, useEffect, useRef } from "react"
import {
  ShoppingBag, Search, X, Plus, Check, Scissors, Truck,
  Star, Trash2, Package, ArrowRight, Upload, Image as ImageIcon,
  MoveLeft, MoveRight, Edit3, Loader2, ChevronLeft, ChevronRight
} from "lucide-react"
import { toast } from "sonner"
import { createClient } from "@/lib/supabase/client"

export interface ProductColor {
  name: string
  hex: string
}

export interface Product {
  id: string
  name: string
  collection: "jackets" | "scrubs" | "pants" | "sets" | "coats" | "accessories"
  priceZAR: number
  priceUSD: number
  rating: number
  reviewsCount: number
  badge?: string
  fabricTech?: string
  imageUrl?: string
  imageUrls?: string[]
  imageIcon: string
  description: string
  colors: ProductColor[]
  sizes: string[]
  specs: string[]
  isAdminAdded?: boolean
}

interface CartItem {
  product: Product
  selectedColor: ProductColor
  selectedSize: string
  withEmbroidery: boolean
  embroideryName: string
  quantity: number
}

const INITIAL_PRODUCTS: Product[] = [
  {
    id: "tanc-dr-jacket",
    name: "TANC Signature Doctor's Soft-Shell Jacket",
    collection: "jackets",
    priceZAR: 750,
    priceUSD: 42,
    rating: 4.9,
    reviewsCount: 284,
    badge: "Faculty Bestseller",
    fabricTech: "HydroShield™ Fleece-Lined",
    imageIcon: "🧥",
    imageUrls: [],
    description: "Windproof and water-resistant bonded soft-shell designed for hospital air conditioning and cold night ward calls. Features pen arm-slot and zippered stethoscope pockets.",
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Charcoal Black", hex: "#1f2937" },
      { name: "Hunter Green", hex: "#14532d" },
      { name: "Deep Burgundy", hex: "#831843" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    specs: ["Thermal fleece micro-lining", "Zipped chest & side pockets", "Pen pocket on left sleeve", "Anti-pill outer shell"]
  },
  {
    id: "tanc-scrublab-set",
    name: "TANC ScrubLab™ Complete 4-Way Stretch Set",
    collection: "sets",
    priceZAR: 640,
    priceUSD: 36,
    rating: 4.9,
    reviewsCount: 412,
    badge: "Student Bundle Deal",
    fabricTech: "LABx™ 4-Way Stretch + SilvaLab™",
    imageIcon: "🥼",
    imageUrls: [],
    description: "Full scrub suit including the Three-Pocket V-Neck Top and Cleo™ Cargo Jogger Pants. Engineered with SilvaLab™ antimicrobial silver-ion technology.",
    colors: [
      { name: "Ceil Blue", hex: "#60a5fa" },
      { name: "Hunter Green", hex: "#14532d" },
      { name: "Deep Navy", hex: "#1e3a8a" },
      { name: "Burgundy Wine", hex: "#831843" },
      { name: "Midnight Black", hex: "#111827" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    specs: ["Total 9 strategic pockets", "Moisture-wicking breathable weave", "SilvaLab™ odor control", "Elastic drawstring waistband"]
  },
  {
    id: "tanc-lily-top",
    name: "TANC Lily™ Three-Pocket Tailored Scrub Top",
    collection: "scrubs",
    priceZAR: 320,
    priceUSD: 18,
    rating: 4.8,
    reviewsCount: 198,
    badge: "Popular Top",
    fabricTech: "LABx™ Ultra-Flex",
    imageIcon: "👕",
    imageUrls: [],
    description: "Fitted feminine cut with double front drop-in pockets, dedicated pen divider, and side seam slits for unrestricted patient transfers and CPR.",
    colors: [
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Hunter Green", hex: "#14532d" },
      { name: "Dusty Rose", hex: "#db2777" },
      { name: "Ceil Blue", hex: "#60a5fa" }
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    specs: ["Tailored V-neckline", "Triple reinforced pockets", "Wrinkle-resistant wash & wear", "Fade-proof dyeing"]
  },
  {
    id: "tanc-leo-top",
    name: "TANC Leo™ Classic Men's Athletic Scrub Top",
    collection: "scrubs",
    priceZAR: 320,
    priceUSD: 18,
    rating: 4.8,
    reviewsCount: 165,
    fabricTech: "LABx™ Ultra-Flex",
    imageIcon: "👔",
    imageUrls: [],
    description: "Athletic cut V-neck top with deep chest pocket and reinforced side splits. Tailored for comfort under consultation coats or theatre gowns.",
    colors: [
      { name: "Midnight Black", hex: "#111827" },
      { name: "Deep Navy", hex: "#1e3a8a" },
      { name: "Forest Green", hex: "#14532d" },
      { name: "Royal Blue", hex: "#2563eb" }
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    specs: ["Chest pocket with pen sleeve", "Back shoulder yoke for mobility", "Tagless inner comfort collar", "Quick-drying fabric"]
  },
  {
    id: "tanc-cleo-jogger",
    name: "TANC Cleo™ Six-Pocket Cargo Scrub Joggers",
    collection: "pants",
    priceZAR: 320,
    priceUSD: 18,
    rating: 4.9,
    reviewsCount: 340,
    badge: "High Demand",
    fabricTech: "LABx™ Stretch Weave",
    imageIcon: "👖",
    imageUrls: [],
    description: "Modern tapered jogger scrub pants with double cargo zippered pockets, ribbed knit ankle cuffs, and high-tenacity waistband cord.",
    colors: [
      { name: "Midnight Black", hex: "#111827" },
      { name: "Deep Navy", hex: "#1e3a8a" },
      { name: "Hunter Green", hex: "#14532d" },
      { name: "Burgundy Wine", hex: "#831843" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    specs: ["Ribbed comfort ankle cuffs", "2 zippered cargo security pockets", "2 deep slash hand pockets", "2 back patch pockets"]
  },
  {
    id: "tanc-lab-coat",
    name: "TANC Tailored Consultation Lab Coat",
    collection: "coats",
    priceZAR: 480,
    priceUSD: 27,
    rating: 4.7,
    reviewsCount: 142,
    badge: "Ward Rounds",
    fabricTech: "Poly-Cotton Heavy Twill",
    imageIcon: "🥼",
    imageUrls: [],
    description: "Faculty certified consultation coat with notched lapels, side pass-through pocket slits to reach trouser pockets, and tablet sized compartments.",
    colors: [
      { name: "Clinical White", hex: "#f8fafc" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    specs: ["Tablet-compatible hip pockets", "Side access slit to trouser pockets", "Crease-resistant finish", "Reinforced bartack stress points"]
  },
  {
    id: "tanc-littmann-classic3",
    name: "3M Littmann Classic III Monitoring Stethoscope",
    collection: "accessories",
    priceZAR: 1650,
    priceUSD: 92,
    rating: 5.0,
    reviewsCount: 520,
    badge: "Gold Standard",
    fabricTech: "Acoustic Precision Tunable",
    imageIcon: "🩺",
    imageUrls: [],
    description: "The benchmark diagnostic stethoscope for healthcare students and clinicians. Features tunable dual-sided stainless steel chestpiece and next-generation tubing.",
    colors: [
      { name: "Black Edition", hex: "#18181b" },
      { name: "Navy Blue", hex: "#1e3a8a" },
      { name: "Burgundy", hex: "#831843" },
      { name: "Hunter Green", hex: "#14532d" }
    ],
    sizes: ["Standard 69cm"],
    specs: ["Tunable dual-sided chestpiece", "Next-gen long-life tubing", "5-year manufacturer guarantee", "Soft-sealing ear tips included"]
  },
  {
    id: "tanc-scrub-cap",
    name: "TANC Reversible Theatre Scrub Cap (Tie-Back)",
    collection: "accessories",
    priceZAR: 120,
    priceUSD: 7,
    rating: 4.8,
    reviewsCount: 89,
    fabricTech: "100% Breathable Cotton",
    imageIcon: "🧢",
    imageUrls: [],
    description: "Reversible theatre scrub hat with sweat-absorbent forehead band, ponytail pouch room, and durable fabric tie-backs.",
    colors: [
      { name: "Deep Navy", hex: "#1e3a8a" },
      { name: "Hunter Green", hex: "#14532d" },
      { name: "Burgundy Wine", hex: "#831843" }
    ],
    sizes: ["One Size Fits All"],
    specs: ["Built-in sweatband", "Comfortable rear tie-straps", "Machine boil washable", "Anti-chafing flatlock seams"]
  }
]

const COLLECTIONS = [
  { id: "all", label: "All Items" },
  { id: "jackets", label: "Doctor's Jackets" },
  { id: "sets", label: "ScrubLab Sets" },
  { id: "scrubs", label: "Tops" },
  { id: "pants", label: "Joggers & Cargo" },
  { id: "coats", label: "Lab Coats" },
  { id: "accessories", label: "Accessories" },
]

interface MedStorePageProps {
  isAdmin?: boolean
}

export default function MedStorePage({ isAdmin: initialIsAdmin = false }: MedStorePageProps) {
  const supabase = createClient()
  const [isAdmin, setIsAdmin] = useState(initialIsAdmin)
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS)
  const [currency, setCurrency] = useState<"ZAR" | "USD">("ZAR")
  const [selectedCollection, setSelectedCollection] = useState<string>("all")
  const [search, setSearch] = useState<string>("")
  const [colorSelections, setColorSelections] = useState<Record<string, ProductColor>>({})
  
  // Product Detail Modal
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null)
  const [activeModalImageIdx, setActiveModalImageIdx] = useState(0)
  const [modalColor, setModalColor] = useState<ProductColor>(INITIAL_PRODUCTS[0].colors[0])
  const [modalSize, setModalSize] = useState<string>("M")
  const [withEmbroidery, setWithEmbroidery] = useState<boolean>(false)
  const [embroideryName, setEmbroideryName] = useState<string>("")

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
  }, [])

  const getActiveColor = (product: Product) =>
    colorSelections[product.id] || product.colors[0] || { name: "Default", hex: "#111827" }

  const handleColorSelect = (productId: string, color: ProductColor, e: React.MouseEvent) => {
    e.stopPropagation()
    setColorSelections(prev => ({ ...prev, [productId]: color }))
  }

  const openProductModal = (product: Product) => {
    setActiveModalProduct(product)
    setActiveModalImageIdx(0)
    setModalColor(getActiveColor(product))
    setModalSize(product.sizes[0] || "M")
    setWithEmbroidery(false)
    setEmbroideryName("")
  }

  const formatPrice = (zar: number, usd: number) =>
    currency === "ZAR" ? `R${zar.toLocaleString()}` : `$${usd.toFixed(2)}`

  const addToCart = (product: Product) => {
    setCart(prev => [...prev, {
      product,
      selectedColor: modalColor,
      selectedSize: modalSize,
      withEmbroidery,
      embroideryName: withEmbroidery ? embroideryName : "",
      quantity: 1
    }])
    setActiveModalProduct(null)
    toast.success(`Added ${product.name} to cart`, {
      description: `${modalColor.name}, Size ${modalSize}${withEmbroidery ? ", Embroidered" : ""}`
    })
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
    const matchesCollection = selectedCollection === "all" || product.collection === selectedCollection
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase()) ||
      (product.fabricTech && product.fabricTech.toLowerCase().includes(search.toLowerCase()))
    return matchesCollection && matchesSearch
  })

  return (
    <div className="max-w-7xl mx-auto pb-24 space-y-0">
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
              Custom faculty embroidery available on all apparel.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 flex-wrap">
            {/* Currency toggle */}
            <div className="flex items-center bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-1">
              {(["ZAR", "USD"] as const).map(cur => (
                <button
                  key={cur}
                  onClick={() => setCurrency(cur)}
                  className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    currency === cur
                      ? "bg-brand text-white shadow"
                      : "text-gray-500 hover:text-white"
                  }`}
                >
                  {cur === "ZAR" ? "ZAR (R)" : "USD ($)"}
                </button>
              ))}
            </div>

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
              className="relative px-4 py-2.5 bg-[#0f0f0f] border border-[#1f1f1f] hover:border-[#333] text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2"
            >
              <ShoppingBag size={14} className="text-brand" />
              <span>Cart</span>
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-brand text-white font-black text-[10px] flex items-center justify-center shadow">
                  {cart.length}
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

      {/* ── FILTERS & SEARCH ── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            placeholder="Search products, collections, fabrics..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#0d0d0d] border border-[#1a1a1a] focus:border-[#333] rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-gray-700 outline-none transition-colors"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {COLLECTIONS.map(col => (
            <button
              key={col.id}
              onClick={() => setSelectedCollection(col.id)}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                selectedCollection === col.id
                  ? "bg-brand text-white shadow-lg shadow-brand/20"
                  : "bg-[#0d0d0d] border border-[#1a1a1a] text-gray-500 hover:text-white hover:border-[#333]"
              }`}
            >
              {col.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── PRODUCTS GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredProducts.map(product => {
          const activeColor = getActiveColor(product)
          const allImgs = product.imageUrls && product.imageUrls.length > 0 ? product.imageUrls : (product.imageUrl ? [product.imageUrl] : [])
          const coverImg = allImgs[0]

          return (
            <div
              key={product.id}
              onClick={() => openProductModal(product)}
              className="bg-[#0a0a0a] border border-[#1a1a1a] hover:border-brand/40 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between group cursor-pointer relative shadow-lg"
            >
              <div>
                {/* Image / Icon container */}
                <div className="relative w-full aspect-square bg-[#0e0e0e] flex items-center justify-center overflow-hidden">
                  {coverImg ? (
                    <img
                      src={coverImg}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <span className="text-6xl select-none group-hover:scale-110 transition-transform duration-300">
                      {product.imageIcon}
                    </span>
                  )}

                  {/* Multi-picture badge */}
                  {allImgs.length > 1 && (
                    <span className="absolute bottom-2.5 right-2.5 text-[9px] font-bold text-white bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-md border border-white/10 flex items-center gap-1">
                      <ImageIcon size={10} /> {allImgs.length}
                    </span>
                  )}

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="text-[9px] font-black uppercase tracking-wider text-white bg-brand px-2.5 py-1 rounded-md shadow-md">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Admin Quick Action Controls */}
                  {isAdmin && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/80 backdrop-blur-md p-1 rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
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
                <div className="p-5 space-y-3">
                  <div className="space-y-1">
                    {product.fabricTech && (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-brand block">
                        {product.fabricTech}
                      </span>
                    )}
                    <h3 className="text-sm font-bold text-white leading-snug group-hover:text-brand transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Color dots */}
                  {product.colors && product.colors.length > 0 && (
                    <div className="flex items-center gap-1.5 pt-1">
                      {product.colors.map(color => (
                        <button
                          key={color.name}
                          onClick={e => handleColorSelect(product.id, color, e)}
                          title={color.name}
                          className={`w-3.5 h-3.5 rounded-full border transition-all ${
                            activeColor.name === color.name
                              ? "scale-125 border-brand shadow-sm shadow-brand/40"
                              : "border-white/20 hover:scale-110"
                          }`}
                          style={{ backgroundColor: color.hex }}
                        />
                      ))}
                      <span className="text-[10px] text-gray-500 ml-1 font-medium truncate">
                        {activeColor.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#141414]">
                <div>
                  <span className="text-base font-black text-white block leading-tight">
                    {formatPrice(product.priceZAR, product.priceUSD)}
                  </span>
                  <span className="text-[10px] text-gray-600">Free campus drop</span>
                </div>
                <button
                  onClick={e => {
                    e.stopPropagation()
                    openProductModal(product)
                  }}
                  className="px-3.5 py-2 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all shadow-md shadow-brand/20 flex items-center gap-1"
                >
                  <span>Select</span>
                  <ArrowRight size={12} />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── PRODUCT DETAIL MODAL ── */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Image Carousel / Header */}
            {(() => {
              const modalImages = activeModalProduct.imageUrls && activeModalProduct.imageUrls.length > 0
                ? activeModalProduct.imageUrls
                : (activeModalProduct.imageUrl ? [activeModalProduct.imageUrl] : [])
              const currentImg = modalImages[activeModalImageIdx] || modalImages[0]

              return (
                <div className="relative">
                  <div className="w-full h-64 bg-[#0d0d0d] flex items-center justify-center overflow-hidden relative">
                    {currentImg ? (
                      <img
                        src={currentImg}
                        alt={activeModalProduct.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-7xl">{activeModalProduct.imageIcon}</span>
                    )}

                    {/* Left/Right gallery arrows if multiple pictures */}
                    {modalImages.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={() => setActiveModalImageIdx(prev => (prev > 0 ? prev - 1 : modalImages.length - 1))}
                          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-brand transition-colors"
                        >
                          <ChevronLeft size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setActiveModalImageIdx(prev => (prev < modalImages.length - 1 ? prev + 1 : 0))}
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white hover:bg-brand transition-colors"
                        >
                          <ChevronRight size={16} />
                        </button>
                      </>
                    )}
                  </div>

                  <button
                    onClick={() => setActiveModalProduct(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/70 border border-[#333] flex items-center justify-center text-gray-400 hover:text-white transition-colors z-10"
                  >
                    <X size={15} />
                  </button>

                  {activeModalProduct.badge && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[9px] font-black uppercase tracking-wider text-white bg-brand px-2.5 py-1 rounded-md shadow">
                        {activeModalProduct.badge}
                      </span>
                    </div>
                  )}

                  {/* Miniature Thumbnail strip if multiple images */}
                  {modalImages.length > 1 && (
                    <div className="flex items-center gap-1.5 p-2 bg-black/60 backdrop-blur-md justify-center">
                      {modalImages.map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActiveModalImageIdx(i)}
                          className={`w-12 h-8 rounded-lg overflow-hidden border transition-all ${
                            activeModalImageIdx === i ? "border-brand scale-105" : "border-white/20 opacity-60 hover:opacity-100"
                          }`}
                        >
                          <img src={img} alt="thumb" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })()}

            <div className="p-6 space-y-5">
              {/* Title + Price */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  {activeModalProduct.fabricTech && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand">
                      {activeModalProduct.fabricTech}
                    </span>
                  )}
                  <h2 className="text-base font-black text-white leading-tight">
                    {activeModalProduct.name}
                  </h2>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xl font-black text-white block">
                    {formatPrice(activeModalProduct.priceZAR, activeModalProduct.priceUSD)}
                  </span>
                  <span className="text-[10px] text-gray-500">Student Rate</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-400 leading-relaxed border-l-2 border-brand/30 pl-3">
                {activeModalProduct.description}
              </p>

              {/* Specs */}
              {activeModalProduct.specs && activeModalProduct.specs.length > 0 && (
                <div className="grid grid-cols-2 gap-1.5">
                  {activeModalProduct.specs.map(spec => (
                    <div key={spec} className="flex items-center gap-2 text-[11px] text-gray-400">
                      <div className="w-1 h-1 rounded-full bg-brand flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
              )}

              {/* Color Selection */}
              {activeModalProduct.colors && activeModalProduct.colors.length > 0 && (
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                    Color: <span className="text-gray-300">{modalColor.name}</span>
                  </label>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {activeModalProduct.colors.map(color => (
                      <button
                        key={color.name}
                        onClick={() => setModalColor(color)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                          modalColor.name === color.name
                            ? "bg-white/10 border-brand text-white shadow-sm"
                            : "bg-[#0d0d0d] border-[#222] text-gray-400 hover:text-white"
                        }`}
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-white/20"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {activeModalProduct.sizes && activeModalProduct.sizes.length > 0 && (
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                    Size: <span className="text-gray-300">{modalSize}</span>
                  </label>
                  <div className="flex items-center gap-2 flex-wrap">
                    {activeModalProduct.sizes.map(size => (
                      <button
                        key={size}
                        onClick={() => setModalSize(size)}
                        className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                          modalSize === size
                            ? "bg-brand text-white border-brand shadow-sm shadow-brand/20"
                            : "bg-[#0d0d0d] border-[#222] text-gray-400 hover:text-white"
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Custom Embroidery */}
              <div className="bg-[#0d0d0d] border border-[#1f1f1f] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors size={14} className="text-brand" />
                    <div>
                      <p className="text-xs font-bold text-white">Custom Faculty Embroidery</p>
                      <p className="text-[10px] text-gray-500">+R65 / +$4.00 · Name + Title</p>
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
                    className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-brand rounded-xl px-3 py-2 text-xs text-white placeholder:text-gray-600 outline-none"
                  />
                )}
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={() => addToCart(activeModalProduct)}
                className="w-full py-3.5 bg-brand hover:bg-red-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg shadow-brand/25 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={14} /> Add to Cart &bull; {formatPrice(activeModalProduct.priceZAR, activeModalProduct.priceUSD)}
              </button>
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
                    Price (ZAR) *
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
    </div>
  )
}
