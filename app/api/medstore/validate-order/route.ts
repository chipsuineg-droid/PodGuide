import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { INITIAL_PRODUCTS } from "@/lib/data/medstoreProducts"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}))
    const { items } = body

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty or invalid" }, { status: 400 })
    }

    const supabase = await createClient()

    // 1. Fetch authoritative product data from the database
    const productIds = items.map((i: any) => String(i.productId || i.id)).filter(Boolean)
    const { data: dbProducts } = await supabase
      .from("medstore_products")
      .select("id, name, price_usd, price_zar, is_active")
      .in("id", productIds)

    // Map by ID (combine DB products with catalog fallback)
    const productMap = new Map<string, { id: string; name: string; price_usd: number; price_zar: number }>()

    INITIAL_PRODUCTS.forEach((p: any) => {
      productMap.set(p.id, {
        id: p.id,
        name: p.name,
        price_usd: Number(p.priceUSD || p.price_usd) || 0,
        price_zar: Number(p.priceZAR || p.price_zar) || 0,
      })
    })

    if (dbProducts) {
      dbProducts.forEach((p: any) => {
        productMap.set(p.id, {
          id: p.id,
          name: p.name,
          price_usd: Number(p.price_usd) || 0,
          price_zar: Number(p.price_zar) || 0,
        })
      })
    }

    // 2. Authoritative server-side price recalculation (NEVER trust client amounts)
    let totalUsd = 0
    let totalZar = 0
    const verifiedItems = []

    for (const item of items) {
      const pId = String(item.productId || item.id)
      const officialProduct = productMap.get(pId)

      if (!officialProduct) {
        return NextResponse.json(
          { error: `Item "${item.name || pId}" is no longer available in the official MedStore.` },
          { status: 400 }
        )
      }

      const quantity = Math.max(1, Math.min(100, Math.floor(Number(item.quantity) || 1)))
      const unitPriceUsd = officialProduct.price_usd
      const unitPriceZar = officialProduct.price_zar

      const lineTotalUsd = unitPriceUsd * quantity
      const lineTotalZar = unitPriceZar * quantity

      totalUsd += lineTotalUsd
      totalZar += lineTotalZar

      verifiedItems.push({
        id: officialProduct.id,
        name: officialProduct.name,
        quantity,
        unit_price_usd: unitPriceUsd,
        unit_price_zar: unitPriceZar,
        line_total_usd: lineTotalUsd,
        line_total_zar: lineTotalZar,
        chosen_color: item.chosenColor?.name || item.chosenColor || "Default",
        chosen_size: item.chosenSize || "Standard",
      })
    }

    return NextResponse.json({
      success: true,
      verifiedAt: new Date().toISOString(),
      verifiedItems,
      subtotal_usd: totalUsd,
      subtotal_zar: totalZar,
      currency: "USD",
      itemCount: verifiedItems.reduce((acc, i) => acc + i.quantity, 0),
      securityStatus: "Server-validated authoritative pricing",
    })
  } catch (err: any) {
    console.error("Order price validation error:", err)
    return NextResponse.json({ error: err?.message || "Failed to validate order pricing" }, { status: 500 })
  }
}
