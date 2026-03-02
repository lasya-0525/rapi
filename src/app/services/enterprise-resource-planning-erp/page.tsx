import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Enterprise Resource Planning (ERP) | RapinnoTech",
    description: "Core business process management for real-time organizational control.",
};

export default function ERPPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Enterprise Resource Planning (ERP)"
                category="Business Process Engineering"
                description="Core business process management for real-time organizational control."
                elaboratedText="An effective ERP is the nervous system of an enterprise. RapinnoTech specializes in implementing and customizing core business management systems that unify finance, supply chain, production, and CRM. We help organizations break down data silos and achieve real-time visibility into their entire operation. Whether it's a legacy system upgrade or a modern cloud-ERP implementation, we ensure your core processes are streamlined and integrated."
                features={[
                    "Functional ERP Implementation",
                    "Custom Module Development",
                    "Legacy System Migration",
                    "Real-time Dashboarding",
                    "Supply Chain Optimization"
                ]}
                benefits={[
                    "Unified Enterprise Data",
                    "Streamlined Core Workflows",
                    "Informed Executive Decisions",
                    "Eliminated Information Silos"
                ]}
                imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                iconName="Workflow"
            />
        </main>
    );
}
