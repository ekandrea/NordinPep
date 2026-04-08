import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return NextResponse.json({ error: 'Resend not configured' }, { status: 500 });

    const resend = new Resend(apiKey);
    const { email } = await request.json();
    if (!email) return NextResponse.json({ error: 'No email' }, { status: 400 });

    await resend.emails.send({
      from: 'ScandiPep <onboarding@resend.dev>',
      to: email,
      subject: 'Välkommen till ScandiPep — 15% rabatt på din första beställning',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f0f0f5; padding: 40px; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <span style="display: inline-block; background: #4a9ead; color: #fff; font-weight: 800; font-size: 24px; padding: 12px 20px; border-radius: 10px;">SP</span>
            <h1 style="font-size: 22px; margin: 16px 0 0;">ScandiPep</h1>
          </div>

          <h2 style="font-size: 20px; color: #f0f0f5; margin-bottom: 12px;">Välkommen!</h2>

          <p style="color: #8a8a9a; line-height: 1.7; font-size: 15px;">
            Tack för att du registrerade dig hos ScandiPep. Du är nu med på vår lanseringslista
            och bland de första som får veta när vi öppnar.
          </p>

          <div style="background: #1c1c2a; border: 1px solid #2a2a3a; border-radius: 10px; padding: 24px; margin: 24px 0; text-align: center;">
            <p style="color: #8a8a9a; font-size: 13px; margin: 0 0 8px;">Din rabattkod (15% på första beställningen):</p>
            <span style="display: inline-block; background: #4a9ead; color: #fff; font-size: 22px; font-weight: 700; padding: 12px 28px; border-radius: 8px; letter-spacing: 2px;">SCANDI15</span>
            <p style="color: #5a5a6a; font-size: 12px; margin: 12px 0 0;">Giltig i 60 dagar från registrering.</p>
          </div>

          <h3 style="font-size: 16px; color: #f0f0f5; margin: 24px 0 12px;">Vad händer nu?</h3>

          <p style="color: #8a8a9a; line-height: 1.7; font-size: 15px;">
            Vi håller på att färdigställa vårt sortiment av forskningsreagenser.
            Du får ett mejl så fort vi öppnar — med din rabattkod redo att användas.
          </p>

          <div style="margin: 28px 0; text-align: center;">
            <a href="https://scandipep.se/stack-engine" style="display: inline-block; background: #4a9ead; color: #fff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">
              Testa Stack Engine — hitta rätt reagenser
            </a>
          </div>

          <hr style="border: none; border-top: 1px solid #2a2a3a; margin: 28px 0;" />

          <p style="color: #5a5a6a; font-size: 11px; line-height: 1.6; text-align: center;">
            Alla produkter säljs uteslutande för laboratorie- och forskningsändamål.
            De får inte användas på människor eller djur. Genom att handla eller registrera
            dig bekräftar du att du är minst 18 år och att produkterna bara används i forskning.
          </p>

          <p style="color: #5a5a6a; font-size: 11px; text-align: center; margin-top: 16px;">
            ScandiPep — Forskningsreagenser<br/>
            Andrea Ekeberg, enskild firma<br/>
            Helsingborg, Sverige<br/>
            contact@scandipep.se
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
