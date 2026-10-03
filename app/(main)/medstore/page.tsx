"use client"
import { useState } from "react"
import {
  ShoppingBag, Search, X, Plus, Check, Scissors, Truck,
  Star, Trash2, Package, ArrowRight
} from "lucide-react"
import { toast } from "sonner"

interface ProductColor {
  name: string
  hex: string
}

interface Product {
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
    description: "Faculty certified consultation coat with notched lapels, side pass-through pocket slits to reach trouser pockets, and tablet sized compartments.",
    colors: [
      { name: "Clinical White", hex: "#f9fafb" }
    ],
    sizes: ["XS", "S", "M", "L", "XL", "2XL"],
    specs: ["Interior tablet/iPad pocket", "Pass-through side access slits", "Stain & spill resistant finish", "Heavy durable twill fabric"]
  },
  {
    id: "tanc-littmann-iii",
    name: "3M Littmann® Classic III™ Stethoscope",
    collection: "accessories",
    priceZAR: 1950,
    priceUSD: 110,
    rating: 5.0,
    reviewsCount: 512,
    badge: "Official Dealer",
    fabricTech: "Dual-Lumen Acoustic",
    imageIcon: "🩺",
    description: "Authentic 3M Littmann authorized unit with tunable diaphragms for both adult and paediatric auscultation. Free engraving with TANC orders.",
    colors: [
      { name: "Black Edition", hex: "#111827" },
      { name: "Caribbean Blue", hex: "#0284c7" },
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

export default function MedStorePage({ isAdmin = false }: MedStorePageProps) {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS)
  const [currency, setCurrency] = useState<"ZAR" | "USD">("ZAR")
  const [selectedCollection, setSelectedCollection] = useState<string>("all")
  const [search, setSearch] = useState<string>("")
  const [colorSelections, setColorSelections] = useState<Record<string, ProductColor>>({})
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null)

  // Modal state
  const [modalColor, setModalColor] = useState<ProductColor>(INITIAL_PRODUCTS[0].colors[0])
  const [modalSize, setModalSize] = useState<string>("M")
  const [withEmbroidery, setWithEmbroidery] = useState<boolean>(false)
  const [embroideryName, setEmbroideryName] = useState<string>("")

  // Cart state
  const [cart, setCart] = useState<CartItem[]>([])
  const [showCartDrawer, setShowCartDrawer] = useState<boolean>(false)

  // Admin — Add Product modal
  const [showAddModal, setShowAddModal] = useState(false)
  const [newName, setNewName] = useState("")
  const [newCollection, setNewCollection] = useState<Product["collection"]>("scrubs")
  const [newPriceZAR, setNewPriceZAR] = useState(320)
  const [newPriceUSD, setNewPriceUSD] = useState(18)
  const [newDesc, setNewDesc] = useState("")
  const [newTech, setNewTech] = useState("")
  const [newImageUrl, setNewImageUrl] = useState("")
  const [newIcon, setNewIcon] = useState("👕")
  const [newBadge, setNewBadge] = useState("")

  const getActiveColor = (product: Product) =>
    colorSelections[product.id] || product.colors[0]

  const handleColorSelect = (productId: string, color: ProductColor, e: React.MouseEvent) => {
    e.stopPropagation()
    setColorSelections(prev => ({ ...prev, [productId]: color }))
  }

  const openProductModal = (product: Product) => {
    setActiveModalProduct(product)
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
    toast.success(`Added to cart`, {
      description: `${product.name} — ${modalColor.name} · Size ${modalSize}`
    })
  }

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index))
  }

  const cartTotalZAR = cart.reduce((sum, item) =>
    sum + item.product.priceZAR * item.quantity + (item.withEmbroidery ? 85 * item.quantity : 0), 0)
  const cartTotalUSD = cart.reduce((sum, item) =>
    sum + item.product.priceUSD * item.quantity + (item.withEmbroidery ? 5 * item.quantity : 0), 0)

  const handleCheckout = () => {
    toast.success("Order confirmed", {
      description: "Requisition sent to Campus Medical Store. Dispatch confirmed via SMS/Email."
    })
    setCart([])
    setShowCartDrawer(false)
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newName.trim() || !newDesc.trim()) {
      toast.error("Please fill in the product name and description.")
      return
    }
    const id = `admin-${Date.now()}`
    const newProduct: Product = {
      id,
      name: newName.trim(),
      collection: newCollection,
      priceZAR: newPriceZAR,
      priceUSD: newPriceUSD,
      rating: 5.0,
      reviewsCount: 0,
      badge: newBadge.trim() || undefined,
      fabricTech: newTech.trim() || undefined,
      imageUrl: newImageUrl.trim() || undefined,
      imageIcon: newIcon || "📦",
      description: newDesc.trim(),
      colors: [{ name: "Standard", hex: "#111827" }],
      sizes: ["XS", "S", "M", "L", "XL", "2XL"],
      specs: [],
      isAdminAdded: true
    }
    setProducts(prev => [newProduct, ...prev])
    toast.success(`"${newName}" added to MedStore`)
    setShowAddModal(false)
    setNewName(""); setNewDesc(""); setNewTech(""); setNewImageUrl("")
    setNewIcon("👕"); setNewBadge(""); setNewPriceZAR(320); setNewPriceUSD(18)
  }

  const handleDeleteProduct = (productId: string, productName: string) => {
    if (!confirm(`Remove "${productName}" from the MedStore?`)) return
    setProducts(prev => prev.filter(p => p.id !== productId))
    toast.success(`"${productName}" removed from store`)
  }

  const filteredProducts = products.filter(p => {
    const matchesCollection = selectedCollection === "all" || p.collection === selectedCollection
    const matchesSearch =
      search === "" ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.fabricTech?.toLowerCase().includes(search.toLowerCase())
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
                TANC® Medical Wear · South Africa
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

          <div className="flex items-center gap-3 flex-shrink-0">
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

            {/* Admin add button */}
            {isAdmin && (
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2.5 bg-brand hover:bg-red-700 text-white font-bold rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg shadow-brand/20"
              >
                <Plus size={14} /> Add Product
              </button>
            )}

            {/* Cart */}
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

      {/* ── FILTERS ── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8">
        <div className="relative flex-1 max-w-sm">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-600" />
          <input
            type="text"
            placeholder="Search products, collections, fabrics…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-[#0d0d0d] border border-[#1a1a1a] focus:border-[#333] rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder:text-gray-700 outline-none transition-colors"
          />
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 sm:pb-0 flex-wrap">
          {COLLECTIONS.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCollection(cat.id)}
              className={`px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                selectedCollection === cat.id
                  ? "bg-brand text-white border-brand"
                  : "bg-[#0d0d0d] text-gray-500 border-[#1a1a1a] hover:text-white hover:border-[#2b2b2b]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── PRODUCT COUNT ── */}
      <div className="flex items-center justify-between mb-5">
        <p className="text-xs text-gray-600 font-mono uppercase tracking-wider">
          {filteredProducts.length} {filteredProducts.length === 1 ? "item" : "items"}
        </p>
        <p className="text-[10px] text-gray-700 uppercase tracking-widest font-bold">
          TANC® Authorized Collection
        </p>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
        {filteredProducts.map(product => {
          const activeColor = getActiveColor(product)
          return (
            <div
              key={product.id}
              onClick={() => openProductModal(product)}
              className="bg-[#0a0a0a] hover:bg-[#0f0f0f] transition-colors cursor-pointer group relative flex flex-col"
            >
              {/* Admin delete */}
              {isAdmin && (
                <button
                  onClick={e => { e.stopPropagation(); handleDeleteProduct(product.id, product.name) }}
                  className="absolute top-3 left-3 z-20 w-7 h-7 rounded-lg bg-black/80 border border-[#2b2b2b] text-gray-500 hover:text-brand hover:border-brand/30 flex items-center justify-center transition-all"
                  title="Remove product"
                >
                  <Trash2 size={12} />
                </button>
              )}

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[9px] font-black uppercase tracking-wider text-white bg-brand px-2 py-0.5 rounded-sm">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Product image area */}
              <div className="w-full aspect-square bg-[#0d0d0d] border-b border-[#1a1a1a] flex flex-col items-center justify-center relative overflow-hidden">
                {product.imageUrl ? (
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300 select-none">
                    {product.imageIcon}
                  </span>
                )}
                {/* Fabric tech label */}
                {product.fabricTech && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gray-400">
                      {product.fabricTech}
                    </span>
                  </div>
                )}
              </div>

              {/* Product info */}
              <div className="p-4 flex flex-col flex-1">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-1.5 h-1.5 rounded-full ${i < Math.floor(product.rating) ? "bg-white" : "bg-[#2b2b2b]"}`}
                    />
                  ))}
                  <span className="text-[10px] text-gray-600 ml-1">({product.reviewsCount})</span>
                </div>

                {/* Name */}
                <h3 className="text-xs font-bold text-white leading-snug line-clamp-2 group-hover:text-brand transition-colors mb-2 flex-1">
                  {product.name}
                </h3>

                {/* Color swatches */}
                <div className="flex items-center gap-1.5 mb-4">
                  {product.colors.slice(0, 5).map(color => (
                    <button
                      key={color.name}
                      onClick={e => handleColorSelect(product.id, color, e)}
                      className={`w-3.5 h-3.5 rounded-full border-2 transition-all ${
                        activeColor.name === color.name
                          ? "border-white scale-125"
                          : "border-transparent hover:scale-110"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    />
                  ))}
                  {product.colors.length > 5 && (
                    <span className="text-[10px] text-gray-600">+{product.colors.length - 5}</span>
                  )}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-[#1a1a1a]">
                  <span className="text-sm font-black text-white">
                    {formatPrice(product.priceZAR, product.priceUSD)}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all">
                    <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-24 border border-[#1a1a1a] rounded-xl">
          <p className="text-gray-600 text-sm">No products match your search.</p>
        </div>
      )}

      {/* ── PRODUCT DETAIL MODAL ── */}
      {activeModalProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            className="bg-[#0a0a0a] border-t sm:border border-[#1f1f1f] rounded-t-3xl sm:rounded-2xl w-full sm:max-w-xl max-h-[92vh] overflow-y-auto shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal image header */}
            <div className="relative">
              <div className="w-full h-52 bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
                {activeModalProduct.imageUrl ? (
                  <img src={activeModalProduct.imageUrl} alt={activeModalProduct.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-7xl">{activeModalProduct.imageIcon}</span>
                )}
              </div>
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/70 border border-[#333] flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                <X size={15} />
              </button>
              {activeModalProduct.badge && (
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] font-black uppercase tracking-wider text-white bg-brand px-2 py-1 rounded-sm">
                    {activeModalProduct.badge}
                  </span>
                </div>
              )}
            </div>

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
              {activeModalProduct.specs.length > 0 && (
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
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-3">
                  Color — <span className="text-gray-300">{modalColor.name}</span>
                </label>
                <div className="flex items-center gap-2.5 flex-wrap">
                  {activeModalProduct.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setModalColor(color)}
                      className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                        modalColor.name === color.name
                          ? "border-white scale-110"
                          : "border-[#2b2b2b] hover:border-gray-500"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {modalColor.name === color.name && (
                        <Check size={12} className="text-white drop-shadow-lg" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Size
                  </label>
                  <span className="text-[10px] text-brand cursor-pointer hover:underline">
                    Sizing Guide
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeModalProduct.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setModalSize(size)}
                      className={`min-w-[3rem] px-3 py-2 text-xs font-bold rounded-lg border transition-all ${
                        modalSize === size
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-gray-400 border-[#2b2b2b] hover:border-[#444] hover:text-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Embroidery Add-On */}
              <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Scissors size={14} className="text-brand" />
                    <div>
                      <p className="text-xs font-bold text-white">Custom Faculty Embroidery</p>
                      <p className="text-[10px] text-gray-500">Name & title above chest pocket</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setWithEmbroidery(!withEmbroidery)}
                    className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all border ${
                      withEmbroidery
                        ? "bg-brand border-brand text-white"
                        : "bg-transparent border-[#2b2b2b] text-gray-500 hover:text-white hover:border-[#444]"
                    }`}
                  >
                    {withEmbroidery ? `Added · +R85` : `+ Add R85`}
                  </button>
                </div>
                {withEmbroidery && (
                  <input
                    type="text"
                    placeholder="e.g. Dr. A. Chingwaru (MBChB)"
                    value={embroideryName}
                    onChange={e => setEmbroideryName(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#2b2b2b] focus:border-brand rounded-lg px-3 py-2 text-xs text-white placeholder:text-gray-700 outline-none"
                  />
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => addToCart(activeModalProduct)}
                  className="flex-1 py-3.5 bg-brand hover:bg-red-700 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={14} />
                  Add to Cart ·{" "}
                  {formatPrice(
                    activeModalProduct.priceZAR + (withEmbroidery ? 85 : 0),
                    activeModalProduct.priceUSD + (withEmbroidery ? 5 : 0)
                  )}
                </button>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  className="px-5 py-3.5 bg-[#111] border border-[#1f1f1f] hover:border-[#333] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── CART DRAWER ── */}
      {showCartDrawer && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end"
          onClick={() => setShowCartDrawer(false)}
        >
          <div
            className="bg-[#0a0a0a] border-l border-[#1a1a1a] w-full max-w-sm h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-200"
            onClick={e => e.stopPropagation()}
          >
            {/* Cart header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a1a1a]">
              <div className="flex items-center gap-2">
                <ShoppingBag size={16} className="text-brand" />
                <h3 className="font-black text-white text-sm uppercase tracking-wider">Cart</h3>
                {cart.length > 0 && (
                  <span className="text-xs text-gray-500">({cart.length})</span>
                )}
              </div>
              <button
                onClick={() => setShowCartDrawer(false)}
                className="w-7 h-7 rounded-lg bg-[#111] border border-[#1f1f1f] flex items-center justify-center text-gray-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            {/* Cart items */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-3">
              {cart.length === 0 ? (
                <div className="text-center py-20 space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#111] border border-[#1a1a1a] flex items-center justify-center mx-auto">
                    <ShoppingBag size={22} className="text-[#2b2b2b]" />
                  </div>
                  <p className="text-gray-600 text-xs">Your cart is empty.</p>
                </div>
              ) : (
                cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#111] border border-[#1f1f1f] flex items-center justify-center text-xl flex-shrink-0">
                      {item.product.imageIcon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-white line-clamp-1">{item.product.name}</p>
                      <p className="text-[10px] text-gray-500">
                        {item.selectedColor.name} · {item.selectedSize}
                      </p>
                      {item.withEmbroidery && (
                        <p className="text-[10px] text-brand font-semibold">Embroidery +R85</p>
                      )}
                      <p className="text-xs font-black text-white mt-0.5">
                        {formatPrice(
                          item.product.priceZAR + (item.withEmbroidery ? 85 : 0),
                          item.product.priceUSD + (item.withEmbroidery ? 5 : 0)
                        )}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(idx)}
                      className="text-gray-600 hover:text-brand transition-colors flex-shrink-0"
                    >
                      <X size={13} />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart footer */}
            {cart.length > 0 && (
              <div className="px-6 py-5 border-t border-[#1a1a1a] space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Total</span>
                  <span className="text-xl font-black text-white">
                    {formatPrice(cartTotalZAR, cartTotalUSD)}
                  </span>
                </div>
                <div className="bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-3 space-y-1 text-[10px] text-gray-500">
                  <div className="flex justify-between">
                    <span>Dispatch</span>
                    <span className="text-white font-semibold">Next Day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Collection</span>
                    <span>Campus Bookstore / Dispensary</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3.5 bg-brand hover:bg-red-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Check size={14} /> Confirm Order
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ── ADMIN: ADD PRODUCT MODAL ── */}
      {isAdmin && showAddModal && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowAddModal(false)}
        >
          <div
            className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-2xl w-full max-w-md p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand block mb-1">
                  Admin — MedStore
                </span>
                <h3 className="text-base font-black text-white">Add New Product</h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="w-7 h-7 rounded-lg bg-[#111] border border-[#1f1f1f] flex items-center justify-center text-gray-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  Product Name *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. TANC Pro Scrub Set"
                  value={newName}
                  onChange={e => setNewName(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-700 outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Collection
                  </label>
                  <select
                    value={newCollection}
                    onChange={e => setNewCollection(e.target.value as Product["collection"])}
                    className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  >
                    <option value="jackets">Doctor's Jackets</option>
                    <option value="sets">ScrubLab Sets</option>
                    <option value="scrubs">Tops</option>
                    <option value="pants">Joggers & Cargo</option>
                    <option value="coats">Lab Coats</option>
                    <option value="accessories">Accessories</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Icon (Emoji)
                  </label>
                  <input
                    type="text"
                    value={newIcon}
                    onChange={e => setNewIcon(e.target.value)}
                    className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-3 py-2.5 text-sm text-white outline-none text-center"
                    maxLength={2}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Price (ZAR)
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={newPriceZAR}
                    onChange={e => setNewPriceZAR(Number(e.target.value))}
                    className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                    Price (USD)
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={newPriceUSD}
                    onChange={e => setNewPriceUSD(Number(e.target.value))}
                    className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-3 py-2.5 text-xs text-white outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  Image URL <span className="text-gray-700 normal-case">(optional)</span>
                </label>
                <input
                  type="url"
                  placeholder="https://…"
                  value={newImageUrl}
                  onChange={e => setNewImageUrl(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-700 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  Fabric / Tech Label <span className="text-gray-700 normal-case">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. LABx™ 4-Way Stretch"
                  value={newTech}
                  onChange={e => setNewTech(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-700 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  Badge Label <span className="text-gray-700 normal-case">(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. New Arrival"
                  value={newBadge}
                  onChange={e => setNewBadge(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-700 outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                  Description *
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Product description, key features and clinical use case…"
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  className="w-full bg-[#0d0d0d] border border-[#1f1f1f] focus:border-brand rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-700 outline-none transition-colors resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-brand hover:bg-red-700 text-white font-black rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  Publish to MedStore
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-5 py-3 bg-[#111] border border-[#1f1f1f] hover:border-[#333] text-gray-400 hover:text-white rounded-xl text-xs font-bold transition-all"
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
