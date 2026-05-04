"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, FileText } from "lucide-react";
import { blogPosts, BLOG_CATEGORIES } from "./blog-data";

export default function ResourcesPage() {
  const [filter, setFilter] = useState<string | null>(null);
  const filtered =
    filter === null
      ? blogPosts
      : blogPosts.filter((p) => p.category === filter);

  return (
    <main className="relative min-h-screen bg-transparent text-[#0f172a] selection:bg-[#054FB8]/20 overflow-x-hidden">
      <div className="relative z-10 container mx-auto px-5 lg:px-10 pt-32 pb-24">
        {/* Page header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-[10vw] lg:text-[5rem] font-extrabold leading-[0.95] tracking-tighter mb-6">
            <span className="text-[#054FB8]">Re</span><span className="text-[#F32913]">sour</span><span className="text-[#0f172a]">ces</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-[#475569] leading-relaxed">
            Insights on rapid software delivery, intelligent automation, and digital transformation. Written by our team for engineering and product leaders.
          </p>
        </motion.header>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Sidebar – category filters */}
          <aside className="lg:w-56 shrink-0">
            <motion.nav
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="sticky top-36"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#64748b] mb-4">
                Categories
              </p>
              <ul className="space-y-0.5">
                <li>
                  <button
                    onClick={() => setFilter(null)}
                    className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${filter === null
                      ? "bg-[#054FB8]/10 text-[#054FB8] border border-[#054FB8]/30"
                      : "text-[#475569] hover:bg-[#0f172a]/5 hover:text-[#0f172a] border border-transparent"
                      }`}
                  >
                    All posts
                  </button>
                </li>
                {BLOG_CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setFilter(cat)}
                      className={`w-full text-left py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${filter === cat
                        ? "bg-[#054FB8]/10 text-[#054FB8] border border-[#054FB8]/30"
                        : "text-[#475569] hover:bg-[#0f172a]/5 hover:text-[#0f172a] border border-transparent"
                        }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </aside>

          {/* Blog list */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="space-y-0"
            >
              {filtered.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <Link
                    href={`/resources/${post.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 py-5 px-4 -mx-4 rounded-lg border border-transparent hover:bg-[#054FB8]/[0.04] hover:border-[#054FB8]/10 transition-all duration-200"
                  >
                    {/* Icon block */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0f172a]/5 text-[#475569] group-hover:bg-[#054FB8]/10 group-hover:text-[#054FB8] transition-colors">
                      <FileText className="h-5 w-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-semibold text-[#0f172a] group-hover:text-[#054FB8] mb-1.5 line-clamp-2 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[#475569] line-clamp-2 mb-2 sm:mb-0">
                        {post.excerpt}
                      </p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#64748b]">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5" />
                          {post.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {post.readTime}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#0f172a]/5 text-[#475569] border border-[#0f172a]/10">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="shrink-0 text-[#94a3b8] group-hover:text-[#054FB8] transition-colors">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-16 border-t border-[#0f172a]/10 text-center"
        >
          <p className="text-[12px] uppercase tracking-[0.4em] text-[#64748b] mb-6">
            Want to put these ideas into practice?
          </p>
          <Link
            href="/contact"
            className="text-2xl md:text-3xl font-extrabold text-[#0f172a] hover:text-[#054FB8] transition-colors"
          >
            Get in touch
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
