import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
  }

  const supabase = createClient(url, key);

  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Ogiltig e-postadress' }, { status: 400 });
    }

    // Försök insert först, ignorera duplicate error
    const { error } = await supabase
      .from('nordicpep_newsletter')
      .insert({ email });

    // Om duplicate = redan registrerad, det är OK
    if (error && !error.message.includes('duplicate') && !error.code?.includes('23505')) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Skicka välkomstmejl via Resend
    try {
      await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://scandipep.se'}/api/send-welcome`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
    } catch {}

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Något gick fel' }, { status: 500 });
  }
}
