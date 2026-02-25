import React, { useState } from "react";

interface Project {
  category: string;
  title: string;
  description: string;
  stack: string;
  featured?: boolean;
}

interface EliteProject {
  badge: string;
  title: string;
  description: string;
  stack: string;
  fullWidth?: boolean;
}

const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  const frontendProjects: Project[] = [
    {
      category: "Featured · UI/UX",
      title: "AI SaaS Dashboard",
      description:
        "Fully interactive analytics platform with real-time charts, dark/light mode, role-based views, and live data streaming. Built for enterprise-grade data display with smooth micro-animations throughout.",
      stack: "React · TypeScript · Recharts · TailwindCSS · WebSockets",
      featured: true,
    },
    {
      category: "Performance",
      title: "High-Converting Landing Page",
      description:
        "Startup landing page with parallax scrolling, GSAP animations, and 95+ Lighthouse score. Optimised for Core Web Vitals and conversion rate.",
      stack: "Next.js · GSAP · TailwindCSS · Vercel",
    },
    {
      category: "E-Commerce",
      title: "E-Commerce Frontend",
      description:
        "Full shopping experience — product filtering, cart management, Stripe checkout, wishlist, and review system with optimistic UI updates.",
      stack: "React · Redux · Stripe.js · CSS Modules",
    },
    {
      category: "Real-Time",
      title: "Real-Time Chat Interface",
      description:
        "Web chat UI with typing indicators, file sharing, message reactions, read receipts, and thread-based replies. Pixel-perfect across all screen sizes.",
      stack: "React · WebSockets · Framer Motion · IndexedDB",
    },
    {
      category: "Productivity",
      title: "Project Management UI",
      description:
        "Notion/Trello-style board with drag-and-drop columns, task cards, priority labels, due dates, and keyboard shortcuts for power users.",
      stack: "React · DnD Kit · Zustand · TailwindCSS",
    },
    {
      category: "AI-Powered",
      title: "AI Image Generator App",
      description:
        "Frontend for generating and previewing AI images — prompt input, style controls, generation history gallery, and one-click download.",
      stack: "Next.js · OpenAI API · TailwindCSS · Cloudinary",
    },
    {
      category: "Finance",
      title: "Personal Finance Dashboard",
      description:
        "Budget tracker with interactive charts, transaction history, category breakdowns, and spending trend visualisations with CSV export.",
      stack: "React · Recharts · TailwindCSS · Vite",
    },
    {
      category: "SaaS Tool",
      title: "Portfolio Builder App",
      description:
        "No-code portfolio creator — users pick from themes, drag sections, edit content live, and publish with one click. Full template marketplace.",
      stack: "Next.js · Prisma · Cloudflare · TailwindCSS",
    },
  ];

  const backendProjects: Project[] = [
    {
      category: "Featured · SaaS",
      title: "Scalable SaaS Backend",
      description:
        "Production-ready REST API with JWT auth, RBAC, rate limiting, request logging, health monitoring, and OpenAPI documentation. Designed for multi-tenant SaaS with isolated data per organisation.",
      stack: "NestJS · TypeScript · PostgreSQL · Redis · Docker · AWS",
      featured: true,
    },
    {
      category: "E-Commerce",
      title: "E-Commerce Backend",
      description:
        "Inventory system, order processing pipeline, Stripe payment integration, and admin panel. Handles 10,000+ concurrent SKUs with stock sync webhooks.",
      stack: "Node.js · PostgreSQL · Stripe API · Redis",
    },
    {
      category: "Real-Time",
      title: "Real-Time Chat Server",
      description:
        "WebSocket-based messaging server with rooms, presence tracking, message persistence, and delivery receipts. Scales horizontally with Redis pub/sub.",
      stack: "Node.js · Socket.io · Redis · MongoDB",
    },
    {
      category: "Architecture",
      title: "Microservices Platform",
      description:
        "Separate services for auth, payments, users, and notifications — communicating via message queues with an API gateway as the single entry point.",
      stack: "NestJS · RabbitMQ · Docker · Kubernetes",
    },
    {
      category: "Security",
      title: "Authentication System",
      description:
        "OAuth with Google/GitHub login, password reset flows, email verification, two-factor authentication, and session management with refresh token rotation.",
      stack: "NestJS · Passport.js · JWT · Nodemailer",
    },
    {
      category: "AI Integration",
      title: "AI Model API Wrapper",
      description:
        "Backend that proxies AI services (OpenAI, Anthropic), handles prompt storage, response caching, usage metering, and per-user rate limiting.",
      stack: "Node.js · OpenAI SDK · Redis · PostgreSQL",
    },
    {
      category: "Multi-Tenant",
      title: "Multi-Tenant SaaS Platform",
      description:
        "Schema-based multi-tenancy supporting multiple organisations with fully isolated databases, custom domains, and per-tenant billing via Stripe.",
      stack: "NestJS · PostgreSQL · Stripe · Docker",
    },
    {
      category: "DevOps",
      title: "Cloud Deployment Project",
      description:
        "Dockerized application deployed to AWS with automated CI/CD pipeline, environment secrets management, load balancing, and zero-downtime deployments.",
      stack: "Docker · AWS EC2/RDS/S3 · GitHub Actions · Nginx",
    },
  ];

  const mobileProjects: Project[] = [
    {
      category: "Featured · Fintech",
      title: "Fintech Wallet App",
      description:
        "Full-featured digital wallet with peer-to-peer transfers, transaction history, spending insights, biometric login (Face ID / fingerprint), and real-time balance updates via WebSockets.",
      stack: "React Native · NestJS · PostgreSQL · Stripe · Biometrics API",
      featured: true,
    },
    {
      category: "Social",
      title: "Social Media App",
      description:
        "Profiles, posts, likes and comments, real-time notifications, story/reels feed, direct messaging, and an explore discovery algorithm.",
      stack: "React Native · Node.js · MongoDB · Firebase",
    },
    {
      category: "AI Productivity",
      title: "AI Productivity App",
      description:
        "Voice-to-text note taking, smart reminders, AI summaries of long notes, and task generation from natural language — all working offline-first.",
      stack: "Flutter · Dart · OpenAI · SQLite · Speech SDK",
    },
    {
      category: "On-Demand",
      title: "Food Delivery App",
      description:
        "Restaurant browsing with filters, live order tracking on a map, multi-step checkout with payment gateway, and driver location updates in real time.",
      stack: "React Native · Node.js · Google Maps SDK · Stripe",
    },
    {
      category: "Health & Fitness",
      title: "Fitness Tracker App",
      description:
        "Workout logging, custom plan builder, progress charts over time, and Apple Watch / Wear OS integration for heart rate and step tracking.",
      stack: "Flutter · HealthKit · WearOS · Firebase · Dart",
    },
    {
      category: "Ride-Hailing",
      title: "Ride-Hailing App",
      description:
        "Live GPS tracking, driver-passenger matching algorithm, surge pricing, trip history, in-app payments, and real-time ETA calculations.",
      stack: "React Native · Node.js · Google Maps · WebSockets",
    },
    {
      category: "EdTech",
      title: "Learning Management App",
      description:
        "Video lesson streaming, interactive quiz system, progress tracking across courses, certificate generation, and offline download for lectures.",
      stack: "Flutter · Node.js · AWS S3 · Video.js · SQLite",
    },
    {
      category: "Crypto",
      title: "Crypto Portfolio Tracker",
      description:
        "Live price feeds, portfolio P&L analytics, custom price alerts, multi-wallet support, and historical performance charts with candlestick views.",
      stack: "React Native · CoinGecko API · SQLite · Recharts",
    },
  ];

  const eliteProjects: EliteProject[] = [
    {
      badge: "✦ Elite Full-Stack",
      title: "AI-Powered SaaS Platform",
      description:
        "End-to-end SaaS product combining a React frontend, NestJS backend, and React Native mobile app — all powered by AI features including smart summarisation, auto-tagging, and predictive recommendations. Multi-tenant, Stripe billing, and deployed on AWS.",
      stack: "React · React Native · NestJS · OpenAI · AWS · Stripe",
    },
    {
      badge: "✦ Speed Build",
      title: "Startup MVP — 30 Days",
      description:
        "Full production-ready MVP shipped in under 30 days — from zero to live with auth, payments, core feature set, mobile app, and CI/CD pipeline. Proof that speed and quality aren't mutually exclusive.",
      stack: "Next.js · NestJS · Flutter · Stripe · Docker · AWS",
    },
    {
      badge: "✦ Real-Time Collab",
      title: "Real-Time Collaboration App",
      description:
        "Google Docs-style collaborative editing with operational transforms (OT) for conflict resolution, live cursors, inline comments, version history, and offline sync. Works across web and mobile.",
      stack: "React · Node.js · WebSockets · OT.js · MongoDB",
    },
    {
      badge: "✦ Developer Tool",
      title: "Developer Tool Platform",
      description:
        "API testing tool (like Postman) and code snippet sharing platform in one — with team workspaces, environment variables, test assertions, and a public snippet marketplace for developers.",
      stack: "React · NestJS · PostgreSQL · Monaco Editor · Docker",
    },
    {
      badge: "✦ Web3 · Blockchain",
      title: "Blockchain-Based Voting System",
      description:
        "Transparent, tamper-proof voting platform built on smart contracts. Voters authenticate with wallet signatures, ballots are stored on-chain, and results are publicly verifiable in real time — zero trust required. Includes a mobile voter app and an admin election dashboard.",
      stack:
        "Solidity · Ethereum · Hardhat · React · React Native · Web3.js · IPFS",
      fullWidth: true,
    },
  ];

  const renderProject = (p: Project, i: number) => (
    <div
      className={`pc r ${p.featured ? "feat" : ""} ${i % 2 !== 0 ? "d1" : ""}`}
      key={i}
    >
      <div className="pc-cat">
        <div className="pc-cat-dot"></div>
        {p.category}
      </div>
      <div className="pc-t">{p.title}</div>
      <div className="pc-d-text">{p.description}</div>
      <div className="pc-foot">
        <span className="pc-stack">{p.stack}</span>
        <span className="pc-arrow">↗</span>
      </div>
    </div>
  );

  return (
    <section id="projects" className="sec">
      <div className="container">
        <div className="eyebrow r">
          <span>Projects</span>
          <span className="eyebrow-n">02</span>
        </div>
        <div className="proj-head">
          <h2 className="proj-title r">
            Selected
            <br />
            Work
          </h2>
          <a href="#" className="see-all r">
            View all →
          </a>
        </div>

        <div className="proj-tabs r">
          {["frontend", "backend", "mobile", "elite"].map((tab) => (
            <button
              key={tab}
              className={`ptab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              <span className="ptab-count">
                {tab === "elite" ? "05" : "08"}
              </span>
            </button>
          ))}
        </div>

        <div
          className={`proj-panel ${activeTab === "frontend" ? "active" : ""}`}
        >
          <div className="pgrid">{frontendProjects.map(renderProject)}</div>
        </div>
        <div
          className={`proj-panel ${activeTab === "backend" ? "active" : ""}`}
        >
          <div className="pgrid">{backendProjects.map(renderProject)}</div>
        </div>
        <div className={`proj-panel ${activeTab === "mobile" ? "active" : ""}`}>
          <div className="pgrid">{mobileProjects.map(renderProject)}</div>
        </div>
        <div className={`proj-panel ${activeTab === "elite" ? "active" : ""}`}>
          <div className="elite-grid">
            {eliteProjects.map((p, i) => (
              <div
                className={`elite-card r ${i % 2 !== 0 ? "d1" : ""}`}
                key={i}
                style={p.fullWidth ? { gridColumn: "1 / -1" } : {}}
              >
                <div className="elite-badge">{p.badge}</div>
                <div className="elite-t">{p.title}</div>
                <p className="elite-desc">{p.description}</p>
                <div className="elite-foot">
                  <span>{p.stack}</span>
                  <span className="elite-arrow">↗</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
