import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainHeader from "@/components/main-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "GymMap Nis",
  description: "Vodic kroz teretane u Nisu.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
