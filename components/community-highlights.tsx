import { MapPin, Sparkles, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface HighlightItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const highlights: HighlightItem[] = [
  {
    id: "cleanliness",
    title: "Sangat Bersih",
    description:
      "Jamaah menilai area masjid, wudhu, dan toilet selalu terjaga kebersihannya.",
    icon: <Sparkles className="h-10 w-10 text-emerald-700" strokeWidth={1.5} />,
  },
  {
    id: "comfort",
    title: "Nyaman Beribadah",
    description:
      "Suasana tenang, karpet rapi, dan fasilitas ibadah lengkap membuat jamaah betah.",
    icon: <Users className="h-10 w-10 text-emerald-700" strokeWidth={1.5} />,
  },
  {
    id: "location",
    title: "Lokasi Strategis",
    description:
      "Berada di tepi jalan utama dengan area parkir yang cukup untuk mobil dan motor.",
    icon: <MapPin className="h-10 w-10 text-emerald-700" strokeWidth={1.5} />,
  },
];

export function CommunityHighlightsSection() {
  return (
    <section
      aria-labelledby="community-highlights-heading"
      className="relative"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <h2
            id="community-highlights-heading"
            className="text-balance text-3xl font-bold tracking-tight text-emerald-950"
          >
            Community Highlights
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-700">
            Ringkasan ulasan jamaah: masjid yang bersih, nyaman, dan mudah
            dijangkau di tengah Kota Bandung.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <Card
              key={item.id}
              className="h-full border-slate-200 bg-white shadow-sm"
              data-aos="fade-up"
            >
              <CardHeader className="flex flex-col items-start gap-4 pb-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
                  {item.icon}
                </div>
                <CardTitle className="text-xl font-semibold text-emerald-950">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-slate-800">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

