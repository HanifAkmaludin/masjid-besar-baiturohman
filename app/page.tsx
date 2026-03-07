import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { PrayerTimesCard } from "@/components/prayer-times-card";
import { FacilitiesSection } from "@/components/facilities-section";
import { CommunityHighlightsSection } from "@/components/community-highlights";
import { CommunityContactSection } from "@/components/community-contact";
import { Footer } from "@/components/footer";
import { InstagramFeed } from "@/components/instagram-feed";

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

          <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <FacilitiesSection />
          </section>

          <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <CommunityHighlightsSection />
          </section>

          <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <CommunityContactSection />
          </section>  

          <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <InstagramFeed />
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}

