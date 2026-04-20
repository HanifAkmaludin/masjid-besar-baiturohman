import Image from "next/image";
import baganImage from "@/assets/bagan-kepengurusan.jpeg"; // Pastikan ejaannya benar

export function ManagementStructureSection() {
  return (
    <div id="kepengurusan" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Kiri: Deskripsi */}
        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Susunan Kepengurusan
          </h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              Struktur organisasi dan jajaran pengurus Masjid Besar Baiturrahman
              yang berdedikasi melayani umat. Kepengurusan ini dibentuk dengan tujuan untuk mengelola
              seluruh operasional dan kegiatan masjid agar berjalan dengan lebih terstruktur dan profesional.
            </p>
            <p>
              Kami senantiasa berkomitmen memberikan pelayanan yang terbaik
              dalam mengakomodasi kegiatan ibadah maupun menjembatani kebutuhan sosial masyarakat
              sekitar melalui sistem kepengurusan yang transparan, rukun, dan amanah.
            </p>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-900/10 transition-transform duration-300 hover:scale-[1.02]">
          <div className="p-2 sm:p-4 bg-slate-50">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100">
              <Image
                src={baganImage}
                alt="Bagan Susunan Kepengurusan Masjid"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
