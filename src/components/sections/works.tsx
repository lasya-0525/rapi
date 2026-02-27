import React from 'react';

const services = [
  {
    title: "Robotic Process Automation",
    id: "rpa",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    categories: ["Intelligent Automation", "Process Optimization", "AI-Powered"]
  },
  {
    title: "Full Stack Development",
    id: "fullstack",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    categories: ["Web Development", "API Design", "Cloud Hosting"]
  },
  {
    title: "Big Data Analytics",
    id: "bigdata",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=2070&auto=format&fit=crop",
    categories: ["Data Management", "Real-time Analysis", "Insights"]
  },
  {
    title: "Rapinno Digital Platform",
    id: "digital-platform",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    categories: ["Low Code", "Rapid Development", "Enterprise Apps"]
  },
  {
    title: "Rapinno Data Digitization",
    id: "data-digitization",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    categories: ["Computer Vision", "Machine Learning", "Digitization"]
  },
  {
    title: "Rapinno Product 360",
    id: "product-360",
    thumbnail: "https://images.unsplash.com/photo-1553484771-047a44eee27b?q=80&w=2070&auto=format&fit=crop",
    categories: ["Concept", "Brand Strategy", "End-to-End Solution"]
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="relative pt-24 pb-16 overflow-hidden"
    >
      <div className="container mx-auto px-5 lg:px-10">
        {/* Section Label */}
        <div className="mb-20">
          <span className="text-[12px] font-medium uppercase tracking-[0.1em] text-white opacity-80">
            What We Do
          </span>
        </div>

        {/* Services Grid */}
        <div id="project-card-list" className="w-full">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-24 md:gap-y-32">
            {services.map((service, index) => (
              <li key={service.id} className={`${index % 2 !== 0 ? 'md:mt-32' : ''}`}>
                <a
                  href={`#${service.id}`}
                  className="group block relative no-underline outline-none"
                >
                  <div className="project-card-content flex flex-col">
                    {/* Image Container with Reveal and Hover Effect */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-[#1a1a1a]">
                      <div className="w-full h-full transform transition-transform duration-1000 ease-out group-hover:scale-105">
                        <img
                          src={service.thumbnail}
                          alt={service.title}
                          className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                          loading="lazy"
                        />
                      </div>
                      {/* Interactive overlay mask */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
                    </div>

                    {/* Meta Information */}
                    <div className="mt-6 flex flex-col space-y-2">
                      <h3 className="text-[18px] md:text-[22px] font-normal leading-tight tracking-tight text-white group-hover:opacity-80 transition-opacity duration-300">
                        {service.title}
                      </h3>

                      <ul className="flex flex-wrap gap-x-3 gap-y-1 opacity-50">
                        {service.categories.map((cat, i) => (
                          <li key={i} className="text-[12px] md:text-[14px] font-light text-white whitespace-nowrap">
                            {cat}
                            {i !== service.categories.length - 1 && <span className="ml-3">·</span>}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}