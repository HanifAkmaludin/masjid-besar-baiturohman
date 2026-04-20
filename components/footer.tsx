import Link from "next/link";
import { Instagram, MapPin, PhoneCall, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 bg-[#065f46] text-emerald-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Profil */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Profil</h3>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-700 text-sm font-bold">
                MB
              </div>
              <div>
                <p className="text-lg font-semibold">
                  Masjid Besar Baiturrahman
                </p>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-emerald-100">
              Jl. Patrakomala no.31A, Kel. Merdeka, Kec.Sumur Bandung, Kota Bandung — masjid besar yang menjadi pusat
              ibadah dan aktivitas umat.
            </p>
          </div>

          {/* Layanan */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Layanan</h3>
            <nav className="space-y-2 text-lg">
              <FooterLink href="#jadwal-shalat">Jadwal Shalat</FooterLink>
              <FooterLink href="#kepengurusan">Kepengurusan</FooterLink>
              <FooterLink href="#fasilitas">Fasilitas &amp; Layanan</FooterLink>
              <FooterLink href="#jadwal-kegiatan">Jadwal Kegiatan</FooterLink>
            </nav>
          </div>

          {/* Kontak */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-2 text-lg">
              <div className="flex items-center gap-3">
                <PhoneCall className="h-6 w-6 text-emerald-200" />
                <span>WhatsApp DKM: +62 858-7105-3704</span>
              </div>
              {/* <p className="text-lg text-emerald-100">
                Layanan Ambulans &amp; Kursi Roda diatur melalui koordinasi
                langsung dengan petugas DKM.
              </p> */}
            </div>
          </div>

          {/* Lokasi */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Lokasi</h3>
            <p className="text-lg text-emerald-100">
              Masjid berada di kawasan strategis Kota Bandung, mudah dijangkau
              kendaraan pribadi maupun umum.
            </p>
            <Link
              href="https://maps.google.com/?q=Masjid+Beser+Baiturrahman+Bandung"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-3 text-lg hover:text-emerald-200"
            >
              <MapPin className="h-6 w-6 text-emerald-200" />
              <span>Buka di Google Maps</span>
            </Link>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href="https://www.instagram.com/reel/DVglbKmicW_/?igsh=MXY2YnZ0dXpldnd5cw=="
                target="_blank"
                aria-label="Instagram Masjid Besar Baiturrahman"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 hover:bg-emerald-600"
              >
                <Instagram className="h-7 w-7" strokeWidth={1.5} />
              </Link>
              {/* <Link
                href="#"
                aria-label="YouTube Masjid Besar Baiturrahman"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-700 hover:bg-emerald-600"
              >
                <Youtube className="h-7 w-7" strokeWidth={1.5} />
              </Link> */}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-emerald-800/80 pt-4 text-center text-sm text-emerald-100/80">
          <p>
            © {new Date().getFullYear()} Masjid Besar Baiturrahman Bandung.
            Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="block hover:text-emerald-200"
    >
      {children}
    </Link>
  );
}

