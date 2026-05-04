"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { blogPosts } from "../blog-data";
import { notFound } from "next/navigation";

function formatContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    const trimmed = block.trim();
    if (!trimmed) return null;
    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      return (
        <h3 key={i} className="text-lg font-bold text-[#0f172a] mt-8 mb-3 first:mt-0">
          {trimmed.slice(2, -2)}
        </h3>
      );
    }
    return (
      <p key={i} className="text-[#334155] font-light leading-[1.75] mb-5">
        {trimmed.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
          part.startsWith("**") && part.endsWith("**") ? (
            <strong key={j} className="font-semibold text-[#0f172a]">
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    );
  });
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = React.use(params);
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="relative min-h-screen bg-transparent text-[#0f172a] selection:bg-[#054FB8]/20 overflow-x-hidden">
      <div className="relative z-10 container mx-auto px-5 lg:px-10 pt-32 pb-24">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-12"
        >
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-sm text-[#64748b] hover:text-[#0f172a] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>
        </motion.div>

        <article className="max-w-2xl mx-auto">
          {/* Meta */}
          <motion.header
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="mb-12"
          >
            <span className="inline-block px-2.5 py-1 rounded-md bg-[#054FB8]/10 text-[#054FB8] text-xs font-semibold uppercase tracking-wider border border-[#054FB8]/20 mb-6">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold leading-[1.2] tracking-tight text-[#0f172a] mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748b]">
              <span className="inline-flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span>{post.author}</span>
            </div>
          </motion.header>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="prose-resources"
          >
            {formatContent(post.content)}
          </motion.div>
        </article>

        {/* Next CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto mt-20 pt-12 border-t border-[#0f172a]/10"
        >
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0f172a] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            All posts
          </Link>
        </motion.div>
      </div>

      <style jsx global>{`
        .prose-resources p {
          margin-bottom: 1.25rem;
        }
        .prose-resources h3 {
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }
        .prose-resources h3:first-child {
          margin-top: 0;
        }
      `}</style>
    </main>
  );
}
