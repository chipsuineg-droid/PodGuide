export interface ProductColor {
  name: string
  hex: string
  imageUrl?: string
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
