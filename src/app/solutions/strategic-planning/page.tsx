import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Strategic Planning | RapinnoTech",
    description: "High-level visualization tools for long-term business goals and roadmaps.",
};

export default function StrategicPlanningPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Strategic Planning"
                category="RapiCon APS"
                description="High-level visualization tools for long-term business goals and roadmaps."
                elaboratedText="Strategy requires clarity of vision. RapinnoCon's Strategic Planning solution provides high-level visualization and modeling tools for designing long-term business roadmaps. By integrating disparate data sources and visualizing potential outcomes, we help leadership teams model scenarios, set realistic long-term goals, and track their progress against a unified corporate strategy. We provide the cockpit needed to steer a modern global organization with precision."
                features={[
                    "Scenario & Outcome Modeling",
                    "Long-term Roadmap Design",
                    "Unified Strategy Dashboards",
                    "Resource Forecast Visualization",
                    "Market Trend Correlation"
                ]}
                benefits={[
                    "Absolute Executive Clarity",
                    "Data-aligned Goal Setting",
                    "Proactive Market Navigation",
                    "Unified Leadership Vision"
                ]}
                imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                iconName="LineChart"
            />
        </main>
    );
}
