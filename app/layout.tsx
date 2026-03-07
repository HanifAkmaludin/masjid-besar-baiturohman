import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AOSProvider } from "@/components/aos-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masjid Besar Baiturrahman Bandung",
  description:
    "Pusat peradaban dan ibadah umat dengan fasilitas modern, jadwal shalat, dan ekosistem digital yang profesional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={cn(
          "min-h-screen bg-slate-950 text-foreground antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >
        <AOSProvider>{children}</AOSProvider>
      </body>
    </html>
  );
}

