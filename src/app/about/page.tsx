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
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    } as const;


    return (
        <main className="relative min-h-screen text-white selection:bg-white/20 overflow-x-hidden">
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
                            About <i className="font-serif italic">U</i>s
                        </h1>
                        <div className="glass-card p-8 md:p-12 mb-12">
                            <h2 className="text-2xl md:text-3xl font-light mb-6 text-white/90">Who We Are</h2>
                            <p className="text-lg md:text-xl font-light leading-relaxed text-white/70">
                                Rapinno Tech Solutions is a software innovation company whose primary vision is to deliver technology innovations at a rapid pace to its clients. The company is headquartered in California, USA and has its development centers at Hyderabad & Bangalore in INDIA.
                            </p>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <p className="text-xl md:text-2xl font-serif italic text-white">
                                    “Rapid Technology Innovations Delivered”
                                </p>
                                <p className="text-sm uppercase tracking-[0.2em] mt-4 text-white/40">
                                    Our Core Tagline
                                </p>
                            </div>
                        </div>
                        <p className="text-lg md:text-xl font-light leading-relaxed text-white/60 max-w-3xl">
                            Rapinno Tech provides cutting-edge IT solutions and services to all organizations across different industry verticals to enable them to empower their business operational capability. We enable a time advantage, cost advantage, quality advantage, and innovation advantage to our clients.
                        </p>
                    </motion.div>
                </motion.section>

                {/* Mission, Vision, Philosophy Grid */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32"
                >
                    <div className="glass-card p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Target className="w-8 h-8 text-white/80" />
                        </div>
                        <h3 className="text-xl font-medium uppercase tracking-widest mb-4">Our Mission</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            Our mission is to help clients in achieving business goals through our innovative solutions and flexible service offerings.
                        </p>
                    </div>

                    <div className="glass-card p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Eye className="w-8 h-8 text-white/80" />
                        </div>
                        <h3 className="text-xl font-medium uppercase tracking-widest mb-4">Our Vision</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            Our vision is to become a preferred partner to various industries with valuable technology services.
                        </p>
                    </div>

                    <div className="glass-card p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <Lightbulb className="w-8 h-8 text-white/80" />
                        </div>
                        <h3 className="text-xl font-medium uppercase tracking-widest mb-4">Business Philosophy</h3>
                        <p className="text-white/60 font-light leading-relaxed">
                            To provide rapid software solutions and to build market-ready products which are adaptive to any kind of market change.
                        </p>
                    </div>
                </motion.section>

                {/* How We Work Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-32"
                >
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl md:text-5xl font-light mb-8">How We <i className="font-serif italic">W</i>ork</h2>
                            <div className="space-y-6 text-lg font-light text-white/70 leading-relaxed">
                                <p>
                                    We are an employee-centric organization and we take utmost care in creating a positive environment for employees to bring out the best of their potential. Our work culture imbibes ethical practices and a positive work atmosphere.
                                </p>
                                <div className="p-8 border-l-2 border-white/20 bg-white/5">
                                    <p className="text-xl italic font-serif">
                                        "All work and no play makes Jack a dull boy."
                                    </p>
                                </div>
                                <p>
                                    Thus, fun at work is mandatory to create a healthy and lively environment where employees wish to come to the office. At Rapinno Tech, cultural diversity is given utmost importance as this brings new innovative ideas from different corners of the world.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
                            <div className="glass-card aspect-square flex flex-col items-center justify-center p-6 text-center">
                                <Users className="w-10 h-10 mb-4 opacity-40" />
                                <span className="text-xs uppercase tracking-[0.3em] opacity-40">Employee Centric</span>
                            </div>
                            <div className="glass-card aspect-square flex flex-col items-center justify-center p-6 text-center mt-8">
                                <Heart className="w-10 h-10 mb-4 opacity-40" />
                                <span className="text-xs uppercase tracking-[0.3em] opacity-40">Positive Culture</span>
                            </div>
                            <div className="glass-card aspect-square flex flex-col items-center justify-center p-6 text-center">
                                <div className="text-3xl font-serif italic mb-2">Fun</div>
                                <span className="text-xs uppercase tracking-[0.3em] opacity-40">is Mandatory</span>
                            </div>
                            <div className="glass-card aspect-square flex flex-col items-center justify-center p-6 text-center mt-8">
                                <div className="text-3xl font-serif italic mb-2">Global</div>
                                <span className="text-xs uppercase tracking-[0.3em] opacity-40">Diversity</span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Our Team Section */}
                <section className="mb-32">
                    <h2 className="text-4xl md:text-6xl font-light mb-16 text-center">Our <i className="font-serif italic">L</i>eadersh<i className="font-serif italic">i</i>p</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Pavan */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-card overflow-hidden"
                        >
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-full md:w-1/3 aspect-[3/4] bg-white/5 rounded-lg overflow-hidden relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                                            alt="Pavan Kumar Kodedela"
                                            className="w-full h-full object-cover grayscale opacity-80"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-3xl font-normal mb-1">Pavan Kumar Kodedela</h3>
                                        <p className="text-sm uppercase tracking-widest text-white/40 mb-6">Founder & CEO</p>
                                        <p className="text-white/60 leading-relaxed font-light text-sm md:text-base">
                                            With 20+ years of experience working in and mentoring start-ups, Pavan Kumar has accumulated a plethora of technology management experience while building multiple innovative and out-of-the-box software products for clients across the globe. Currently, with a vision to develop and implement intelligent software products rapidly, Pavan acts as Founder, CEO, and one of the members of the Board of Directors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Naresh */}
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="glass-card overflow-hidden"
                        >
                            <div className="p-8 md:p-12">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="w-full md:w-1/3 aspect-[3/4] bg-white/5 rounded-lg overflow-hidden relative">
                                        <img
                                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop"
                                            alt="Naresh Velaga"
                                            className="w-full h-full object-cover grayscale opacity-80"
                                        />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-3xl font-normal mb-1">Naresh Velaga</h3>
                                        <p className="text-sm uppercase tracking-widest text-white/40 mb-6">Co-Founder</p>
                                        <p className="text-white/60 leading-relaxed font-light text-sm md:text-base">
                                            Naresh Velaga is a serial entrepreneur with 10+ years of experience in the IT solutions and service industry. Having core strength in developing and implementing Customer-Centric On-Demand Technology Solutions & Services, currently, Naresh acts as Co-Founder of RapinnoTech Solutions Private Limited which deals in providing faster and smarter software solutions to businesses all over the globe.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Locations Section */}
                <section className="mb-16">
                    <div className="glass-card p-12 overflow-hidden relative">
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-white opacity-[0.02] -rotate-12 translate-x-1/2 pointer-events-none" />
                        <h2 className="text-4xl font-light mb-12">Global <i className="font-serif italic">P</i>resence</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 opacity-40" />
                                    <h4 className="text-lg font-medium uppercase tracking-widest">USA</h4>
                                </div>
                                <div className="text-white/50 space-y-2 font-light">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        <span>info.usa@rapinnotech.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        <span>+1 949 516 8420</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 opacity-40" />
                                    <h4 className="text-lg font-medium uppercase tracking-widest">GERMANY</h4>
                                </div>
                                <div className="text-white/50 space-y-2 font-light">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        <span>info.europe@rapinnotech.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        <span>+49 17693133848</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 opacity-40" />
                                    <h4 className="text-lg font-medium uppercase tracking-widest">INDIA</h4>
                                </div>
                                <div className="text-white/50 space-y-2 font-light">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        <span>info.india@rapinnotech.com</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        <span>+91 40 44720040</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer info */}
                <div className="text-center opacity-20 text-xs uppercase tracking-[0.4em] py-20">
                    © 2021 RapinnoTech Solutions
                </div>
            </div>

            <style jsx>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 2px;
        }
        
        @font-face {
          font-family: 'serif';
          src: local('Times New Roman');
        }

        i {
          font-style: italic;
          font-family: serif;
        }
      `}</style>
        </main>
    );
};

export default AboutPage;
