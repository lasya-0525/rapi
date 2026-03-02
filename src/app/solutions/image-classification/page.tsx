import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Image Classification | RapinnoTech",
    description: "AI categorization for quality control and industrial automation.",
};

export default function ImageClassificationPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Image Classification"
                category="Rapinno IA Ecosystem"
                description="AI categorization for quality control and industrial automation."
                elaboratedText="Categorizing massive volumes of visual data manually is impossible. Our Image Classification solution automates this process using deep learning models that can categorize images with human-level accuracy. From identifying damaged products on a belt to sorting medical imaging or categorizing massive digital archives, our classification engine provides the high-speed categorization needed for modern, data-driven automation."
                features={[
                    "Deep Learning Classifiers",
                    "Industrial Sortation Integration",
                    "Historical Data Labeling",
                    "Quality Assurance Modules",
                    "Custom Model Training"
                ]}
                benefits={[
                    "High-speed Data Sorting",
                    "Unprecedented Accuracy",
                    "Scalable Content Analysis",
                    "Minimized Manual Inspection"
                ]}
                imageUrl="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop"
                iconName="Shapes"
            />
        </main>
    );
}
