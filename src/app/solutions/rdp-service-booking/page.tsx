import { DetailTemplate } from "@/components/ui/detail-template";

export const metadata = {
    title: "RDP Service Booking | RapinnoTech",
    description: "Comprehensive appointment and slot management platform for service-based businesses.",
};

export default function RDPServiceBookingPage() {
    return (
        <main className="relative z-10 w-full min-h-screen">
            <DetailTemplate
                title="RDP Service Booking"
                category="Rapinno Digital Platform (RDP)"
                description="Comprehensive appointment and slot management platform for service-based businesses."
                elaboratedText="Efficiently managing time and appointments is the core of any successful service business. RDP Service Booking is an advanced platform that automates the scheduling of services, staff, and physical assets. Whether you're a healthcare clinic or a professional services agency, our platform provides an intuitive user interface for your customers to book, reschedule, and pay for appointments. We automate the complexities of calendar sync and resource allocation, allowing your team to focus on delivery."
                features={[
                    "Intelligent Calendar Sync",
                    "Automated Slot Management",
                    "Staff Assignment & Tracking",
                    "Customer Portal & SMS Alerts",
                    "Integrated Billing & Deposits"
                ]}
                benefits={[
                    "Eliminated Double Bookings",
                    "Reduced No-Show Rates",
                    "Seamless Resource Allocation",
                    "Improved Customer Experience"
                ]}
                imageUrl="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop"
                iconName="Calendar"
            />
        </main>
    );
}
