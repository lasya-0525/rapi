import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Tech Innovation Consulting | RapinnoTech",
    description: "Strategic advisory to help organizations navigate digital transformation.",
};

export default function TechInnovationConsultingPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Tech Innovation Consulting"
                category="Application Engineering"
                description="Strategic advisory to help organizations navigate digital transformation."
                elaboratedText="In an era of constant technological upheaval, strategic clarity is essential. Our Tech Innovation Consulting service helps organizations identify emerging opportunities and navigate complex digital transformations. We provide high-level advisory on product strategy, IT management, and legacy modernization, ensuring your technology investments are aligned with your long-term business objectives. We transform technology from a cost center into a strategic engine for growth."
                features={[
                    "Digital Transformation Strategy",
                    "Legacy System Modernization",
                    "IT Infrastructure Audits",
                    "Innovation Labs & Prototyping",
                    "Technology Trend Analysis"
                ]}
                benefits={[
                    "Clear Digital Roadmap",
                    "Minimized Transformation Risks",
                    "Optimized IT Spending",
                    "Increased Business Agility"
                ]}
                imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                iconName="Activity"
            />
        </main>
    );
}
