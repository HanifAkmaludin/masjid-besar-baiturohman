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
            ? "bg-black/60 backdrop-blur-md border-b border-white/10"
            : "bg-gradient-to-b from-black/70 to-transparent"
        )}
      >
        <Link
          href="#top"
          className="flex items-center gap-3 text-lg font-bold tracking-tight text-white"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 ring-1 ring-emerald-400 text-xs font-bold text-emerald-400">
            MB
          </span>
          <span className="hidden sm:inline drop-shadow-md">
            Masjid Besar Baiturrahman
          </span>
          <span className="inline sm:hidden">Baiturrahman</span>
        </Link>

        <nav className="hidden items-center gap-8 text-[18px] font-medium text-white/90 md:flex">
          <Link
            href="#jadwal-shalat"
            className="transition-colors drop-shadow-sm hover:text-emerald-400"
          >
            Jadwal Shalat
          </Link>
          <Link
            href="#fasilitas"
            className="transition-colors drop-shadow-sm hover:text-emerald-400"
          >
            Fasilitas
          </Link>
          <Link
            href="#dokumentasi-kegiatan"
            className="transition-colors drop-shadow-sm hover:text-emerald-400"
          > 
            Dokumentasi Kegiatan
          </Link>
          <Link
            href="#dokumentasi-kegiatan"
            className="transition-colors drop-shadow-sm hover:text-emerald-400"
          >
            
          </Link>
        </nav>

        <Dialog>
          <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden text-sm ..." asChild>
  <a 
    href="https://maps.app.goo.gl/wcaUB7VnABfNWoom9" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Lokasi Masjid
  </a>
</Button>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-[#065f46] px-6 font-bold text-white shadow-lg transition-all hover:bg-[#044e3a]"
              >
                Dukung Program
              </Button>
            </DialogTrigger>
          </div>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                Infaq &amp; Sedekah Masjid Besar Baiturrahman
              </DialogTitle>
              <DialogDescription>
                Anda dapat mendukung program masjid melalui transfer ke
                rekening berikut:
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-lg text-emerald-900">
                <p className="font-semibold">BSI - 7123456789</p>
                <p className="text-emerald-800">a.n. DKM Baiturrahman</p>
              </div>
              <Button
                type="button"
                className="text-base"
                onClick={() => {
                  void navigator.clipboard.writeText("7123456789");
                }}
              >
                Salin Nomor Rekening
              </Button>
              <p className="text-lg text-slate-800">
                Mohon tambahkan kode unik{" "}
                <span className="font-semibold">001</span> di akhir nominal
                (contoh: <span className="font-semibold">Rp 100.001</span>)
                untuk memudahkan pencatatan.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}