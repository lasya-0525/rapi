"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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
    Lock,
    ArrowUpRight,
} from "lucide-react";

const IMG_PADDING = 12;

const PARALLAX_IMAGES = [
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2532&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2615&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2670&auto=format&fit=crop",
];

type SubSolution = {
    title: string;
    desc: string;
    icon: React.ReactNode;
};

type SolutionCategory = {
    category: string;
    icon: React.ReactNode;
    description: string;
    subSolutions: SubSolution[];
};

const solutionsData: (SolutionCategory & { imgUrl: string })[] = [
    {
        category: "Rapinno Digital Platform (RDP)",
        icon: <Globe className="w-8 h-8" />,
        description: "Rapid application development using pre-structured engines for urgent technological needs.",
        imgUrl: PARALLAX_IMAGES[0],
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
        imgUrl: PARALLAX_IMAGES[1],
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
        imgUrl: PARALLAX_IMAGES[2],
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
        imgUrl: PARALLAX_IMAGES[3],
        subSolutions: [
            { title: "Rapinno Assist", desc: "OCR and Machine Learning for converting paper/emails to analytics.", icon: <Search className="w-5 h-5" /> },
            { title: "Unstructured Data", desc: "Pattern recognition for improved corporate decision-making.", icon: <Activity className="w-5 h-5" /> }
        ]
    },
    {
        category: "RapiCon APS",
        icon: <BarChart className="w-8 h-8" />,
        description: "Advanced Planning Systems for complex logistics and production environments.",
        imgUrl: PARALLAX_IMAGES[4],
        subSolutions: [
            { title: "Strategic Planning", desc: "High-level visualization tools for long-term business goals.", icon: <LineChart className="w-5 h-5" /> },
            { title: "Operational Optimization", desc: "Real-time decision-support techniques based on daily data.", icon: <Settings className="w-5 h-5" /> }
        ]
    },
    {
        category: "Rapinno Adaptive Sourcing",
        icon: <Users2 className="w-8 h-8" />,
        description: "Dynamic IT staffing and agile resource alignment.",
        imgUrl: PARALLAX_IMAGES[5],
        subSolutions: [
            { title: "IT Resource Alignment", desc: "Rapidly matching technical talent to shifting market opportunities.", icon: <UserPlus className="w-5 h-5" /> },
            { title: "Specialized Recruitment", desc: "Sourcing performance-ready technical resources for agile teams.", icon: <Search className="w-5 h-5" /> }
        ]
    },
    {
        category: "Rapinno Managed Services",
        icon: <CloudCog className="w-8 h-8" />,
        description: "Continuous infrastructure and security oversight.",
        imgUrl: PARALLAX_IMAGES[6],
        subSolutions: [
            { title: "Cloud Managed", desc: "24/7 Azure, AWS, and GCP monitoring and optimization.", icon: <CloudCog className="w-5 h-5" /> },
            { title: "Managed SOC", desc: "Log monitoring, risk mitigation, and compliance (GDPR/HIPAA).", icon: <Lock className="w-5 h-5" /> }
        ]
    }
];

function TextParallaxContent({
    imgUrl,
    subheading,
    heading,
    children,
}: {
    imgUrl: string;
    subheading: string;
    heading: string;
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                paddingLeft: IMG_PADDING,
                paddingRight: IMG_PADDING,
            }}
        >
            <div className="relative h-[150vh]">
                <StickyImage imgUrl={imgUrl} />
                <OverlayCopy heading={heading} subheading={subheading} />
            </div>
            {children}
        </div>
    );
}

function StickyImage({ imgUrl }: { imgUrl: string }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["end end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        <motion.div
            style={{
                backgroundImage: `url(${imgUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh - ${IMG_PADDING * 2}px)`,
                top: IMG_PADDING,
                scale,
            }}
            ref={targetRef}
            className="sticky z-0 overflow-hidden rounded-3xl"
        >
            <motion.div
                className="absolute inset-0 bg-black/70"
                style={{ opacity }}
            />
        </motion.div>
    );
}

function OverlayCopy({ subheading, heading }: { subheading: string; heading: string }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
    const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

    return (
        <motion.div
            style={{ y, opacity }}
            ref={targetRef}
            className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
        >
            <p className="mb-2 text-center text-xl font-light text-white/70 md:mb-4 md:text-3xl">
                {subheading}
            </p>
            <p className="text-center text-4xl font-normal tracking-tight md:text-7xl">{heading}</p>
        </motion.div>
    );
}

function SolutionContent({ category }: { category: (typeof solutionsData)[0] }) {
    return (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
            <div className="md:col-span-4">
                <div className="text-white/40 mb-6">{category.icon}</div>
                <h2 className="text-3xl font-normal tracking-tight text-white">
                    {category.category}
                </h2>
                <p className="mt-4 text-lg font-light leading-relaxed text-white/60">
                    {category.description}
                </p>
                <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
                >
                    Learn more <ArrowUpRight className="h-4 w-4" />
                </Link>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {category.subSolutions.map((solution, index) => (
                    <motion.div
                        key={solution.title}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.06 }}
                        className="glass-card p-6 group hover:bg-white/5 transition-colors"
                    >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 group-hover:text-white">
                            {solution.icon}
                        </div>
                        <h3 className="text-lg font-normal text-white mb-2">{solution.title}</h3>
                        <p className="text-sm font-light leading-relaxed text-white/50">
                            {solution.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default function SolutionsPage() {
    return (
        <main className="relative min-h-screen bg-black text-white selection:bg-white/20 overflow-x-hidden">
            <div className="relative z-10 container mx-auto px-5 lg:px-10 pt-32 pb-8">
                <div className="max-w-4xl mb-20">
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
            </div>

            {solutionsData.map((category, index) => (
                <TextParallaxContent
                    key={category.category}
                    imgUrl={category.imgUrl}
                    subheading={`Solution Suite ${index + 1}`}
                    heading={category.category}
                >
                    <SolutionContent category={category} />
                </TextParallaxContent>
            ))}

            <div className="py-40 text-center pb-32">
                <p className="text-[12px] uppercase tracking-[0.4em] text-white/40 mb-8">
                    Ready for a tailor-made solution?
                </p>
                <Link
                    href="/services"
                    className="text-4xl md:text-6xl font-light text-white hover:opacity-70 transition-opacity"
                >
                    Explore Ser<i className="font-serif italic">v</i>ices
                </Link>
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
