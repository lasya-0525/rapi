"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Globe,
    BrainCircuit,
    Target,
    FileSearch,
    BarChart,
    Users2,
    ShieldCheck,
    ShoppingCart,
    Calendar,
    Share2,
    Truck,
    FileText,
    MousePointer2,
    ScanEye,
    Shapes,
    MessageSquare,
    Layout,
    UserPlus,
    CloudCog,
    Activity,
    LineChart,
    Settings,
    Search,
    Lock
} from 'lucide-react';

const solutionsData = [
    {
        category: "Rapinno Digital Platform (RDP)",
        icon: <Globe className="w-8 h-8" />,
        description: "Rapid application development using pre-structured engines for urgent technological needs.",
        subSolutions: [
            { title: "RDP Ecommerce", desc: "Quick-deploy online retail modules for rapid market entry.", icon: <ShoppingCart className="w-5 h-5" /> },
            { title: "RDP Service Booking", desc: "Comprehensive appointment and slot management platform.", icon: <Calendar className="w-5 h-5" /> },
            { title: "RDP Social Platform", desc: "Tools to build community-driven or social networking applications.", icon: <Share2 className="w-5 h-5" /> },
            { title: "RDP Fleet Management", desc: "Advanced logistics and vehicle tracking solutions.", icon: <Truck className="w-5 h-5" /> },
            { title: "RDP DMS", desc: "Advanced Document Management System for corporate digital records.", icon: <FileText className="w-5 h-5" /> },
            { title: "RDP Customer Service", desc: "360° Real Estate & Service industry portal (Web, SEO, Lead Management).", icon: <MousePointer2 className="w-5 h-5" /> }
        ]
    },
    {
        category: "Rapinno IA Ecosystem",
        icon: <BrainCircuit className="w-8 h-8" />,
        description: "Intelligent Automation merging BPM with task-level Artificial Intelligence.",
        subSolutions: [
            { title: "Object Detection", desc: "Automated actions triggered by advanced visual recognition models.", icon: <ScanEye className="w-5 h-5" /> },
            { title: "Image Classification", desc: "AI categorization for quality control and industrial automation.", icon: <Shapes className="w-5 h-5" /> },
            { title: "Text & Sentiment", desc: "Emotional context analysis to empower intelligent RPA bots.", icon: <FileSearch className="w-5 h-5" /> },
            { title: "Chatbot Solutions", desc: "NLP-driven autonomous customer interaction for high-volume support.", icon: <MessageSquare className="w-5 h-5" /> }
        ]
    },
    {
        category: "Rapinno Marketing 360",
        icon: <Target className="w-8 h-8" />,
        description: "Unified brand communication and sales acceleration system.",
        subSolutions: [
            { title: "CRM Tool", desc: "Lead discovery and sales pipeline dashboard for measurable growth.", icon: <Layout className="w-5 h-5" /> },
            { title: "Inside Sales", desc: "Cold calling and email strategies targeting key decision-makers.", icon: <Phone className="w-5 h-5" /> },
            { title: "Sales as a Service", desc: "Turnkey sales organizations and global partner location services.", icon: <Users2 className="w-5 h-5" /> },
            { title: "24/7 Support", desc: "Technical troubleshooting and retention-focused product maintenance.", icon: <ShieldCheck className="w-5 h-5" /> }
        ]
    },
    {
        category: "Rapinno Data Digitization",
        icon: <FileSearch className="w-8 h-8" />,
        description: "Converting unstructured data into actionable digital insights.",
        subSolutions: [
            { title: "Rapinno Assist", desc: "OCR and Machine Learning for converting paper/emails to analytics.", icon: <Search className="w-5 h-5" /> },
            { title: "Unstructured Data", desc: "Pattern recognition for improved corporate decision-making.", icon: <Activity className="w-5 h-5" /> }
        ]
    },
    {
        category: "RapiCon APS",
        icon: <BarChart className="w-8 h-8" />,
        description: "Advanced Planning Systems for complex logistics and production environments.",
        subSolutions: [
            { title: "Strategic Planning", desc: "High-level visualization tools for long-term business goals.", icon: <LineChart className="w-5 h-5" /> },
            { title: "Operational Optimization", desc: "Real-time decision-support techniques based on daily data.", icon: <Settings className="w-5 h-5" /> }
        ]
    },
    {
        category: "Rapinno Adaptive Sourcing",
        icon: <Users2 className="w-8 h-8" />,
        description: "Dynamic IT staffing and agile resource alignment.",
        subSolutions: [
            { title: "IT Resource Alignment", desc: "Rapidly matching technical talent to shifting market opportunities.", icon: <UserPlus className="w-5 h-5" /> },
            { title: "Specialized Recruitment", desc: "Sourcing performance-ready technical resources for agile teams.", icon: <Search className="w-5 h-5" /> }
        ]
    },
    {
        category: "Rapinno Managed Services",
        icon: <CloudCog className="w-8 h-8" />,
        description: "Continuous infrastructure and security oversight.",
        subSolutions: [
            { title: "Cloud Managed", desc: "24/7 Azure, AWS, and GCP monitoring and optimization.", icon: <CloudCog className="w-5 h-5" /> },
            { title: "Managed SOC", desc: "Log monitoring, risk mitigation, and compliance (GDPR/HIPAA).", icon: <Lock className="w-5 h-5" /> }
        ]
    }
];

