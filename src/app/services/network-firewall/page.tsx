import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Network & Firewall Design | RapinnoTech",
    description: "Expert infrastructure design for Cisco, Palo Alto, and Fortinet platforms.",
};

export default function NetworkFirewallPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Network & Firewall Design"
                category="Security Services"
                description="Expert infrastructure design for Cisco, Palo Alto, and Fortinet platforms."
                elaboratedText="A robust network is the foundation of digital security. Our Network & Firewall Design service provides expert architecture and implementation for industry-leading security platforms including Cisco, Palo Alto, and Fortinet. We design segmented network architectures that minimize the 'blast radius' of potential breaches and ensure high availability for your critical business applications. From load balancer setup to secure VPN configurations, we build the walls that keep your data safe."
                features={[
                    "Firewall Architecture Design",
                    "Secure Network Segmentation",
                    "Cisco, Palo Alto, Fortinet Ops",
                    "High Availability Clustering",
                    "Secure Remote VPN Setup"
                ]}
                benefits={[
                    "Hardened Network Perimeter",
                    "Minimized Internal Exposure",
                    "Optimal Traffic Performance",
                    "Uninterrupted Security Ops"
                ]}
                imageUrl="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2686&auto=format&fit=crop"
                iconName="ShieldCheck"
            />
        </main>
    );
}
