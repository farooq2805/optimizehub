import React from 'react';
import { Page } from '../../types';
import { Target, Zap, MousePointer2, ArrowLeft, CheckCircle2, HelpCircle, MessageCircle, BarChart3 } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const PaidPage: React.FC<Props> = ({ onNavigate }) => {
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
                <span className="text-primary-600 text-[10px] md:text-xs font-bold tracking-widest uppercase">Performance Marketing Experts</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Instant Traffic. <span className="text-gradient-brand">Measurable ROI.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed font-medium">
              Stop wasting budget on clicks that don't convert. We engineer high-precision PPC campaigns on Google, YouTube, and Social Platforms that target high-intent buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg inline-flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary-500/20">
                <MessageCircle className="w-5 h-5"/> Launch Campaigns
              </a>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 blur-[50px]"></div>
             <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8 border-l-4 border-primary-500 pl-4">The Ad Landscape</h3>
             <ul className="space-y-6 md:space-y-8 relative z-10">
               <li className="flex gap-4">
                 <MousePointer2 className="w-8 h-8 md:w-10 md:h-10 text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="text-slate-900 font-bold text-base md:text-lg">Cost Efficiency</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">Industry CPCs can be high. We use negative keywords and Quality Score optimization to slash your acquisition costs.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Target className="w-8 h-8 md:w-10 md:h-10 text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="text-slate-900 font-bold text-base md:text-lg">Audience Precision</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">Target by income level, interest, and behavior to reach the affluent demographic you actually want.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Zap className="w-8 h-8 md:w-10 md:h-10 text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="text-slate-900 font-bold text-base md:text-lg">Seasonal Mastery</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">From holiday spikes to seasonal trends, we adjust bids in real-time to capitalize on market peaks.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        {/* Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16 md:mb-24">
            <div className="md:col-span-2 space-y-16 md:space-y-24">
                <section>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight">Our Paid Media Ecosystem</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Google Search Ads (PPC)",
                            "Google Shopping & Performance Max",
                            "YouTube Video Ads",
                            "Instagram & Facebook Ads",
                            "LinkedIn B2B Lead Gen",
                            "Remarketing & Display"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center text-slate-700 bg-white p-5 rounded-2xl border border-slate-100 text-sm md:text-base font-semibold shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-4 flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight">Why Brands Need This</h2>
                    <div className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
                        <p className="text-slate-600 leading-relaxed mb-12 text-lg font-medium">
                            The modern economy is fast. Decisions are made instantly. Paid ads put you directly in front of customers exactly when they are searching for your service. We ensure you are the first click that leads to a conversion.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center border-t border-slate-200 pt-10">
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-primary-600 mb-2 tracking-tight">Top 3</div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ad Positions</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-primary-600 mb-2 tracking-tight">Instant</div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Lead Gen</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-4xl font-black text-primary-600 mb-2 tracking-tight">100%</div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Trackable ROI</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                     <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight">High-Value Focus</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                          { title: "E-Commerce", sub: "Shopping ads for global markets with high ROAS." },
                          { title: "Real Estate", sub: "Lead gen for property launches in booming markets." },
                          { title: "B2B Services", sub: "LinkedIn campaigns targeting global decision makers." }
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
                            <h4 className="text-slate-900 font-bold text-sm md:text-base mb-2">What is the minimum budget?</h4>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">We recommend a starting budget that allows for statistically significant data collection within the first 30 days.</p>
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm md:text-base mb-2">Google Ads or Social Ads?</h4>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">Google is for "Intent" (demand capture). Social is for "Awareness" (demand generation).</p>
                        </div>
                    </div>
                </div>

                <div className="bg-primary-50 p-10 rounded-[2.5rem] text-center border border-primary-100 shadow-sm relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/50 blur-[60px] rounded-full"></div>
                    <h3 className="text-slate-900 font-black text-xl md:text-3xl mb-4 tracking-tight relative z-10">Need Fast Results?</h3>
                    <p className="text-slate-600 text-sm mb-10 font-medium leading-relaxed relative z-10">Let's calculate your potential ROAS based on your industry benchmarks.</p>
                    <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white w-full py-5 rounded-full font-black transition-all block text-base shadow-xl shadow-primary-500/20 active:scale-95 relative z-10">
                        Get a Proposal
                    </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PaidPage;