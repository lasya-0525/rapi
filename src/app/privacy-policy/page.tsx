"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Globe, Mail } from "lucide-react";

const sections = [
    {
        icon: Database,
        title: "Information We Collect",
        color: "violet",
        gradient: "from-violet-500/20 to-violet-600/5",
        border: "group-hover:border-violet-400/30",
        iconBg: "group-hover:bg-violet-500/20",
        content: [
            {
                subtitle: "Personal Information",
                text: "When you interact with our website or services, we may collect personal information such as your name, email address, phone number, company name, and job title. This information is collected when you fill out contact forms, request demos, subscribe to newsletters, or engage with our services.",
            },
            {
                subtitle: "Usage Data",
                text: "We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, pages viewed, and the dates and times of your visits. This data helps us understand how our website is used and improve user experience.",
            },
            {
                subtitle: "Cookies & Tracking Technologies",
                text: "We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand where our visitors are coming from. You can control cookie preferences through your browser settings.",
            },
        ],
    },
    {
        icon: Eye,
        title: "How We Use Your Information",
        color: "amber",
        gradient: "from-amber-500/20 to-amber-600/5",
        border: "group-hover:border-amber-400/30",
        iconBg: "group-hover:bg-amber-500/20",
        content: [
            {
                subtitle: "Service Delivery",
                text: "We use your personal information to provide, maintain, and improve our IT solutions and services. This includes processing your requests, communicating about projects, and delivering the technology solutions you have engaged us for.",
            },
            {
                subtitle: "Communication",
                text: "We may use your contact information to send you updates about our services, industry insights, newsletters, and promotional materials. You can opt out of marketing communications at any time by using the unsubscribe link in our emails.",
            },
            {
                subtitle: "Analytics & Improvement",
                text: "Usage data and analytics help us understand user behavior, optimize our website performance, develop new features, and improve the overall quality of our services.",
            },
        ],
    },
    {
        icon: Lock,
        title: "Data Security",
        color: "emerald",
        gradient: "from-emerald-500/20 to-emerald-600/5",
        border: "group-hover:border-emerald-400/30",
        iconBg: "group-hover:bg-emerald-500/20",
        content: [
            {
                subtitle: "Protection Measures",
                text: "We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, firewalls, and regular security audits.",
            },
            {
                subtitle: "Data Retention",
                text: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.",
            },
        ],
    },
    {
        icon: Globe,
        title: "International Data Transfers",
        color: "sky",
        gradient: "from-sky-500/20 to-sky-600/5",
        border: "group-hover:border-sky-400/30",
        iconBg: "group-hover:bg-sky-500/20",
        content: [
            {
                subtitle: "Global Operations",
                text: "As a global company with offices in the USA, Germany, and India, your information may be transferred to and processed in countries other than your country of residence. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable laws, including GDPR for European users.",
            },
            {
                subtitle: "Third-Party Services",
                text: "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving our users. These parties are contractually obligated to keep your information confidential and secure.",
            },
        ],
    },
    {
        icon: Shield,
        title: "Your Rights",
        color: "rose",
        gradient: "from-rose-500/20 to-rose-600/5",
        border: "group-hover:border-rose-400/30",
        iconBg: "group-hover:bg-rose-500/20",
        content: [
            {
                subtitle: "Access & Control",
                text: "You have the right to access, correct, update, or request deletion of your personal information. You may also object to the processing of your data, request data portability, or withdraw consent at any time where we rely on your consent for processing.",
            },
            {
                subtitle: "Opt-Out",
                text: "You can opt out of receiving marketing communications from us at any time. You may also disable cookies through your browser settings, although this may affect the functionality of our website.",
            },
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
        },
    },
} as const;

