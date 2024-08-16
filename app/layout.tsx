import type { Metadata } from "next";
import "./styles/globals.css";
import { ScrollProvider } from "./contexts/ScrollContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "bosch-portfolio",
  description: "Record of bosch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-QPHQ3FCGRF"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-QPHQ3FCGRF');
          `}
        </Script>
      </head>
      <body>
        <ScrollProvider>{children}</ScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
