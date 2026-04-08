import '@/styles/globals.css';
import { CartProvider } from '@/context/CartContext';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import CartDrawer from '@/components/CartDrawer/CartDrawer';
import CookieConsent from '@/components/CookieConsent/CookieConsent';
import AnnouncementBar from '@/components/AnnouncementBar/AnnouncementBar';
import ExitPopup from '@/components/ExitPopup/ExitPopup';
import Script from 'next/script';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export const metadata = {
  title: {
    default: 'ScandiPep — Forskningsreagenser | Skandinavisk Kvalitet',
    template: '%s | ScandiPep',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  description:
    'Premium forskningspeptider med ≥98% renhet. COA-verifierade, fri frakt över 500 kr, snabb leverans. Uteslutande för forskningsändamål.',
  keywords: ['peptider', 'forskningspeptider', 'BPC-157', 'Selank', 'GHK-Cu', 'köpa peptider', 'peptider Sverige'],
  openGraph: {
    title: 'ScandiPep — Forskningsreagenser av Högsta Kvalitet',
    description: 'Forskningsreagenser med ≥98% renhet. COA-verifierade, fri frakt, snabb leverans i Sverige.',
    siteName: 'ScandiPep',
    images: [{ url: 'https://scandipep.se/og-image.png', width: 1200, height: 630 }],
    locale: 'sv_SE',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ScandiPep',
  url: 'https://scandipep.se',
  logo: 'https://scandipep.se/images/logo.png',
  description: 'Premium forskningspeptider med skandinavisk precision. COA-verifierade, snabb leverans inom EU.',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SE',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@scandipep.se',
    contactType: 'customer service',
    availableLanguage: ['Swedish', 'English'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <head>
        <meta name="google-site-verification" content="XAYTo2BOgx8qPPlEBt5nEioZw7-A_ms6l9_QnUo-s-A" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}
      </head>
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main style={{ paddingTop: 'calc(var(--nav-height) + var(--bar-height))' }}>{children}</main>
          <Footer />
          <CartDrawer />
          <CookieConsent />
          <ExitPopup />
        </CartProvider>
      </body>
    </html>
  );
}
