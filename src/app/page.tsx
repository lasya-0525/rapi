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
      <div className="flex flex-col min-h-screen">
        <HeroSection />
        <Works />
        <Partners />
        <Manifesto />
        <Strengths />
        <MacbookShowcase />
        <Testimonials />
        <GlobalPresenceMap />
        <Counters />
        <CallToAction />
        <SaigonSouls />
      </div>
    </>
  );
}
