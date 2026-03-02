import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Quality Engineering | RapinnoTech",
    description: "Comprehensive validation across all digital platforms and devices.",
};

export default function QualityEngineeringPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Quality Engineering"
                category="Application Engineering"
                description="Comprehensive validation across all digital platforms and devices."
                elaboratedText="Quality is not an afterthought at RapinnoTech; it's engineered into every line of code. Our Quality Engineering services go beyond traditional testing to focus on preventative defects and performance optimization. We provide wide-ranging validation across web, mobile, IoT, and wearable platforms, using both automated and manual techniques to ensure your software is reliable, secure, and ready for the real world."
                features={[
                    "Automated Testing (Selenium, Playwright)",
                    "Performance & Load Testing",
                    "Security & Vulnerability Assessment",
                    "IoT & Device Compatibility Testing",
                    "AI-Driven Quality Insights"
                ]}
                benefits={[
                    "Reduced Post-Release Bugs",
                    "Improved Platform Reliability",
                    "Enhanced Brand Trust",
                    "Optimized User Performance"
                ]}
                imageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
                iconName="CheckCircle2"
            />
        </main>
    );
}
