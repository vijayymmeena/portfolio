import "./globals.css";
import "./themes.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Bottombar from "@/components/bottom-bar";
import Explorer from "@/components/explorer";
import Sidebar from "@/components/sidebar";
import TabBar from "@/components/tab-bar";
import TitleBar from "@/components/title-bar";

import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vijay Meena",
  description: "A person who uses computers every day to innovate new things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TitleBar />
        <div className={styles.main}>
          <Sidebar />
          <Explorer />
          <div className="w-full">
            <TabBar />
            <main id="main-editor" className={styles.content}>
              {children}
            </main>
          </div>
        </div>
        <Bottombar />
      </body>
    </html>
  );
}
