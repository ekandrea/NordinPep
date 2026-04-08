import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

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

    // Spara i databas
    const { error } = await supabase
      .from('nordicpep_newsletter')
      .insert({ email });

    if (error && !error.message.includes('duplicate') && !error.code?.includes('23505')) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Skicka välkomstmejl direkt
    const resendKey = process.env.RESEND_API_KEY;
    if (resendKey) {
      try {
        const resend = new Resend(resendKey);
        await resend.emails.send({
          from: 'ScandiPep <contact@scandipep.se>',
          to: email,
          subject: 'Du är med på listan — ScandiPep lanserar snart',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f0f0f5; padding: 40px; border-radius: 12px;">
              <div style="text-align: center; margin-bottom: 32px;">
                <span style="display: inline-block; background: #4a9ead; color: #fff; font-weight: 800; font-size: 24px; padding: 12px 20px; border-radius: 10px;">SP</span>
                <h1 style="font-size: 22px; margin: 16px 0 0;">ScandiPep</h1>
              </div>
              <h2 style="font-size: 20px; color: #f0f0f5; margin-bottom: 12px;">Du är med!</h2>
              <p style="color: #8a8a9a; line-height: 1.7; font-size: 15px;">
                Tack för att du registrerade dig hos ScandiPep. Du är nu med på vår lanseringslista
                och bland de allra första som får veta när vi öppnar.
              </p>
              <div style="background: #1c1c2a; border: 1px solid #2a2a3a; border-radius: 10px; padding: 24px; margin: 24px 0; text-align: center;">
                <p style="color: #f0f0f5; font-size: 16px; font-weight: 600; margin: 0 0 8px;">Vad du får vid lansering:</p>
                <p style="color: #4a9ead; font-size: 18px; font-weight: 700; margin: 0;">15% rabatt — din personliga kod skickas samma sekund vi öppnar</p>
                <p style="color: #5a5a6a; font-size: 12px; margin: 12px 0 0;">Koden är unik för dig och kan bara användas en gång.</p>
              </div>
              <h3 style="font-size: 16px; color: #f0f0f5; margin: 24px 0 12px;">Vad händer nu?</h3>
              <p style="color: #8a8a9a; line-height: 1.7; font-size: 15px;">
                Vi håller på att färdigställa vårt sortiment av forskningsreagenser.
                Du får ett mejl samma sekund vi lanserar — med din unika rabattkod redo att användas.
              </p>
              <div style="margin: 28px 0; text-align: center;">
                <a href="https://scandipep.se/stack-engine" style="display: inline-block; background: #4a9ead; color: #fff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
                  Testa Stack Engine — hitta rätt reagenser
                </a>
              </div>
              <hr style="border: none; border-top: 1px solid #2a2a3a; margin: 28px 0;" />
              <p style="color: #5a5a6a; font-size: 11px; line-height: 1.6; text-align: center;">
                Alla produkter säljs uteslutande för laboratorie- och forskningsändamål.
                De får inte användas på människor eller djur.
              </p>
              <p style="color: #5a5a6a; font-size: 11px; text-align: center; margin-top: 16px;">
                ScandiPep — Forskningsreagenser | Andrea Ekeberg, enskild firma | Helsingborg
              </p>
            </div>
          `,
        });
      } catch {}
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Något gick fel' }, { status: 500 });
  }
}
