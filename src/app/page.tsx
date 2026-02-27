import HeroSection from "@/components/sections/hero";
import Works from "@/components/sections/works";
import Partners from "@/components/sections/partners";
import Manifesto from "@/components/sections/manifesto";
import Strengths from "@/components/sections/strengths";
import SaigonSouls from "@/components/sections/saigon-souls";
import TeamSection from "@/components/sections/team";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <Works />
      <Partners />
      <Manifesto />
      <Strengths />
      <SaigonSouls />
      <TeamSection />
      <Footer />
    </div>
  );
}
