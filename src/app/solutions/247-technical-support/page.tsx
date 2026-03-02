import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "24/7 Technical Support | RapinnoTech",
    description: "Technical troubleshooting and retention-focused product maintenance.",
};

export default function TechnicalSupportPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="24/7 Technical Support"
                category="Rapinno Marketing 360"
                description="Technical troubleshooting and retention-focused product maintenance."
                elaboratedText="Retention is the foundation of long-term profitability. Our 24/7 Technical Support services ensure that your customers are never left in the dark. We provide around-the-clock troubleshooting, maintenance, and expert assistance for your digital products and services. Our global support team is not just reactive; we focus on root-cause analysis and proactive maintenance to ensure high availability and customer satisfaction. We turn your support organization into a retention powerhouse."
                features={[
                    "24/7 Multilingual Support",
                    "Tier-1, 2, and 3 Troubleshooting",
                    "SLA-driven Performance",
                    "Proactive Maintenance Monitoring",
                    "Customer Success Orchestration"
                ]}
                benefits={[
                    "Maximized Customer Retention",
                    "24/7 Brand Reliability",
                    "Reduced Support Overhead",
                    "Superior Product Availability"
                ]}
                imageUrl="https://images.unsplash.com/photo-1521791136366-398517526ed8?q=80&w=2670&auto=format&fit=crop"
                iconName="ShieldCheck"
            />
        </main>
    );
}
