import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Intelligent Automation (IA) | RapinnoTech",
    description: "Merging Artificial Intelligence with Robotic Process Automation for complex workflows.",
};

export default function IntelligentAutomationPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Intelligent Automation (IA)"
                category="NextGen Tech"
                description="Merging Artificial Intelligence with Robotic Process Automation for complex workflows."
                elaboratedText="Intelligent Automation represents the next frontier of operational efficiency. By combining the execution power of RPA with the decision-making capabilities of AI and Machine Learning, we create autonomous workflows that handle complex, unstructured data. Our IA solutions can read documents, analyze sentiments, and make data-driven decisions, allowing your human workforce to focus on higher-value creative and strategic tasks."
                features={[
                    "Machine Learning Integration",
                    "Natural Language Processing (NLP)",
                    "Cognitive Decision Models",
                    "Unstructured Data Extraction",
                    "Predictive Analytics"
                ]}
                benefits={[
                    "Hyper-Efficient Operations",
                    "Reduced Processing Errors",
                    "Enhanced Customer Experience",
                    "Exponential Scalability"
                ]}
                imageUrl="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop"
                iconName="Bot"
            />
        </main>
    );
}
