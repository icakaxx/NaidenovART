import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "NaidenovART - Рисуване по всичко",
  description: "От платното до уличните стени и текстила. Изкуството е начин на живот, а не просто хоби.",
  icons: {
    icon: '/favicon1.png',
    apple: '/favicon1.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bg" className={`${montserrat.variable} ${playfairDisplay.variable}`}>
      <body className="bg-neutral-900 text-white antialiased selection:bg-blue-500 selection:text-white">{children}</body>
    </html>
  );
}
