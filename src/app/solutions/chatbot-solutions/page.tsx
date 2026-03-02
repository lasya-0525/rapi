import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Chatbot Solutions | RapinnoTech",
    description: "NLP-driven autonomous customer interaction for high-volume support.",
};

export default function ChatbotSolutionsPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Chatbot Solutions"
                category="Rapinno IA Ecosystem"
                description="NLP-driven autonomous customer interaction for high-volume support."
                elaboratedText="In a 'get it now' world, instant responses are non-negotiable. RapinnoTech's Chatbot Solutions provide 24/7 autonomous customer interaction using advanced NLP and generative models. Our bots don't just follow scripts; they understand natural human language and can provide complex information, handle transactions, and resolve support tickets without human intervention. We help you provide premium customer service at infinite scale and a fraction of the cost."
                features={[
                    "Natural Language Interaction",
                    "Transactional Integration",
                    "Omni-channel Deployment",
                    "Seamless Human Hand-off",
                    "AI Knowledge Base Training"
                ]}
                benefits={[
                    "24/7 Instant Support",
                    "Reduced CSAT Wait-times",
                    "Exponential Load Capacity",
                    "Dramatically Lower Support Costs"
                ]}
                imageUrl="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2506&auto=format&fit=crop"
                iconName="MessageSquare"
            />
        </main>
    );
}
