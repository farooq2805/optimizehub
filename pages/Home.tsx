import React, { useState, useEffect } from 'react';
import { Page, GeneratedStrategy } from '../types';
import { Target, ArrowRight, Star, Quote, Zap, ShieldCheck } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [strategy, setStrategy] = useState<GeneratedStrategy | null>(null);
  const [loading, setLoading] = useState(false);

  const bitterTruths = [
    "Followers Are Not Customers.",
    "Impressions Won't Scale You.",
    "Engagement Isn't Revenue.",
    "Fluff Reporting Is A Lie."
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % bitterTruths.length);
        setFade(true);
      }, 500);
    }, 3500);
    return () => clearInterval(interval);
  }, [bitterTruths.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section: The Bitter Truth - Refined Pastel */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-12 bg-white">
        {/* Soft Mesh Gradients */}
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-50 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1.5 mb-6 border border-primary-100 rounded-full bg-primary-50">
            <span className="text-primary-600 text-xs md:text-sm font-bold tracking-widest uppercase">The Performance Agency</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 md:mb-10 leading-tight tracking-tighter">
            <span className={`block transition-opacity duration-500 min-h-[1.2em] ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {bitterTruths[currentWordIndex]}
            </span>
            <span className="text-gradient-brand">We Deliver Profits.</span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12">
            No vanity metrics. No technical jargon. Just predictable, scalable business growth for ambitious brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center">
            <button 
              onClick={() => onNavigate(Page.CONTACT)}
              className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary-500/20 flex items-center justify-center gap-2"
            >
              Book a Free Profit Audit <ArrowRight className="w-5 h-5" />
            </button>
            <a 
              href="https://wa.me/971505975089"
              className="w-full sm:w-auto text-slate-600 hover:text-slate-900 px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-lg transition-all border border-slate-200 hover:border-slate-300 bg-white shadow-sm flex justify-center"
            >
              Chat with a Human
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Real Results - Clean White */}
      <section className="py-16 md:py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Actual Results, <br/><span className="text-primary-600">No Fluff.</span></h2>
              <p className="text-slate-500">While others show you charts of 'Followers', we show you charts of 'Qualified Leads' and 'Net Revenue'.</p>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Real Estate Developer", result: "420% Increase in Direct Bookings", sub: "Via targeted intent-based ads" },
                { label: "Dental Clinic Chain", result: "180 New Patients / Month", sub: "Via Local SEO & Map Domination" }
              ].map((res, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                   <div className="text-primary-500 font-bold text-xs uppercase mb-3">{res.label}</div>
                   <div className="text-xl md:text-2xl font-black text-slate-900 mb-2">{res.result}</div>
                   <div className="text-slate-400 text-sm">{res.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Simple Services: What's in it for you? */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">How We Make You Money</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">Marketing is simple when you focus on the right things.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              { 
                icon: <Target className="w-8 h-8" />, 
                title: "Get Found When They Search", 
                benefit: "SEO isn't just ranking; it's being the first answer when a customer has a problem. We put you in front of people ready to buy today.",
                cta: "Own Google",
                color: "bg-blue-50 text-blue-600"
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Scale Your Sales with Ads", 
                benefit: "Don't 'boost posts'. We build high-precision systems that turn $1 of ad spend into $4+ of revenue. Predictable. Scalable. Profitable.",
                cta: "Start Scaling",
                color: "bg-indigo-50 text-indigo-600"
              },
              { 
                icon: <ShieldCheck className="w-8 h-8" />, 
                title: "Build A Brand They Trust", 
                benefit: "If your social media looks cheap, your product feels cheap. We create premium content that makes customers choose you over the competition.",
                cta: "Upgrade Brand",
                color: "bg-teal-50 text-teal-600"
              },
            ].map((s, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-primary-200 transition-all group hover:shadow-2xl hover:shadow-primary-500/5">
                <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{s.title}</h3>
                <p className="text-slate-500 mb-8 leading-relaxed">{s.benefit}</p>
                <button onClick={() => onNavigate(Page.CONTACT)} className="flex items-center gap-2 text-primary-600 font-bold group-hover:gap-4 transition-all uppercase text-sm tracking-widest">
                  {s.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Proof: Testimonials - Soft & Warm */}
      <section className="py-20 md:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Word on the Street</h2>
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />)}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                quote: "I was tired of agencies sending me 50-page reports that meant nothing. OptimizeHub just focused on my sales. My revenue doubled in 4 months.",
                author: "Ahmed R.",
                role: "Real Estate Founder"
              },
              { 
                quote: "The team is actually available. I don't talk to a 'junior account manager', I talk to the people doing the work. Best decision for my clinic.",
                author: "Dr. Sarah L.",
                role: "Clinic Owner"
              },
              { 
                quote: "They took our Instagram from looking like a hobby to looking like a luxury brand. The influencer connections they have are insane.",
                author: "James W.",
                role: "Hospitality CEO"
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-sm relative border border-slate-100">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-100" />
                <p className="text-slate-600 italic mb-8 leading-relaxed text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center font-bold text-primary-600">
                    {t.author[0]}
                  </div>
                  <div>
                    <div className="text-slate-900 font-bold">{t.author}</div>
                    <div className="text-slate-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold & High Contrast */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8">Ready to Stop Guessing?</h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">
            Most agencies will ask for a 12-month contract. We just ask for 30 minutes. Let’s look at your numbers and see where you're losing money.
          </p>
          <div className="flex justify-center">
            <button 
               onClick={() => onNavigate(Page.CONTACT)}
               className="bg-primary-600 hover:bg-primary-700 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl shadow-primary-500/30 transition-all hover:scale-105"
            >
              Request Free Consultation
            </button>
          </div>
          <p className="mt-10 text-slate-400 text-sm">No sales pitch. Just data and a strategy you can use with or without us.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;