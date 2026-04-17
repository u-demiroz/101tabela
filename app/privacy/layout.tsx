import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — 101 Tabela",
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