const PrivacyPolicyPage = () => {
    return (
        <main className="relative min-h-screen text-white selection:bg-white/20 overflow-x-hidden">
            {/* Subtle gradient orbs for depth */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px]" />
                <div className="absolute bottom-[30%] right-[5%] w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[100px]" />
                <div className="absolute top-[60%] left-[50%] w-[250px] h-[250px] rounded-full bg-emerald-500/10 blur-[80px]" />
            </div>

            <div className="relative z-10 container mx-auto px-5 lg:px-10 py-[15vh]">
                {/* Hero Section */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-24"
                >
                    <motion.div variants={itemVariants} className="max-w-4xl">
                        <h1 className="text-[12vw] lg:text-[8vw] font-normal leading-[0.9] tracking-tighter mb-8">
                            Privacy Policy
                        </h1>
                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl font-light leading-relaxed text-white/60 max-w-3xl"
                        >
                            At RapinnoTech Solutions, we are committed to protecting
                            your privacy and ensuring the security of your personal
                            information. This privacy policy outlines how we collect,
                            use, and safeguard your data across our global operations.
                        </motion.p>
                        <motion.div
                            variants={itemVariants}
                            className="flex items-center gap-3 mt-6"
                        >
                            <div className="w-2 h-2 rounded-full bg-emerald-400/60" />
                            <p className="text-sm font-light text-white/40 uppercase tracking-[0.15em]">
                                Last updated: March 2026
                            </p>
                        </motion.div>
                    </motion.div>
                </motion.section>

                {/* Policy Sections */}
                <div className="space-y-12 mb-32">
                    {sections.map((section, sectionIdx) => (
                        <motion.section
                            key={section.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{
                                delay: sectionIdx * 0.08,
                                duration: 0.6,
                            }}
                            className={`group glass-card p-8 md:p-12 relative overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] ${section.border}`}
                        >
                            <div
                                className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                            />
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div
                                        className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${section.iconBg}`}
                                    >
                                        <section.icon className="w-6 h-6 text-white/80 group-hover:text-white" />
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-light text-white/90">
                                        {section.title}
                                    </h2>
                                </div>

                                <div className="space-y-8 pl-0 md:pl-16">
                                    {section.content.map((item, idx) => (
                                        <div key={idx}>
                                            <h3 className="text-sm font-medium uppercase tracking-[0.15em] text-white/50 mb-3">
                                                {item.subtitle}
                                            </h3>
                                            <p className="text-white/70 font-light leading-relaxed text-base">
                                                {item.text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>
                    ))}
                </div>

                {/* Contact Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="glass-card p-12 overflow-hidden relative border border-white/5 hover:border-white/10 transition-colors duration-300">
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-violet-500/5 to-transparent -rotate-12 translate-x-1/2 pointer-events-none" />
                        <div className="relative z-10 flex flex-col md:flex-row items-start gap-8">
                            <div className="flex-1">
                                <h2 className="text-3xl md:text-4xl font-light mb-4">
                                    Questions About Your Privacy?
                                </h2>
                                <p className="text-white/60 font-light leading-relaxed mb-6 max-w-xl">
                                    If you have any questions or concerns about this
                                    privacy policy or our data practices, please don&apos;t
                                    hesitate to contact us.
                                </p>
                                <div className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors">
                                    <Mail className="w-5 h-5" />
                                    <a
                                        href="mailto:info.india@rapinnotech.com"
                                        className="text-lg font-light"
                                    >
                                        info@rapinnotech.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 text-sm text-white/40">
                                <p className="uppercase tracking-[0.2em] font-medium">
                                    Data Protection Officer
                                </p>
                                <p className="font-light leading-relaxed">
                                    RapinnoTech Solutions Pvt Ltd
                                    <br />
                                    Hyderabad, Telangana, India
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Footer info */}
                <div className="text-center opacity-20 text-xs uppercase tracking-[0.4em] py-20">
                    © 2026 RapinnoTech Solutions
                </div>
            </div>

            <style jsx>{`
                .glass-card {
                    background: rgba(255, 255, 255, 0.03);
                    backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    border-radius: 4px;
                }
            `}</style>
        </main>
    );
};

export default PrivacyPolicyPage;
