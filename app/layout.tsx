import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Habib YT - Auto Delivery",
  description: "বাংলাদেশের দ্রুত ও নিরাপদ গেম টপ-আপ সার্ভিস",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body className="bg-gradient-to-b from-gray-900 to-black text-white">
        {children}
      </body>
    </html>
  );
}
