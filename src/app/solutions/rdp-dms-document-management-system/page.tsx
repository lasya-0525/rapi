import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "RDP DMS (Document Management System) | RapinnoTech",
    description: "Advanced Document Management System for secure corporate digital records.",
};

export default function RDPDMSPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="RDP DMS (Document Management System)"
                category="Rapinno Digital Platform (RDP)"
                description="Advanced Document Management System for secure corporate digital records."
                elaboratedText="In the modern office, information is only as valuable as it is accessible. RDP DMS is a centralized, secure digital repository for your organization's sensitive documents. From automated indexing and version control to advanced permissions and audit trails, our platform ensures your records are organized, accessible, and compliant with data privacy regulations. We replace the chaos of file storage with a structured environment that empowers your team with information."
                features={[
                    "Automated File Indexing",
                    "Intelligent Version Control",
                    "Deep Permissions & Security",
                    "Integrated OCR Search",
                    "Compliance & Audit Logging"
                ]}
                benefits={[
                    "Faster Information Retrieval",
                    "Reduced Paper Dependency",
                    "Ensured Data Compliance (GDPR)",
                    "Eliminated Version Confusion"
                ]}
                imageUrl="https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2673&auto=format&fit=crop"
                iconName="FileText"
            />
        </main>
    );
}
