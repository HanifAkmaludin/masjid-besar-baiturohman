import { Ambulance, Accessibility } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function CommunityContactSection() {
  return (
    <section
      id="layanan-komunitas"
      aria-labelledby="layanan-komunitas-heading"
      className="relative"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <h2
            id="layanan-komunitas-heading"
            className="text-balance text-3xl font-bold tracking-tight text-emerald-950"
          >
            Layanan Komunitas
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-700">
            Hubungi DKM untuk kebutuhan darurat atau pendampingan jamaah yang
            memerlukan bantuan khusus.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            className="border-slate-200 bg-white shadow-sm"
            data-aos="fade-up"
          >
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                <Ambulance
                  className="h-10 w-10 text-emerald-700"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <CardTitle className="text-2xl font-semibold text-emerald-950">
                  Layanan Ambulans
                </CardTitle>
                <p className="mt-1 text-lg text-slate-700">
                  Koordinasi manual melalui WhatsApp DKM untuk kebutuhan
                  darurat jamaah.
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <Button
                asChild
                size="lg"
                className="text-base"
              >
                <a
                  href="https://wa.me/6281234567890?text=Assalamu%27alaikum%2C%20saya%20membutuhkan%20informasi%20Layanan%20Ambulans%20Masjid%20Besar%20Baiturrahman."
                  target="_blank"
                  rel="noreferrer"
                >
                  Hubungi via WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card
            className="border-slate-200 bg-white shadow-sm"
            data-aos="fade-up"
          >
            <CardHeader className="flex flex-row items-start gap-4 pb-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                <Accessibility
                  className="h-10 w-10 text-emerald-700"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <CardTitle className="text-2xl font-semibold text-emerald-950">
                  Kursi Roda & Pendampingan
                </CardTitle>
                <p className="mt-1 text-lg text-slate-700">
                  Bantuan kursi roda dan pendampingan lansia atau jamaah
                  disabilitas, diatur manual oleh petugas DKM.
                </p>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <Button
                asChild
                size="lg"
                className="text-base"
              >
                <a
                  href="https://wa.me/6281234567890?text=Assalamu%27alaikum%2C%20saya%20membutuhkan%20bantuan%20Kursi%20Roda%20%2F%20Pendampingan%20di%20Masjid%20Besar%20Baiturrahman."
                  target="_blank"
                  rel="noreferrer"
                >
                  Minta Bantuan via WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

