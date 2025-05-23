import { Inter, Metrophobic } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const metrophobic = Metrophobic({
  variable: "--font-metrophobic",
  subsets: ["latin"],
  weight: ["400"],
});

export const grotesk = localFont({
  src: [
    {
      path: "../../public/fonts/ClashGrotesk/ClashGrotesk-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashGrotesk/ClashGrotesk-Semibold.otf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-grotesk",
});

export const metadata = {
  title: "Parallax Website",
  description:
    "A high-performance landing page built with Next.js and animated using GSAP ScrollTrigger.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${inter.variable} ${metrophobic.variable} ${grotesk.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
