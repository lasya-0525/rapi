"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BouncyCardsFeatures } from '@/components/sections/bouncy-cards-features';
import {
    Code2,
    Cpu,
    BarChart3,
    ShieldCheck,
    Zap,
    Rocket,
    Layers,
    Search,
    Bot,
    Network,
    Database,
    Cloud,
    Fingerprint,
    Activity,
    Lock,
    Workflow,
    Server,
    Smartphone,
    CheckCircle2,
    LineChart,
    HardDrive
} from 'lucide-react';

const servicesData = [
    {
        category: "Application Engineering",
        icon: <Code2 className="w-8 h-8" />,
        description: "Building and modernizing software solutions for the digital age.",
        items: [
            {
                title: "Rapid Software Development",
                desc: "Focused on urgent client needs with proven delivery models.",
                capabilities: ["Mobile Apps & Websites", "Online Stores & Chatbots"],
                icon: <Zap className="w-5 h-5" />
            },
            {
                title: "Innovative Product Development",
                desc: "End-to-end solutions for startups and enterprises.",
                capabilities: ["Conceptualization & Roadmapping", "Startup Brand Building"],
                icon: <Rocket className="w-5 h-5" />
            },
            {
                title: "Full Stack Development",
                desc: "Robust front-to-back engineering and infrastructure.",
                capabilities: ["Front-end Prototyping", "API Design & Backend", "Web Hosting"],
                icon: <Layers className="w-5 h-5" />
            },
            {
                title: "Quality Engineering",
                desc: "Comprehensive validation across all digital platforms.",
                capabilities: ["Functional (Unit, Integration)", "Performance (Load, Stress)", "Automation (Selenium)", "IoT & Wearable Testing"],
                icon: <CheckCircle2 className="w-5 h-5" />
            },
            {
                title: "Tech Innovation Consulting",
                desc: "Strategic advisory for digital transformation.",
                capabilities: ["Product Strategy", "IT Management"],
                icon: <Activity className="w-5 h-5" />
            }
        ]
    },
    {
        category: "NextGen Tech",
        icon: <Cpu className="w-8 h-8" />,
        description: "Leveraging emerging technologies to drive futuristic business growth.",
        items: [
            {
                title: "Intelligent Automation (IA)",
                desc: "AI-powered processes for complex environments.",
                capabilities: ["Machine Learning & NLP", "Speech Recognition"],
                icon: <Bot className="w-5 h-5" />
            },
            {
                title: "Robotic Process Automation",
                desc: "Enhancing operational efficiency through task bots.",
                capabilities: ["Task Automation", "Operational Efficiency"],
                icon: <Cpu className="w-5 h-5" />
            },
            {
                title: "Blockchain",
                desc: "Secure, decentralized ledger implementations.",
                capabilities: ["Decentralized Ledgers"],
                icon: <Network className="w-5 h-5" />
            },
            {
                title: "Cloud Services",
                desc: "Comprehensive strategy, migration and management.",
                capabilities: ["SaaS, PaaS, IaaS Strategy", "AWS, Azure, GCP Migration", "24/7 Managed Operations"],
                icon: <Cloud className="w-5 h-5" />
            },
            {
                title: "Internet of Things (IoT)",
                desc: "Connecting the physical and digital worlds.",
                capabilities: ["Sensor & Firmware", "Web/Mobile Infrastructure"],
                icon: <Zap className="w-5 h-5" />
            }
        ]
    },
    {
        category: "Business Process Engineering",
        icon: <BarChart3 className="w-8 h-8" />,
        description: "Optimizing organizational workflows through digital transformation.",
        items: [
            {
                title: "Enterprise Resource Planning",
                desc: "Real-time core business process management.",
                capabilities: ["Core Process Management"],
                icon: <Workflow className="w-5 h-5" />
            },
            {
                title: "Human Capital Management",
                desc: "Modern workforce management technologies.",
                capabilities: ["Workforce Technologies"],
                icon: <Users2 className="w-5 h-5" />
            },
            {
                title: "Big Data Analytics",
                desc: "Insights that drive measurable performance gains.",
                capabilities: ["Data Insights", "Business Performance"],
                icon: <LineChart className="w-5 h-5" />
            },
            {
                title: "Data Digitization",
                desc: "Computer vision and ML for data transformation.",
                capabilities: ["CV & ML Transformation"],
                icon: <HardDrive className="w-5 h-5" />
            },
            {
                title: "Business Process Management",
                desc: "Streamlining corporate lifecycles and design.",
                capabilities: ["Lifecycle Design & Optimization"],
                icon: <Activity className="w-5 h-5" />
            }
        ]
    },
    {
        category: "Security Services",
        icon: <ShieldCheck className="w-8 h-8" />,
        description: "Comprehensive protection for systems, data, and infrastructure.",
        items: [
            {
                title: "Security Management",
                desc: "Strategic risk assessment and program design.",
                capabilities: ["Enterprise Program Design", "Risk & Disaster Recovery"],
                icon: <ShieldCheck className="w-5 h-5" />
            },
            {
                title: "VAPT",
                desc: "Proactive scanning and simulated cyber-attacks.",
                capabilities: ["Security Scanning", "Simulated Attacks"],
                icon: <Search className="w-5 h-5" />
            },
            {
                title: "Identity Management (IAM)",
                desc: "Role-based control with MFA and SSO integration.",
                capabilities: ["MFA, SSO, Role-based Access"],
                icon: <Lock className="w-5 h-5" />
            },
            {
                title: "Managed SOC",
                desc: "24/7 network monitoring and incident alerting.",
                capabilities: ["24/7 Log Monitoring", "Event Alerting"],
                icon: <Server className="w-5 h-5" />
            },
            {
                title: "Network & Firewall",
                desc: "Expert design for Cisco, Palo Alto, and Fortinet.",
                capabilities: ["Cisco, Palo Alto, Fortinet Design"],
                icon: <ShieldCheck className="w-5 h-5" />
            }
        ]
    }
];

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen text-white selection:bg-white/20 overflow-x-hidden">


            <div className="relative z-10 container mx-auto px-5 lg:px-10 content-page pb-20">
                {/* Page Header */}
                <div className="max-w-4xl mb-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] lg:text-[8vw] font-normal leading-[0.9] tracking-tighter mb-12"
                    >
                        Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-light text-white/50 leading-relaxed"
                    >
                        A high-performance hierarchy of technological capabilities designed to solve complex challenges through elite engineering.
                    </motion.p>
                </div>

                {/* Bouncy card grid per category */}
                {servicesData.map((category) => (
                    <BouncyCardsFeatures key={category.category} category={category} />
                ))}

                {/* Global Footer Teaser */}
                <div className="mt-40 text-center pb-32">
                    <p className="text-[12px] uppercase tracking-[0.4em] opacity-40 mb-8">Ready to innovate?</p>
                    <a href="/about" className="text-4xl md:text-6xl font-light hover:opacity-50 transition-opacity">
                        Work with us
                    </a>
                </div>
            </div>

            <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
        }


      `}</style>
        </main>
    );
}

// Simple fallback for Users2 icon
function Users2({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M14 19a6 6 0 0 0-12 0" />
            <circle cx="8" cy="9" r="4" />
            <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" />
        </svg>
    );
}
