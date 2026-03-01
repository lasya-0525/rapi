"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Target, Eye, Lightbulb, Users, Heart } from 'lucide-react';

const AboutPage = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 24, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    } as const;

    return (
        <main className="relative min-h-screen text-white selection:bg-white/20 overflow-x-hidden">
            {/* Subtle gradient orbs for depth */}
            <div className="pointer-events-none fixed inset-0 z-0">
                <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-violet-500/5 blur-[120px]" />
                <div className="absolute bottom-[30%] right-[5%] w-[300px] h-[300px] rounded-full bg-amber-500/5 blur-[100px]" />
                <div className="absolute top-[60%] left-[50%] w-[250px] h-[250px] rounded-full bg-[#5c5c42]/10 blur-[80px]" />
            </div>
            <div className="relative z-10 container mx-auto px-5 lg:px-10 py-[15vh]">
                {/* Hero Section */}
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
                                Rapinno Tech Solutions is a software innovation company whose primary vision is to deliver technology innovations at a rapid pace to its clients. The company is headquartered in California, USA and has its development centers at Hyderabad & Bangalore in INDIA.
                            </p>
                            <div className="mt-8 pt-8 border-t border-white/10 relative z-10">
                                <p className="text-xl md:text-2xl font-serif italic bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
                                    “Rapid Technology Innovations Delivered”
                                </p>
                                <p className="text-sm uppercase tracking-[0.2em] mt-4 text-white/40">
                                    Our Core Tagline
                                </p>
                            </div>
                        </motion.div>
                        <motion.p variants={itemVariants} className="text-lg md:text-xl font-light leading-relaxed text-white/60 max-w-3xl">
                            Rapinno Tech provides cutting-edge IT solutions and services to all organizations across different industry verticals to enable them to empower their business operational capability. We enable a time advantage, cost advantage, quality advantage, and innovation advantage to our clients.
                        </motion.p>
                    </motion.div>
                </motion.section>

                {/* Mission, Vision, Philosophy Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, staggerChildren: 0.12 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
                >
                    {[
                        { icon: Target, label: "Our Mission", text: "Our mission is to help clients in achieving business goals through our innovative solutions and flexible service offerings.", color: "violet", gradient: "from-violet-500/20 to-violet-600/5", border: "group-hover:border-violet-400/30", iconBg: "group-hover:bg-violet-500/20" },
                        { icon: Eye, label: "Our Vision", text: "Our vision is to become a preferred partner to various industries with valuable technology services.", color: "amber", gradient: "from-amber-500/20 to-amber-600/5", border: "group-hover:border-amber-400/30", iconBg: "group-hover:bg-amber-500/20" },
                        { icon: Lightbulb, label: "Business Philosophy", text: "To provide rapid software solutions and to build market-ready products which are adaptive to any kind of market change.", color: "emerald", gradient: "from-emerald-500/20 to-emerald-600/5", border: "group-hover:border-emerald-400/30", iconBg: "group-hover:bg-emerald-500/20" },
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.6 }}
                            whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                            className={`glass-card value-card p-10 flex flex-col items-center text-center group cursor-default relative overflow-hidden border border-white/5 transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] ${item.border}`}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                            <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconBg}`}>
                                <item.icon className="w-8 h-8 text-white/80 group-hover:text-white" />
                            </div>
                            <h3 className="text-xl font-medium uppercase tracking-widest mb-4 relative z-10"> {item.label}</h3>
                            <p className="text-white/60 font-light leading-relaxed relative z-10">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.section>

                {/* How We Work Section */}
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
                                    className="p-8 border-l-4 border-violet-400/40 bg-gradient-to-r from-violet-500/10 to-transparent rounded-r-lg"
                                >
                                    <p className="text-xl italic font-serif text-white/90">
                                        "All work and no play makes Jack a dull boy."
                                    </p>
                                </motion.div>
                                <p>
                                    Thus, fun at work is mandatory to create a healthy and lively environment where employees wish to come to the office. At Rapinno Tech, cultural diversity is given utmost importance as this brings new innovative ideas from different corners of the world.
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

                {/* Our Team Section */}
                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-32"
                >
                    <h2 className="text-4xl md:text-6xl font-light mb-16 text-center">Our Leadership</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Pavan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="group glass-card overflow-hidden border border-white/5 hover:border-violet-400/20 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
                        >
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-full md:w-1/3 aspect-[3/4] bg-transparent rounded-xl overflow-hidden relative">
                                        <img
                                            src="/images/Pavan.png"
                                            alt="Pavan Kumar Kodedela"
                                            className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-3xl font-normal mb-1 text-white">Pavan Kumar Kodedela</h3>
                                        <p className="text-sm uppercase tracking-widest text-violet-300/80 mb-6">Founder & CEO</p>
                                        <p className="text-white/60 leading-relaxed font-light text-sm md:text-base">
                                            With 20+ years of experience working in and mentoring start-ups, Pavan Kumar has accumulated a plethora of technology management experience while building multiple innovative and out-of-the-box software products for clients across the globe. Currently, with a vision to develop and implement intelligent software products rapidly, Pavan acts as Founder, CEO, and one of the members of the Board of Directors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Naresh */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            whileHover={{ y: -8 }}
                            className="group glass-card overflow-hidden border border-white/5 hover:border-amber-400/20 transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
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
                                        <p className="text-sm uppercase tracking-widest text-amber-300/80 mb-6">Co-Founder</p>
                                        <p className="text-white/60 leading-relaxed font-light text-sm md:text-base">
                                            Naresh Velaga is a serial entrepreneur with 10+ years of experience in the IT solutions and service industry. Having core strength in developing and implementing Customer-Centric On-Demand Technology Solutions & Services, currently, Naresh acts as Co-Founder of RapinnoTech Solutions Private Limited which deals in providing faster and smarter software solutions to businesses all over the globe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Locations Section */}
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
        .hero-card:hover {
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.06);
        }
        @font-face {
          font-family: 'serif';
          src: local('Times New Roman');
        }

      `}</style>
        </main>
    );
};

export default AboutPage;
