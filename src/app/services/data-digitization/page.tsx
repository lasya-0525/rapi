import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Data Digitization | RapinnoTech",
    description: "Leveraging CV and ML to transform unstructured analog data to digital assets.",
};

export default function DataDigitizationPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Data Digitization"
                category="Business Process Engineering"
                description="Leveraging CV and ML to transform unstructured analog data to digital assets."
                elaboratedText="The bridge to digital transformation often starts with analog data. Our Data Digitization service uses advanced Computer Vision (CV) and Machine Learning (ML) to convert physical documents, hand-written logs, and unstructured digital files into high-quality, searchable data assets. We help organizations unlock the value of their historical records and physical archives, making them accessible to modern analytics and automated workflows."
                features={[
                    "OCR & Intelligent Extraction",
                    "Document Classification Models",
                    "Handwriting Recognition (HTR)",
                    "Bulk Archive Digitization",
                    "Cloud-based Data Retrieval"
                ]}
                benefits={[
                    "Unlocked Historical Value",
                    "Instant Data Accessibility",
                    "Searchable Digital Archives",
                    "Foundation for Automation"
                ]}
                imageUrl="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2673&auto=format&fit=crop"
                iconName="HardDrive"
            />
        </main>
    );
}
