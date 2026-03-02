import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Full Stack Development | RapinnoTech",
    description: "Robust front-to-back engineering and cloud infrastructure.",
};

export default function FullStackDevPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Full Stack Development"
                category="Application Engineering"
                description="Robust front-to-back engineering and cloud infrastructure."
                elaboratedText="Our Full Stack Development team bridges the gap between sophisticated user interfaces and powerful backend architectures. We specialize in modern frameworks like React, Next.js, and Node.js, combined with robust database solutions. Whether it's a high-traffic e-commerce platform or a complex enterprise portal, our engineers ensure seamless integration across the entire technology stack, including cloud hosting and API orchestration."
                features={[
                    "Modern Front-end Architecture",
                    "Scalable Backend API Design",
                    "Database Modeling & Migration",
                    "Microservices Orchestration",
                    "Cloud-Native Deployment"
                ]}
                benefits={[
                    "Seamless Technical Integration",
                    "High Performance & Low Latency",
                    "Elastic Scalability",
                    "Comprehensive Data Integrity"
                ]}
                imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop"
                iconName="Layers"
            />
        </main>
    );
}
