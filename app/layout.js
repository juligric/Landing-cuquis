import { Bagel_Fat_One, Quicksand } from "next/font/google";
import "./globals.css";

const bagelFatOne = Bagel_Fat_One({
  variable: "--font-bagel",
  subsets: ["latin"],
  weight: "400",
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Cuquis — Cookies artesanales",
  description: "Cookies artesanales, una por una. CABA y Nordelta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${bagelFatOne.variable} ${quicksand.variable}`}>
      <body>{children}</body>
    </html>
  );
}
