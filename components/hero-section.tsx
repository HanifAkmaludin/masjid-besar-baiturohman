import Image from "next/image";
import { Button } from "@/components/ui/button";
import masjidImage from "@/assets/masjid-baiturrahman.jpg"; // Sesuaikan path jika perlu

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0">
        <Image
          src={masjidImage}
          alt="Masjid Besar Baiturrahman Bandung"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-20 pt-32 sm:px-6 lg:px-8">
        <div
          className="max-w-3xl space-y-6 text-left"
          data-aos="fade-up"
        >
          <p className="inline-flex items-center rounded-full bg-emerald-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100 ring-1 ring-emerald-400/70">
            Masjid Besar Baiturrahman · Bandung
          </p>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-7xl">
            Pusat Peradaban &amp;{" "}
            <span className="text-emerald-300">Ibadah Umat</span>
          </h1>
          <p className="max-w-xl text-balance text-lg text-emerald-50/90 drop-shadow-lg">
            Masjid yang nyaman, bersih, dan mudah diakses — menjadi rumah ibadah
            dan pusat kegiatan umat di tengah Kota Bandung.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
            <Button size="lg" className="w-full sm:w-auto text-base">
              Lihat Jadwal Shalat Hari Ini
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full border-emerald-200/80 bg-white/5 text-emerald-50 sm:w-auto"
            >
              Jelajahi Fasilitas Masjid
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

