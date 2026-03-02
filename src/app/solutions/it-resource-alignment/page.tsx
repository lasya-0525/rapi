import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "IT Resource Alignment | RapinnoTech",
    description: "Rapidly matching specialized technical talent to shifting market opportunities.",
};

export default function ITResourceAlignmentPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="IT Resource Alignment"
                category="Rapinno Adaptive Sourcing"
                description="Rapidly matching specialized technical talent to shifting market opportunities."
                elaboratedText="In a world of rapidly shifting technologies, having the right talent at the right time is your biggest challenge. Our IT Resource Alignment service provides elite, pre-vetted technical teams that can be rapidly integrated into your organization. We don't just 'staff'; we align technical talent to your specific project needs and cultural environment, ensuring that your organization has the horsepower needed to capitalize on new opportunities without the friction of long recruitment cycles."
                features={[
                    "Elite Technical Resource Pool",
                    "Rapid Integration Model",
                    "Skills-to-Needs Matching",
                    "Agile Team Scaling",
                    "Cultural Alignment Vetting"
                ]}
                benefits={[
                    "Zero Recruitment Wait-times",
                    "High-performing Agile Teams",
                    "Reduced Hiring Risks",
                    "Maximum Project Agility"
                ]}
                imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
                iconName="UserPlus"
            />
        </main>
    );
}
