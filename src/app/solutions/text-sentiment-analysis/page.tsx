import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Text & Sentiment Analysis | RapinnoTech",
    description: "Emotional context analysis to empower intelligent information extraction.",
};

export default function TextSentimentPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Text & Sentiment Analysis"
                category="Rapinno IA Ecosystem"
                description="Emotional context analysis to empower intelligent information extraction."
                elaboratedText="Data isn't just about what is being said, but how it's being said. Our Text & Sentiment Analysis solution uses Natural Language Processing (NLP) to go beyond keyword matching and understand the emotional context of a communication. We help organizations analyze customer feedback, monitor social media sentiment, and automate the triage of support inquiries based on their emotional urgency and underlying intent. We provide the emotional intelligence your digital workflows are missing."
                features={[
                    "Contextual Sentiment Scoring",
                    "Multi-language Text Analysis",
                    "Intent Recognition Models",
                    "Urgency Detection & Routing",
                    "Social Media Sentiment API"
                ]}
                benefits={[
                    "Empathic Customer Support",
                    "Early Brand Risk Detection",
                    "Automated Communication Triage",
                    "Deep Market Understanding"
                ]}
                imageUrl="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2574&auto=format&fit=crop"
                iconName="FileSearch"
            />
        </main>
    );
}
