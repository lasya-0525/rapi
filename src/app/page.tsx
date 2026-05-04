import Loader from "@/components/sections/loader";
import HeroSection from "@/components/sections/hero";
import Works from "@/components/sections/works";
import Partners from "@/components/sections/partners";
import Manifesto from "@/components/sections/manifesto";
import Strengths from "@/components/sections/strengths";
import MacbookShowcase from "@/components/sections/macbook-showcase";
import SaigonSouls from "@/components/sections/saigon-souls";
import Testimonials from "@/components/sections/testimonials";
import Counters from "@/components/sections/counters";
import GlobalPresenceMap from "@/components/sections/global-presence";
import CallToAction from "@/components/sections/call-to-action";

export default function Home() {
  return (
    <>
      <Loader />
      <div className="flex flex-col min-h-screen gap-3 px-3 md:px-5 lg:px-8 py-3">

        {/* Hero */}
        <div className="section-glass overflow-hidden">
          <HeroSection />
        </div>

        {/* Works / Capabilities */}
        <div className="section-glass overflow-hidden">
          <Works />
        </div>

        {/* Partners */}
        <div className="section-glass overflow-hidden">
          <Partners />
        </div>

        {/* Manifesto */}
        <div className="section-glass overflow-hidden">
          <Manifesto />
        </div>

        {/* Strengths — sticky scroll, no overflow-hidden */}
        <div className="section-glass">
          <Strengths />
        </div>

        {/* MacBook Showcase */}
        <div className="section-glass overflow-hidden">
          <MacbookShowcase />
        </div>

        {/* Testimonials */}
        <div className="section-glass overflow-hidden">
          <Testimonials />
        </div>

        {/* Global Presence Map */}
        <div className="section-glass overflow-hidden">
          <GlobalPresenceMap />
        </div>

        {/* Counters */}
        <div className="section-glass overflow-hidden">
          <Counters />
        </div>

        {/* Call To Action */}
        <div className="section-glass overflow-hidden">
          <CallToAction />
        </div>

        {/* Resources & Insights */}
        <div className="section-glass overflow-hidden">
          <SaigonSouls />
        </div>

      </div>
    </>
  );
}
