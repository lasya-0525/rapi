import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Managed SOC Solution | RapinnoTech",
    description: "Log monitoring, risk mitigation, and absolute security compliance oversight.",
};

export default function ManagedSOCSolutionPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Managed SOC (Managed SOC Solution)"
                category="Rapinno Managed Services"
                description="Log monitoring, risk mitigation, and absolute security compliance oversight."
                elaboratedText="Compliance and security are two sides of the same coin. Our Managed SOC solution provides comprehensive oversight of your security telemetry, ensuring both absolute protection and continuous compliance with regulations like GDPR, HIPAA, and ISO 27001. We provide rigorous log monitoring, automated risk mitigation, and a dedicated team of security analysts who act as an extension of your organization. We provide the absolute security oversight your stakeholders demand."
                features={[
                    "Automated Compliance Logging",
                    "Regulatory Audit Support",
                    "Real-time Threat Mitigation",
                    "Dedicated Human Oversight",
                    "Global Compliance Frameworks"
                ]}
                benefits={[
                    "Guaranteed Security Compliance",
                    "Reduced Audit Stress",
                    "Immediate Threat Neutralization",
                    "Elite Security Partnerships"
                ]}
                imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                iconName="Lock"
            />
        </main>
    );
}
