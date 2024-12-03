import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import 'atropos/css'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const rethinkSans = localFont({
  src: "./fonts/RethinkSans.ttf",
  variable: "--font-rethink-sans",
  weight: "100 400 900",
});

const sourceSerifPro = localFont({
  src: "./fonts/Source_Serif_4/SourceSerif4.ttf",
  variable: "--font-source-serif-pro",
  weight: "100 400 900",
});

const josefinSans = localFont({
  src: "./fonts/Josefin_Sans/JosefinSans.ttf",
  variable: "--font-josefin-sans",
  weight: "100 400 900",
});

export const metadata: Metadata = {
  title: "Sebastian's Portfolio",
  description: "By SebastianLb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${rethinkSans.variable} ${sourceSerifPro.variable} ${josefinSans.variable} antialiased scroll-bar`}
      >
        {children}
      </body>
    </html>
  );
}
