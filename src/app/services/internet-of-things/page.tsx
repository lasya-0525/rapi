import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Internet of Things (IoT) | RapinnoTech",
    description: "Connecting the physical and digital worlds for real-time insights.",
};

export default function IoTPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Internet of Things (IoT)"
                category="NextGen Tech"
                description="Connecting the physical and digital worlds for real-time insights."
                elaboratedText="IoT is transforming physical assets into live data streams. RapinnoTech builds integrated IoT ecosystems that connect devices, sensors, and machines to powerful digital infrastructure. We handle everything from firmware engineering and sensor integration to the web and mobile platforms that visualize and analyze physical data. Whether it's smart manufacturing (Industry 4.0) or connected health devices, we enable real-time visibility into your physical operations."
                features={[
                    "Sensor & Hardware Integration",
                    "Embedded Systems Engineering",
                    "Real-time Data Streaming",
                    "IoT Platform Architecture",
                    "Predictive Maintenance Models"
                ]}
                benefits={[
                    "Real-time Operational Visibility",
                    "Predictive Asset Maintenance",
                    "Enhanced Product Intelligence",
                    "Optimized Resource Usage"
                ]}
                imageUrl="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop"
                iconName="Zap"
            />
        </main>
    );
}
