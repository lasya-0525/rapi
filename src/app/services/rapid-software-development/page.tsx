import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Rapid Software Development | RapinnoTech",
    description: "Urgent technological needs met with elite engineering and proven delivery models.",
};

export default function RapidSoftwareDevPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Rapid Software Development"
                category="Application Engineering"
                description="Urgent technological needs met with elite engineering and proven delivery models."
                elaboratedText="In today's fast-paced digital economy, speed-to-market is the primary differentiator. RapinnoTech's Rapid Software Development service is designed for organizations that need to transition from concept to code in record time. We leverage elite engineering practices, agile methodologies, and a library of pre-built modules to deliver high-quality web and mobile applications. Our focus is on solving urgent business problems without compromising on scalability or security."
                features={[
                    "Agile Development Framework",
                    "MVP Development in 4-6 Weeks",
                    "Cross-platform Mobile Solutions",
                    "Scalable Web Architecture",
                    "Continuous Integration/Deployment"
                ]}
                benefits={[
                    "Faster Time to Market",
                    "Reduced Development Costs",
                    "Adaptable Technical Architecture",
                    "Immediate Business Impact"
                ]}
                imageUrl="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop"
                iconName="Zap"
            />
        </main>
    );
}
