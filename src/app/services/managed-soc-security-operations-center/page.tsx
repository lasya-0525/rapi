import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Managed SOC (Security Operations Center) | RapinnoTech",
    description: "24/7 network monitoring, log analysis, and incident alerting.",
};

export default function ManagedSOCPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Managed SOC (Security Operations Center)"
                category="Security Services"
                description="24/7 network monitoring, log analysis, and incident alerting."
                elaboratedText="Threats never sleep, and neither do we. RapinnoTech's Managed SOC provides around-the-clock visibility into your network security. We deploy advanced monitoring tools that analyze logs, detect anomalies, and alert your team to potential incidents in real-time. Our global team of security analysts provides the expert oversight needed to identify sophisticated threats that automated tools might miss, ensuring your organization remains secure 24/7/365."
                features={[
                    "24/7 SIEM Monitoring",
                    "Incident Detection & Alerting",
                    "Threat Hunting & Intelligence",
                    "Forensic Log Analysis",
                    "Global Security Compliance"
                ]}
                benefits={[
                    "Immediate Incident Response",
                    "Expert Global Oversight",
                    "Reduced Mean-Time-to-Detect",
                    "24/7 Peace of Mind"
                ]}
                imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                iconName="Server"
            />
        </main>
    );
}
