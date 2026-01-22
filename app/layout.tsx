import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EGO - Tech Test",
  description: "EGO - Tech Test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={montserrat.className}>
        <Navbar />
        <main>{children}</main>
        <footer>
          <div className="w-full h-20 flex items-center justify-center bg-black text-white">
            <p>2026 - EGO Tech Test</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