export default function SolutionsPage() {
    return (
        <main className="relative min-h-screen text-white selection:bg-white/20 overflow-x-hidden">
            <div className="relative z-10 container mx-auto px-5 lg:px-10 pt-32 pb-20">
                {/* Page Header */}
                <div className="max-w-4xl mb-32">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] lg:text-[8vw] font-normal leading-[0.9] tracking-tighter mb-12"
                    >
                        S<i className="font-serif italic mr-1">o</i>lut<i className="font-serif italic mr-1">i</i>ons
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl font-light text-white/50 leading-relaxed"
                    >
                        A comprehensive suite of specialized platforms and frameworks designed to solve specific business hurdles with elite precision.
                    </motion.p>
                </div>

                {/* Categories Grid */}
                <div className="space-y-24">
                    {solutionsData.map((category, catIndex) => (
                        <section key={category.category} className="relative">
                            <div className="flex flex-col lg:flex-row gap-16">
                                {/* Category Info */}
                                <div className="lg:w-1/3">
                                    <motion.div
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="sticky top-32 glass-card p-10"
                                    >
                                        <div className="text-white/40 mb-8">{category.icon}</div>
                                        <h2 className="text-3xl font-normal mb-4 uppercase tracking-tight leading-tight">{category.category}</h2>
                                        <p className="text-white/60 font-light leading-relaxed">
                                            {category.description}
                                        </p>
                                        <div className="mt-12 pt-8 border-t border-white/10">
                                            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">Suite {catIndex + 1}</span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Sub-solutions Grid */}
                                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {category.subSolutions.map((solution, index) => (
                                        <motion.div
                                            key={solution.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="glass-card p-8 group hover:bg-white/5 transition-colors cursor-default"
                                        >
                                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                                <div className="text-white/60 group-hover:text-white transition-colors">
                                                    {solution.icon}
                                                </div>
                                            </div>
                                            <h3 className="text-xl font-normal mb-4 group-hover:translate-x-1 transition-transform">{solution.title}</h3>
                                            <p className="text-sm font-light leading-relaxed text-white/40 group-hover:text-white/60 transition-colors">
                                                {solution.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                {/* Global Footer Teaser */}
                <div className="mt-40 text-center pb-32">
                    <p className="text-[12px] uppercase tracking-[0.4em] opacity-40 mb-8">Ready for a tailor-made solution?</p>
                    <a href="/services" className="text-4xl md:text-6xl font-light hover:opacity-50 transition-opacity">
                        Explore Ser<i className="font-serif italic">v</i>ices
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

                i {
                font-style: italic;
                font-family: serif;
                }
            `}</style>
        </main>
    );
}

// Simple fallback for Lucide icons not found in the import list above
function Phone({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    );
}
