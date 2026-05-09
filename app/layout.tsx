import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import CustomElement from "@/components/common/custom-element";
import Footer from "@/components/layout/footer";

const poppins = Poppins({
  variable: "--poppins-font",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const roboto = Roboto({ variable: "--roboto-font" });

export const metadata: Metadata = {
  title: "Solar Solution Landing Page",
  description: "Created By Serkan Afşar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <CustomElement as="main">{children}</CustomElement>
        <Footer />
      </body>
    </html>
  );
}
