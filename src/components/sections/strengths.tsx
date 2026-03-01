"use client";

import React, { useEffect, useRef } from 'react';

const strengths = [
  {
    title: 'automate',
    video: 'https://monopo.vn/media/uploads/integrate_web3dasset.mp4',
    description: 'RapinnoTech aims to automate your essential business processes with the help of intelligent automation technologies. We accelerate your digital transformation by implementing RPA, AI, and machine learning solutions.',
  },
  {
    title: 'develop',
    video: 'https://monopo.vn/media/uploads/collaborate_web3dasset.mp4',
    description: 'From full stack web hosting & front end prototyping to designing customized APIs, we provide enterprise-grade development solutions. Our team builds scalable, robust applications that power your business growth.',
  },
  {
    title: 'innovate',
    video: 'https://monopo.vn/media/uploads/challenge_web3dasset.mp4',
    description: 'We will take care of managing and analysing large data sets in real time. With big data analytics, computer vision, and machine learning, we deliver innovative solutions that give you a competitive edge.',
  },
];

const Strengths = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const totalScrollableHeight = rect.height - windowHeight;
        const scrolledAmount = Math.abs(rect.top);
        const progress = scrolledAmount / totalScrollableHeight;

        if (scrollRef.current) {
          const scrollWidth = scrollRef.current.scrollWidth - window.innerWidth;
          scrollRef.current.style.transform = `translateX(-${progress * scrollWidth}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      id="strengths"
      className="relative"
      style={{ height: '300vh' }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex h-full w-fit transition-transform duration-100 ease-linear"
        >
          {strengths.map((strength, index) => (
            <section
              key={index}
              className="relative flex h-screen w-screen flex-shrink-0 items-center justify-center p-10 lg:p-20"
            >
              {/* Vertical Rotated Title */}
              <div className="absolute top-1/2 left-10 -translate-y-1/2 -rotate-90 origin-left">
                <span className="text-[12px] font-medium uppercase tracking-[0.2em] text-white/40 block">
                  {strength.title}
                </span>
              </div>

              <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10">
                {/* 3D Video Asset */}
                <div className="lg:col-span-7 flex justify-center items-center">
                  <div className="relative w-full max-w-[80vh] aspect-square">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain mix-blend-screen opacity-90"
                    >
                      <source src={strength.video} type="video/mp4" />
                    </video>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <h2 className="text-[10vw] lg:text-[6vw] font-normal leading-[0.9] tracking-tighter mb-8 lowercase">
                    {strength.title}
                  </h2>
                  <p className="text-[16px] lg:text-[18px] text-muted-foreground leading-relaxed max-w-md font-light">
                    {strength.description}
                  </p>
                </div>
              </div>

              {/* Counter Indicator */}
              <div className="absolute bottom-10 right-10 flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest text-white">0{index + 1}</span>
                <div className="w-12 h-[1px] bg-white/20 relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
                    style={{ width: `${((index + 1) / strengths.length) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-white/30">0{strengths.length}</span>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strengths;