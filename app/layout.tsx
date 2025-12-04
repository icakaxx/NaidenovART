import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NaidenovART - Automotive Art & Custom Design",
  description: "Professional automotive artist specializing in car illustrations, custom car painting, wall murals, helmet designs, and transparent occasion messages.",
  keywords: "automotive art, car painting, custom car design, helmet painting, wall murals, NaidenovART",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

