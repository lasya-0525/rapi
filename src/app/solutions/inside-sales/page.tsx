import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Inside Sales | RapinnoTech",
    description: "Cold calling and email strategies targeting key global decision-makers.",
};

export default function InsideSalesPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Inside Sales"
                category="Rapinno Marketing 360"
                description="Cold calling and email strategies targeting key global decision-makers."
                elaboratedText="Identifying and reaching key decision-makers is the hardest part of the B2B sales cycle. Our Inside Sales service provides organizations with an elite team of sales professionals who specialize in outbound outreach. Using data-driven cold calling and targeted email strategies, we open doors and build pipelines for your internal sales team. We handle the heavy lifting of prospecting and initial qualification, allowing your closers to focus on high-value conversations."
                features={[
                    "Targeted Global Prospecting",
                    "Cold Outreach Orchestration",
                    "Initial Lead Qualification",
                    "Appointment Setting Services",
                    "CRM Enrichment & Strategy"
                ]}
                benefits={[
                    "Predictable Sales Pipeline",
                    "Access to Top Decision Makers",
                    "Optimized Sales Labor Focus",
                    "Continuous Market Presence"
                ]}
                imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop"
                iconName="Phone"
            />
        </main>
    );
}
