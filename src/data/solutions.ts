export interface SolutionDetail {
    slug: string;
    title: string;
    category: string;
    description: string;
    elaboratedText: string;
    features: string[];
    benefits: string[];
    imageUrl: string;
    iconName: string; // Lucide icon name
}

export const solutionsData: SolutionDetail[] = [
    {
        slug: "rdp-ecommerce",
        title: "RDP Ecommerce",
        category: "Rapinno Digital Platform (RDP)",
        description: "Quick-deploy online retail modules for rapid market entry and global scale.",
        elaboratedText: "RDP Ecommerce is a pre-structured, high-performance engine for modern online retail. It allows organizations to bypass months of development by deploying a robust, secure, and infinitely scalable commerce platform in record time. From feature-rich product catalogs and seamless cart management to global payment integration and real-time inventory tracking, RDP Ecommerce is built to handle high-volume transactions with ease. We help you transition from idea to live store rapidly, with zero compromise on quality.",
        features: [
            "Dynamic Product Management",
            "Seamless Cart & Checkout",
            "Multi-Gateway Payment Support",
            "Real-Time Inventory Sync",
            "Scalable Cloud-based Hosting"
        ],
        benefits: [
            "Market Entry in Weeks",
            "Highly Secure Transaction Flow",
            "Elastic Scalability on Peak Days",
            "Superior Mobile Experience"
        ],
        imageUrl: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2664&auto=format&fit=crop",
        iconName: "ShoppingCart"
    },
    {
        slug: "rdp-service-booking",
        title: "RDP Service Booking",
        category: "Rapinno Digital Platform (RDP)",
        description: "Comprehensive appointment and slot management platform for service-based businesses.",
        elaboratedText: "Efficiently managing time and appointments is the core of any successful service business. RDP Service Booking is an advanced platform that automates the scheduling of services, staff, and physical assets. Whether you're a healthcare clinic or a professional services agency, our platform provides a intuitive user interface for your customers to book, reschedule, and pay for appointments. We automate the complexities of calendar sync and resource allocation, allowing your team to focus on delivery.",
        features: [
            "Intelligent Calendar Sync",
            "Automated Slot Management",
            "Staff Assignment & Tracking",
            "Customer Portal & SMS Alerts",
            "Integrated Billing & Deposits"
        ],
        benefits: [
            "Eliminated Double Bookings",
            "Reduced No-Show Rates",
            "Seamless Resource Allocation",
            "Improved Customer Experience"
        ],
        imageUrl: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop",
        iconName: "Calendar"
    },
    {
        slug: "rdp-social-platform",
        title: "RDP Social Platform",
        category: "Rapinno Digital Platform (RDP)",
        description: "Modular tools to build community-driven or social networking applications.",
        elaboratedText: "Building community-driven applications requires complex social architectures that are both engagement-focused and secure. RDP Social Platform provides a pre-built set of modules for profile management, content feeds, social interactions (likes, shares, comments), and direct messaging. These tools allow startups and businesses to rapidly build social networks, internal community tools, or niche engagement platforms without engineering the wheel from scratch.",
        features: [
            "User Profile & Network Management",
            "Real-time Content Feeds",
            "Social Interaction Engines",
            "Secure Direct Messaging",
            "Moderation & Privacy Tools"
        ],
        benefits: [
            "Rapid Community Deployment",
            "Engagement-focused Architecture",
            "Reduced Development Cycles",
            "Scalable Social Micro-interactions"
        ],
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
        iconName: "Share2"
    },
    {
        slug: "rdp-fleet-management",
        title: "RDP Fleet Management",
        category: "Rapinno Digital Platform (RDP)",
        description: "Advanced logistics and real-time vehicle tracking solutions for modern fleets.",
        elaboratedText: "Efficiency in logistics depends on real-time visibility and data-driven decision making. RDP Fleet Management provides a comprehensive suite for tracking vehicles, monitoring driver performance, and optimizing routes. By integrating GPS data with advanced dashboarding and predictive maintenance models, our platform helps fleet operators reduce fuel consumption, improve delivery times, and ensure the safety and longevity of their physical assets. We turn logistical data into a competitive advantage.",
        features: [
            "Real-time GPS Tracking",
            "Driver Behavior Analytics",
            "Route Optimization Engine",
            "Maintenance Scheduling Alerts",
            "Fuel Consumption Management"
        ],
        benefits: [
            "Lower Operational Expenses",
            "Improved Delivery Reliability",
            "Enhanced Fleet Safety",
            "Real-time Logistics Visibility"
        ],
        imageUrl: "https://images.unsplash.com/photo-1586528116311-ad86d7c490a1?q=80&w=2670&auto=format&fit=crop",
        iconName: "Truck"
    },
    {
        slug: "rdp-dms-document-management-system",
        title: "RDP DMS (Document Management System)",
        category: "Rapinno Digital Platform (RDP)",
        description: "Advanced Document Management System for secure corporate digital records.",
        elaboratedText: "In the modern office, information is only as valuable as it is accessible. RDP DMS is a centralized, secure digital repository for your organization's sensitive documents. From automated indexing and version control to advanced permissions and audit trails, our platform ensures your records are organized, accessible, and compliant with data privacy regulations. We replace the chaos of file storage with a structured environment that empowers your team with information.",
        features: [
            "Automated File Indexing",
            "Intelligent Version Control",
            "Deep Permissions & Security",
            "Integrated OCR Search",
            "Compliance & Audit Logging"
        ],
        benefits: [
            "Faster Information Retrieval",
            "Reduced Paper Dependency",
            "Ensured Data Compliance (GDPR)",
            "Eliminated Version Confusion"
        ],
        imageUrl: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2673&auto=format&fit=crop",
        iconName: "FileText"
    },
    {
        slug: "rdp-customer-service",
        title: "RDP Customer Service",
        category: "Rapinno Digital Platform (RDP)",
        description: "360° industry portal for lead management and client interaction.",
        elaboratedText: "RDP Customer Service provides an all-encompassing portal for organizations to manage the complete customer lifecycle. Specifically designed for real estate and service-heavy industries, the platform integrates web presence, advanced SEO, and sophisticated lead management into a single dashboard. From initial lead capture to long-term client support, we provide the tools needed to nurture relationships and drive business growth through superior customer engagement.",
        features: [
            "360° Lead Management Dashboard",
            "Search-Engine Optimized Portals",
            "Automated Inquiry Routing",
            "Integrated CRM Functionality",
            "Service Industry Workflow Templates"
        ],
        benefits: [
            "Unified Lead Capturing",
            "Maximized Conversion Rates",
            "Improved Response Times",
            "Comprehensive Client Visibility"
        ],
        imageUrl: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=2573&auto=format&fit=crop",
        iconName: "MousePointer2"
    },
    {
        slug: "object-detection",
        title: "Object Detection",
        category: "Rapinno IA Ecosystem",
        description: "Automated actions triggered by advanced visual recognition models.",
        elaboratedText: "Machine vision is transforming how physical businesses operate. Our Object Detection solution uses advanced computer vision models to identify, track, and react to physical objects in real-time. Whether it's quality control on a manufacturing line, automated inventory tracking in a warehouse, or security monitoring in a physical facility, our visual recognition models provide the autonomous oversight needed to reduce errors and improve operational awareness.",
        features: [
            "Real-time Visual Recognition",
            "Automated Alerting Models",
            "Custom Class Identification",
            "Video Feed Integration",
            "Low-latency Edge Processing"
        ],
        benefits: [
            "Reduced Quality Errors",
            "Automated Inventory Counts",
            "Enhanced Security Analysis",
            "Lower Labor Intensity"
        ],
        imageUrl: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=2670&auto=format&fit=crop",
        iconName: "ScanEye"
    },
    {
        slug: "image-classification",
        title: "Image Classification",
        category: "Rapinno IA Ecosystem",
        description: "AI categorization for quality control and industrial automation.",
        elaboratedText: "Categorizing massive volumes of visual data manually is impossible. Our Image Classification solution automates this process using deep learning models that can categorize images with human-level accuracy. From identifying damaged products on a belt to sorting medical imaging or categorizing massive digital archives, our classification engine provides the high-speed categorization needed for modern, data-driven automation.",
        features: [
            "Deep Learning Classifiers",
            "Industrial Sortation Integration",
            "Historical Data Labeling",
            "Quality Assurance Modules",
            "Custom Model Training"
        ],
        benefits: [
            "High-speed Data Sorting",
            "Unprecedented Accuracy",
            "Scalable Content Analysis",
            "Minimized Manual Inspection"
        ],
        imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=1974&auto=format&fit=crop",
        iconName: "Shapes"
    },
    {
        slug: "text-sentiment-analysis",
        title: "Text & Sentiment Analysis",
        category: "Rapinno IA Ecosystem",
        description: "Emotional context analysis to empower intelligent information extraction.",
        elaboratedText: "Data isn't just about what is being said, but how it's being said. Our Text & Sentiment Analysis solution uses Natural Language Processing (NLP) to go beyond keyword matching and understand the emotional context of a communication. We help organizations analyze customer feedback, monitor social media sentiment, and automate the triage of support inquiries based on their emotional urgency and underlying intent. We provide the emotional intelligence your digital workflows are missing.",
        features: [
            "Contextual Sentiment Scoring",
            "Multi-language Text Analysis",
            "Intent Recognition Models",
            "Urgency Detection & Routing",
            "Social Media Sentiment API"
        ],
        benefits: [
            "Empathic Customer Support",
            "Early Brand Risk Detection",
            "Automated Communication Triage",
            "Deep Market Understanding"
        ],
        imageUrl: "https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=2574&auto=format&fit=crop",
        iconName: "FileSearch"
    },
    {
        slug: "chatbot-solutions",
        title: "Chatbot Solutions",
        category: "Rapinno IA Ecosystem",
        description: "NLP-driven autonomous customer interaction for high-volume support.",
        elaboratedText: "In a 'get it now' world, instant responses are non-negotiable. RapinnoTech's Chatbot Solutions provide 24/7 autonomous customer interaction using advanced NLP and generative models. Our bots don't just follow scripts; they understand natural human language and can provide complex information, handle transactions, and resolve support tickets without human intervention. We help you provide premium customer service at infinite scale and a fraction of the cost.",
        features: [
            "Natural Language Interaction",
            "Transactional Integration",
            "Omni-channel Deployment",
            "Seamless Human Hand-off",
            "AI Knowledge Base Training"
        ],
        benefits: [
            "24/7 Instant Support",
            "Reduced CSAT Wait-times",
            "Exponential Load Capacity",
            "Dramatically Lower Support Costs"
        ],
        imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2506&auto=format&fit=crop",
        iconName: "MessageSquare"
    },
    {
        slug: "crm-tool",
        title: "CRM Tool",
        category: "Rapinno Marketing 360",
        description: "Lead discovery and sales pipeline dashboard for measurable business growth.",
        elaboratedText: "Our Marketing 360 CRM is not just a database; it's a sales acceleration engine. We provide a unified dashboard that visualizes the entire customer journey, from initial lead discovery to final conversion and retention. With integrated lead tracking, automated follow-ups, and advanced sales analytics, we help your marketing and sales teams align their efforts and focus on the opportunities with the highest probability of closing. We provide the data-driven clarity needed to scale your revenue.",
        features: [
            "Unified Lead Discovery",
            "Visual Sales Pipeline",
            "Automated Follow-up Tasks",
            "Performance KPIs & Tracking",
            "Third-party App Integration"
        ],
        benefits: [
            "Accelerated Sales Velocity",
            "Improved Marketing-Sales Link",
            "Eliminated Lead Leakage",
            "Clear ROI Visualization"
        ],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        iconName: "Layout"
    },
    {
        slug: "inside-sales",
        title: "Inside Sales",
        category: "Rapinno Marketing 360",
        description: "Cold calling and email strategies targeting key global decision-makers.",
        elaboratedText: "Identifying and reaching key decision-makers is the hardest part of the B2B sales cycle. Our Inside Sales service provides organizations with an elite team of sales professionals who specialize in outbound outreach. Using data-driven cold calling and targeted email strategies, we open doors and build pipelines for your internal sales team. We handle the heavy lifting of prospecting and initial qualification, allowing your closers to focus on high-value conversations.",
        features: [
            "Targeted Global Prospecting",
            "Cold Outreach Orchestration",
            "Initial Lead Qualification",
            "Appointment Setting Services",
            "CRM Enrichment & Strategy"
        ],
        benefits: [
            "Predictable Sales Pipeline",
            "Access to Top Decision Makers",
            "Optimized Sales Labor Focus",
            "Continuous Market Presence"
        ],
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2670&auto=format&fit=crop",
        iconName: "Phone"
    },
    {
        slug: "sales-as-a-service",
        title: "Sales as a Service",
        category: "Rapinno Marketing 360",
        description: "Turnkey sales organizations and global partner location services.",
        elaboratedText: "Scaling into new markets doesn't have to mean massive overhead. RapinnoTech provides 'Sales as a Service'—a turnkey sales organization that represents your brand and scales your revenue. We provide the people, the strategy, and the global network of partners needed to win in new territories. Whether you're an international startup entering a new country or an enterprise expanding its footprint, we provide a performance-ready sales engine that is fully aligned with your goals.",
        features: [
            "Turnkey Sales Teams",
            "Global Territory Management",
            "Partner Discovery & Onboarding",
            "Local Market Strategy",
            "Commission-driven Alignment"
        ],
        benefits: [
            "Low-overhead Global Scale",
            "Rapid Territory Entry",
            "Experienced Sales Talent",
            "Purely Performance-based ROI"
        ],
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
        iconName: "Users2"
    },
    {
        slug: "247-technical-support",
        title: "24/7 Technical Support",
        category: "Rapinno Marketing 360",
        description: "Technical troubleshooting and retention-focused product maintenance.",
        elaboratedText: "Retention is the foundation of long-term profitability. Our 24/7 Technical Support services ensure that your customers are never left in the dark. We provide around-the-clock troubleshooting, maintenance, and expert assistance for your digital products and services. Our global support team is not just reactive; we focus on root-cause analysis and proactive maintenance to ensure high availability and customer satisfaction. We turn your support organization into a retention powerhouse.",
        features: [
            "24/7 Multilingual Support",
            "Tier-1, 2, and 3 Troubleshooting",
            "SLA-driven Performance",
            "Proactive Maintenance Monitoring",
            "Customer Success Orchestration"
        ],
        benefits: [
            "Maximized Customer Retention",
            "24/7 Brand Reliability",
            "Reduced Support Overhead",
            "Superior Product Availability"
        ],
        imageUrl: "https://images.unsplash.com/photo-1521791136366-398517526ed8?q=80&w=2670&auto=format&fit=crop",
        iconName: "ShieldCheck"
    },
    {
        slug: "rapinno-assist",
        title: "Rapinno Assist",
        category: "Rapinno Data Digitization",
        description: "OCR and Machine Learning for converting paper/emails into digital analytics.",
        elaboratedText: "Analog data is a bottleneck to digital speed. Rapinno Assist is our specialized engine for high-speed data extraction. Combining advanced OCR with intelligent Machine Learning, it can 'read' paper documents, PDFs, and unstructured emails to extract critical information and convert it into structured digital formats. This data is then immediately available for your analytics dashboards and automated processes, eliminating manual data entry and all its associated errors.",
        features: [
            "Intelligent Document Reading",
            "Paper-to-Digital Ingestion",
            "Automated E-mail Extraction",
            "Structured Output Generation",
            "Contextual Text Correction"
        ],
        benefits: [
            "End of Manual Data Entry",
            "Zero Transcription Errors",
            "Massive processing Speed",
            "Actionable Analog Data"
        ],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        iconName: "Search"
    },
    {
        slug: "unstructured-data",
        title: "Unstructured Data Solution",
        category: "Rapinno Data Digitization",
        description: "Pattern recognition for improved corporate decision-making and insights.",
        elaboratedText: "Over 80% of enterprise data is unstructured—found in emails, logs, videos, and sensors. Our Unstructured Data Solution uses advanced pattern recognition and AI to transform this 'dark data' into actionable business intelligence. We help you find the trends and insights hidden within the chaos of your organization's unstructured information, empowering your executive team with a deeper, more comprehensive understanding of your operations and market position.",
        features: [
            "Pattern Discovery Engine",
            "Multi-source Data Ingestion",
            "Deep Semantic Search",
            "AI-driven Insight Reports",
            "Metadata Enrichment Modeling"
        ],
        benefits: [
            "Visibility into 'Dark Data'",
            "Informed Decision Clarity",
            "Improved Risk Forecasting",
            "Holistic Data Strategy"
        ],
        imageUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=2670&auto=format&fit=crop",
        iconName: "Activity"
    },
    {
        slug: "strategic-planning",
        title: "Strategic Planning",
        category: "RapiCon APS",
        description: "High-level visualization tools for long-term business goals and roadmaps.",
        elaboratedText: "Strategy requires clarity of vision. RapinnoCon's Strategic Planning solution provides high-level visualization and modeling tools for designing long-term business roads maps. By integrating disparate data sources and visualizing potential outcomes, we helps leadership teams model scenarios, set realistic long-term goals, and track their progress against a unified corporate strategy. We provide the cockpit needed to steer a modern global organization with precision.",
        features: [
            "Scenario & Outcome Modeling",
            "Long-term Roadmap Design",
            "Unified Strategy Dashboards",
            "Resource Forecast Visualization",
            "Market Trend Correlation"
        ],
        benefits: [
            "Absolute Executive Clarity",
            "Data-aligned Goal Setting",
            "Proactive Market Navigation",
            "Unified Leadership Vision"
        ],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        iconName: "LineChart"
    },
    {
        slug: "operational-optimization",
        title: "Operational Optimization",
        category: "RapiCon APS",
        description: "Real-time decision-support techniques based on daily operational data.",
        elaboratedText: "Optimization is the difference between surviving and thriving in a low-margin world. RapinnoCon's Operational Optimization platform provide real-time decision support for day-to-day operations. By analyzing live data from your production, supply chain, and logistics, our APS engine identifies immediate inefficiencies and suggests optimal routes of action. We help your managers make smarter, faster decisions that reduce waste and maximize throughput every single day.",
        features: [
            "Real-time Decision Support",
            "Daily Load Balancing Models",
            "Operational Bottleneck ID",
            "Live Efficiency Analytics",
            "Automated Resource Routing"
        ],
        benefits: [
            "Significant Waste Reduction",
            "Maximized Daily Throughput",
            "Agile Response capacity",
            "Data-driven Management"
        ],
        imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
        iconName: "Settings"
    },
    {
        slug: "it-resource-alignment",
        title: "IT Resource Alignment",
        category: "Rapinno Adaptive Sourcing",
        description: "Rapidly matching specialized technical talent to shifting market opportunities.",
        elaboratedText: "In a world of rapidly shifting technologies, having the right talent at the right time is your biggest challenge. Our IT Resource Alignment service provides elite, pre-vetted technical teams that can be rapidly integrated into your organization. We don't just 'staff'; we align technical talent to your specific project needs and cultural environment, ensuring that your organization has the horsepower needed to capitalize on new opportunities without the friction of long recruitment cycles.",
        features: [
            "Elite Technical Resource Pool",
            "Rapid Integration Model",
            "Skills-to-Needs Matching",
            "Agile Team Scaling",
            "Cultural Alignment vetting"
        ],
        benefits: [
            "Zero Recruitment Wait-times",
            "High-performing Agile Teams",
            "Reduced Hiring Risks",
            "Maximum Project Agility"
        ],
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
        iconName: "UserPlus"
    },
    {
        slug: "specialized-recruitment",
        title: "Specialized Recruitment",
        category: "Rapinno Adaptive Sourcing",
        description: "Sourcing performance-ready technical resources for agile global teams.",
        elaboratedText: "Generic recruitment fails when it comes to high-level engineering. Our Specialized Recruitment service focuses exclusively on identifying and securing performance-ready technical talent for your permanent team. Using our deep network within the technological hubs of India and North America, we source candidates who possess both the specific technical depth and the agile mindset needed to succeed in modern product environments. We find the engineers that other recruiters can't.",
        features: [
            "Deep Technical Vetting",
            "Global Hub Talent Sourcing",
            "Agile Personality Profiling",
            "Strategic Hiring Advisory",
            "High-level Engineering focus"
        ],
        benefits: [
            "Superior Talent Quality",
            "Long-term Technical Depth",
            "Optimized Hiring Velocity",
            "Technical Cultural Fit"
        ],
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
        iconName: "Search"
    },
    {
        slug: "cloud-managed",
        title: "Cloud Managed Services",
        category: "Rapinno Managed Services",
        description: "24/7 Azure, AWS, and GCP monitoring, optimization, and oversight.",
        elaboratedText: "Moving to the cloud is just the beginning; managing it is where the value is created. Rapinno's Cloud Managed Services provide 24/7 oversight of your AWS, Azure, or GCP infrastructure. We ensure high availability, peak performance, and absolute cost-optimization through continuous monitoring and automated scaling. We handle the complexities of the cloud, from security patching and database backups to disaster recovery, allowing your internal IT team to focus on innovation.",
        features: [
            "Multi-Cloud 24/7 Monitoring",
            "Continuous Cost Optimization",
            "Cloud Security Patching",
            "Elastic Load Management",
            "Disaster Recovery Automation"
        ],
        benefits: [
            "Ensured High Availability",
            "Dramatically Lower Cloud Costs",
            "Professional Operational Security",
            "Zero Downtime Peace of Mind"
        ],
        imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop",
        iconName: "CloudCog"
    },
    {
        slug: "managed-soc-managed-soc-solution",
        title: "Managed SOC (Managed SOC Solution)",
        category: "Rapinno Managed Services",
        description: "Log monitoring, risk mitigation, and absolute security compliance oversight.",
        elaboratedText: "Compliance and security are two sides of the same coin. Our Managed SOC solution provides comprehensive oversight of your security telemetry, ensuring both absolute protection and continuous compliance with regulations like GDPR, HIPAA, and ISO 27001. We provide rigorous log monitoring, automated risk mitigation, and a dedicated team of security analysts who act as an extension of your organization. We provide the absolute security oversight your stakeholders demand.",
        features: [
            "Automated Compliance Logging",
            "Regulatory Audit Support",
            "Real-time Threat Mitigation",
            "Dedicated Human Oversight",
            "Global Compliance Frameworks"
        ],
        benefits: [
            "Guaranteed Security compliance",
            "Reduced Audit Stress",
            "Immediate Threat Neutralization",
            "Elite Security Partnerships"
        ],
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        iconName: "Lock"
    }
];
