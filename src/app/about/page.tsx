"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Mail, Phone, MapPin, Target, Eye, Lightbulb, Users, Heart,
    Star, Gem, TrendingUp, Flag, Award, CheckCircle, ArrowRight, Shield
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const timelineEvents = [
    {
        year: "2015",
        title: "Company Founded",
        desc: "RapinnoTech Solutions established in California, USA with a mission to deliver rapid technology innovations to global clients.",
        icon: Flag,
    },
    {
        year: "2017",
        title: "India Development Centers",
        desc: "Launched state-of-the-art development centers in Hyderabad & Bangalore, significantly scaling engineering capabilities.",
        icon: TrendingUp,
    },
    {
        year: "2019",
        title: "European Expansion",
        desc: "Opened operations in Germany, extending our reach across EMEA regions and serving a growing portfolio of enterprise clients.",
        icon: MapPin,
    },
    {
        year: "2021",
        title: "50+ Enterprise Clients",
        desc: "Achieved a landmark milestone of serving over 50 enterprise clients across manufacturing, healthcare, fintech, and retail.",
        icon: CheckCircle,
    },
    {
        year: "2023",
        title: "AI & Automation Excellence",
        desc: "Recognized with industry awards for breakthrough AI-driven automation solutions and our rapid software delivery frameworks.",
        icon: Award,
    },
    {
        year: "2025",
        title: "Global Innovation Leader",
        desc: "Established as a premier technology partner across three continents, delivering transformative digital solutions worldwide.",
        icon: Star,
    },
];

const coreValues = [
    { label: "Innovation", icon: Lightbulb, desc: "Continuously pushing the boundaries of what technology can achieve for our clients." },
    { label: "Integrity", icon: Shield, desc: "Ethical practices and transparent relationships at every touchpoint." },
    { label: "Excellence", icon: Gem, desc: "Uncompromising commitment to the highest quality in every deliverable." },
    { label: "Collaboration", icon: Users, desc: "Building stronger outcomes through unified teamwork and true partnership." },
    { label: "Speed", icon: TrendingUp, desc: "Rapid delivery without sacrificing quality, precision, or security." },
    { label: "Impact", icon: Flag, desc: "Creating lasting, meaningful change for businesses and communities." },
];

// C-Suite: 3 per row
const cSuiteRow1 = [
    {
        name: "Pavan Kumar Kodedela",
        title: "CEO",
        image: "/images/Pavan.png",
        bio: "With 20+ years of experience in technology management, Pavan leads RapinnoTech's strategic vision and global growth.",
        linkedin: null,
        color: { border: "hover:border-violet-400/25", titleColor: "text-violet-300/90", dot: "bg-violet-400" },
    },
    {
        name: "To Be Announced",
        title: "COO",
        image: null,
        bio: "Leading operational excellence and driving efficiency across all global business units and delivery centers.",
        linkedin: null,
        color: { border: "hover:border-amber-400/25", titleColor: "text-amber-300/90", dot: "bg-amber-400" },
    },
    {
        name: "To Be Announced",
        title: "CFO",
        image: null,
        bio: "Overseeing financial strategy, fiscal management, and investment planning to fuel sustainable, long-term growth.",
        linkedin: null,
        color: { border: "hover:border-emerald-400/25", titleColor: "text-emerald-300/90", dot: "bg-emerald-400" },
    },
];

