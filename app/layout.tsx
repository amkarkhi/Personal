import NavBar from "@/components/visitcard/views/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainView from "@/components/visitcard/views/MainView";
import BinaryView from "@/components/visitcard/views/BinaryView";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amin Karkhi",
  description: "Personal Information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="h-screen w-screen relative overflow-hidden">
          <MainView>
            {children}
            <BinaryView />
          </MainView>
        </section>
        <NavBar />
      </body>
    </html>
  );
}
