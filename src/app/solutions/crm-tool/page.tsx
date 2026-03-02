import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "CRM Tool | RapinnoTech",
    description: "Lead discovery and sales pipeline dashboard for measurable business growth.",
};

export default function CRMToolPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="CRM Tool"
                category="Rapinno Marketing 360"
                description="Lead discovery and sales pipeline dashboard for measurable business growth."
                elaboratedText="Our Marketing 360 CRM is not just a database; it's a sales acceleration engine. We provide a unified dashboard that visualizes the entire customer journey, from initial lead discovery to final conversion and retention. With integrated lead tracking, automated follow-ups, and advanced sales analytics, we help your marketing and sales teams align their efforts and focus on the opportunities with the highest probability of closing. We provide the data-driven clarity needed to scale your revenue."
                features={[
                    "Unified Lead Discovery",
                    "Visual Sales Pipeline",
                    "Automated Follow-up Tasks",
                    "Performance KPIs & Tracking",
                    "Third-party App Integration"
                ]}
                benefits={[
                    "Accelerated Sales Velocity",
                    "Improved Marketing-Sales Link",
                    "Eliminated Lead Leakage",
                    "Clear ROI Visualization"
                ]}
                imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                iconName="Layout"
            />
        </main>
    );
}
