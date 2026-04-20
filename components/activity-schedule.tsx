import Image from "next/image";
import kegiatanImage from "@/assets/kegiatan.jpeg";

export function ActivityScheduleSection() {
  return (
    <div id="jadwal-kegiatan" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kiri: Deskripsi */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Jadwal Kegiatan
          </h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Ikuti terus pembaruan informasi kajian ilmiah dan juga kegiatan rutinan yang secara konsisten 
              diselenggarakan di lingkungan Masjid Besar Baiturrahman dalam rangka untuk terus memakmurkan syiar Islam.
            </p>
            <p>
              Beragam program rutin kami selenggarakan mulai dari Majelis Ta'lim, 
              pendalaman MTKD, Kajian Fiqih, Yasinan, hingga Kajian Al-Qur'an bakda Subuh bersama asatidz 
              yang berkompeten. Mari luangkan waktu untuk menuntut ilmu dan mempererat tali silaturahmi bersama.
            </p>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="relative w-full overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-900/10 transition-transform duration-300 hover:scale-[1.02]">
          <div className="p-3 sm:p-5">
            <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={kegiatanImage}
                alt="Jadwal Kegiatan Masjid Besar Baiturrahman"
                fill
                className="object-contain opacity-90 transition-opacity hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
