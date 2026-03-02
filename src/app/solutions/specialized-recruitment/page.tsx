import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Specialized Recruitment | RapinnoTech",
    description: "Sourcing performance-ready technical resources for agile global teams.",
};

export default function SpecializedRecruitmentPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Specialized Recruitment"
                category="Rapinno Adaptive Sourcing"
                description="Sourcing performance-ready technical resources for agile global teams."
                elaboratedText="Generic recruitment fails when it comes to high-level engineering. Our Specialized Recruitment service focuses exclusively on identifying and securing performance-ready technical talent for your permanent team. Using our deep network within the technological hubs of India and North America, we source candidates who possess both the specific technical depth and the agile mindset needed to succeed in modern product environments. We find the engineers that other recruiters can't."
                features={[
                    "Deep Technical Vetting",
                    "Global Hub Talent Sourcing",
                    "Agile Personality Profiling",
                    "Strategic Hiring Advisory",
                    "High-level Engineering Focus"
                ]}
                benefits={[
                    "Superior Talent Quality",
                    "Long-term Technical Depth",
                    "Optimized Hiring Velocity",
                    "Technical Cultural Fit"
                ]}
                imageUrl="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                iconName="Search"
            />
        </main>
    );
}
