import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Cloud Managed Services | RapinnoTech",
    description: "24/7 Azure, AWS, and GCP monitoring, optimization, and oversight.",
};

export default function CloudManagedPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Cloud Managed Services"
                category="Rapinno Managed Services"
                description="24/7 Azure, AWS, and GCP monitoring, optimization, and oversight."
                elaboratedText="Moving to the cloud is just the beginning; managing it is where the value is created. Rapinno's Cloud Managed Services provide 24/7 oversight of your AWS, Azure, or GCP infrastructure. We ensure high availability, peak performance, and absolute cost-optimization through continuous monitoring and automated scaling. We handle the complexities of the cloud, from security patching and database backups to disaster recovery, allowing your internal IT team to focus on innovation."
                features={[
                    "Multi-Cloud 24/7 Monitoring",
                    "Continuous Cost Optimization",
                    "Cloud Security Patching",
                    "Elastic Load Management",
                    "Disaster Recovery Automation"
                ]}
                benefits={[
                    "Ensured High Availability",
                    "Dramatically Lower Cloud Costs",
                    "Professional Operational Security",
                    "Zero Downtime Peace of Mind"
                ]}
                imageUrl="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop"
                iconName="CloudCog"
            />
        </main>
    );
}
