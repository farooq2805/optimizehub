import React from 'react';
import { Page } from '../../types';
import { Users, CheckCircle, ShieldCheck, ArrowLeft, Star, MessageCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const InfluencerPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => onNavigate(Page.SERVICES)} className="flex items-center text-slate-400 hover:text-primary-600 mb-6 md:mb-10 transition-colors text-sm font-bold group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Services
        </button>

        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-16 md:mb-24 items-center">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1 mb-4 border border-primary-100 rounded-full bg-primary-50">
                <span className="text-primary-600 text-[10px] md:text-xs font-bold tracking-widest uppercase">Trusted Voices Network</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Influencers Who <span className="text-gradient-brand">Actually Sell</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed font-medium">
              Word of mouth is digital now. We connect you with vetted, high-impact influencers who drive real conversations and conversions, not just vanity metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg inline-flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary-500/20">
                <MessageCircle className="w-5 h-5"/> Connect with Voices
              </a>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 blur-[50px]"></div>
             <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8 border-l-4 border-primary-500 pl-4">Our Vetting Process</h3>
             <ul className="space-y-6 md:space-y-8 relative z-10">
               <li className="flex gap-4">
                 <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="text-slate-900 font-bold text-base md:text-lg">Fake Follower Audit</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">We analyze audience authenticity to ensure zero bot presence and real human engagement.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Star className="w-8 h-8 md:w-10 md:h-10 text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="text-slate-900 font-bold text-base md:text-lg">Niche Relevance</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">We match you with voices that align with your brand, focusing on Luxury, Tech, or Lifestyle hubs.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="text-slate-900 font-bold text-base md:text-lg">Legal Compliance</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">We handle all licensing and contract negotiations to protect your brand in the local market.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        {/* Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16 md:mb-24">
            <div className="md:col-span-2 space-y-16 md:space-y-24">
                <section>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight">Campaign Management</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Strategic Sourcing & Outreach",
                            "Rate Negotiation & Contracts",
                            "Creative Brief Development",
                            "Content Review & Approval",
                            "Live Campaign Monitoring",
                            "Post-Campaign Analytics"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center text-slate-700 bg-white p-5 rounded-2xl border border-slate-100 text-sm md:text-base font-semibold shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-4 flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight">Trust is Currency</h2>
                    <p className="text-slate-600 mb-12 leading-relaxed text-lg font-medium">
                        Consumers rely heavily on recommendations from personalities they follow. Whether for a new F&B opening or a tech product launch, the social proof effect is the most powerful driver of immediate ROI.
                    </p>
                    <div className="bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm">
                        <h3 className="text-slate-900 font-black text-xl mb-4">Micro vs. Mega Influencers</h3>
                        <p className="text-slate-600 text-base font-medium leading-relaxed">
                            We recommend a tailored mix. <span className="text-primary-600 font-bold">Mega influencers</span> for brand awareness and prestige, and <span className="text-primary-600 font-bold">Micro-influencers</span> (10k-50k) for high engagement and trust-driven sales.
                        </p>
                    </div>
                </section>

                <section>
                     <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight">Ideal Sectors</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                          { title: "Hospitality", sub: "Driving immediate footfall and high-end social buzz." },
                          { title: "Wellness", sub: "Tutorials and reviews that build long-term trust." },
                          { title: "E-Commerce", sub: "Direct conversion through unboxing and creator codes." }
                        ].map((item, i) => (
                          <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                              <div className="w-8 h-1 bg-primary-500 rounded-full mb-6"></div>
                              <h3 className="text-slate-900 font-bold mb-3 text-lg md:text-xl">{item.title}</h3>
                              <p className="text-sm text-slate-500 font-medium leading-relaxed">{item.sub}</p>
                          </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Sidebar FAQ & CTA */}
            <div className="space-y-10">
                <div className="bg-slate-50 p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-8 flex items-center gap-3 tracking-tight"><HelpCircle className="w-6 h-6 text-primary-600"/> FAQ</h3>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm md:text-base mb-2">Is it expensive?</h4>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">We negotiate competitive rates and often secure barter collaborations for micro-influencers to maximize your budget.</p>
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm md:text-base mb-2">How do we measure ROI?</h4>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">We use tracked links, unique promo codes, and sentiment analysis to measure direct sales impact.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-primary-50 p-10 rounded-[2.5rem] text-center border border-primary-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/50 blur-[60px] rounded-full"></div>
                    <h3 className="text-slate-900 font-black text-xl md:text-3xl mb-4 tracking-tight relative z-10">Amplify Your Brand</h3>
                    <p className="text-slate-600 text-sm mb-10 font-medium leading-relaxed relative z-10">Let us find the perfect brand ambassadors for your niche today.</p>
                    <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white w-full py-5 rounded-full font-black transition-all block text-base shadow-xl shadow-primary-500/20 active:scale-95 relative z-10">
                        WhatsApp Us
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfluencerPage;