import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import CookieConsent from "@/components/common/CookieConsent/CookieConsent";
import "@/styles/globals.scss";
import Script from "next/script";
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Metahorizon",
  description: "Metahorizon - Innovation and Technology Solutions",
  metadataBase: new URL("https://metahorizon.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://images.unsplash.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />
        {/* Load Bootstrap CSS asynchronously to avoid render-blocking */}
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        />
        <link
          id="bootstrap-css"
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          media="print"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
          />
        </noscript>
        {/* Script to enable Bootstrap CSS after load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.getElementById('bootstrap-css');
                if (link) {
                  link.onload = function() {
                    this.media = 'all';
                  };
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${roboto.variable} antialiased`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              (function(){
                var s1 = document.createElement("script"),
                    s0 = document.getElementsByTagName("script")[0];
                s1.async = true;
                s1.src = "https://embed.tawk.to/601d68a1a9a34e36b974377f/1etpe1e5h";
                s1.charset = "UTF-8";
                s1.setAttribute("crossorigin","*");
                s0.parentNode?.insertBefore(s1, s0);
              })();
            `,
          }}
        />
        <CookieConsent />
      </body>
    </html>
  );
}
