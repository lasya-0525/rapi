import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "RDP Ecommerce | RapinnoTech",
    description: "Quick-deploy online retail modules for rapid market entry and global scale.",
};

export default function RDPEcommercePage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="RDP Ecommerce"
                category="Rapinno Digital Platform (RDP)"
                description="Quick-deploy online retail modules for rapid market entry and global scale."
                elaboratedText="RDP Ecommerce is a pre-structured, high-performance engine for modern online retail. It allows organizations to bypass months of development by deploying a robust, secure, and infinitely scalable commerce platform in record time. From feature-rich product catalogs and seamless cart management to global payment integration and real-time inventory tracking, RDP Ecommerce is built to handle high-volume transactions with ease. We help you transition from idea to live store rapidly, with zero compromise on quality."
                features={[
                    "Dynamic Product Management",
                    "Seamless Cart & Checkout",
                    "Multi-Gateway Payment Support",
                    "Real-Time Inventory Sync",
                    "Scalable Cloud-based Hosting"
                ]}
                benefits={[
                    "Market Entry in Weeks",
                    "Highly Secure Transaction Flow",
                    "Elastic Scalability on Peak Days",
                    "Superior Mobile Experience"
                ]}
                imageUrl="https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop"
                iconName="ShoppingCart"
            />
        </main>
    );
}
