import { BookOpen, Car, Droplets } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface ServiceItem {
  id: string;
  label: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: "wudhu",
    label: "Wudhu Bersih",
    description:
      "Area wudhu dan toilet terawat, nyaman untuk jamaah pria dan wanita.",
  },
  {
    id: "parkir",
    label: "Parkir Luas",
    description:
      "Lahan parkir memadai untuk mobil dan motor, mudah diakses dari jalan utama.",
  },
  {
    id: "kajian",
    label: "Kajian Rutin",
    description:
      "Kajian harian dan pekanan yang terbuka untuk jamaah dari berbagai kalangan.",
  },
];

export function FacilitiesSection() {
  return (
    <section
      id="fasilitas"
      aria-labelledby="fasilitas-heading"
      className="relative"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3 text-center">
          <h2
            id="fasilitas-heading"
            className="text-balance text-3xl font-bold tracking-tight text-emerald-950"
          >
            Layanan Utama Masjid
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-700">
            Fokus pada pengalaman ibadah yang nyaman, rapi, dan mudah diakses
            untuk jamaah dari berbagai usia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            service={services[0]}
            icon={
              <Droplets
                className="h-10 w-10 text-emerald-700"
                strokeWidth={1.5}
              />
            }
          />
          <ServiceCard
            service={services[1]}
            icon={
              <Car className="h-10 w-10 text-emerald-700" strokeWidth={1.5} />
            }
          />
          <ServiceCard
            service={services[2]}
            icon={
              <BookOpen
                className="h-10 w-10 text-emerald-700"
                strokeWidth={1.5}
              />
            }
          />
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: ServiceItem;
  icon: React.ReactNode;
}

function ServiceCard({ service, icon }: ServiceCardProps) {
  return (
    <Card
      className="h-full border-slate-200 bg-white shadow-sm"
      data-aos="fade-up"
    >
      <CardHeader className="flex flex-col items-start gap-4 pb-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50">
          {icon}
        </div>
        <div>
          <CardTitle className="text-xl font-semibold text-emerald-950">
            {service.label}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg leading-relaxed text-slate-800">
          {service.description}
        </p>
      </CardContent>
    </Card>
  );
}

