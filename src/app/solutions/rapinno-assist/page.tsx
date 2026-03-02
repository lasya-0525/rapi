import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Rapinno Assist | RapinnoTech",
    description: "OCR and Machine Learning for converting paper/emails into digital analytics.",
};

export default function RapinnoAssistPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Rapinno Assist"
                category="Rapinno Data Digitization"
                description="OCR and Machine Learning for converting paper/emails into digital analytics."
                elaboratedText="Analog data is a bottleneck to digital speed. Rapinno Assist is our specialized engine for high-speed data extraction. Combining advanced OCR with intelligent Machine Learning, it can 'read' paper documents, PDFs, and unstructured emails to extract critical information and convert it into structured digital formats. This data is then immediately available for your analytics dashboards and automated processes, eliminating manual data entry and all its associated errors."
                features={[
                    "Intelligent Document Reading",
                    "Paper-to-Digital Ingestion",
                    "Automated E-mail Extraction",
                    "Structured Output Generation",
                    "Contextual Text Correction"
                ]}
                benefits={[
                    "End of Manual Data Entry",
                    "Zero Transcription Errors",
                    "Massive Processing Speed",
                    "Actionable Analog Data"
                ]}
                imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                iconName="Search"
            />
        </main>
    );
}
