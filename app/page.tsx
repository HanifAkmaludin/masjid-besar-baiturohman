import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PrayerTimesCard } from "@/components/prayer-times-card";
import { ManagementStructureSection } from "@/components/management-structure";
import { FacilitiesGallerySection } from "@/components/facilities-gallery";
import { ActivityScheduleSection } from "@/components/activity-schedule";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <HeroSection />

        <div className="bg-white text-slate-900">
          <div className="relative -mt-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <PrayerTimesCard />
            </div>
          </div>

          <section className="bg-slate-50/50 py-24 lg:py-32">
            <ManagementStructureSection />
          </section>

          <section className="py-24 lg:py-32">
            <FacilitiesGallerySection />
          </section>

          <section className="bg-slate-50/50 py-24 lg:py-32">
            <ActivityScheduleSection />
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}

