// layout.tsx ou RootLayout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/cartcontext";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sol e Art",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth h-full" lang="pt-br">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
