"use client";

import Image, { StaticImageData } from "next/image";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

import kegiatan1 from "../assets/kegiatan-1.jpeg";
import kegiatan2 from "../assets/kegiatan-2.jpeg";
import kegiatan3 from "../assets/kegiatan-3.jpeg";
import kegiatan4 from "../assets/kegiatan-4.jpeg";
import kegiatan5 from "../assets/kegiatan-5.jpeg";
import kegiatan6 from "../assets/kegiatan-6.jpeg";
import kegiatan7 from "../assets/kegiatan-7.jpeg";
import kegiatan8 from "../assets/kegiatan-8.jpeg";
import kegiatan9 from "../assets/kegiatan-9.jpeg";
import kegiatan10 from "../assets/kegiatan-10.jpeg";
import kegiatan11 from "../assets/kegiatan-11.jpeg";

interface InstagramPost {
  id: number;
  imageUrl: string | StaticImageData;
  alt: string;
}

const INSTAGRAM_POSTS: InstagramPost[] = [
  { id: 1, imageUrl: kegiatan1, alt: "Kajian Rutin Baiturrahman" },
  { id: 2, imageUrl: kegiatan2, alt: "Kegiatan Sosial Masyarakat" },
  { id: 3, imageUrl: kegiatan3, alt: "Kajian Muslimah" },
  { id: 4, imageUrl: kegiatan4, alt: "Fasilitas Wudhu Bersih" },
  { id: 5, imageUrl: kegiatan5, alt: "Kebersamaan Jamaah" },
  { id: 6, imageUrl: kegiatan6, alt: "Pendidikan Al-Quran" },
  { id: 7, imageUrl: kegiatan7, alt: "Diseminasi Program Dakwah" },
  { id: 8, imageUrl: kegiatan8, alt: "Gotong Royong Kebersihan" },
  { id: 9, imageUrl: kegiatan9, alt: "Pendidikan Al-Quran" },
  { id: 10, imageUrl: kegiatan10, alt: "Diseminasi Program Dakwah" },
  { id: 11, imageUrl: kegiatan11, alt: "Gotong Royong Kebersihan" },
];

export function InstagramFeed() {
  return (
    <section id="dokumentasi-kegiatan" className="py-24 bg-white overflow-hidden">
      <div className="w-full px-6">
        <div className="mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl !text-opacity-100">
            Dokumentasi Kegiatan
          </h2>
          <p className="mt-4 text-[18px] text-slate-600 !text-opacity-100 max-w-2xl leading-relaxed">
            Melihat lebih dekat aktivitas, program dakwah, dan kebersamaan jamaah di Masjid Besar Baiturrahman Bandung.
          </p>
        </div>

        {/* Manual Grid - Hemat Token & Kuota API */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {INSTAGRAM_POSTS.map((post, index) => (
            <div
              key={post.id}
              className="group relative aspect-square overflow-hidden rounded-xl border border-slate-100 bg-slate-50"
              data-aos="fade-up"
              data-aos-delay={index * 50} // Staggered animation
            >
              <Image
                src={post.imageUrl}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center" data-aos="fade-up">
          <Button 
            variant="outline"
            className="border-[#065f46] text-slate-900 hover:bg-[#065f46] hover:text-white font-semibold px-8 py-6 rounded-full text-lg shadow-sm transition-all"
            asChild
          >
            <a href="https://www.instagram.com/baiturrahman_bandung/" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Ikuti di Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}