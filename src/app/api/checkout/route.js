import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  try {
    const { items, shipping, shippingCost, total } = await request.json();

    if (url && key) {
      const supabase = createClient(url, key);
      await supabase.from('nordicpep_orders').insert({
        customer_name: shipping.name,
        customer_email: shipping.email,
        shipping_address: shipping.address,
        shipping_city: shipping.city,
        shipping_postal_code: shipping.postalCode,
        shipping_country: shipping.country,
        items,
        subtotal: total - (shippingCost || 0),
        shipping_cost: shippingCost || 0,
        total: total || 0,
        status: 'awaiting_payment',
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
