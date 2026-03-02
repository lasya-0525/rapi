export interface ServiceDetail {
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

export const servicesData: ServiceDetail[] = [
    {
        slug: "rapid-software-development",
        title: "Rapid Software Development",
        category: "Application Engineering",
        description: "Urgent technological needs met with elite engineering and proven delivery models.",
        elaboratedText: "In today's fast-paced digital economy, speed-to-market is the primary differentiator. RapinnoTech's Rapid Software Development service is designed for organizations that need to transition from concept to code in record time. We leverage elite engineering practices, agile methodologies, and a library of pre-built modules to deliver high-quality web and mobile applications. Our focus is on solving urgent business problems without compromising on scalability or security.",
        features: [
            "Agile Development Framework",
            "MVP Development in 4-6 Weeks",
            "Cross-platform Mobile Solutions",
            "Scalable Web Architecture",
            "Continuous Integration/Deployment"
        ],
        benefits: [
            "Faster Time to Market",
            "Reduced Development Costs",
            "Adaptable Technical Architecture",
            "Immediate Business Impact"
        ],
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2670&auto=format&fit=crop",
        iconName: "Zap"
    },
    {
        slug: "innovative-product-development",
        title: "Innovative Product Development",
        category: "Application Engineering",
        description: "End-to-end product engineering from conceptualization to global scale.",
        elaboratedText: "We don't just build software; we engineer products that disrupt industries. Our Innovative Product Development service partners with startups and enterprises to navigate the entire product lifecycle. From initial roadmapping and brand building to full-scale engineering and maintenance, we ensure your product is built on a foundation of innovation. We specialize in creating unique user experiences that drive engagement and long-term loyalty.",
        features: [
            "Product Strategy & Roadmapping",
            "User Research & UX Design",
            "Full-cycle Product Engineering",
            "Brand Identity Design",
            "Future-proof Technology Stack"
        ],
        benefits: [
            "User-Centric Innovation",
            "Sustainable Product Growth",
            "Competitive Market Advantage",
            "End-to-End Delivery Assurance"
        ],
        imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2672&auto=format&fit=crop",
        iconName: "Rocket"
    },
    {
        slug: "full-stack-development",
        title: "Full Stack Development",
        category: "Application Engineering",
        description: "Robust front-to-back engineering and cloud infrastructure.",
        elaboratedText: "Our Full Stack Development team bridges the gap between sophisticated user interfaces and powerful backend architectures. We specialize in modern frameworks like React, Next.js, and Node.js, combined with robust database solutions. Whether it's a high-traffic e-commerce platform or a complex enterprise portal, our engineers ensure seamless integration across the entire technology stack, including cloud hosting and API orchestration.",
        features: [
            "Modern Front-end Architecture",
            "Scalable Backend API Design",
            "Database Modeling & Migration",
            "Microservices Orchestration",
            "Cloud-Native Deployment"
        ],
        benefits: [
            "Seamless Technical Integration",
            "High Performance & Low Latency",
            "Elastic Scalability",
            "Comprehensive Data Integrity"
        ],
        imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop",
        iconName: "Layers"
    },
    {
        slug: "quality-engineering",
        title: "Quality Engineering",
        category: "Application Engineering",
        description: "Comprehensive validation across all digital platforms and devices.",
        elaboratedText: "Quality is not an afterthought at RapinnoTech; it's engineered into every line of code. Our Quality Engineering services go beyond traditional testing to focus on preventative defects and performance optimization. We provide wide-ranging validation across web, mobile, IoT, and wearable platforms, using both automated and manual techniques to ensure your software is reliable, secure, and ready for the real world.",
        features: [
            "Automated Testing (Selenium, Playwright)",
            "Performance & Load Testing",
            "Security & Vulnerability Assessment",
            "IoT & Device Compatibility Testing",
            "AI-Driven Quality Insights"
        ],
        benefits: [
            "Reduced Post-Release Bugs",
            "Improved Platform Reliability",
            "Enhanced Brand Trust",
            "Optimized User Performance"
        ],
        imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop",
        iconName: "CheckCircle2"
    },
    {
        slug: "tech-innovation-consulting",
        title: "Tech Innovation Consulting",
        category: "Application Engineering",
        description: "Strategic advisory to help organizations navigate digital transformation.",
        elaboratedText: "In an era of constant technological upheaval, strategic clarity is essential. Our Tech Innovation Consulting service helps organizations identify emerging opportunities and navigate complex digital transformations. We provide high-level advisory on product strategy, IT management, and legacy modernization, ensuring your technology investments are aligned with your long-term business objectives. We transform technology from a cost center into a strategic engine for growth.",
        features: [
            "Digital Transformation Strategy",
            "Legacy System Modernization",
            "IT Infrastructure Audits",
            "Innovation Labs & Prototyping",
            "Technology Trend Analysis"
        ],
        benefits: [
            "Clear Digital Roadmap",
            "Minimized Transformation Risks",
            "Optimized IT Spending",
            "Increased Business Agility"
        ],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
        iconName: "Activity"
    },
    {
        slug: "intelligent-automation-ia",
        title: "Intelligent Automation (IA)",
        category: "NextGen Tech",
        description: "Merging Artificial Intelligence with Robotic Process Automation for complex workflows.",
        elaboratedText: "Intelligent Automation represents the next frontier of operational efficiency. By combining the execution power of RPA with the decision-making capabilities of AI and Machine Learning, we create autonomous workflows that handle complex, unstructured data. Our IA solutions can read documents, analyze sentiments, and make data-driven decisions, allowing your human workforce to focus on higher-value creative and strategic tasks.",
        features: [
            "Machine Learning Integration",
            "Natural Language Processing (NLP)",
            "Cognitive Decision Models",
            "Unstructured Data Extraction",
            "Predictive Analytics"
        ],
        benefits: [
            "Hyper-Efficient Operations",
            "Reduced Processing Errors",
            "Enhanced Customer Experience",
            "Exponential Scalability"
        ],
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
        iconName: "Bot"
    },
    {
        slug: "robotic-process-automation",
        title: "Robotic Process Automation (RPA)",
        category: "NextGen Tech",
        description: "Transforming manual, repetitive tasks into high-speed digital workflows.",
        elaboratedText: "RPA is the cornerstone of the modern digital workforce. Our RPA services focus on automating high-volume, rules-based tasks that currently drain your team's productivity. Using industry-leading platforms like UiPath and Automation Anywhere, we deploy 'bots' that can navigate systems, enter data, and manage transactions with 100% accuracy and 24/7 availability. We help you achieve immediate ROI by streamlining your core business processes.",
        features: [
            "Task-level Automation",
            "Workflow Orchestration",
            "ROI and Feasibility Analysis",
            "Bot Lifecycle Management",
            "Legacy System Integration"
        ],
        benefits: [
            "Dramatic Productivity Gains",
            "Zero-Error Rate",
            "Rapid ROI and Payback",
            "Liberated Workforce Talent"
        ],
        imageUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd05a?q=80&w=2506&auto=format&fit=crop",
        iconName: "Cpu"
    },
    {
        slug: "blockchain",
        title: "Blockchain",
        category: "NextGen Tech",
        description: "Secure, decentralized ledger implementations for trust and transparency.",
        elaboratedText: "Blockchain technology is redefining trust in global commerce. RapinnoTech explores and implements decentralized ledger solutions that provide immutable transparency and security. From smart contracts for automated agreements to secure supply chain tracking and decentralized finance applications, we help you leverage blockchain to reduce friction in your business operations and build a foundation of absolute transparency for your customers and partners.",
        features: [
            "Smart Contract Development",
            "Decentralized App (DApp) Engineering",
            "Private and Public Ledger Setup",
            "Identity Management Systems",
            "Tokenization & Asset Tracking"
        ],
        benefits: [
            "Absolute Data Integrity",
            "Reduced Intermediary Costs",
            "Enhanced Stakeholder Trust",
            "Unmatched Auditability"
        ],
        imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2532&auto=format&fit=crop",
        iconName: "Network"
    },
    {
        slug: "cloud-services",
        title: "Cloud Services",
        category: "NextGen Tech",
        description: "Comprehensive cloud strategy, migration, and managed operations.",
        elaboratedText: "The cloud is not a destination; it's a catalyst for innovation. RapinnoTech provides end-to-end cloud services that transition your organization from on-premise limitations to cloud-native possibilities. We specialize in AWS, Azure, and Google Cloud, providing expert migration assistance, serverless architecture design, and 24/7 managed operations. Our goal is to ensure your infrastructure is secure, cost-optimized, and capable of infinite scale.",
        features: [
            "Hybrid & Multi-Cloud Strategy",
            "Cloud Migration & Modernization",
            "Serverless Architecture Design",
            "FinOps & Cost Optimization",
            "24/7 Managed Cloud Ops"
        ],
        benefits: [
            "Infinite Infrastructure Agility",
            "Optimized Operational Costs",
            "Global Performance Reach",
            "Business Continuity Assurance"
        ],
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
        iconName: "Cloud"
    },
    {
        slug: "internet-of-things",
        title: "Internet of Things (IoT)",
        category: "NextGen Tech",
        description: "Connecting the physical and digital worlds for real-time insights.",
        elaboratedText: "IoT is transforming physical assets into live data streams. RapinnoTech builds integrated IoT ecosystems that connect devices, sensors, and machines to powerful digital infrastructure. We handle everything from firmware engineering and sensor integration to the web and mobile platforms that visualize and analyze physical data. Whether it's smart manufacturing (Industry 4.0) or connected health devices, we enable real-time visibility into your physical operations.",
        features: [
            "Sensor & Hardware Integration",
            "Embedded Systems Engineering",
            "Real-time Data Streaming",
            "IoT Platform Architecture",
            "Predictive Maintenance Models"
        ],
        benefits: [
            "Real-time Operational Visibility",
            "Predictive Asset Maintenance",
            "Enhanced Product Intelligence",
            "Optimized Resource Usage"
        ],
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2670&auto=format&fit=crop",
        iconName: "Zap"
    },
    {
        slug: "enterprise-resource-planning-erp",
        title: "Enterprise Resource Planning (ERP)",
        category: "Business Process Engineering",
        description: "Core business process management for real-time organizational control.",
        elaboratedText: "An effective ERP is the nervous system of an enterprise. RapinnoTech specializes in implementing and customizing core business management systems that unify finance, supply chain, production, and CRM. We help organizations break down data silos and achieve real-time visibility into their entire operation. Whether it's a legacy system upgrade or a modern cloud-ERP implementation, we ensure your core processes are streamlined and integrated.",
        features: [
            "Functional ERP Implementation",
            "Custom Module Development",
            "Legacy System Migration",
            "Real-time Dashboarding",
            "Supply Chain Optimization"
        ],
        benefits: [
            "Unified Enterprise Data",
            "Streamlined Core Workflows",
            "Informed Executive Decisions",
            "Eliminated Information Silos"
        ],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        iconName: "Workflow"
    },
    {
        slug: "human-capital-management-hcm",
        title: "Human Capital Management (HCM)",
        category: "Business Process Engineering",
        description: "Modern workforce technologies to empower and manage your talent.",
        elaboratedText: "Your people are your most valuable asset. Our HCM tech solutions focus on modernizing the entire employee lifecycle—from recruitment and onboarding to performance management and payroll. We implement sophisticated platforms that enhance the employee experience while providing HR leaders with actionable insights into workforce productivity, engagement, and retention. We help you build a more agile and data-driven HR organization.",
        features: [
            "Workforce Management Platforms",
            "Recruitment & ATS Integration",
            "Performance Analytics",
            "Payroll & Compliance Automation",
            "Employee Wellness Portals"
        ],
        benefits: [
            "Enhanced Employee Engagement",
            "Data-Driven HR Strategy",
            "Automated Compliance",
            "Top Talent Retention"
        ],
        imageUrl: "https://images.unsplash.com/photo-1521791136366-398517526ed8?q=80&w=2670&auto=format&fit=crop",
        iconName: "Users2"
    },
    {
        slug: "big-data-analytics",
        title: "Big Data Analytics",
        category: "Business Process Engineering",
        description: "Converting massive datasets into measurable performance insights.",
        elaboratedText: "Data is the new oil, but only if it's refined. Our Big Data Analytics service helps organizations make sense of the vast amounts of information they generate. We deploy advanced data engineering and visualization tools that uncover patterns, predict trends, and identify new business opportunities. From real-time streaming analytics to historical trend modeling, we empower your team with the insights needed to drive growth and efficiency.",
        features: [
            "Data Lake & Warehouse Setup",
            "Predictive Modeling & AI",
            "Real-time Stream Processing",
            "BI Dashboard Implementation",
            "Data Governance & Quality"
        ],
        benefits: [
            "Faster, Smarter Decisions",
            "Uncovered Growth Opportunities",
            "Optimized Cost Structures",
            "Superior Customer Insights"
        ],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
        iconName: "LineChart"
    },
    {
        slug: "data-digitization",
        title: "Data Digitization",
        category: "Business Process Engineering",
        description: "Leveraging CV and ML to transform unstructured analog data to digital assets.",
        elaboratedText: "The bridge to digital transformation often starts with analog data. Our Data Digitization service uses advanced Computer Vision (CV) and Machine Learning (ML) to convert physical documents, hand-written logs, and unstructured digital files into high-quality, searchable data assets. We help organizations unlock the value of their historical records and physical archives, making them accessible to modern analytics and automated workflows.",
        features: [
            "OCR & Intelligent Extraction",
            "Document Classification Models",
            "Handwriting Recognition (HTR)",
            "Bulk Archive Digitization",
            "Cloud-based Data Retrieval"
        ],
        benefits: [
            "Unlocked Historical Value",
            "Instant Data Accessibility",
            "Searchable Digital Archives",
            "Foundation for Automation"
        ],
        imageUrl: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2673&auto=format&fit=crop",
        iconName: "HardDrive"
    },
    {
        slug: "business-process-management",
        title: "Business Process Management (BPM)",
        category: "Business Process Engineering",
        description: "Systematic lifecycle design and optimization for corporate workflows.",
        elaboratedText: "Inefficient processes are the silent budget killers of modern enterprises. Our BPM services take a structured approach to modeling, analyzing, and improving your corporate workflows. We map out end-to-end lifecycles and identify bottlenecks, redundancies, and opportunities for automation. By streamlining your fundamental processes, we help you achieve greater organizational agility, better compliance, and a significantly lower cost of operations.",
        features: [
            "Process Discovery & Mapping",
            "Workflow Optimization Analysis",
            "BPM Software Implementation",
            "Performance KPI Tracking",
            "Agile Process Governance"
        ],
        benefits: [
            "Lower Operational Overhead",
            "Enhanced Process Agility",
            "Guaranteed Compliance",
            "Superior Stakeholder Output"
        ],
        imageUrl: "https://images.unsplash.com/photo-1454165833767-027ff33027ef?q=80&w=2670&auto=format&fit=crop",
        iconName: "Activity"
    },
    {
        slug: "security-management",
        title: "Security Management",
        category: "Security Services",
        description: "Enterprise program design, risk assessment, and disaster recovery planning.",
        elaboratedText: "In an Increasingly hostile digital landscape, security must be built into the organizational culture. Our Security Management service provides strategic oversight of your entire defensive posture. We design enterprise security programs, perform rigorous risk assessments, and establish robust disaster recovery plans. We ensure your organization is not just defensive, but resilient—capable of identifying, neutralizing, and recovering from any cyber threat.",
        features: [
            "ISO 27001 & Compliance Audit",
            "Disaster Recovery Planning",
            "Security Policy Framework",
            "Business Impact Analysis",
            "Chief Security Officer (vCISO)"
        ],
        benefits: [
            "Strengthened Cyber Resilience",
            "Guaranteed Regulatory Compliance",
            "Protected Corporate Assets",
            "Business Continuity Peace of Mind"
        ],
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        iconName: "ShieldCheck"
    },
    {
        slug: "vapt-vulnerability-penetration-testing",
        title: "VAPT (Vulnerability & Penetration Testing)",
        category: "Security Services",
        description: "Proactive scanning and simulated cyber-attacks to identify weaknesses.",
        elaboratedText: "The best way to stop a hacker is to think like one. Our VAPT services provide rigorous, proactive assessments of your network, web applications, and physical infrastructure. We conduct deep vulnerability scanning and simulated penetration tests to identity hidden backdoors and architectural weaknesses. By identifying vulnerabilities before bad actors do, we provide you with the actionable intelligence needed to harden your defenses.",
        features: [
            "Network Penetration Testing",
            "Web & Mobile App Security",
            "Cloud Infrastructure Audit",
            "Social Engineering Simulation",
            "Remediation Roadmapping"
        ],
        benefits: [
            "Neutralized Path for Attackers",
            "Deep Vulnerability Insights",
            "Validated Defensive Controls",
            "Strengthened Reputation"
        ],
        imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2670&auto=format&fit=crop",
        iconName: "Search"
    },
    {
        slug: "identity-management",
        title: "Identity & Access Management (IAM)",
        category: "Security Services",
        description: "Role-based access control with MFA and SSO integration.",
        elaboratedText: "Identity is the new perimeter. Our IAM solutions ensure that only the right people have the right access to the right resources at the right time. We implement role-based access controls, Multi-Factor Authentication (MFA), and Single Sign-On (SSO) systems that provide a seamless user experience while dramatically reducing the risk of unauthorized access. We help you secure your digital identity across cloud, on-premise, and hybrid environments.",
        features: [
            "SSO & MFA Implementation",
            "Privileged Access Management",
            "Role-Based Access Control",
            "User Provisioning Automation",
            "Identity Governance & Admin"
        ],
        benefits: [
            "Eliminated Identity Breaches",
            "Simplified User Logins",
            "Total Access Visibility",
            "Automated Compliance Logs"
        ],
        imageUrl: "https://images.unsplash.com/photo-1510511459019-5dee99c4859d?q=80&w=2670&auto=format&fit=crop",
        iconName: "Lock"
    },
    {
        slug: "managed-soc-security-operations-center",
        title: "Managed SOC (Security Operations Center)",
        category: "Security Services",
        description: "24/7 network monitoring, log analysis, and incident alerting.",
        elaboratedText: "Threats never sleep, and neither do we. RapinnoTech's Managed SOC provides around-the-clock visibility into your network security. We deploy advanced monitoring tools that analyze logs, detect anomalies, and alert your team to potential incidents in real-time. Our global team of security analysts provides the expert oversight needed to identify sophisticated threats that automated tools might miss, ensuring your organization remains secure 24/7/365.",
        features: [
            "24/7 SIEM Monitoring",
            "Incident Detection & Alerting",
            "Threat Hunting & Intelligence",
            "Forensic Log Analysis",
            "Global Security Compliance"
        ],
        benefits: [
            "Immediate Incident Response",
            "Expert Global Oversight",
            "Reduced Mean-Time-to-Detect",
            "24/7 Peace of Mind"
        ],
        imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        iconName: "Server"
    },
    {
        slug: "network-firewall",
        title: "Network & Firewall Design",
        category: "Security Services",
        description: "Expert infrastructure design for Cisco, Palo Alto, and Fortinet platforms.",
        elaboratedText: "A robust network is the foundation of digital security. Our Network & Firewall Design service provides expert architecture and implementation for industry-leading security platforms including Cisco, Palo Alto, and Fortinet. We design segmented network architectures that minimize the 'blast radius' of potential breaches and ensure high availability for your critical business applications. From load balancer setup to secure VPN configurations, we build the walls that keep your data safe.",
        features: [
            "Firewall Architecture Design",
            "Secure Network Segmentation",
            "Cisco, Palo Alto, Fortinet Ops",
            "High Availability Clustering",
            "Secure Remote VPN Setup"
        ],
        benefits: [
            "Hardened Network Perimeter",
            "Minimized Internal Exposure",
            "Optimal Traffic Performance",
            "Uninterrupted Security Ops"
        ],
        imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=2686&auto=format&fit=crop",
        iconName: "ShieldCheck"
    }
];
