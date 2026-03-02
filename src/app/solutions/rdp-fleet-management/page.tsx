import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "RDP Fleet Management | RapinnoTech",
    description: "Advanced logistics and real-time vehicle tracking solutions for modern fleets.",
};

export default function RDPFleetManagementPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="RDP Fleet Management"
                category="Rapinno Digital Platform (RDP)"
                description="Advanced logistics and real-time vehicle tracking solutions for modern fleets."
                elaboratedText="Efficiency in logistics depends on real-time visibility and data-driven decision making. RDP Fleet Management provides a comprehensive suite for tracking vehicles, monitoring driver performance, and optimizing routes. By integrating GPS data with advanced dashboarding and predictive maintenance models, our platform helps fleet operators reduce fuel consumption, improve delivery times, and ensure the safety and longevity of their physical assets. We turn logistical data into a competitive advantage."
                features={[
                    "Real-time GPS Tracking",
                    "Driver Behavior Analytics",
                    "Route Optimization Engine",
                    "Maintenance Scheduling Alerts",
                    "Fuel Consumption Management"
                ]}
                benefits={[
                    "Lower Operational Expenses",
                    "Improved Delivery Reliability",
                    "Enhanced Fleet Safety",
                    "Real-time Logistics Visibility"
                ]}
                imageUrl="https://images.unsplash.com/photo-1586528116311-ad86d7c490a1?q=80&w=2670&auto=format&fit=crop"
                iconName="Truck"
            />
        </main>
    );
}
