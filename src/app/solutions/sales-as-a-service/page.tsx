import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Sales as a Service | RapinnoTech",
    description: "Turnkey sales organizations and global partner location services.",
};

export default function SalesAsAServicePage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Sales as a Service"
                category="Rapinno Marketing 360"
                description="Turnkey sales organizations and global partner location services."
                elaboratedText="Scaling into new markets doesn't have to mean massive overhead. RapinnoTech provides 'Sales as a Service'—a turnkey sales organization that represents your brand and scales your revenue. We provide the people, the strategy, and the global network of partners needed to win in new territories. Whether you're an international startup entering a new country or an enterprise expanding its footprint, we provide a performance-ready sales engine that is fully aligned with your goals."
                features={[
                    "Turnkey Sales Teams",
                    "Global Territory Management",
                    "Partner Discovery & Onboarding",
                    "Local Market Strategy",
                    "Commission-driven Alignment"
                ]}
                benefits={[
                    "Low-overhead Global Scale",
                    "Rapid Territory Entry",
                    "Experienced Sales Talent",
                    "Purely Performance-based ROI"
                ]}
                imageUrl="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop"
                iconName="Users2"
            />
        </main>
    );
}
