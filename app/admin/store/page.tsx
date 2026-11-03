"use client"

import { useState, useEffect, useRef } from "react"
import {
  ShoppingBag, Plus, Search, Edit3, Trash2, Eye, Upload,
  Image as ImageIcon, MoveLeft, MoveRight, Star, Check, X,
  ArrowRight, Loader2, Sparkles, AlertTriangle, Layers, Palette
} from "lucide-react"
import { toast } from "sonner"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import type { Product, ProductColor } from "@/types/medstore"
import { INITIAL_PRODUCTS } from "@/lib/data/medstoreProducts"
import { ProductImage } from "@/components/medstore/ProductImage"

export default function AdminMedStoreSupervisor() {
  const supabase = createClient()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [selectedCollection, setSelectedCollection] = useState<string>("all")

  // Supervisor Edit / Add Modal State
  const [showModal, setShowModal] = useState(false)
  const [editingProductId, setEditingProductId] = useState<string | null>(null)
  const [prodName, setProdName] = useState("")
  const [prodCollection, setProdCollection] = useState<Product["collection"]>("sets")
  const [prodPriceZAR, setProdPriceZAR] = useState(550)
  const [prodPriceUSD, setProdPriceUSD] = useState(30)
  const [prodBadge, setProdBadge] = useState("")
  const [prodTech, setProdTech] = useState("")
  const [prodDesc, setProdDesc] = useState("")
  const [prodIcon, setProdIcon] = useState("🥼")
  const [prodImages, setProdImages] = useState<string[]>([])
  const [prodColors, setProdColors] = useState<ProductColor[]>([
    { name: "Deep Navy", hex: "#1e3a8a" },
    { name: "Midnight Black", hex: "#111827" }
  ])
  const [prodSizes, setProdSizes] = useState<string[]>(["S", "M", "L", "XL", "2XL"])
  const [prodSpecs, setProdSpecs] = useState<string[]>([])

  const [saving, setSaving] = useState(false)
  const [uploadingImage, setUploadingImage] = useState(false)
  const [customColorName, setCustomColorName] = useState("")
  const [customColorHex, setCustomColorHex] = useState("#1e3a8a")
  const [customSpecInput, setCustomSpecInput] = useState("")
  const [customUrlInput, setCustomUrlInput] = useState("")
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Fetch products from Supabase + fallback to initial catalog
  const loadProducts = async () => {
    setLoading(true)
    try {
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
          reviewsCount: p.reviews_count || 120,
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
      } else {
        setProducts(INITIAL_PRODUCTS)
      }
    } catch (e) {
      setProducts(INITIAL_PRODUCTS)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  // Open Add New Product Modal
  const handleOpenAddModal = () => {
    setEditingProductId(null)
    setProdName("")
    setProdCollection("sets")
    setProdPriceZAR(550)
    setProdPriceUSD(30)
    setProdBadge("New Arrival")
    setProdTech("TANC-Tech™ Heavy-Duty Twill")
    setProdDesc("Premium medical wear crafted for durability, daily clinical rounds, and high-temperature autoclave washing.")
    setProdIcon("🥼")
    setProdImages([])
    setProdColors([
      { name: "Deep Navy", hex: "#1e3a8a" },
      { name: "Midnight Black", hex: "#111827" }
    ])
    setProdSizes(["XS", "S", "M", "L", "XL", "2XL"])
    setProdSpecs([
      "Industrial autoclave and chemical wash resistant",
      "Reinforced stress points with bar-tack stitching",
      "Ergonomic movement vents for ward rounds"
    ])
    setShowModal(true)
  }

  // Open Edit Product Modal
  const handleOpenEditModal = (p: Product) => {
    setEditingProductId(p.id)
    setProdName(p.name)
    setProdCollection(p.collection)
    setProdPriceZAR(p.priceZAR)
    setProdPriceUSD(p.priceUSD)
    setProdBadge(p.badge || "")
    setProdTech(p.fabricTech || "")
    setProdDesc(p.description)
    setProdIcon(p.imageIcon || "🥼")
    setProdImages(p.imageUrls && p.imageUrls.length > 0 ? p.imageUrls : (p.imageUrl ? [p.imageUrl] : []))
    setProdColors(p.colors && p.colors.length > 0 ? p.colors : [{ name: "Standard", hex: "#111827" }])
    setProdSizes(p.sizes && p.sizes.length > 0 ? p.sizes : ["S", "M", "L", "XL"])
    setProdSpecs(p.specs && p.specs.length > 0 ? p.specs : [])
    setShowModal(true)
  }

  // Delete Entire Product
  const handleDeleteProduct = async (productId: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}" from MedStore? This cannot be undone.`)) {
      return
    }

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
        toast.success(`Deleted "${name}"`)
        setProducts(prev => prev.filter(p => p.id !== productId))
      } else {
        const data = await res.json()
        toast.error(data.error || "Failed to delete product")
      }
    } catch (e: any) {
      toast.error(e.message || "Failed to delete product")
    }
  }

  // Upload Image File
  const handleUploadImageFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadingImage(true)

    try {
      const formData = new FormData()
      formData.append("file", file)

      const res = await fetch("/api/medstore/upload", {
        method: "POST",
        body: formData
      })
      const data = await res.json()

      if (res.ok && data.url) {
        setProdImages(prev => [...prev, data.url])
        toast.success("Picture added to gallery")
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

  // Add Direct Image URL
  const handleAddImageUrl = () => {
    if (!customUrlInput.trim()) return
    setProdImages(prev => [...prev, customUrlInput.trim()])
    setCustomUrlInput("")
    toast.success("Image URL added to gallery")
  }

  // DELETE PICTURE FROM PRODUCT
  const handleDeletePicture = (index: number) => {
    setProdImages(prev => prev.filter((_, i) => i !== index))
    toast.info("Picture removed")
  }

  // Set Picture as Primary Cover
  const handleSetPrimaryCover = (index: number) => {
    if (index === 0) return
    setProdImages(prev => {
      const target = prev[index]
      const rest = prev.filter((_, i) => i !== index)
      return [target, ...rest]
    })
    toast.success("Primary cover picture updated")
  }

  // Move Picture Left or Right
  const handleMovePicture = (index: number, direction: "left" | "right") => {
    if (direction === "left" && index > 0) {
      setProdImages(prev => {
        const copy = [...prev]
        const temp = copy[index - 1]
        copy[index - 1] = copy[index]
        copy[index] = temp
        return copy
      })
    } else if (direction === "right" && index < prodImages.length - 1) {
      setProdImages(prev => {
        const copy = [...prev]
        const temp = copy[index + 1]
        copy[index + 1] = copy[index]
        copy[index] = temp
        return copy
      })
    }
  }

  // Save Product (Create or Update)
  const handleSaveProduct = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!prodName.trim()) {
      toast.error("Product title is required")
      return
    }

    setSaving(true)
    const payload = {
      id: editingProductId || `merch-${Date.now()}-${prodName.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 20)}`,
      name: prodName.trim(),
      collection: prodCollection,
      price_zar: Number(prodPriceZAR) || 0,
      price_usd: Number(prodPriceUSD) || 0,
      badge: prodBadge.trim() || null,
      fabric_tech: prodTech.trim() || null,
      description: prodDesc.trim(),
      image_icon: prodIcon || "🥼",
      image_url: prodImages[0] || null,
      image_urls: prodImages,
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
        toast.success(editingProductId ? "Product updated successfully" : "New product published to MedStore")
        setShowModal(false)
        await loadProducts()
      } else {
        toast.error(data.error || "Failed to save product")
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to save product")
    } finally {
      setSaving(false)
    }
  }

  // Filtered Products
  const filteredProducts = products.filter(p => {
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      (p.fabricTech && p.fabricTech.toLowerCase().includes(search.toLowerCase()))

    const matchColl = selectedCollection === "all" || p.collection === selectedCollection
    return matchSearch && matchColl
  })

  return (
    <div className="max-w-7xl space-y-7">
      {/* Supervisor Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#1f1f1f] pb-6">
        <div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-2xl sm:text-3xl font-display font-black text-white flex items-center gap-2">
              <ShoppingBag className="text-brand" size={26} /> MedStore Supervisor
            </h1>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-brand/10 border border-brand/30 px-2.5 py-0.5 rounded-full">
              Full Control
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Supervise products, edit titles, update USD/ZAR prices, delete pictures, and add new items.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg shadow-brand/20 active:scale-95"
          >
            <Plus size={16} /> Add New Item
          </button>
          <Link
            href="/medstore"
            target="_blank"
            className="px-4 py-2.5 bg-[#141414] hover:bg-[#1f1f1f] border border-[#262626] text-gray-300 hover:text-white font-bold rounded-xl text-xs transition-all flex items-center gap-1.5"
          >
            <Eye size={14} /> View Live Store
          </Link>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between bg-[#0e0e0e] border border-[#1f1f1f] p-3 rounded-2xl">
        <div className="relative flex-1">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search merchandise by title, description or fabric..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#141414] border border-[#242424] focus:border-brand rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder:text-gray-500 outline-none"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {[
            { id: "all", label: "All Items" },
            { id: "sets", label: "Sets" },
            { id: "scrubs", label: "Tops" },
            { id: "pants", label: "Pants" },
            { id: "coats", label: "Coats" },
            { id: "jackets", label: "Jackets" },
            { id: "underscrubs", label: "Underscrubs" },
            { id: "accessories", label: "Accessories" },
          ].map(c => (
            <button
              key={c.id}
              onClick={() => setSelectedCollection(c.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                selectedCollection === c.id
                  ? "bg-brand text-white border-brand shadow-sm shadow-brand/20"
                  : "bg-[#141414] text-gray-400 border-[#242424] hover:text-white"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-3 text-gray-400">
          <Loader2 className="animate-spin text-brand" size={28} />
          <p className="text-xs">Loading merchandise catalog...</p>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="py-16 text-center border border-dashed border-[#222] rounded-3xl bg-[#0c0c0e]">
          <ShoppingBag className="mx-auto text-gray-600 mb-3" size={32} />
          <p className="text-sm font-bold text-white">No products found</p>
          <p className="text-xs text-gray-500 mt-1">Try adjusting your search query or collection filter.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProducts.map(prod => {
            const imagesCount = prod.imageUrls ? prod.imageUrls.length : (prod.imageUrl ? 1 : 0)
            return (
              <div
                key={prod.id}
                className="bg-[#0e0e0e] border border-[#1f1f1f] hover:border-[#2e2e2e] rounded-2xl p-4 flex flex-col justify-between transition-all group shadow-lg"
              >
                <div>
                  {/* Image View */}
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#141414] mb-3.5 border border-[#222]">
                    <ProductImage
                      src={prod.imageUrl || prod.imageUrls?.[0]}
                      alt={prod.name}
                      fallbackIcon={prod.imageIcon || "🥼"}
                      className="w-full h-full object-cover"
                    />

                    {/* Image Counter Badge */}
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-sm text-[10px] font-bold text-white border border-white/10 flex items-center gap-1">
                      <ImageIcon size={10} className="text-brand" />
                      <span>{imagesCount} {imagesCount === 1 ? "picture" : "pictures"}</span>
                    </div>

                    {/* Collection badge */}
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-brand/90 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                      {prod.collection}
                    </div>

                    {prod.badge && (
                      <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-white text-[10px] font-black uppercase text-black">
                        {prod.badge}
                      </div>
                    )}
                  </div>

                  {/* Title & Specs */}
                  <h3 className="text-sm font-bold text-white line-clamp-1 group-hover:text-brand transition-colors">
                    {prod.name}
                  </h3>

                  {prod.fabricTech && (
                    <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">
                      {prod.fabricTech}
                    </p>
                  )}

                  {/* Price display */}
                  <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#1a1a1a]">
                    <div>
                      <span className="text-[10px] text-gray-500 block uppercase font-bold">USD Price</span>
                      <span className="text-sm font-black text-brand">${prod.priceUSD.toFixed(2)}</span>
                    </div>
                    <div className="border-l border-[#222] pl-3">
                      <span className="text-[10px] text-gray-500 block uppercase font-bold">ZAR Price</span>
                      <span className="text-sm font-bold text-white">R{prod.priceZAR}</span>
                    </div>
                  </div>
                </div>

                {/* Supervisor Action Buttons */}
                <div className="flex items-center gap-2 pt-4 mt-4 border-t border-[#1a1a1a]">
                  <button
                    onClick={() => handleOpenEditModal(prod)}
                    className="flex-1 py-2 bg-[#161616] hover:bg-[#222] border border-[#262626] hover:border-brand/50 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <Edit3 size={13} className="text-brand" /> Edit Product
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(prod.id, prod.name)}
                    className="p-2 text-gray-500 hover:text-brand hover:bg-brand/10 border border-[#222] hover:border-brand/30 rounded-xl transition-all"
                    title="Delete product"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────── */}
      {/* SUPERVISOR MODAL: EDIT TITLE, PRICE, PICTURES & DETAILS     */}
      {/* ─────────────────────────────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            className="bg-[#0e0e0e] border border-[#262626] rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl text-white my-auto animate-in zoom-in-95"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#1f1f1f]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand/10 border border-brand/30 text-brand flex items-center justify-center">
                  <ShoppingBag size={16} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    {editingProductId ? "Supervise & Edit Product" : "Add New Merchandise"}
                  </h3>
                  <p className="text-xs text-gray-400">
                    Control title, live price, picture gallery, and fabric details.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-8 h-8 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-center text-gray-400 hover:text-white transition"
              >
                <X size={16} />
              </button>
            </div>

            {/* Modal Form Scrollable Body */}
            <form onSubmit={handleSaveProduct} className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1">
              {/* 1. Title & Collection */}
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand">1. Core Information</h4>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Product Title *</label>
                  <input
                    type="text"
                    required
                    value={prodName}
                    onChange={e => setProdName(e.target.value)}
                    placeholder="e.g. TANC Core Complete Scrub Set"
                    className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Collection Category</label>
                    <select
                      value={prodCollection}
                      onChange={e => setProdCollection(e.target.value as any)}
                      className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                    >
                      <option value="sets">Scrub Sets</option>
                      <option value="scrubs">Scrub Tops</option>
                      <option value="pants">Scrub Pants</option>
                      <option value="coats">Lab Coats & Gowns</option>
                      <option value="jackets">Doctor's Jackets</option>
                      <option value="underscrubs">Underscrubs</option>
                      <option value="accessories">Accessories & Gear</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Badge (Optional)</label>
                    <input
                      type="text"
                      value={prodBadge}
                      onChange={e => setProdBadge(e.target.value)}
                      placeholder="e.g. Bestseller, Official PodMyth"
                      className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Live Pricing */}
              <div className="space-y-4 pt-3 border-t border-[#1f1f1f]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand">2. Live Pricing</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Price in USD ($) *</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">$</span>
                      <input
                        type="number"
                        step="0.5"
                        required
                        value={prodPriceUSD}
                        onChange={e => setProdPriceUSD(parseFloat(e.target.value) || 0)}
                        className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl pl-8 pr-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1.5">Price in ZAR (R) *</label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-bold">R</span>
                      <input
                        type="number"
                        step="1"
                        required
                        value={prodPriceZAR}
                        onChange={e => setProdPriceZAR(parseFloat(e.target.value) || 0)}
                        className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl pl-8 pr-4 py-2.5 text-xs text-white outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Picture Gallery: ADD & DELETE PICTURES */}
              <div className="space-y-4 pt-3 border-t border-[#1f1f1f]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand">3. Pictures Gallery</h4>
                    <p className="text-[11px] text-gray-400 mt-0.5">
                      First image is the primary cover. Click trash to delete pictures.
                    </p>
                  </div>
                  <span className="text-xs font-bold text-gray-400">
                    {prodImages.length} {prodImages.length === 1 ? "picture" : "pictures"}
                  </span>
                </div>

                {/* Upload or Add Picture */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 flex gap-2">
                    <input
                      type="url"
                      value={customUrlInput}
                      onChange={e => setCustomUrlInput(e.target.value)}
                      placeholder="Paste image URL (https://...)"
                      className="flex-1 bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-3 py-2 text-xs text-white outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAddImageUrl}
                      className="px-3 py-2 bg-[#1f1f1f] hover:bg-[#282828] text-white text-xs font-bold rounded-xl transition"
                    >
                      Add URL
                    </button>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleUploadImageFile}
                    className="hidden"
                  />
                  <button
                    type="button"
                    disabled={uploadingImage}
                    onClick={() => fileInputRef.current?.click()}
                    className="px-4 py-2 bg-brand/10 hover:bg-brand/20 border border-brand/30 text-brand text-xs font-bold rounded-xl transition flex items-center justify-center gap-1.5"
                  >
                    {uploadingImage ? <Loader2 size={13} className="animate-spin" /> : <Upload size={13} />}
                    <span>Upload Image</span>
                  </button>
                </div>

                {/* Picture Thumbnails Grid */}
                {prodImages.length === 0 ? (
                  <div className="p-6 text-center border border-dashed border-[#262626] rounded-2xl bg-[#121214]">
                    <ImageIcon className="mx-auto text-gray-600 mb-2" size={24} />
                    <p className="text-xs text-gray-400">No pictures added yet.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {prodImages.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="group relative aspect-square rounded-xl overflow-hidden bg-[#161616] border border-[#262626]"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imgUrl} alt={`Picture ${idx + 1}`} className="w-full h-full object-cover" />

                        {/* Primary Cover Badge */}
                        {idx === 0 && (
                          <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-brand text-[9px] font-black uppercase text-white shadow">
                            Cover
                          </div>
                        )}

                        {/* DELETE PICTURE & Reorder Overlay */}
                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                          <div className="flex justify-between items-center">
                            {idx > 0 && (
                              <button
                                type="button"
                                onClick={() => handleSetPrimaryCover(idx)}
                                className="px-1.5 py-0.5 rounded bg-white text-black text-[9px] font-bold"
                              >
                                Set Cover
                              </button>
                            )}
                            {/* DELETE PICTURE BUTTON */}
                            <button
                              type="button"
                              onClick={() => handleDeletePicture(idx)}
                              className="ml-auto p-1.5 bg-brand text-white rounded-lg hover:bg-red-700 transition"
                              title="Delete picture"
                            >
                              <Trash2 size={12} />
                            </button>
                          </div>

                          <div className="flex justify-between items-center pt-2">
                            <button
                              type="button"
                              disabled={idx === 0}
                              onClick={() => handleMovePicture(idx, "left")}
                              className="p-1 bg-[#1a1a1a] text-white rounded disabled:opacity-30"
                              title="Move left"
                            >
                              <MoveLeft size={11} />
                            </button>
                            <span className="text-[10px] text-gray-300 font-bold">{idx + 1}</span>
                            <button
                              type="button"
                              disabled={idx === prodImages.length - 1}
                              onClick={() => handleMovePicture(idx, "right")}
                              className="p-1 bg-[#1a1a1a] text-white rounded disabled:opacity-30"
                              title="Move right"
                            >
                              <MoveRight size={11} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Description & Fabric */}
              <div className="space-y-4 pt-3 border-t border-[#1f1f1f]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand">4. Fabric & Description</h4>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Fabric Technology</label>
                  <input
                    type="text"
                    value={prodTech}
                    onChange={e => setProdTech(e.target.value)}
                    placeholder="e.g. TANC-Tech Heavy-Duty Twill"
                    className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">Description</label>
                  <textarea
                    rows={3}
                    value={prodDesc}
                    onChange={e => setProdDesc(e.target.value)}
                    placeholder="Describe material, purpose, hospital grade durability..."
                    className="w-full bg-[#141414] border border-[#262626] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white outline-none resize-none"
                  />
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#1f1f1f]">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 bg-[#141414] hover:bg-[#1f1f1f] text-gray-300 hover:text-white rounded-xl text-xs font-bold transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-bold transition flex items-center gap-2 shadow-lg shadow-brand/20"
                >
                  {saving ? <Loader2 size={14} className="animate-spin" /> : <Check size={14} />}
                  <span>{editingProductId ? "Save Changes" : "Publish to MedStore"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
