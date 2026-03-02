import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "RDP Social Platform | RapinnoTech",
    description: "Modular tools to build community-driven or social networking applications.",
};

export default function RDPSocialPlatformPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="RDP Social Platform"
                category="Rapinno Digital Platform (RDP)"
                description="Modular tools to build community-driven or social networking applications."
                elaboratedText="Building community-driven applications requires complex social architectures that are both engagement-focused and secure. RDP Social Platform provides a pre-built set of modules for profile management, content feeds, social interactions (likes, shares, comments), and direct messaging. These tools allow startups and businesses to rapidly build social networks, internal community tools, or niche engagement platforms without engineering the wheel from scratch."
                features={[
                    "User Profile & Network Management",
                    "Real-time Content Feeds",
                    "Social Interaction Engines",
                    "Secure Direct Messaging",
                    "Moderation & Privacy Tools"
                ]}
                benefits={[
                    "Rapid Community Deployment",
                    "Engagement-focused Architecture",
                    "Reduced Development Cycles",
                    "Scalable Social Micro-interactions"
                ]}
                imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop"
                iconName="Share2"
            />
        </main>
    );
}
