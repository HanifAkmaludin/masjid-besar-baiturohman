import Image from "next/image";
import keg1 from "@/assets/kegiatan-1.jpeg";
import keg2 from "@/assets/kegiatan-2.jpeg";
import keg3 from "@/assets/kegiatan-3.jpeg";
import keg4 from "@/assets/kegiatan-4.jpeg";
import keg5 from "@/assets/kegiatan-5.jpeg";
import keg6 from "@/assets/kegiatan-6.jpeg";
import keg7 from "@/assets/kegiatan-7.jpeg";
import keg8 from "@/assets/kegiatan-8.jpeg";
import keg9 from "@/assets/kegiatan-9.jpeg";
import keg10 from "@/assets/kegiatan-10.jpeg";

const images = [
  keg1,
  keg2,
  keg3,
  keg4,
  keg5,
  keg6,
  keg7,
  keg8,
  keg9,
  keg10,
];

export function FacilitiesGallerySection() {
  return (
    <div id="fasilitas" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Fasilitas &amp; Kegiatan
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Intip berbagai fasilitas kenyamanan serta ragam kegiatan sosial dan 
          keagamaan di Masjid Besar Baiturrahman.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-2xl bg-slate-100 shadow-sm ring-1 ring-slate-900/5 transition-all duration-300 hover:shadow-xl hover:ring-slate-900/10 ${
              index === 0 || index === 7 ? "md:col-span-2 md:row-span-2" : ""
            }`}
          >
            <div
              className={`relative w-full ${
                index === 0 || index === 7
                  ? "aspect-square md:aspect-auto md:h-full min-h-[300px]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={img}
                alt={`Fasilitas Masjid Baiturrahman ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
