import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const Bounded = localFont({
  src: "../../public/fonts/Bounded-Regular.ttf",
  variable: "--font-bounded",
  weight: "600",
});

const fontPoppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Calango Estamparia",
  description: "Calango Estamparia",
  icons: {
    icon: [
      { url: "/assets/icon.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/icon.png", sizes: "48x48", type: "image/png" },
      { url: "/assets/icon.png", sizes: "96x96", type: "image/png" },
      { url: "/assets/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/assets/icon.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/assets/icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/assets/icon.png" }],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* TikTok Pixel */}
       <Script
  id="tiktok-pixel"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
(function(w,d,t){
  w.TiktokAnalyticsObject=t;
  var ttq=w[t]=w[t]||[];
  ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
  ttq.setAndDefer=function(t,e){
    t[e]=function(){
      t.push([e].concat(Array.prototype.slice.call(arguments,0)))
    }
  };
  for(var i=0;i<ttq.methods.length;i++){
    ttq.setAndDefer(ttq,ttq.methods[i])
  }
  ttq.load=function(e){
    var i="https://analytics.tiktok.com/i18n/pixel/events.js";
    var n=d.createElement("script");
    n.type="text/javascript";
    n.async=true;
    n.src=i+"?sdkid="+e+"&lib="+t;
    var a=d.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(n,a)
  };
  ttq.load("D5KKCRJC77U2LQ3ISQVG");
  ttq.page();
})(window,document,"ttq");
    `,
  }}
/>

      </head>

      <body
        className={`${fontPoppins.variable} ${Bounded.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
