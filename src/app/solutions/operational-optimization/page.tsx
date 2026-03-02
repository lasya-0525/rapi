import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Operational Optimization | RapinnoTech",
    description: "Real-time decision-support techniques based on daily operational data.",
};

export default function OperationalOptimizationPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Operational Optimization"
                category="RapiCon APS"
                description="Real-time decision-support techniques based on daily operational data."
                elaboratedText="Optimization is the difference between surviving and thriving in a low-margin world. RapinnoCon's Operational Optimization platform provides real-time decision support for day-to-day operations. By analyzing live data from your production, supply chain, and logistics, our APS engine identifies immediate inefficiencies and suggests optimal routes of action. We help your managers make smarter, faster decisions that reduce waste and maximize throughput every single day."
                features={[
                    "Real-time Decision Support",
                    "Daily Load Balancing Models",
                    "Operational Bottleneck ID",
                    "Live Efficiency Analytics",
                    "Automated Resource Routing"
                ]}
                benefits={[
                    "Significant Waste Reduction",
                    "Maximized Daily Throughput",
                    "Agile Response Capacity",
                    "Data-driven Management"
                ]}
                imageUrl="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
                iconName="Settings"
            />
        </main>
    );
}
