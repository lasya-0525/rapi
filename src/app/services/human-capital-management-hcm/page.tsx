import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Human Capital Management (HCM) | RapinnoTech",
    description: "Modern workforce technologies to empower and manage your talent.",
};

export default function HCMPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Human Capital Management (HCM)"
                category="Business Process Engineering"
                description="Modern workforce technologies to empower and manage your talent."
                elaboratedText="Your people are your most valuable asset. Our HCM tech solutions focus on modernizing the entire employee lifecycle—from recruitment and onboarding to performance management and payroll. We implement sophisticated platforms that enhance the employee experience while providing HR leaders with actionable insights into workforce productivity, engagement, and retention. We help you build a more agile and data-driven HR organization."
                features={[
                    "Workforce Management Platforms",
                    "Recruitment & ATS Integration",
                    "Performance Analytics",
                    "Payroll & Compliance Automation",
                    "Employee Wellness Portals"
                ]}
                benefits={[
                    "Enhanced Employee Engagement",
                    "Data-Driven HR Strategy",
                    "Automated Compliance",
                    "Top Talent Retention"
                ]}
                imageUrl="https://images.unsplash.com/photo-1521791136366-398517526ed8?q=80&w=2670&auto=format&fit=crop"
                iconName="Users2"
            />
        </main>
    );
}
