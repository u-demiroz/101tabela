import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "101 Tabela — 101 Kart Oyunu Puan Takip Uygulaması",
  description: "101 kart oyununu daha eğlenceli hale getir. Puanları takip et, turu yönet, oyunu kesintisiz sürdür.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
