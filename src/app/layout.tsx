import type { Metadata } from "next";
import { Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata: Metadata = {
  title: "Tuer Garment | Clothing Manufacturer in China",
  description:
    "Leading women's clothing manufacturer in Guangzhou, China. We produce high-quality women's clothing for brands worldwide. Low MOQ. Friendly to startups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody className={`${roboto.variable} ${openSans.variable}`}>
        {children}
      </ClientBody>
    </html>
  );
}
