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
        className={`${inter.className} bg-black text-white flex flex-col min-h-screen`}
      >
        <header className="w-full px-6 md:px-12 lg:px-24 py-4 flex justify-center items-center border-b border-gray-800 relative">
          <nav className="hidden md:flex gap-8 text-gray-300">
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          <button className="md:hidden text-gray-300 hover:text-white transition-colors absolute right-6">
            ☰
          </button>
        </header>

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