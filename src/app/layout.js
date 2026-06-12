import "./globals.css";
import "@/styles/header.css";
import "@/styles/footer.css";
import "@/styles/home.css";
import "@/styles/service.css";
import "@/styles/contact.css";
import "@/styles/fx.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import CustomCursor from "@/components/fx/CustomCursor";
import { SITE } from "@/data/site";

// Same Fontshare pairing as the 3D site, so both keep one brand voice.
const FONTSHARE_URL =
  "https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&f[]=satoshi@300,400,500,700,900&display=swap";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
};

export const viewport = {
  themeColor: "#060b1a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.fontshare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" precedence="default" href={FONTSHARE_URL} />
        {/* framer-motion server-renders entrance states as inline opacity:0 —
            without JS nothing would ever animate in, so force content visible */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <MotionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CustomCursor />
        </MotionProvider>
      </body>
    </html>
  );
}
