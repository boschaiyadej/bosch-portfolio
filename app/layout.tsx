import type { Metadata } from "next";
import "./styles/globals.css";
import { ScrollProvider } from "./contexts/ScrollContext";

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
      <body>
        <ScrollProvider>{children}</ScrollProvider>
      </body>
    </html>
  );
}
