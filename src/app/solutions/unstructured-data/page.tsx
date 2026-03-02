import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Unstructured Data Solution | RapinnoTech",
    description: "Pattern recognition for improved corporate decision-making and insights.",
};

export default function UnstructuredDataPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Unstructured Data Solution"
                category="Rapinno Data Digitization"
                description="Pattern recognition for improved corporate decision-making and insights."
                elaboratedText="Over 80% of enterprise data is unstructured—found in emails, logs, videos, and sensors. Our Unstructured Data Solution uses advanced pattern recognition and AI to transform this 'dark data' into actionable business intelligence. We help you find the trends and insights hidden within the chaos of your organization's unstructured information, empowering your executive team with a deeper, more comprehensive understanding of your operations and market position."
                features={[
                    "Pattern Discovery Engine",
                    "Multi-source Data Ingestion",
                    "Deep Semantic Search",
                    "AI-driven Insight Reports",
                    "Metadata Enrichment Modeling"
                ]}
                benefits={[
                    "Visibility into 'Dark Data'",
                    "Informed Decision Clarity",
                    "Improved Risk Forecasting",
                    "Holistic Data Strategy"
                ]}
                imageUrl="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2670&auto=format&fit=crop"
                iconName="Activity"
            />
        </main>
    );
}
