import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Innovative Product Development | RapinnoTech",
    description: "End-to-end product engineering from conceptualization to global scale.",
};

export default function InnovativeProductDevPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Innovative Product Development"
                category="Application Engineering"
                description="End-to-end product engineering from conceptualization to global scale."
                elaboratedText="We don't just build software; we engineer products that disrupt industries. Our Innovative Product Development service partners with startups and enterprises to navigate the entire product lifecycle. From initial roadmapping and brand building to full-scale engineering and maintenance, we ensure your product is built on a foundation of innovation. We specialize in creating unique user experiences that drive engagement and long-term loyalty."
                features={[
                    "Product Strategy & Roadmapping",
                    "User Research & UX Design",
                    "Full-cycle Product Engineering",
                    "Brand Identity Design",
                    "Future-proof Technology Stack"
                ]}
                benefits={[
                    "User-Centric Innovation",
                    "Sustainable Product Growth",
                    "Competitive Market Advantage",
                    "End-to-End Delivery Assurance"
                ]}
                imageUrl="https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2672&auto=format&fit=crop"
                iconName="Rocket"
            />
        </main>
    );
}