const cSuiteRow2 = [
    {
        name: "To Be Announced",
        title: "CRO",
        image: null,
        bio: "Driving revenue growth strategies, client acquisition, and long-term partnership development across global markets.",
        linkedin: null,
        color: { border: "hover:border-rose-400/25", titleColor: "text-rose-300/90", dot: "bg-rose-400" },
    },
    {
        name: "To Be Announced",
        title: "CTO",
        image: null,
        bio: "Architecting the technology roadmap and leading innovation in AI, cloud, automation, and next-generation platforms.",
        linkedin: null,
        color: { border: "hover:border-cyan-400/25", titleColor: "text-cyan-300/90", dot: "bg-cyan-400" },
    },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const AboutPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 24, opacity: 0 },
        visible: {
            y: 0, opacity: 1,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
        }
    } as const;

    return (
        <main className="relative min-h-screen text-white selection:bg-white/20 overflow-x-hidden">
            {/* Background orbs */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px]" />
                <div className="absolute bottom-[30%] right-[5%] w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[100px]" />
                <div className="absolute top-[60%] left-[50%] w-[250px] h-[250px] rounded-full bg-[#5c5c42]/10 blur-[80px]" />
            </div>

            <div className="relative z-10 container mx-auto px-5 lg:px-10 py-[15vh]">

                {/* ── Hero Section ── */}
                <motion.section
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mb-32"
                >
                    <motion.div variants={itemVariants} className="max-w-4xl">
                        <h1 className="text-[12vw] lg:text-[8vw] font-normal leading-[0.9] tracking-tighter mb-8">
                            About Us
                        </h1>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="glass-card hero-card p-8 md:p-12 mb-12 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90">Who We Are</h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-white/70 relative z-10">
                                Rapinno Tech Solutions is a software innovation company whose primary vision is to deliver technology innovations at a rapid pace to its clients. The company is headquartered in California, USA and has its development centers at Hyderabad &amp; Bangalore in INDIA.
                            </p>
                            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                                <p className="text-xl md:text-2xl font-serif italic bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                                    "Rapid Technology Innovations Delivered"
                                </p>
                                <p className="text-sm uppercase tracking-[0.2em] mt-4 text-white/40">Our Core Tagline</p>
                            </div>
                        </motion.div>
                        <motion.p variants={itemVariants} className="text-lg md:text-xl font-light leading-relaxed text-white/60 max-w-3xl">
                            Rapinno Tech provides cutting-edge IT solutions and services to all organizations across different industry verticals to enable them to empower their business operational capability.
                        </motion.p>
                    </motion.div>
                </motion.section>

                {/* ── Mission, Vision, Values, Legacy ── */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-32"
                >
                    <span className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#999] block mb-4">Our Foundation</span>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-16">Mission, Vision &amp; Values</h2>

                    {/* Mission + Vision side by side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="glass-card p-10 relative overflow-hidden group border border-white/5 hover:border-violet-400/25 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            <div className="w-14 h-14 rounded-2xl bg-violet-500/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Target className="w-7 h-7 text-violet-300/80" />
                            </div>
                            <p className="text-xs uppercase tracking-[0.3em] text-violet-300/60 mb-3">Mission</p>
                            <h3 className="text-2xl font-light mb-4 text-white relative z-10">Our Mission</h3>
                            <p className="text-white/60 font-light leading-relaxed relative z-10">
                                To help clients achieve their business goals through innovative solutions and flexible service offerings — delivering a time advantage, cost advantage, quality advantage, and innovation advantage.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="glass-card p-10 relative overflow-hidden group border border-white/5 hover:border-amber-400/25 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                            <div className="w-14 h-14 rounded-2xl bg-amber-500/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <Eye className="w-7 h-7 text-amber-300/80" />
                            </div>
                            <p className="text-xs uppercase tracking-[0.3em] text-amber-300/60 mb-3">Vision</p>
                            <h3 className="text-2xl font-light mb-4 text-white relative z-10">Our Vision</h3>
                            <p className="text-white/60 font-light leading-relaxed relative z-10">
                                To become a preferred technology partner to various industries worldwide, delivering valuable, market-ready software products that are adaptive to any kind of market change or disruption.
                            </p>
                        </motion.div>
                    </div>

                    {/* Values grid */}
                    <div className="glass-card p-8 md:p-10 border border-white/5 mb-6">
                        <p className="text-xs uppercase tracking-[0.3em] text-[#F32913]/70 mb-2">Values</p>
                        <h3 className="text-2xl font-light mb-8 text-white">What We Stand For</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {coreValues.map((v, i) => (
                                <motion.div
                                    key={v.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07, duration: 0.5 }}
                                    className="group p-5 rounded-xl border border-white/5 hover:border-white/15 hover:bg-white/[0.03] transition-all duration-300 cursor-default"
                                >
                                    <v.icon className="w-5 h-5 text-[#F32913]/70 mb-3 group-hover:text-[#F32913] transition-colors" />
                                    <p className="text-sm font-medium text-white/90 mb-1">{v.label}</p>
                                    <p className="text-xs text-white/40 font-light leading-relaxed">{v.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Legacy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden rounded-sm border border-white/8 p-10 md:p-14"
                        style={{
                            background: "linear-gradient(135deg, rgba(243,41,19,0.06) 0%, rgba(5,79,184,0.08) 50%, rgba(10,10,10,0.6) 100%)"
                        }}
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#F32913]/60 via-[#054FB8]/40 to-transparent" />
                        <p className="text-xs uppercase tracking-[0.3em] text-[#F32913]/70 mb-3 ml-4">Legacy</p>
                        <h3 className="text-3xl md:text-4xl font-light mb-6 text-white ml-4">Built to Last</h3>
                        <p className="text-white/60 font-light leading-relaxed max-w-3xl ml-4 text-lg">
                            Since 2015, we have been crafting technology solutions that stand the test of time. Our legacy is not just in the products we build, but in the businesses we transform, the careers we nurture, and the communities we empower across three continents.
                        </p>
                        <div className="mt-8 ml-4 flex flex-wrap gap-8">
                            {[["10+", "Years of Innovation"], ["50+", "Enterprise Clients"], ["3", "Continents Served"], ["200+", "Projects Delivered"]].map(([num, label]) => (
                                <div key={label}>
                                    <p className="text-3xl font-light text-white">{num}</p>
                                    <p className="text-xs uppercase tracking-widest text-white/40 mt-1">{label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </motion.section>

                {/* ── How We Work ── */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-32"
                >
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-light mb-8">How We Work</h2>
                            <div className="space-y-6 text-lg font-light text-white/70 leading-relaxed">
                                <p>
                                    We are an employee-centric organization and we take utmost care in creating a positive environment for employees to bring out the best of their potential. Our work culture imbibes ethical practices and a positive work atmosphere.
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.02, x: 4 }}
                                    className="p-8 border-l-4 border-[#F32913]/40 bg-gradient-to-r from-[#F32913]/5 to-transparent rounded-r-lg"
                                >
                                    <p className="text-xl italic font-serif text-white/90">
                                        "All work and no play makes Jack a dull boy."
                                    </p>
                                </motion.div>
                                <p>
                                    Thus, fun at work is mandatory to create a healthy and lively environment. At Rapinno Tech, cultural diversity is given utmost importance as this brings new innovative ideas from different corners of the world.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                            {[
                                { Icon: Users, label: "Employee Centric", sub: null, color: "from-violet-500/15 to-violet-600/5", border: "hover:border-violet-400/25" },
                                { Icon: Heart, label: "Positive Culture", sub: null, color: "from-rose-500/15 to-rose-600/5", border: "hover:border-rose-400/25", stagger: true },
                                { Icon: null, label: "Fun", sub: "is Mandatory", color: "from-amber-500/15 to-amber-600/5", border: "hover:border-amber-400/25" },
                                { Icon: null, label: "Global", sub: "Diversity", color: "from-emerald-500/15 to-emerald-600/5", border: "hover:border-emerald-400/25", stagger: true },
                            ].map((tile, i) => (
                                <motion.div
                                    key={tile.label}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                    whileHover={{ scale: 1.03, y: -4 }}
                                    className={`group glass-card aspect-square flex flex-col items-center justify-center p-6 text-center cursor-default transition-all duration-300 border border-white/5 ${tile.border} bg-gradient-to-b ${tile.color} ${tile.stagger ? "mt-8" : ""}`}
                                >
                                    {tile.Icon ? (
                                        <tile.Icon className="w-10 h-10 mb-4 text-white/50 transition-colors group-hover:text-white/80" />
                                    ) : (
                                        <div className="text-3xl font-serif italic mb-2 text-white/80">{tile.label}</div>
                                    )}
                                    <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                                        {tile.Icon ? tile.label : tile.sub}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* ── Timeline ── */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-32"
                >
                    <span className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#999] block mb-4">Milestones</span>
                    <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-16">Our Journey</h2>

                    <div className="relative">
                        {/* Center line - desktop */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#F32913]/40 via-white/10 to-transparent -translate-x-1/2" />

                        <div className="space-y-12 md:space-y-0">
                            {timelineEvents.map((event, i) => {
                                const isLeft = i % 2 === 0;
                                return (
                                    <motion.div
                                        key={event.year}
                                        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08, duration: 0.6 }}
                                        className={`relative md:flex md:items-center md:gap-8 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} mb-12`}
                                    >
                                        {/* Content */}
                                        <div className={`md:w-[calc(50%-2rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                                            <div className={`glass-card p-7 border border-white/5 hover:border-[#F32913]/20 transition-all duration-300 group inline-block w-full`}>
                                                <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:justify-end" : ""}`}>
                                                    <event.icon className="w-4 h-4 text-[#F32913]/70 group-hover:text-[#F32913] transition-colors" />
                                                    <span className="text-[11px] uppercase tracking-[0.3em] text-[#F32913]/70 font-medium">{event.year}</span>
                                                </div>
                                                <h3 className="text-lg font-medium text-white mb-2">{event.title}</h3>
                                                <p className="text-sm text-white/50 font-light leading-relaxed">{event.desc}</p>
                                            </div>
                                        </div>

                                        {/* Center dot */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#F32913] border-2 border-black shadow-[0_0_12px_rgba(243,41,19,0.5)] z-10 items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                        </div>

                                        {/* Spacer for opposite side */}
                                        <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.section>

                {/* ── Leadership ── */}
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#999] block mb-4">People</span>
                    <h2 className="text-4xl md:text-6xl font-light mb-16 text-center">Our Leadership</h2>

                    {/* Naresh — Founder (full width) */}
                    <div className="mb-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            whileHover={{ y: -6 }}
                            className="group glass-card overflow-hidden border border-white/5 hover:border-[#F32913]/25 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                        >
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-full md:w-1/3 aspect-[3/4] bg-transparent rounded-xl overflow-hidden relative">
                                        <img
                                            src="/images/Naresh.png"
                                            alt="Naresh Velaga"
                                            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-3xl font-normal mb-1 text-white">Naresh Velaga</h3>
                                        <div className="flex items-center gap-3 mb-6">
                                            <p className="text-sm uppercase tracking-widest text-[#F32913]/90 font-medium">Founder</p>
                                            <a
                                                href="https://www.linkedin.com/in/narvelglobal/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Naresh Velaga LinkedIn"
                                                className="flex items-center justify-center w-7 h-7 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-[#F32913]/40 hover:bg-[#F32913]/10 transition-all duration-300"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                                    <rect width="4" height="12" x="2" y="9" />
                                                    <circle cx="4" cy="4" r="2" />
                                                </svg>
                                            </a>
                                        </div>
                                        <p className="text-white/60 leading-relaxed font-light text-sm md:text-base">
                                            Naresh Velaga is a serial entrepreneur with 10+ years of experience in the IT solutions and service industry. Having core strength in developing and implementing Customer-Centric On-Demand Technology Solutions &amp; Services, currently, Naresh acts as the Founder of RapinnoTech Solutions Private Limited which deals in providing faster and smarter software solutions to businesses all over the globe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* C-Suite Row 1: CEO, COO, CFO */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                        {cSuiteRow1.map((leader, i) => (
                            <motion.div
                                key={leader.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                className={`group glass-card overflow-hidden border border-white/5 ${leader.color.border} transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]`}
                            >
                                <div className="p-7">
                                    {/* Avatar or photo */}
                                    {leader.image ? (
                                        <div className="w-full aspect-[4/3] rounded-lg overflow-hidden mb-5">
                                            <img
                                                src={leader.image}
                                                alt={leader.name}
                                                className="w-full h-full object-cover object-top grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full aspect-[4/3] rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center mb-5">
                                            <span className="text-4xl font-light text-white/10 uppercase tracking-widest">{leader.title}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-1.5 h-1.5 rounded-full ${leader.color.dot}`} />
                                        <p className={`text-xs uppercase tracking-widest font-medium ${leader.color.titleColor}`}>{leader.title}</p>
                                    </div>
                                    <h3 className="text-lg font-normal text-white mb-3">{leader.name}</h3>
                                    <p className="text-sm text-white/50 font-light leading-relaxed">{leader.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* C-Suite Row 2: CRO, CTO */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {cSuiteRow2.map((leader, i) => (
                            <motion.div
                                key={leader.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                whileHover={{ y: -6 }}
                                className={`group glass-card overflow-hidden border border-white/5 ${leader.color.border} transition-all duration-300 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)]`}
                            >
                                <div className="p-7">
                                    <div className="w-full aspect-[4/3] rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center mb-5">
                                        <span className="text-4xl font-light text-white/10 uppercase tracking-widest">{leader.title}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <div className={`w-1.5 h-1.5 rounded-full ${leader.color.dot}`} />
                                        <p className={`text-xs uppercase tracking-widest font-medium ${leader.color.titleColor}`}>{leader.title}</p>
                                    </div>
                                    <h3 className="text-lg font-normal text-white mb-3">{leader.name}</h3>
                                    <p className="text-sm text-white/50 font-light leading-relaxed">{leader.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                        {/* Empty placeholder to keep 3-column grid balanced */}
                        <div className="hidden md:block" />
                    </div>
                </motion.section>

                {/* ── CTA Section ── */}
                <motion.section
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-32"
                >
                    <div
                        className="relative overflow-hidden rounded-sm p-12 md:p-16 text-center border border-white/8"
                        style={{
                            background: "linear-gradient(135deg, rgba(243,41,19,0.08) 0%, rgba(5,79,184,0.10) 50%, rgba(10,10,10,0.8) 100%)"
                        }}
                    >
                        {/* Decorative orb */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[#F32913]/10 blur-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-[#054FB8]/10 blur-[80px] pointer-events-none" />

                        <div className="relative z-10">
                            <span className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#F32913]/70 block mb-4">Partner With Us</span>
                            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-white mb-6">
                                Ready to Transform<br />Your Business?
                            </h2>
                            <p className="text-lg text-white/50 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                                Join over 50 enterprise clients who trust RapinnoTech to deliver rapid, innovative technology solutions that drive real results.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#F32913] hover:bg-[#d42410] text-white font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(243,41,19,0.35)] group"
                                >
                                    Get In Touch
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                                <Link
                                    href="/services"
                                    className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 text-white/80 hover:text-white hover:border-white/40 font-medium rounded-full transition-all duration-300"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ── Global Presence ── */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="glass-card p-12 overflow-hidden relative border border-white/5 hover:border-white/10 transition-colors duration-300">
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-violet-500/5 to-transparent -rotate-12 translate-x-1/2 pointer-events-none" />
                        <h2 className="text-4xl font-light mb-12">Global Presence</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {[
                                { region: "USA", email: "info.usa@rapinnotech.com", phone: "+1 949 516 8420", iconBg: "bg-violet-500/20", iconColor: "text-violet-400/90", border: "hover:border-violet-400/20" },
                                { region: "GERMANY", email: "info.europe@rapinnotech.com", phone: "+49 17693133848", iconBg: "bg-amber-500/20", iconColor: "text-amber-400/90", border: "hover:border-amber-400/20" },
                                { region: "INDIA", email: "info.india@rapinnotech.com", phone: "+91 40 44720040", iconBg: "bg-emerald-500/20", iconColor: "text-emerald-400/90", border: "hover:border-emerald-400/20" },
                            ].map((loc, i) => (
                                <motion.div
                                    key={loc.region}
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.4 }}
                                    whileHover={{ x: 4 }}
                                    className={`space-y-4 p-4 rounded-xl border border-transparent transition-all duration-300 hover:bg-white/5 cursor-default ${loc.border}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`rounded-lg p-2 ${loc.iconBg}`}>
                                            <MapPin className={`w-5 h-5 ${loc.iconColor}`} />
                                        </div>
                                        <h4 className="text-lg font-medium uppercase tracking-widest text-white/90">{loc.region}</h4>
                                    </div>
                                    <div className="text-white/50 space-y-2 font-light">
                                        <div className="flex items-center gap-2 hover:text-white/70 transition-colors">
                                            <Mail className="w-4 h-4 shrink-0" />
                                            <span className="break-all">{loc.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2 hover:text-white/70 transition-colors">
                                            <Phone className="w-4 h-4 shrink-0" />
                                            <span>{loc.phone}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                {/* Footer note */}
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
        .hero-card:hover {
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06);
        }
      `}</style>
        </main>
    );
};

export default AboutPage;
