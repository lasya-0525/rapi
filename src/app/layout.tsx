import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import Loader from "@/components/sections/loader";
import Header from "@/components/sections/header";
import Cursor from "@/components/ui/cursor";
import CookieBanner from "@/components/ui/cookie-banner";

export const metadata: Metadata = {
  title: "RapinnoTech | Rapid Technology Innovations",
  description: "RapinnoTech Solutions - Enterprise Development Framework for web and mobile development. Intelligent Automation, RPA, Full Stack Development, and Big Data Analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased text-foreground aurora-bg">
        <Loader />
        <Cursor />
        <Header />
        <main className="relative z-10 w-full">{children}</main>
        <CookieBanner />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
