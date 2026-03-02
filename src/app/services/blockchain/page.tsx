import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "Blockchain | RapinnoTech",
    description: "Secure, decentralized ledger implementations for trust and transparency.",
};

export default function BlockchainPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="Blockchain"
                category="NextGen Tech"
                description="Secure, decentralized ledger implementations for trust and transparency."
                elaboratedText="Blockchain technology is redefining trust in global commerce. RapinnoTech explores and implements decentralized ledger solutions that provide immutable transparency and security. From smart contracts for automated agreements to secure supply chain tracking and decentralized finance applications, we help you leverage blockchain to reduce friction in your business operations and build a foundation of absolute transparency for your customers and partners."
                features={[
                    "Smart Contract Development",
                    "Decentralized App (DApp) Engineering",
                    "Private and Public Ledger Setup",
                    "Identity Management Systems",
                    "Tokenization & Asset Tracking"
                ]}
                benefits={[
                    "Absolute Data Integrity",
                    "Reduced Intermediary Costs",
                    "Enhanced Stakeholder Trust",
                    "Unmatched Auditability"
                ]}
                imageUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop"
                iconName="Network"
            />
        </main>
    );
}
