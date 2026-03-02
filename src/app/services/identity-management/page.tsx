import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Identity & Access Management (IAM) | RapinnoTech",
    description: "Role-based access control with MFA and SSO integration.",
};

export default function IAMPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Identity & Access Management (IAM)"
                category="Security Services"
                description="Role-based access control with MFA and SSO integration."
                elaboratedText="Identity is the new perimeter. Our IAM solutions ensure that only the right people have the right access to the right resources at the right time. We implement role-based access controls, Multi-Factor Authentication (MFA), and Single Sign-On (SSO) systems that provide a seamless user experience while dramatically reducing the risk of unauthorized access. We help you secure your digital identity across cloud, on-premise, and hybrid environments."
                features={[
                    "SSO & MFA Implementation",
                    "Privileged Access Management",
                    "Role-Based Access Control",
                    "User Provisioning Automation",
                    "Identity Governance & Admin"
                ]}
                benefits={[
                    "Eliminated Identity Breaches",
                    "Simplified User Logins",
                    "Total Access Visibility",
                    "Automated Compliance Logs"
                ]}
                imageUrl="https://images.unsplash.com/photo-1510511459019-5dee99c4859d?q=80&w=2670&auto=format&fit=crop"
                iconName="Lock"
            />
        </main>
    );
}
