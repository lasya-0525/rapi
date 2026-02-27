"use client";

import React from 'react';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role?: string;
  description: string;
  image: string;
  socials: {
    label: string;
    url: string;
  }[];
}

const teamMembers: TeamMember[] = [
  {
    id: 'vamsi',
    name: 'Vamsi Krishna',
    role: 'Head of Product Development',
    description: 'Vamsi Krishna leads the product development team at RapinnoTech, driving innovation in intelligent automation and enterprise solutions. With years of experience in building scalable technology platforms, he ensures the seamless delivery of cutting-edge products that empower businesses to thrive in the digital era.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
    socials: [
      { label: 'Li', url: 'https://www.linkedin.com/company/rapinnotech' },
    ]
  },
  {
    id: 'mellisa',
    name: 'Mellisa Rozario',
    role: 'IT Manager',
    description: 'Mellisa Rozario manages IT operations and infrastructure at RapinnoTech. She is instrumental in ensuring the reliability and security of all technology services, enabling the team to deliver high-quality solutions to clients worldwide. Her expertise spans cloud infrastructure, DevOps, and enterprise IT management.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
    socials: [
      { label: 'Li', url: 'https://www.linkedin.com/company/rapinnotech' },
    ]
  },
  {
    id: 'prem',
    name: 'Prem Kumar',
    role: 'Senior Technology Lead',
    description: 'Prem Kumar is a senior technology lead who specializes in AI implementation, machine learning, and big data analytics. He brings deep technical expertise and a passion for solving complex business challenges through innovative technology solutions.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
    socials: [
      { label: 'Li', url: 'https://www.linkedin.com/company/rapinnotech' },
    ]
  },
  {
    id: 'tarun',
    name: 'Tarun',
    role: 'RPA Solutions Architect',
    description: 'Tarun is a highly skilled RPA solutions architect who designs and implements robotic process automation systems for enterprise clients. His work has helped organizations across financial services, healthcare, and manufacturing achieve significant operational efficiencies.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
    socials: [
      { label: 'Li', url: 'https://www.linkedin.com/company/rapinnotech' },
    ]
  },
  {
    id: 'teja',
    name: 'Teja',
    role: 'Full Stack Developer',
    description: 'Teja is a versatile full stack developer who excels at building end-to-end web and mobile applications. From front-end prototyping to back-end API design, he delivers robust, scalable solutions that drive business outcomes for RapinnoTech\'s clients.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
    socials: [
      { label: 'Li', url: 'https://www.linkedin.com/company/rapinnotech' },
    ]
  },
  {
    id: 'team-lead',
    name: 'Innovation Team',
    role: 'Digital Platform Division',
    description: 'The RapinnoTech Innovation Team drives the development of the Rapinno Digital Platform, enabling enterprises to build and deploy applications at unprecedented speed. The team combines expertise in low-code development, cloud architecture, and intelligent automation.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
    socials: [
      { label: 'Li', url: 'https://www.linkedin.com/company/rapinnotech' },
    ]
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="relative w-full py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-5 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row mb-20 lg:mb-32">
          <div className="w-full lg:w-1/4">
            <span className="text-section-title text-white opacity-40 sticky top-10">
              Our Team
            </span>
          </div>
          <div className="w-full lg:w-3/4 mt-8 lg:mt-0">
            <h2 className="text-manifesto text-white max-w-4xl">
              From Hyderabad to the World,<br />
              We deliver innovation everywhere
            </h2>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-8">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col space-y-4">
                <div className="flex items-baseline justify-between">
                  <div>
                    <h3 className="text-2xl font-normal tracking-tight text-white uppercase">
                      {member.name}
                    </h3>
                    {member.role && (
                      <p className="text-[11px] uppercase tracking-widest text-white/50 mt-1">
                        {member.role}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-4">
                    {member.socials.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        className="text-[10px] uppercase tracking-widest text-white opacity-40 hover:opacity-100 transition-opacity"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-secondary-foreground font-light line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt=""
          fill
          className="object-cover mix-blend-screen"
        />
      </div>
    </section>
  );
}