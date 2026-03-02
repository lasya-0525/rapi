import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Business Process Management (BPM) | RapinnoTech",
    description: "Systematic lifecycle design and optimization for corporate workflows.",
};

export default function BPMPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Business Process Management (BPM)"
                category="Business Process Engineering"
                description="Systematic lifecycle design and optimization for corporate workflows."
                elaboratedText="Inefficient processes are the silent budget killers of modern enterprises. Our BPM services take a structured approach to modeling, analyzing, and improving your corporate workflows. We map out end-to-end lifecycles and identify bottlenecks, redundancies, and opportunities for automation. By streamlining your fundamental processes, we help you achieve greater organizational agility, better compliance, and a significantly lower cost of operations."
                features={[
                    "Process Discovery & Mapping",
                    "Workflow Optimization Analysis",
                    "BPM Software Implementation",
                    "Performance KPI Tracking",
                    "Agile Process Governance"
                ]}
                benefits={[
                    "Lower Operational Overhead",
                    "Enhanced Process Agility",
                    "Guaranteed Compliance",
                    "Superior Stakeholder Output"
                ]}
                imageUrl="https://images.unsplash.com/photo-1454165833767-027ff33027ef?q=80&w=2670&auto=format&fit=crop"
                iconName="Activity"
            />
        </main>
    );
}
