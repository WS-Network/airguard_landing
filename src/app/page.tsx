"use client";
import { useState } from "react";

// Helper for intersection observer reveal animations
import { useEffect } from "react";

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
            {/* Logo */}
            <img src="/Logo.png" alt="AirGuard Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-primary-light">AirGuard</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#problem" className="text-gray-300 hover:text-primary-green transition-colors duration-300">The Problem</a>
            <a href="#solution" className="text-gray-300 hover:text-primary-green transition-colors duration-300">Solution</a>
            <a href="#market" className="text-gray-300 hover:text-primary-green transition-colors duration-300">Market</a>
            <a href="#product" className="text-gray-300 hover:text-primary-green transition-colors duration-300">Product</a>
            <a href="#business" className="text-gray-300 hover:text-primary-green transition-colors duration-300">Business Model</a>
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
          <a href="#market" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>Market</a>
          <a href="#product" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>Product</a>
          <a href="#business" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>Business Model</a>
          <a href="#team" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>Team</a>
          <a href="#ask" className="block py-2 px-4 text-sm hover:bg-gray-700" onClick={handleNavClick}>The Ask</a>
        </div>
      </header>

      {/* Main content sections */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center hero-bg-pattern">
          <div className="container mx-auto px-6 text-center hero-content">
            <img src="/logo.png" alt="AirGuard Logo" className="h-24 w-24 mx-auto mb-8" />
            <h1 className="text-5xl md:text-8xl font-black text-primary-light uppercase tracking-tighter leading-none">
              AI-Driven Network
              <span className="text-primary-green"> Management</span>
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              AirGuard delivers a self-healing networking solution that guarantees unparalleled uptime and performance for MENA ISPs.
            </p>
            <div className="mt-8 flex justify-center space-x-6 text-primary-light/70">
              <span>@airguard_mena</span>
              <span>airguard.tech</span>
            </div>
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
              <h2 className="section-heading text-4xl md:text-6xl">The Network is Breaking Under <span className="text-primary-green accent-red">Complexity</span>.</h2>
              <p className="mt-6 text-lg md:text-xl text-gray-600">
                Across the MENA region, government-led 5G and IoT expansions are creating unprecedented network densification. For ISPs, this means escalating RF interference, costly manual interventions, and reduced profitability.
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
              <h2 className="section-heading text-4xl md:text-6xl text-primary-light">Intelligent, <span className="text-primary-green">Autonomous</span> Network Resilience.</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">AirGuard is a hardware-enabled SaaS platform that bolts onto existing infrastructure, turning network complexity from a liability into an advantage.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 reveal">
                {/* Features List */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green p-3 rounded-full mt-1">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-light">360° Real-Time Spectrum Scanning</h3>
                    <p className="text-gray-400 mt-1">Proactively identify, locate, and classify RF interference from any direction in real-time with our 8-antenna array.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green p-3 rounded-full mt-1">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3M5.636 5.636l-1.414-1.414m15.556 15.556l-1.414-1.414M18.364 5.636l-1.414 1.414m-12.728 12.728l-1.414 1.414"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-light">On-Device AI for Predictive Optimization</h3>
                    <p className="text-gray-400 mt-1">On-board AI analyzes the environment and predicts issues before they impact customers, powered by NVIDIA Jetson.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-green p-3 rounded-full mt-1">
                    <svg className="w-6 h-6 text-primary-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary-light">Autonomous, Sub-Second Channel Tuning</h3>
                    <p className="text-gray-400 mt-1">Dynamically adjusts channel configurations across the network to guarantee optimal performance and uptime.</p>
                  </div>
                </div>
              </div>
              <div className="reveal">
                {/* AirGuard device image */}
                <div className="rounded-2xl shadow-2xl w-full h-80 overflow-hidden">
                  <img 
                    src="/AirguardOnTower.jpeg" 
                    alt="AirGuard device mounted on tower" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Section */}
        <section id="market" className="py-20 md:py-32 bg-primary-light text-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl">A High-Growth, <span className="text-primary-green" style={{ color: '#191919' }}>Underserved</span> Market.</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">The MENA network automation market is expanding rapidly, driven by 5G adoption and the critical need for operational efficiency.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glassmorphism-card p-8 rounded-2xl reveal">
                <p className="text-sm uppercase tracking-widest text-gray-400">TAM</p>
                <p className="text-6xl font-black text-primary-light">$31B</p>
                <p className="mt-2 text-lg font-bold text-gray-300">Global Network Automation (2025)</p>
              </div>
              <div className="glassmorphism-card p-8 rounded-2xl reveal" style={{ transitionDelay: '100ms' }}>
                <p className="text-sm uppercase tracking-widest text-gray-400">SAM</p>
                <p className="text-6xl font-black text-primary-light">$2.1B</p>
                <p className="mt-2 text-lg font-bold text-gray-300">MENA Region (2025)</p>
              </div>
              <div className="glassmorphism-card p-8 rounded-2xl reveal" style={{ transitionDelay: '200ms' }}>
                <p className="text-sm uppercase tracking-widest text-gray-400">SOM</p>
                <p className="text-6xl font-black text-primary-light">$85M</p>
                <p className="mt-2 text-lg font-bold text-gray-300">Initial Target (GCC ISPs)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Section */}
        <section id="product" className="py-20 md:py-32 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <img 
                  src="/AirguardOnTower.jpeg" 
                  alt="AirGuard Product Technology" 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
              <div className="reveal">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight text-primary-light">Purpose-Built for the Edge</h2>
                <p className="mt-4 text-xl text-primary-light/80">
                  Our technology stack is meticulously designed to deliver high-performance, autonomous operation right where it&apos;s needed most.
                </p>
                <div className="mt-8 space-y-6">
                  <div>
                    <h3 className="font-bold text-primary-green text-lg">Hardware</h3>
                    <p className="text-primary-light/80">NVIDIA Jetson Orin Nano for edge AI, a custom 8-antenna array, and a resilient LoRaWAN backup channel ensure robust performance and reliability.</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-green text-lg">Software</h3>
                    <p className="text-primary-light/80">A proprietary on-device AI model provides real-time analysis, while a secure cloud dashboard offers fleet management and network-wide analytics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Model Section */}
        <section id="business" className="py-20 md:py-32 bg-primary-light text-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl">Scalable, <span className="text-primary-green" style={{ color: '#191919' }}>Recurring</span> Revenue.</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Our hardware-enabled SaaS model provides a clear, scalable path to high-margin recurring revenue, aligning our success with ongoing customer value.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="glassmorphism-card-light p-8 rounded-2xl reveal">
                <h3 className="text-2xl font-bold text-primary-dark">Enthusiast</h3>
                <p className="text-4xl font-black my-2 text-primary-dark">$299<span className="text-lg font-normal">/mo</span></p>
                <p className="text-primary-dark/70">Up to 3 devices</p>
              </div>
              <div className="glassmorphism-card-light p-8 rounded-2xl border-4 border-primary-green scale-105 reveal" style={{ transitionDelay: '100ms' }}>
                <h3 className="text-2xl font-bold text-primary-dark">ISP</h3>
                <p className="text-4xl font-black my-2 text-primary-dark">$1,999<span className="text-lg font-normal">/mo</span></p>
                <p className="text-primary-dark/70">Up to 50 devices + API</p>
              </div>
              <div className="glassmorphism-card-light p-8 rounded-2xl reveal" style={{ transitionDelay: '200ms' }}>
                <h3 className="text-2xl font-bold text-primary-dark">Enterprise</h3>
                <p className="text-4xl font-black my-2 text-primary-dark">Custom</p>
                <p className="text-primary-dark/70">Unlimited devices + SLA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Traction Section */}
        <section id="traction" className="py-20 md:py-32 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl text-primary-light">Proven Performance, <span className="text-primary-green">Validated</span> Need.</h2>
            </div>
            <div className="bg-primary-green p-8 md:p-12 rounded-2xl max-w-4xl mx-auto reveal">
              <blockquote className="text-xl md:text-2xl italic text-primary-dark relative">
                <span className="absolute -top-4 -left-6 text-6xl text-primary-dark/30 font-serif">&ldquo;</span>
                Managing RF interference in our dense urban 5G network was a constant battle. AirGuard&apos;s prototype gave us proactive visibility for the first time, allowing us to fix issues before customers were impacted.
                <span className="absolute -bottom-4 -right-6 text-6xl text-primary-dark/30 font-serif">&rdquo;</span>
              </blockquote>
              <p className="mt-4 text-right font-bold text-primary-dark">– Head of Network Ops, Major Regional ISP</p>
            </div>
          </div>
        </section>

        {/* Go-to-Market Section */}
        <section id="gtm" className="py-20 md:py-32 bg-primary-light text-primary-dark">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">Focused Go-To-Market Strategy</h2>
                <p className="mt-4 text-xl text-primary-dark/80">
                  Our phased approach prioritizes establishing credibility with market leaders before scaling through direct sales and strategic channel partnerships.
                </p>
              </div>
              <div className="reveal">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold">Phase 1: Pilot Partnerships</h3>
                    <p className="mt-2 text-primary-dark/70">Secure 3-5 paid pilots with leading MENA operators (e.g., stc, Etisalat, Zain) to build data-backed case studies and industry validation.</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Phase 2: Scale & Expand</h3>
                    <p className="mt-2 text-primary-dark/70">Build an in-house sales team to convert the pilot pipeline and establish a channel partner program with telecom system integrators to accelerate reach.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 md:py-32 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl text-primary-light">The Right Team to <span className="text-primary-green">Execute</span>.</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="glassmorphism-card p-6 rounded-2xl reveal text-center">
                <div>
                  <h3 className="text-xl font-bold text-primary-light">Ryan Kyrillos</h3>
                  <p className="text-primary-green font-semibold">Founder & CEO</p>
                  <p className="mt-2 text-primary-light/80 text-sm">Visionary leader with deep expertise in scaling technology companies and building strategic partnerships.</p>
                </div>
              </div>
              <div className="glassmorphism-card p-6 rounded-2xl reveal text-center" style={{ transitionDelay: '100ms' }}>
                <div>
                  <h3 className="text-xl font-bold text-primary-light">Chris Kareh</h3>
                  <p className="text-primary-green font-semibold">Co-Founder & CTO</p>
                  <p className="mt-2 text-primary-light/80 text-sm">Technical expert in embedded systems and AI with extensive experience in edge computing and network infrastructure.</p>
                </div>
              </div>
              <div className="glassmorphism-card p-6 rounded-2xl reveal text-center" style={{ transitionDelay: '200ms' }}>
                <div>
                  <h3 className="text-xl font-bold text-primary-light">Elias Cheikh</h3>
                  <p className="text-primary-green font-semibold">Network & Security Specialist</p>
                  <p className="mt-2 text-primary-light/80 text-sm">Cybersecurity expert specializing in network infrastructure security and threat mitigation strategies.</p>
                </div>
              </div>
              <div className="glassmorphism-card p-6 rounded-2xl reveal text-center" style={{ transitionDelay: '300ms' }}>
                <div>
                  <h3 className="text-xl font-bold text-primary-light">Ramona Baysari</h3>
                  <p className="text-primary-green font-semibold">Product Designer</p>
                  <p className="mt-2 text-primary-light/80 text-sm">Creative designer focused on user experience and interface design for complex technical products.</p>
                </div>
              </div>
              <div className="glassmorphism-card p-6 rounded-2xl reveal text-center" style={{ transitionDelay: '400ms' }}>
                <div>
                  <h3 className="text-xl font-bold text-primary-light">Anthony Saliba</h3>
                  <p className="text-primary-green font-semibold">Senior FrontEnd Developer</p>
                  <p className="mt-2 text-primary-light/80 text-sm">Experienced developer specializing in modern web technologies and creating intuitive user interfaces.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competition Section */}
        <section id="competition" className="py-20 md:py-32 bg-primary-light text-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl">A Unique and <span className="text-primary-green" style={{ color: '#191919' }}>Defensible</span> Position.</h2>
            </div>
            <div className="overflow-x-auto reveal">
              <table className="w-full min-w-max text-left text-lg">
                <thead className="border-b-2 border-primary-dark/20">
                  <tr>
                    <th className="p-4 font-bold">Feature</th>
                    <th className="p-4">Manual Management</th>
                    <th className="p-4">Integrated Networks (e.g., Starlink)</th>
                    <th className="p-4 bg-primary-dark/10 rounded-t-lg">AirGuard (Open Platform)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary-dark/10">
                    <td className="p-4 font-bold">Automation</td>
                    <td className="p-4">None (Reactive)</td>
                    <td className="p-4">Full (Proprietary)</td>
                    <td className="p-4 bg-primary-dark/5 text-primary-dark font-bold"><span className="text-green-600 font-black">Full (Autonomous)</span></td>
                  </tr>
                  <tr className="border-b border-primary-dark/10">
                    <td className="p-4 font-bold">Data Source</td>
                    <td className="p-4">Limited Logs</td>
                    <td className="p-4">Internal Network Data</td>
                    <td className="p-4 bg-primary-dark/5 text-primary-dark font-bold"><span className="text-green-600 font-black">Real-World RF Data</span></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Platform</td>
                    <td className="p-4">Vendor-Agnostic</td>
                    <td className="p-4">Closed Ecosystem</td>
                    <td className="p-4 bg-primary-dark/5 rounded-b-lg text-primary-dark font-bold"><span className="text-green-600 font-black">Open & Interoperable</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Vision / Timeline Section */}
        <section id="vision" className="py-20 md:py-32 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto reveal">
              <div className="text-center mb-16">
                <h2 className="section-heading text-4xl md:text-6xl text-primary-light">Our Vision & <span className="text-primary-green">Roadmap</span>.</h2>
                <p className="mt-4 text-xl text-primary-light/80">A clear path from market entry to becoming the standard for intelligent network infrastructure in the MENA region.</p>
              </div>
              <div className="relative pl-8 border-l-4 border-primary-green/30">
                <div className="timeline-item mb-12">
                  <h3 className="text-2xl font-bold text-primary-green">Year 1: Market Validation</h3>
                  <p className="mt-2 text-primary-light/80">Secure 3-5 paid pilot programs with leading MENA ISPs. Finalize production hardware and gather robust case study data.</p>
                </div>
                <div className="timeline-item mb-12">
                  <h3 className="text-2xl font-bold text-primary-green">Year 2: Commercial Scaling</h3>
                  <p className="mt-2 text-primary-light/80">Launch direct sales operations in KSA and UAE. Convert pilot pipeline to full contracts and onboard first channel partners.</p>
                </div>
                <div className="timeline-item">
                  <h3 className="text-2xl font-bold text-primary-green">Year 3: Regional Expansion</h3>
                  <p className="mt-2 text-primary-light/80">Expand into new MENA markets (e.g., Egypt, Qatar). Launch Enterprise tier and introduce advanced features like 6GHz band support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Ask Section */}
        <section id="ask" className="py-20 md:py-32 bg-primary-green text-primary-dark">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="reveal">
                <h2 className="section-heading text-4xl md:text-6xl">Join Us in Redefining Network Management</h2>
                <p className="mt-6 text-2xl md:text-3xl font-bold">
                  We are seeking <span className="bg-primary-dark text-primary-green px-2 rounded-md">$2 million</span> for 18% equity to accelerate our growth and capture the rapidly growing MENA market.
                </p>
                <p className="mt-4 text-lg text-primary-dark/80">
                  This ask is aligned with the regional average for deep-tech startups and will fund our 18-month growth plan.
                </p>
              </div>
              <div className="reveal">
                <h3 className="text-2xl font-bold mb-4 text-center">Use of Funds (18 Months)</h3>
                <div className="glassmorphism-card p-6 rounded-lg mb-6">
                  <div className="grid md:grid-cols-2 gap-6 text-center">
                    <div>
                      <p className="text-3xl font-bold text-primary-green">45%</p>
                      <p className="text-sm text-gray-300">R&D (Hardware & AI)</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary-green">25%</p>
                      <p className="text-sm text-gray-300">Production & Pilot COGS</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary-green">20%</p>
                      <p className="text-sm text-gray-300">Sales & Marketing</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-primary-green">10%</p>
                      <p className="text-sm text-gray-300">G&A</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section id="impact" className="py-20 md:py-32 bg-primary-dark">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 reveal">
              <h2 className="section-heading text-4xl md:text-6xl text-primary-light">The AirGuard <span className="text-primary-green">Impact</span>.</h2>
              <p className="mt-4 text-xl max-w-3xl mx-auto text-primary-light/80">
                Our technology delivers a powerful trifecta of operational, financial, and environmental returns.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glassmorphism-card p-8 rounded-2xl reveal">
                <p className="text-6xl font-black text-primary-green">35%</p>
                <p className="mt-2 text-xl font-bold text-primary-light">Reduction in Network Downtime</p>
              </div>
              <div className="glassmorphism-card p-8 rounded-2xl reveal" style={{ transitionDelay: '100ms' }}>
                <p className="text-6xl font-black text-primary-green">30%</p>
                <p className="mt-2 text-xl font-bold text-primary-light">Reduction in Operational Costs</p>
              </div>
              <div className="glassmorphism-card p-8 rounded-2xl reveal" style={{ transitionDelay: '200ms' }}>
                <p className="text-6xl font-black text-primary-green">20%</p>
                <p className="mt-2 text-xl font-bold text-primary-light">Reduction in Network Power Use</p>
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
