"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import logo from "@/assets/logo-masjid.png";
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full transition-all duration-300">
      <div
        className={cn(
          "flex w-full items-center justify-between px-6 py-5 text-white transition-all duration-300",
          isScrolled
            ? "bg-white/60 backdrop-blur-md border-b border-white/10 text-black"
            : "bg-gradient-to-b from-black/70 to-transparent"
        )}
      >
        <Link
          href="#top"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-white"
        >
            <Image src={logo} alt="Masjid Besar Baiturrahman" width={150} height={180} />
        </Link>

        <nav className="hidden items-center gap-8 text-[18px] font-medium text-white/90 md:flex">
          <Link
            href="#jadwal-shalat"
            className={cn("transition-colors drop-shadow-sm hover:text-emerald-400", isScrolled ? "text-black" : "text-white")}
          >
            Jadwal Shalat
          </Link>
          <Link
            href="#kepengurusan"
            className={cn("transition-colors drop-shadow-sm hover:text-emerald-400", isScrolled ? "text-black" : "text-white")}
          >
            Kepengurusan
          </Link>
          <Link
            href="#fasilitas"
            className={cn("transition-colors drop-shadow-sm hover:text-emerald-400", isScrolled ? "text-black" : "text-white")}
          >
            Fasilitas
          </Link>
          <Link
            href="#jadwal-kegiatan"
            className={cn("transition-colors drop-shadow-sm hover:text-emerald-400", isScrolled ? "text-black" : "text-white")}
          > 
            Jadwal Kegiatan
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button size="sm" className="hidden text-sm text-white" asChild>
            <a 
              href="https://maps.app.goo.gl/wcaUB7VnABfNWoom9" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Lokasi Masjid
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}