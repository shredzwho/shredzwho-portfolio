import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreyas | Portfolio",
  description: "Portfolio of Shreyas — Tech-savvy developer and Computer Science student at Jain University.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-black text-white flex flex-col min-h-screen`}>
      

        <main className="grow w-full px-6 md:px-12 lg:px-24">
          {children}
        </main>

        <footer className="w-full px-6 md:px-12 lg:px-24 py-6 border-t border-gray-800 text-gray-400 text-sm text-center">
          © {new Date().getFullYear()} Shreyas. All rights reserved.
        </footer>
      </body>
    </html>
  );
}