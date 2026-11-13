"use client";
import React from "react";
import {
  Globe,
  User,
  Mail,
  ArrowUpRight,
  Waves,
  Languages,
  Eye,
  Sparkles,
  Award,
  ExternalLink
} from "lucide-react";

const FONT_IMPORT = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;1,500&family=Inter:wght@400;500;600&display=swap');

@keyframes floatA { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-10px);} }
@keyframes floatB { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-14px);} }
@keyframes floatC { 0%,100% { transform: translateY(0px);} 50% { transform: translateY(-7px);} }
@keyframes drift {
  0%   { transform: translate(0px,0px) scale(1); }
  50%  { transform: translate(16px,-14px) scale(1.08); }
  100% { transform: translate(0px,0px) scale(1); }
}
`;

const palette = {
  oceanDeep: "#0B2A4A",
  oceanMid: "#12406B",
  pearl: "#FBF9F5",
  lavender: "#C3B8E8",
  aqua: "#7FD9CB",
  navy: "#0F2A4A",
  navySoft: "#3E5570",
  pearlSoft: "rgba(251,249,245,0.75)",
};

const floatAnims = [
  "floatA 7s ease-in-out infinite",
  "floatB 8.5s ease-in-out infinite",
  "floatC 6s ease-in-out infinite",
];

const glowIcon = (color) => ({
  filter: `drop-shadow(0 0 6px ${color}aa)`,
});

const Tag = ({ children }) => (
  <span
    className="text-[11px] tracking-wide uppercase px-2.5 py-1 rounded-full border"
    style={{
      color: palette.navy,
      borderColor: "rgba(255,255,255,0.4)",
      background: "rgba(255,255,255,0.35)",
    }}
  >
    {children}
  </span>
);

const Eyebrow = ({ children, color = palette.navySoft }) => (
  <p
    className="text-[11px] tracking-[0.15em] uppercase mb-2"
    style={{ color }}
  >
    {children}
  </p>
);

const GlassCard = ({ children, className = "", floatIndex = 0, style = {} }) => (
  <div
    className={`relative overflow-hidden p-6 md:p-7 flex flex-col rounded-3xl backdrop-blur-xl ${className}`}
    style={{
      background: "rgba(255,255,255,0.22)",
      border: "1px solid rgba(255,255,255,0.2)",
      boxShadow: "0 10px 40px -14px rgba(11,42,74,0.28)",
      animation: floatAnims[floatIndex % floatAnims.length],
      color: palette.navy,
      ...style,
    }}
  >
    {children}
  </div>
);

const CERTIFICATIONS = [
  { 
    name: "AI Engineer for Developers Associate", 
    link: "https://www.datacamp.com/certificate/AIEDA0014854791717" // PASTE YOUR LINK HERE
  },
  { 
    name: "Data Analyst Associate", 
    link: "https://www.datacamp.com/certificate/DAA0010923017318" // PASTE YOUR LINK HERE
  },
  { name: "Generative AI-Powered Business Analysis", 
    link: "https://www.linkedin.com/learning/certificates/653bb1dcb85acc5244840650bb8dce47fd8b3986dfee6f480b183c74278e2608?contentTrackingId=c%2Fy9To2SQpq00XsoKbys8Q%3D%3D&viewName=premium-nav-upsell-text&upsellOrderOrigin=Tracking%3Av1%3Apremium_nav_upsell_text%3ANav%3AIn-Product" },
  { name: "Project Management Foundations", 
    link: "https://www.linkedin.com/learning/certificates/a9fb901a9eb11261b076cc5dc7ba7adae865dc79703d13a8fbbad2bdb014ba76?contentTrackingId=7bKxBDuSSsW93SYPt6H2WQ%3D%3D&viewName=premium-nav-upsell-text&upsellOrderOrigin=Tracking%3Av1%3Apremium_nav_upsell_text%3ANav%3AIn-Product" },
];

export default function AlizaPortfolio() {
  return (
    <div className="min-h-screen w-full relative" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{FONT_IMPORT}</style>

      <div
        className="fixed inset-0 -z-20"
        style={{
          background: `linear-gradient(180deg, ${palette.oceanDeep} 0%, ${palette.oceanMid} 28%, #E4E9F0 62%, ${palette.pearl} 100%)`,
        }}
      />

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg
          className="absolute -top-10 left-0 w-[140%] opacity-40"
          style={{ animation: "waveShift 14s ease-in-out infinite" }}
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M0,120 C200,180 400,60 600,120 C800,180 1000,60 1200,120 L1200,0 L0,0 Z"
            fill={palette.oceanMid}
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-16">
        <div className="flex items-center justify-between mb-12 md:mb-16">
          <div className="text-sm tracking-[0.2em] uppercase" style={{ color: palette.pearl }}>
            Aliza <span style={{ color: palette.aqua, fontWeight: 600 }}>Joy</span> Alipit
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: Mail, href: "mailto:alizajoyalipit@gmail.com" },
              { icon: User, href: "https://www.linkedin.com/in/aliza-joy-alipit-01b33b388/details/certifications/" },
              { icon: Globe, href: "https://github.com/Aalipit" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-xl transition-transform hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <Icon size={15} color={palette.pearl} style={glowIcon(palette.aqua)} />
              </a>
            ))}
          </div>
        </div>

        <div className="mb-8 md:mb-10 px-1">
          <h1
            className="text-5xl md:text-7xl mb-5"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 500,
              color: palette.pearl,
            }}
          >
            Aliza Joy D. Alipit
          </h1>
          <p className="max-w-2xl text-base md:text-lg" style={{ color: palette.pearlSoft }}>
            Full-stack AI Engineer <span style={{ color: palette.aqua }}>|</span> Merging Data Science with Intuitive Design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 auto-rows-[minmax(150px,auto)]">
          <a
            href="YOUR_SURVEILLANCE_REPO_LINK"
            target="_blank"
            rel="noreferrer"
            className="md:col-span-2 md:row-span-2 group"
          >
            <GlassCard className="h-full" floatIndex={1}>
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: `${palette.aqua}33`, border: `1px solid ${palette.aqua}66` }}
                >
                  <Waves size={18} color={palette.navy} style={glowIcon(palette.aqua)} />
                </div>
                <ExternalLink size={18} color={palette.navySoft} className="group-hover:text-aqua transition-colors" />
              </div>
              <Eyebrow>Real-time Surveillance Analytics · MIT Division Internship</Eyebrow>
              <h3 className="text-2xl md:text-3xl mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                Intuitive Surveillance
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: palette.navySoft }}>
                A live monitoring platform built around the flow of real-time data using Laravel and Vue.js.
                <span className="block mt-2 font-medium text-aqua">View Repository →</span>
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <Tag>Laravel</Tag>
                <Tag>Vue.js</Tag>
                <Tag>PostgreSQL</Tag>
              </div>
            </GlassCard>
          </a>
          
          <a
            href="https://github.com/Aalipit/Multilingual-Semantic-Analysis"
            target="_blank"
            rel="noreferrer"
            className="md:col-span-1 md:row-span-2 group"
          >
            <GlassCard className="h-full" floatIndex={2}>
                <div className="flex items-start justify-between mb-5">
                    <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ background: `${palette.lavender}44`, border: `1px solid ${palette.lavender}77` }}
                    >
                    <Languages size={18} color={palette.navy} style={glowIcon(palette.lavender)} />
                    </div>
                    <ExternalLink size={18} color={palette.navySoft} className="group-hover:text-aqua transition-colors" />
                </div>
              <Eyebrow>Thesis</Eyebrow>
              <h3 className="text-lg mb-3 leading-snug" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}>
                Multilingual Semantic Analysis
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: palette.navySoft }}>
                A technical deep-dive using mBERT and LDA to categorize intent across multiple languages.
              </p>
              <div className="mt-auto flex flex-wrap gap-2">
                <Tag>mBERT</Tag>
                <Tag>LDA</Tag>
              </div>
            </GlassCard>
          </a>

         <GlassCard className="md:col-span-1 md:row-span-2" floatIndex={0}>
            <div
              className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
              style={{ background: `${palette.lavender}33`, border: `1px solid ${palette.lavender}66` }}
            >
              <Award size={18} color={palette.navy} style={glowIcon(palette.lavender)} />
            </div>
            <Eyebrow>Certifications</Eyebrow>
            <ul className="space-y-3 mt-1">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name} className="text-sm leading-snug">
                  <a 
                    href={c.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex gap-2 group transition-colors duration-300"
                    style={{ color: palette.navy }}
                    onMouseEnter={(e) => e.currentTarget.style.color = palette.aqua}
                    onMouseLeave={(e) => e.currentTarget.style.color = palette.navy}
                  >
                    <span style={{ color: palette.aqua }}>•</span>
                    <span className="group-hover:translate-x-0.5 group-hover:font-bold transition-transform duration-300">
                      {c.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>

        <div
          className="mt-12 pt-6 flex items-center justify-between text-[11px] tracking-wide"
          style={{ borderTop: "1px solid rgba(255,255,255,0.2)", color: palette.pearlSoft }}
        >
          <span>&copy; {new Date().getFullYear()} Aliza Joy D. Alipit</span>
          <span>built with React + Tailwind</span>
        </div>
      </div>
    </div>
  );
}