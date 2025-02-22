import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "@/styles/globals.css"
import { Header } from "@/components/Header";
import { ContactBar } from "@/components/ContactBar";
import { SloganBar } from "@/components/SloganBar";
import { Footer } from "@/components/Footer";

const getBricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["200", "300", "400","500","600", "700"],
});

export const metadata: Metadata = {
  title: "Banaadir Goverment Services",
  description: "Maamulka Gobolka Banaadir iyo D/Hoose Ee Xamar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={getBricolage.className}>
        <ContactBar />
        <Header />
        <SloganBar />
        <main className="min-h-screen">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
