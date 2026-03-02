import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Cloud Services | RapinnoTech",
    description: "Comprehensive cloud strategy, migration, and managed operations.",
};

export default function CloudServicesPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Cloud Services"
                category="NextGen Tech"
                description="Comprehensive cloud strategy, migration, and managed operations."
                elaboratedText="The cloud is not a destination; it's a catalyst for innovation. RapinnoTech provides end-to-end cloud services that transition your organization from on-premise limitations to cloud-native possibilities. We specialize in AWS, Azure, and Google Cloud, providing expert migration assistance, serverless architecture design, and 24/7 managed operations. Our goal is to ensure your infrastructure is secure, cost-optimized, and capable of infinite scale."
                features={[
                    "Hybrid & Multi-Cloud Strategy",
                    "Cloud Migration & Modernization",
                    "Serverless Architecture Design",
                    "FinOps & Cost Optimization",
                    "24/7 Managed Cloud Ops"
                ]}
                benefits={[
                    "Infinite Infrastructure Agility",
                    "Optimized Operational Costs",
                    "Global Performance Reach",
                    "Business Continuity Assurance"
                ]}
                imageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                iconName="Cloud"
            />
        </main>
    );
}
