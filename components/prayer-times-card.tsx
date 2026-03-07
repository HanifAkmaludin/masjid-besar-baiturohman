import { Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export interface PrayerTime {
  name: string;
  time: string;
}

export interface PrayerSchedule {
  dateLabel: string;
  location: string;
  source: string;
  times: PrayerTime[];
}

interface AladhanResponse {
  data?: {
    date?: {
      readable?: string;
      hijri?: {
        date?: string;
      };
    };
    meta?: {
      timezone?: string;
      method?: {
        name?: string;
      };
    };
    timings?: {
      Fajr?: string;
      Dhuhr?: string;
      Asr?: string;
      Maghrib?: string;
      Isha?: string;
    };
  };
}

const FALLBACK_SCHEDULE: PrayerSchedule = {
  dateLabel: "Hari ini · Bandung (jadwal ilustratif)",
  location: "Bandung, Jawa Barat",
  source: "Perkiraan waktu shalat ilustratif. Integrasi API akan diperbarui.",
  times: [
    { name: "Subuh", time: "04:28" },
    { name: "Dzuhur", time: "11:58" },
    { name: "Ashar", time: "15:18" },
    { name: "Maghrib", time: "17:58" },
    { name: "Isya", time: "19:07" },
  ],
};

async function getPrayerSchedule(): Promise<PrayerSchedule> {
  try {
    const url =
      "https://api.aladhan.com/v1/timingsByCity?city=Bandung&country=Indonesia&method=20";

    const res = await fetch(url, {
      // Revalidate every 60 minutes
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return FALLBACK_SCHEDULE;
    }

    const json = (await res.json()) as AladhanResponse;
    const timings = json.data?.timings;

    if (!timings) {
      return FALLBACK_SCHEDULE;
    }

    const readable = json.data?.date?.readable ?? "Hari ini";
    const hijriDate = json.data?.date?.hijri?.date;
    const methodName = json.data?.meta?.method?.name ?? "Aladhan";

    const dateLabel = hijriDate
      ? `${readable} · ${hijriDate} H`
      : readable;

    const schedule: PrayerSchedule = {
      dateLabel,
      location: "Bandung, Jawa Barat",
      source: `Waktu shalat berdasarkan ${methodName} (metode KEMENAG - Indonesia melalui Aladhan).`,
      times: [
        { name: "Subuh", time: timings.Fajr ?? "-" },
        { name: "Dzuhur", time: timings.Dhuhr ?? "-" },
        { name: "Ashar", time: timings.Asr ?? "-" },
        { name: "Maghrib", time: timings.Maghrib ?? "-" },
        { name: "Isya", time: timings.Isha ?? "-" },
      ],
    };

    return schedule;
  } catch {
    return FALLBACK_SCHEDULE;
  }
}

export async function PrayerTimesCard() {
  const schedule = await getPrayerSchedule();

  return (
    <section id="jadwal-shalat" aria-label="Jadwal Shalat Hari Ini" className="w-full">
      <Card className="border-none bg-white shadow-sm overflow-hidden" data-aos="fade-up">
        {/* Header Section: Dibuat satu kolom di mobile, dua kolom rapi di desktop */}
        <div className="p-6 pb-0 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-emerald-700 mb-1">
              <Clock className="h-5 w-5" strokeWidth={2} />
              <span className="text-sm font-bold uppercase tracking-wider">Waktu Shalat</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              Jadwal Hari Ini
            </h2>
            <p className="text-slate-500 font-medium mt-1">
              {schedule.dateLabel}
            </p>
          </div>
          
          <div className="text-left md:text-right border-l-2 md:border-l-0 md:border-r-2 border-emerald-100 pl-4 md:pl-0 md:pr-4">
            <p className="text-sm font-bold text-emerald-800 uppercase tracking-tight">
              {schedule.location}
            </p>
            <p className="text-xs text-slate-400 max-w-[280px] md:ml-auto">
              Metode: KEMENAG RI
            </p>
          </div>
        </div>

        {/* Times Grid: Grid yang lebih konsisten ukurannya */}
        <CardContent className="p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {schedule.times.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50/50 p-4 transition-colors hover:bg-emerald-50/50 hover:border-emerald-100"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  {item.name}
                </p>
                <p className="text-2xl font-bold text-slate-900 mt-1">
                  {item.time}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400 italic">
            <p>Data otomatis dari Aladhan API</p>
            <p>Zona Waktu: WIB</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}