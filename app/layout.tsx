import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "Vaga-Mundo – Estás a punto de vivir la historia más increíble de tu vida",
  description:
    "Descubre oportunidades de estudio y trabajo en Irlanda, Malta, Francia y más. Vaga-Mundo te acompaña en cada paso de tu viaje educativo.",
  keywords: [
    "viajar",
    "estudiar",
    "trabajar en el extranjero",
    "Irlanda",
    "Malta",
    "Francia",
    "cursos de idiomas",
    "Vaga-Mundo",
    "work and study",
    "viajar barato",
    "educación internacional",
    "España",
    "iem",
  ],
  authors: [{ name: "Vaga-Mundo" }],
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/Logo-icon.png", sizes: "any" },
      { url: "/Logo-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/Logo-icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/Logo-icon.png",
    shortcut: "/Logo-icon.png",
  },
  openGraph: {
    title: "Vaga-Mundo – Estás a punto de vivir la historia más increíble de tu vida",
    description:
      "Vaga-Mundo te acompaña en tu aventura de estudio y trabajo en el extranjero. Conoce nuestras oportunidades y vive una experiencia inolvidable.",
    url: "https://vaga-mundo.com",
    siteName: "Vaga-Mundo",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/Logo-icon.png",
        width: 1200,
        height: 1200,
        alt: "Vaga-Mundo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaga-Mundo – Estudia y trabaja en el extranjero",
    description:
      "Con Vaga-Mundo, viaja a Irlanda, Malta y otros destinos, combina estudio y trabajo, y vive una experiencia transformadora.",
    images: ["/Logo-icon.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link href="https://fonts.cdnfonts.com/css/gilroy-bold" rel="stylesheet" />

        <Script src="//js-eu1.hsforms.net/forms/embed/v2.js" strategy="lazyOnload" charSet="utf-8" />
        <Script id="hs-script-loader" src="//js-eu1.hs-scripts.com/26265942.js" strategy="lazyOnload" />
      </head>
      <body className={`font-sans antialiased`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-SG6YKXXHLJ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SG6YKXXHLJ');
            gtag('config', 'AW-617733511');
          `}
        </Script>

        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '469738450452674');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=469738450452674&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P2B9MWH2');
          `}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P2B9MWH2"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>

        <Script id="metricool" strategy="lazyOnload">
          {`
            function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"e71a7688c3b4fc3a1fa1c10c99d1603f"})});
          `}
        </Script>

        <Script id="suppress-resize-observer" strategy="beforeInteractive">
          {`
            const resizeObserverErr = window.addEventListener('error', function(e) {
              if (e.message && e.message.includes('ResizeObserver loop')) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
              }
            });
          `}
        </Script>

        {children}
        <Analytics />
      </body>
    </html>
  )
}
