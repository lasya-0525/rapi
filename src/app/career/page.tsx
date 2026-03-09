"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, BookOpen, Smile, ArrowUpRight } from 'lucide-react';

const philosophies = [
    {
        icon: Smile,
        title: "Employee-Centric",
        desc: "A positive environment where you can reach your full potential.",
        color: "violet"
    },
    {
        icon: Globe2,
        title: "Diversity & Inclusion",
        desc: "Cultural diversity brings innovative ideas from across the globe.",
        color: "amber"
    },
    {
        icon: BookOpen,
        title: "Learning & Growth",
        desc: "Continuous learning and organizational goal alignment.",
        color: "emerald"
    }
];



const roles = [
    { domain: "Development", list: "Flutter, Node.js, Angular, Python, Full Stack Engineer" },
    { domain: "Design", list: "UI/UX Designer, UI Developer, Motion Graphics" },
    { domain: "QA & Data", list: "SDET, Data Engineer, Business Analyst" },
    { domain: "Content", list: "Content Writers, Copywriters" }
];

export default function CareerPage() {
    return (
        <main className="relative min-h-screen text-white bg-transparent selection:bg-white/20 overflow-x-hidden pt-32 pb-24">
            <div className="container mx-auto px-5 lg:px-10">

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mb-24"
                >
                    <span className="text-[12px] uppercase tracking-[0.3em] text-white/40 mb-6 block">Join Our Team</span>
                    <h1 className="text-[10vw] lg:text-[7vw] font-normal leading-[0.9] tracking-tighter mb-8">
                        Careers
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed">
                        A culture of continuous learning, employee well-being, and rapid innovation. We balance high-performance expectations with a lively, fun atmosphere.
                    </p>
                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-xl italic font-serif text-white/90">
                            "All work and no play makes Jack a dull boy."
                        </p>
                        <p className="text-sm uppercase tracking-[0.2em] mt-4 text-white/40">Our Work Culture Motto</p>
                    </div>
                </motion.div>

                {/* Culture & Philosophy */}
                <section className="mb-32">
                    <h2 className="text-3xl font-light mb-12">Work Culture & Philosophy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {philosophies.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 border border-white/10 rounded-lg hover:bg-white/5 transition-colors"
                            >
                                <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6">
                                    <item.icon className="w-6 h-6 text-white/80" />
                                </div>
                                <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                                <p className="text-white/50 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>



                {/* Openings */}
                <section className="mb-32">
                    <h2 className="text-3xl font-light mb-12">Frequent Openings</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {roles.map((role, i) => (
                            <div key={i} className="p-8 border border-white/10 rounded-lg hover:border-white/30 transition-colors">
                                <h3 className="text-lg uppercase tracking-widest text-white/60 mb-4">{role.domain}</h3>
                                <p className="text-xl font-light leading-relaxed">{role.list}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="max-w-2xl mx-auto py-20 border-t border-white/10">
                    <h2 className="text-3xl md:text-4xl font-light mb-8 text-center">Ready to Redefine Your Potential?</h2>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const name = (form.elements.namedItem('name') as HTMLInputElement).value;
                            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                            const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
                            const role = (form.elements.namedItem('role') as HTMLInputElement).value;
                            const experience = (form.elements.namedItem('experience') as HTMLInputElement).value;
                            const fileInput = form.elements.namedItem('resume') as HTMLInputElement;
                            const resumeName = fileInput.files?.[0]?.name || 'Not attached';

                            const subject = encodeURIComponent(`Career Application: ${role} - ${name}`);
                            const body = encodeURIComponent(
                                `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nRole applying for: ${role}\nExperience: ${experience} years\nResume file: ${resumeName}\n\n(Please attach your resume file before sending this email.)`
                            );

                            window.location.href = `mailto:info.india@rapinnotech.com,info.usa@rapinnotech.com?subject=${subject}&body=${body}`;
                        }}
                        className="space-y-6"
                    >
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-widest text-white/40">Full Name</label>
                            <input required name="name" type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-widest text-white/40">Email ID</label>
                            <input required name="email" type="email" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-widest text-white/40">Phone Number</label>
                            <input required name="phone" type="tel" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="+1 234 567 8900" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-widest text-white/40">Role You're Applying For</label>
                            <input required name="role" type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="e.g. Flutter Developer" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-widest text-white/40">Years of Experience</label>
                            <input required name="experience" type="number" min="0" step="0.5" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-white transition-colors" placeholder="e.g. 3" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm uppercase tracking-widest text-white/40">Resume / CV</label>
                            <label className="flex items-center gap-4 w-full border border-dashed border-white/20 hover:border-white/40 rounded-lg px-5 py-4 cursor-pointer transition-colors group">
                                <div className="w-9 h-9 rounded-full bg-white/5 group-hover:bg-white/10 flex items-center justify-center transition-colors flex-shrink-0">
                                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60 group-hover:text-white/80 transition-colors">Click to attach your resume</p>
                                    <p className="text-xs text-white/30 mt-0.5">PDF, DOC, DOCX — max 10 MB</p>
                                </div>
                                <input name="resume" type="file" accept=".pdf,.doc,.docx" className="hidden" />
                            </label>
                        </div>
                        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <button type="submit" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-black px-8 py-4 rounded-full hover:bg-white/80 transition-colors font-medium">
                                Submit Application <ArrowUpRight className="w-4 h-4 text-black" />
                            </button>
                            <div className="text-center sm:text-right text-white/50 font-light text-sm">
                                <p>India: info.india@rapinnotech.com</p>
                                <p>USA: info.usa@rapinnotech.com</p>
                            </div>
                        </div>
                    </form>
                </section>

            </div>
        </main>
    );
}
