import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Security Management | RapinnoTech",
    description: "Enterprise program design, risk assessment, and disaster recovery planning.",
};

export default function SecurityManagementPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Security Management"
                category="Security Services"
                description="Enterprise program design, risk assessment, and disaster recovery planning."
                elaboratedText="In an increasingly hostile digital landscape, security must be built into the organizational culture. Our Security Management service provides strategic oversight of your entire defensive posture. We design enterprise security programs, perform rigorous risk assessments, and establish robust disaster recovery plans. We ensure your organization is not just defensive, but resilient—capable of identifying, neutralizing, and recovering from any cyber threat."
                features={[
                    "ISO 27001 & Compliance Audit",
                    "Disaster Recovery Planning",
                    "Security Policy Framework",
                    "Business Impact Analysis",
                    "Chief Security Officer (vCISO)"
                ]}
                benefits={[
                    "Strengthened Cyber Resilience",
                    "Guaranteed Regulatory Compliance",
                    "Protected Corporate Assets",
                    "Business Continuity Peace of Mind"
                ]}
                imageUrl="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                iconName="ShieldCheck"
            />
        </main>
    );
}
