import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Robotic Process Automation (RPA) | RapinnoTech",
    description: "Transforming manual, repetitive tasks into high-speed digital workflows.",
};

export default function RPASolutionsPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Robotic Process Automation (RPA)"
                category="NextGen Tech"
                description="Transforming manual, repetitive tasks into high-speed digital workflows."
                elaboratedText="RPA is the cornerstone of the modern digital workforce. Our RPA services focus on automating high-volume, rules-based tasks that currently drain your team's productivity. Using industry-leading platforms like UiPath and Automation Anywhere, we deploy 'bots' that can navigate systems, enter data, and manage transactions with 100% accuracy and 24/7 availability. We help you achieve immediate ROI by streamlining your core business processes."
                features={[
                    "Task-level Automation",
                    "Workflow Orchestration",
                    "ROI and Feasibility Analysis",
                    "Bot Lifecycle Management",
                    "Legacy System Integration"
                ]}
                benefits={[
                    "Dramatic Productivity Gains",
                    "Zero-Error Rate",
                    "Rapid ROI and Payback",
                    "Liberated Workforce Talent"
                ]}
                imageUrl="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2506&auto=format&fit=crop"
                iconName="Cpu"
            />
        </main>
    );
}
