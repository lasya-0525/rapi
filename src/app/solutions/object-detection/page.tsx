import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Object Detection | RapinnoTech",
    description: "Automated actions triggered by advanced visual recognition models.",
};

export default function ObjectDetectionPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Object Detection"
                category="Rapinno IA Ecosystem"
                description="Automated actions triggered by advanced visual recognition models."
                elaboratedText="Machine vision is transforming how physical businesses operate. Our Object Detection solution uses advanced computer vision models to identify, track, and react to physical objects in real-time. Whether it's quality control on a manufacturing line, automated inventory tracking in a warehouse, or security monitoring in a physical facility, our visual recognition models provide the autonomous oversight needed to reduce errors and improve operational awareness."
                features={[
                    "Real-time Visual Recognition",
                    "Automated Alerting Models",
                    "Custom Class Identification",
                    "Video Feed Integration",
                    "Low-latency Edge Processing"
                ]}
                benefits={[
                    "Reduced Quality Errors",
                    "Automated Inventory Counts",
                    "Enhanced Security Analysis",
                    "Lower Labor Intensity"
                ]}
                imageUrl="https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2670&auto=format&fit=crop"
                iconName="ScanEye"
            />
        </main>
    );
}
