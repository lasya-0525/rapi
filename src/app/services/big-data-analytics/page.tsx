import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Big Data Analytics | RapinnoTech",
    description: "Converting massive datasets into measurable performance insights.",
};

export default function BigDataAnalyticsPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Big Data Analytics"
                category="Business Process Engineering"
                description="Converting massive datasets into measurable performance insights."
                elaboratedText="Data is the new oil, but only if it's refined. Our Big Data Analytics service helps organizations make sense of the vast amounts of information they generate. We deploy advanced data engineering and visualization tools that uncover patterns, predict trends, and identify new business opportunities. From real-time streaming analytics to historical trend modeling, we empower your team with the insights needed to drive growth and efficiency."
                features={[
                    "Data Lake & Warehouse Setup",
                    "Predictive Modeling & AI",
                    "Real-time Stream Processing",
                    "BI Dashboard Implementation",
                    "Data Governance & Quality"
                ]}
                benefits={[
                    "Faster, Smarter Decisions",
                    "Uncovered Growth Opportunities",
                    "Optimized Cost Structures",
                    "Superior Customer Insights"
                ]}
                imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                iconName="LineChart"
            />
        </main>
    );
}
