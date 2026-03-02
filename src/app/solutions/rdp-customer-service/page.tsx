import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "RDP Customer Service | RapinnoTech",
    description: "360° industry portal for lead management and client interaction.",
};

export default function RDPCustomerServicePage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="RDP Customer Service"
                category="Rapinno Digital Platform (RDP)"
                description="360° industry portal for lead management and client interaction."
                elaboratedText="RDP Customer Service provides an all-encompassing portal for organizations to manage the complete customer lifecycle. Specifically designed for real estate and service-heavy industries, the platform integrates web presence, advanced SEO, and sophisticated lead management into a single dashboard. From initial lead capture to long-term client support, we provide the tools needed to nurture relationships and drive business growth through superior customer engagement."
                features={[
                    "360° Lead Management Dashboard",
                    "Search-Engine Optimized Portals",
                    "Automated Inquiry Routing",
                    "Integrated CRM Functionality",
                    "Service Industry Workflow Templates"
                ]}
                benefits={[
                    "Unified Lead Capturing",
                    "Maximized Conversion Rates",
                    "Improved Response Times",
                    "Comprehensive Client Visibility"
                ]}
                imageUrl="https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2573&auto=format&fit=crop"
                iconName="MousePointer2"
            />
        </main>
    );
}
