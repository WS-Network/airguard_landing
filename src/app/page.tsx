"use client";
import { useState } from "react";

// Helper for intersection observer reveal animations
import { useEffect } from "react";

// Chart components
import { ISPBarChart, FundingPieChart, MarketGrowthChart } from "../components/charts";

function useRevealOnScroll() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObserver = new window.IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });
    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
    return () => {
      revealElements.forEach((el) => {
        revealObserver.unobserve(el);
      });
    };
  }, []);
}

export default function Home() {
  useRevealOnScroll();

  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on nav click (mobile)
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glassmorphism">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center space-x-3">
            {/* SVG Logo */}
            <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" stroke="#D8FF43" strokeWidth="4" />
              <path d="M50 30V18M50 70V82M70 50H82M30 50H18M64.64 35.36L73.53 26.47M35.36 64.64L26.47 73.53M64.64 64.64L73.53 73.53M35.36 35.36L26.47 26.47" stroke="#D8FF43" strokeWidth="8" strokeLinecap="round" />
              <circle cx="50" cy="50" r="16" fill="#D8FF43" />
            </svg>
            <span className="text-2xl font-bold text-primary-light">AirGuard</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-300 hover:text-primary-green transition-colors duration-300">The Problem</a>
            <a href="#solution" className="text-gray-300 hover:text-primary-green transition-colors duration-300">Solution</a>
            <a href="#tech" className="text-gray-300 hover:text-primary-green transition-colors duration-300">Technology</a>
            <a href="#ai_section" className="text-primary-green hover:text-white transition-colors duration-300 font-bold">AI Hub</a>
            <a href="#team" className="text-gray-300 hover:text-primary-green transition-colors duration-300">Team</a>
            <a href="#ask" className="bg-primary-green text-primary-dark font-bold py-2 px-5 rounded-lg hover:bg-white transition-colors duration-300">The Ask</a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="menu-btn"
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div id="menu" className={`${menuOpen ? "block" : "hidden"} md:hidden bg-primary-dark`}> 
          <a href="#problem" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>The Problem</a>
          <a href="#solution" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>Solution</a>
          <a href="#tech" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>Technology</a>
          <a href="#ai_section" className="block py-2 px-4 text-sm text-primary-green hover:bg-gray-700" onClick={handleNavClick}>AI Hub</a>
          <a href="#market" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>Market</a>
          <a href="#team" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>Team</a>
          <a href="#ask" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>The Ask</a>
        </div>
      </header>

      {/* Main content sections go here (Hero, Problem, Solution, etc.) */}
      {/* ... For brevity, the rest of the landing page JSX will be inserted here, following the HTML structure and using Tailwind classes ... */}
      {/* Hero Section */}
      <main>
        <section id="hero" className="min-h-screen flex items-center hero-bg-pattern">
          <div className="container mx-auto px-6 text-center hero-content">
            <h1 className="text-5xl md:text-8xl font-black text-primary-light uppercase tracking-tighter leading-none">
              AI-Driven Network
              <span className="text-primary-green"> Management</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              AirGuard delivers a self-healing networking solution that guarantees unparalleled uptime and performance for ISPs.
            </p>
            <div className="mt-10">
              <a href="#problem" className="bg-primary-green text-primary-dark font-bold py-4 px-8 rounded-lg text-lg hover:bg-white transition-colors duration-300">
                Discover The Solution
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section id="problem" className="py-20 md:py-32 bg-primary-light text-primary-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center reveal">
              <h2 className="section-heading text-4xl md:text-6xl">The High Cost of Network <span className="text-primary-green accent-red">Instability</span>.</h2>
              <p className="mt-6 text-lg md:text-xl text-gray-600">
                ISPs constantly battle intermittent service disruptions caused by radio frequency (RF) interference, leading to costly manual troubleshooting, truck rolls, and high customer churn.
              </p>
            </div>
            <div className="mt-16 bg-primary-green p-8 md:p-12 rounded-2xl max-w-4xl mx-auto text-center shadow-2xl reveal">
              <p className="text-2xl md:text-4xl font-bold text-primary-dark">
                &ldquo;Up to 40% of all service outages are caused by RF noise and spectrum interference.&rdquo;
              </p>
              <p className="mt-4 text-lg text-primary-dark opacity-80">Industry Analysis Report</p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-20 md:py-32 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl text-primary-light">Automated, <span className="text-primary-green">Self-Healing</span> Networks.</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Our integrated hardware and software solution works tirelessly to keep your network optimized.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 reveal">
                {/* Features List */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green p-3 rounded-full mt-1">
                    {/* Icon */}
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-light">360° Spectrum Scanning</h3>
                    <p className="text-gray-400 mt-1">Proactively identify, locate, and classify RF interference from any direction in real-time with our 8-antenna array.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green p-3 rounded-full mt-1">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.556 15.556l-1.414-1.414M18.364 5.636l-1.414 1.414m-12.728 12.728l-1.414 1.414"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-light">Real-Time AI Optimization</h3>
                    <p className="text-gray-400 mt-1">On-board AI analyzes the environment and predicts issues before they impact customers, powered by NVIDIA Jetson.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green p-3 rounded-full mt-1">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-light">Automated Network Tuning</h3>
                    <p className="text-gray-400 mt-1">Dynamically adjusts channel configurations across the network to guarantee optimal performance and uptime.</p>
                  </div>
                </div>
              </div>
              <div className="reveal">
                {/* Placeholder for device image */}
                <div className="rounded-2xl shadow-2xl w-full h-80 bg-gray-700 flex items-center justify-center">
                  <span className="text-3xl text-primary-green">[Device Image]</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section id="tech" className="py-20 md:py-32 bg-primary-light text-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl">The Technology <span className="text-primary-green" style={{ color: '#191919' }}>Stack</span>.</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Purpose-built hardware and intelligent software working in perfect harmony.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal">
                <h3 className="text-2xl font-bold text-primary-dark">Hardware Core</h3>
                <ul className="mt-6 space-y-4 text-gray-700">
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔️</span>NVIDIA Jetson Orin Nano for Edge AI</li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔️</span>Custom 8-Antenna Relay Array</li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔️</span>MikroTik 5GHz Module (11km range)</li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔️</span>Resilient LoRaWAN Backup Channel</li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔️</span>Industrial-Grade Weatherproof Enclosure</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal">
                <h3 className="text-2xl font-bold text-primary-dark">Software & AI</h3>
                <ul className="mt-6 space-y-4 text-gray-700">
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔️</span>On-Device Lightweight ML Model (Olama)</li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔️</span>Predictive Interference Detection</li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔️</span>Unified Multi-Vendor Management Dashboard</li>
                  <li className="flex items-center"><span className="w-5 h-5 text-green-500 mr-3">✔️</span>Centralized Analytics & Reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Market Section */}
        <section id="market" className="py-20 md:py-32 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl text-primary-light">A Multi-Billion Dollar <span className="text-primary-green">Opportunity</span>.</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">The demand for intelligent, automated network management is rapidly accelerating.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div className="bg-gray-800 p-8 rounded-2xl reveal">
                <h3 className="text-2xl font-bold text-primary-light">Market Size</h3>
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-gray-400">Total Addressable Market (TAM)</p>
                    <p className="text-4xl font-bold text-primary-green">$25 Billion</p>
                    <p className="text-gray-400">Global Network Automation</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Serviceable Obtainable Market (SOM)</p>
                    <p className="text-4xl font-bold text-primary-green">$1.2 Billion</p>
                    <p className="text-gray-400">Regional ISPs - North America (Year 3)</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl reveal">
                <h3 className="text-2xl font-bold text-primary-light">ISP Cost Analysis</h3>
                <div className="mt-6 space-y-4">
                  <p className="text-gray-400 mb-4">AirGuard significantly reduces operational expenses by minimizing manual interventions.</p>
                  <ISPBarChart />
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="bg-gray-800 p-8 rounded-2xl reveal">
                <h3 className="text-2xl font-bold text-primary-light text-center mb-6">Market Growth Projections</h3>
                <MarketGrowthChart />
              </div>
            </div>
          </div>
        </section>

        {/* Traction Section */}
        <section id="traction" className="py-20 md:py-32 bg-primary-light text-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl">Proven <span className="text-primary-green" style={{ color: '#191919' }}>Results</span>.</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">Our pilot programs have delivered significant, measurable improvements.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal">
                <p className="text-6xl font-black text-primary-green">35%</p>
                <p className="mt-2 text-xl font-bold">Reduction in Downtime</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal" style={{ transitionDelay: '200ms' }}>
                <p className="text-6xl font-black text-primary-green">25%</p>
                <p className="mt-2 text-xl font-bold">Improvement in Throughput</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg reveal" style={{ transitionDelay: '400ms' }}>
                <p className="text-6xl font-black text-primary-green">45%</p>
                <p className="mt-2 text-xl font-bold">Fewer Manual Truck Rolls</p>
              </div>
            </div>
            <div className="mt-16 bg-gray-200 p-8 md:p-12 rounded-2xl max-w-4xl mx-auto reveal">
              <blockquote className="text-xl md:text-2xl italic text-gray-800 relative">
                <span className="absolute -top-4 -left-6 text-6xl text-gray-300 font-serif">&ldquo;</span>
                AirGuard transformed our most problematic sector. We went from daily customer complaints about dropped connections to near-zero service calls within a week of installation.
                <span className="absolute -bottom-4 -right-6 text-6xl text-gray-300 font-serif">&rdquo;</span>
              </blockquote>
              <p className="mt-4 text-right font-bold text-gray-700">– CTO, Midwest Regional ISP</p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        {/* <section id="team" className="py-20 md:py-32 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl text-primary-light">Experienced <span className="text-primary-green">Leadership</span>.</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">We are a team of industry veterans and innovators passionate about solving complex network challenges.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              Team Member Cards (placeholders)
              <div className="bg-gray-800 p-6 rounded-2xl text-center reveal">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700 bg-gray-600 flex items-center justify-center text-3xl text-primary-green">A</div>
                <h3 className="text-xl font-bold text-primary-light">[Founder Name 1]</h3>
                <p className="text-primary-green">CEO & Co-Founder</p>
                <p className="mt-2 text-sm text-gray-400">15-year telecom veteran with deep experience scaling hardware-as-a-service companies.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl text-center reveal" style={{ transitionDelay: '200ms' }}>
                <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700 bg-gray-600 flex items-center justify-center text-3xl text-primary-green">B</div>
                <h3 className="text-xl font-bold text-primary-light">[Founder Name 2]</h3>
                <p className="text-primary-green">CTO & Co-Founder</p>
                <p className="mt-2 text-sm text-gray-400">Expert in embedded systems and AI, with a Ph.D. in distributed sensor networks.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl text-center reveal" style={{ transitionDelay: '400ms' }}>
                <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700 bg-gray-600 flex items-center justify-center text-3xl text-primary-green">C</div>
                <h3 className="text-xl font-bold text-primary-light">[Advisor Name 1]</h3>
                <p className="text-primary-green">Advisor</p>
                <p className="mt-2 text-sm text-gray-400">Former VP of Engineering at a major telecommunications corporation.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-2xl text-center reveal" style={{ transitionDelay: '600ms' }}>
                <div className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-700 bg-gray-600 flex items-center justify-center text-3xl text-primary-green">D</div>
                <h3 className="text-xl font-bold text-primary-light">[Advisor Name 2]</h3>
                <p className="text-primary-green">Advisor</p>
                <p className="mt-2 text-sm text-gray-400">Professor of AI & Machine Learning at a leading technical university.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* The Ask Section */}
        <section id="ask" className="py-20 md:py-32 bg-primary-green text-primary-dark">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h2 className="section-heading text-4xl md:text-6xl">Investment Opportunity.</h2>
                <p className="mt-6 text-2xl md:text-3xl font-bold">
                  We are seeking <span className="bg-primary-dark text-primary-green px-2 rounded-md">$2 million</span> for 18% equity to accelerate our growth and capture the market.
                </p>
              </div>
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4">Use of Funds</h3>
                <FundingPieChart />
                <div className="mt-6 space-y-2 text-lg">
                  <p className="flex items-center"><span className="w-4 h-4 rounded-full bg-primary-dark mr-3 inline-block"></span> 40% - R&D and Product Development</p>
                  <p className="flex items-center"><span className="w-4 h-4 rounded-full mr-3 inline-block" style={{ backgroundColor: '#43ff72' }}></span> 35% - Pilot Deployments & GTM</p>
                  <p className="flex items-center"><span className="w-4 h-4 rounded-full mr-3 inline-block" style={{ backgroundColor: '#ff9633' }}></span> 25% - Sales & Marketing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8 mt-32">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2025 AirGuard. All rights reserved.</p>
          <p className="text-sm mt-2">Revolutionizing network management for a connected future.</p>
        </div>
      </footer>
    </>
  );
}
