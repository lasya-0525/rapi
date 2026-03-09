import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | RapinnoTech",
  description: "Learn how RapinnoTech uses cookies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="relative min-h-screen text-white pt-36 pb-24">
      <div className="container mx-auto px-5 lg:px-10 max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <span className="text-[12px] font-medium uppercase tracking-[0.3em] text-[#999] block mb-4">
            Legal
          </span>
          <h1 className="text-5xl md:text-7xl font-normal tracking-tighter leading-[0.9] mb-6">
            Cookie Policy
          </h1>
          <p className="text-white/40 text-sm">Last updated: March 2026</p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-white/70 font-light leading-relaxed">

          {/* What are cookies */}
          <section>
            <h2 className="text-2xl font-normal text-white mb-4 tracking-tight">What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They allow the website to remember your actions and preferences (such as login details, language, and other settings) over a period of time, so you do not have to re-enter them each time you return.
            </p>
          </section>

          {/* Types of cookies */}
          <section>
            <h2 className="text-2xl font-normal text-white mb-6 tracking-tight">Types of Cookies We Use</h2>
            <div className="space-y-6">

              {/* Essential */}
              <div className="p-6 border border-white/10 rounded-lg bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F32913] flex-shrink-0" />
                  <h3 className="text-lg font-medium text-white">Essential Cookies</h3>
                  <span className="text-[10px] uppercase tracking-widest text-[#F32913] border border-[#F32913]/30 px-2 py-0.5 rounded-full">Always Active</span>
                </div>
                <p>
                  These cookies are strictly necessary for the website to function and cannot be disabled. They are set in response to actions you take, such as navigating pages, filling out forms, or accessing secure areas of the site. Without these cookies, services you have requested cannot be provided.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-white/50 list-disc list-inside">
                  <li>Session management and authentication</li>
                  <li>Security tokens and CSRF protection</li>
                  <li>Load balancing and server routing</li>
                  <li>Cookie consent preferences</li>
                </ul>
              </div>

              {/* Analytics */}
              <div className="p-6 border border-white/10 rounded-lg bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#054FB8] flex-shrink-0" />
                  <h3 className="text-lg font-medium text-white">Analytics Cookies</h3>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-0.5 rounded-full">Optional</span>
                </div>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This allows us to improve the structure and content of our site over time.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-white/50 list-disc list-inside">
                  <li>Page view and session duration tracking</li>
                  <li>Traffic source analysis</li>
                  <li>User journey and navigation patterns</li>
                </ul>
              </div>

              {/* Marketing */}
              <div className="p-6 border border-white/10 rounded-lg bg-white/[0.02]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80 flex-shrink-0" />
                  <h3 className="text-lg font-medium text-white">Marketing Cookies</h3>
                  <span className="text-[10px] uppercase tracking-widest text-white/40 border border-white/10 px-2 py-0.5 rounded-full">Optional</span>
                </div>
                <p>
                  These cookies are used to track visitors across websites to display relevant and engaging advertisements. They help measure the effectiveness of our marketing campaigns.
                </p>
                <ul className="mt-4 space-y-1 text-sm text-white/50 list-disc list-inside">
                  <li>Retargeting and remarketing</li>
                  <li>Ad performance measurement</li>
                  <li>Audience segmentation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How to manage */}
          <section>
            <h2 className="text-2xl font-normal text-white mb-4 tracking-tight">Managing Your Cookie Preferences</h2>
            <p className="mb-4">
              You can manage your cookie preferences at any time. When you first visit our website, a cookie consent banner will appear allowing you to accept all cookies or reject non-essential cookies. Essential cookies will remain active regardless of your choice.
            </p>
            <p className="mb-4">
              You can also control cookies through your browser settings. Most browsers allow you to refuse cookies, delete existing cookies, or be notified when a new cookie is set. Please note that restricting cookies may impact the functionality of our website.
            </p>
            <p>
              To reset your preferences and see the cookie banner again, clear your browser's local storage or cookies for this website.
            </p>
          </section>

          {/* Third-party */}
          <section>
            <h2 className="text-2xl font-normal text-white mb-4 tracking-tight">Third-Party Cookies</h2>
            <p>
              Some pages on our website may embed content from third-party services (such as maps, social media, or analytics providers). These third parties may set their own cookies. We do not control the use of these cookies and recommend reviewing the relevant third-party privacy policies.
            </p>
          </section>

          {/* Data retention */}
          <section>
            <h2 className="text-2xl font-normal text-white mb-4 tracking-tight">Cookie Retention</h2>
            <p>
              Session cookies are deleted when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. The retention period varies by cookie type — essential cookies typically last for the duration of your session, while analytics cookies may persist for up to 13 months.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-normal text-white mb-4 tracking-tight">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies or this policy, please contact us:
            </p>
            <div className="p-6 border border-white/10 rounded-lg bg-white/[0.02] space-y-2 text-sm">
              <p><span className="text-white/40 uppercase tracking-widest text-[10px]">India</span><br />info.india@rapinnotech.com &nbsp;·&nbsp; +91 40 44720040</p>
              <p><span className="text-white/40 uppercase tracking-widest text-[10px]">USA</span><br />info.usa@rapinnotech.com &nbsp;·&nbsp; +1 949 516 8420</p>
              <p><span className="text-white/40 uppercase tracking-widest text-[10px]">Germany</span><br />info.europe@rapinnotech.com &nbsp;·&nbsp; +49 17693133848</p>
            </div>
          </section>

          {/* Back link */}
          <div className="pt-8 border-t border-white/10">
            <Link href="/" className="text-sm text-white/40 hover:text-white transition-colors uppercase tracking-widest">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
