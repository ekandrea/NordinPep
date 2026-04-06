import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return null;
  return createClient(url, key);
}

export async function POST(request) {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!stripeSecretKey || !webhookSecret) {
    return NextResponse.json({ error: 'Stripe not configured' }, { status: 500 });
  }

  const stripe = require('stripe')(stripeSecretKey);
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  let event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const supabase = getSupabase();

      if (supabase) {
        await supabase.from('scandipep_orders').insert({
          stripe_session_id: session.id,
          customer_name: session.metadata?.customerName || '',
          customer_email: session.customer_email || '',
          shipping_address: session.metadata?.address || '',
          shipping_city: session.metadata?.city || '',
          shipping_postal_code: session.metadata?.postalCode || '',
          shipping_country: session.metadata?.country || 'Sverige',
          items: JSON.parse(session.metadata?.items || '[]'),
          subtotal: session.amount_subtotal || 0,
          shipping_cost: 0,
          total: session.amount_total || 0,
          status: 'completed',
        });
      }
      break;
    }
    default:
      break;
  }

  return NextResponse.json({ received: true });
}
