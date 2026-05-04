"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="relative min-h-screen text-[#0f172a] bg-transparent selection:bg-[#054FB8]/20 overflow-x-hidden pt-32 pb-24">
            <div className="container mx-auto px-5 lg:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mb-24"
                >
                    <span className="text-[12px] uppercase tracking-[0.3em] text-[#64748b] mb-6 block">Get In Touch</span>
                    <h1 className="text-[10vw] lg:text-[7vw] font-normal leading-[0.9] tracking-tighter mb-8">
                        Contact Us
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-[#475569] leading-relaxed">
                        Ready to accelerate your technological growth? Reach out to us below or find an office near you. We'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Form Component */}
                    <div className="lg:col-span-7">
                        <form className="space-y-8" onSubmit={(e) => {
                            e.preventDefault();
                            const form = e.target as HTMLFormElement;
                            const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value;
                            const lastName = (form.elements.namedItem('lastName') as HTMLInputElement).value;
                            const email = (form.elements.namedItem('email') as HTMLInputElement).value;
                            const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

                            const subject = encodeURIComponent(`Website Inquiry from ${firstName} ${lastName}`);
                            const body = encodeURIComponent(`Name: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`);

                            window.location.href = `mailto:info@rapinnotech.com?subject=${subject}&body=${body}`;
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-widest text-[#64748b]">First Name</label>
                                    <input required name="firstName" type="text" className="w-full bg-transparent border-b border-[#0f172a]/20 py-3 text-[#0f172a] focus:outline-none focus:border-[#054FB8] transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm uppercase tracking-widest text-[#64748b]">Last Name</label>
                                    <input required name="lastName" type="text" className="w-full bg-transparent border-b border-[#0f172a]/20 py-3 text-[#0f172a] focus:outline-none focus:border-[#054FB8] transition-colors" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-widest text-[#64748b]">Email</label>
                                <input required name="email" type="email" className="w-full bg-transparent border-b border-[#0f172a]/20 py-3 text-[#0f172a] focus:outline-none focus:border-[#054FB8] transition-colors" placeholder="john@example.com" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm uppercase tracking-widest text-[#64748b]">Message</label>
                                <textarea required name="message" rows={4} className="w-full bg-transparent border-b border-[#0f172a]/20 py-3 text-[#0f172a] focus:outline-none focus:border-[#054FB8] transition-colors resize-none" placeholder="How can we help you?" />
                            </div>
                            <button type="submit" className="inline-flex items-center gap-2 bg-[#054FB8] text-white px-8 py-4 rounded-full hover:bg-[#054FB8]/80 transition-colors font-medium mt-8">
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>

                    {/* Global Presence */}
                    <div className="lg:col-span-5 space-y-12">
                        <div>
                            <h3 className="text-2xl font-light mb-8 border-b border-[#0f172a]/10 pb-4">Global Presence</h3>
                        </div>
                        {[
                            { region: "USA", email: "info.usa@rapinnotech.com", phone: "+1 949 516 8420" },
                            { region: "GERMANY", email: "info.europe@rapinnotech.com", phone: "+49 17693133848" },
                            { region: "INDIA", email: "info.india@rapinnotech.com", phone: "+91 40 44720040" },
                        ].map((loc, i) => (
                            <motion.div
                                key={loc.region}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.4 }}
                                className="space-y-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="rounded-lg p-2 bg-[#0f172a]/5 border border-[#0f172a]/10">
                                        <MapPin className="w-5 h-5 text-[#475569]" />
                                    </div>
                                    <h4 className="text-lg font-medium uppercase tracking-widest">{loc.region}</h4>
                                </div>
                                <div className="text-[#475569] space-y-2 font-light pl-14">
                                    <div className="flex items-center gap-3 hover:text-white/70 transition-colors">
                                        <Mail className="w-4 h-4 shrink-0" />
                                        <span className="break-all">{loc.email}</span>
                                    </div>
                                    <div className="flex items-center gap-3 hover:text-white/70 transition-colors">
                                        <Phone className="w-4 h-4 shrink-0" />
                                        <span>{loc.phone}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
