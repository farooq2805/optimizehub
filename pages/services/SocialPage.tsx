import React from 'react';
import { Page } from '../../types';
import { Share2, Image, Heart, ArrowLeft, PenTool, CheckCircle2, HelpCircle, MessageCircle, Instagram } from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const SocialPage: React.FC<Props> = ({ onNavigate }) => {
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
                <span className="text-primary-600 text-[10px] md:text-xs font-bold tracking-widest uppercase">Creative & Strategy</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Social Media That <span className="text-gradient-brand">Captivates Audiences</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-500 mb-8 leading-relaxed font-medium">
              In a world driven by aesthetics and status, your social presence is your digital storefront. We build premium, engaging brands across all major platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold text-base md:text-lg inline-flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-lg shadow-primary-500/20">
                <MessageCircle className="w-5 h-5"/> Start Your Growth
              </a>
            </div>
          </div>
          <div className="bg-slate-50 rounded-[2.5rem] p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100/30 blur-[50px]"></div>
             <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-6 md:mb-8 border-l-4 border-primary-500 pl-4">The Premium Standard</h3>
             <ul className="space-y-6 md:space-y-8 relative z-10">
               <li className="flex gap-4">
                 <Image className="w-8 h-8 md:w-10 md:h-10 text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="text-slate-900 font-bold text-base md:text-lg">Visual Excellence</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">Modern audiences expect cinema-quality reels, photography, and motion graphics that define your brand voice.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <Heart className="w-8 h-8 md:w-10 md:h-10 text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="text-slate-900 font-bold text-base md:text-lg">Community Building</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">Turning followers into advocates by managing comments, DMs, and engagement to build authentic loyalty.</p>
                 </div>
               </li>
               <li className="flex gap-4">
                 <PenTool className="w-8 h-8 md:w-10 md:h-10 text-primary-600 flex-shrink-0" />
                 <div>
                   <h4 className="text-slate-900 font-bold text-base md:text-lg">Platform Nuance</h4>
                   <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">Tailoring content strategies specifically for the unique cultures of LinkedIn, Instagram, and TikTok.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

        {/* Deep Dive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-16 md:mb-24">
            <div className="md:col-span-2 space-y-16 md:space-y-24">
                <section>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight">Full-Service Management</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            "Social Strategy & Content Calendars",
                            "Reels & TikTok Video Production",
                            "Community Management (24/7 Response)",
                            "Graphic Design & Branding",
                            "Paid Social Ad Integration",
                            "Monthly Performance Reporting"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center text-slate-700 bg-white p-5 rounded-2xl border border-slate-100 text-sm md:text-base font-semibold shadow-sm hover:shadow-md transition-shadow">
                                <CheckCircle2 className="w-5 h-5 text-primary-500 mr-4 flex-shrink-0" />
                                {item}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight">The Digital Showcase</h2>
                    <p className="text-slate-600 mb-12 leading-relaxed text-lg font-medium">
                        Your customers are scrolling right now. If your feed looks outdated, they assume your business is too. We turn your social channels into a dynamic portfolio that communicates prestige and authority.
                    </p>
                    <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-100 flex gap-8 items-center shadow-sm">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0">
                            <Instagram className="w-8 h-8 text-pink-500" />
                        </div>
                        <div>
                            <h3 className="text-slate-900 font-black text-xl">The Aesthetic Standard</h3>
                            <p className="text-slate-500 text-sm font-medium mt-1">We ensure your brand fits the high-end, visual aesthetic that defines the global digital landscape.</p>
                        </div>
                    </div>
                </section>

                <section>
                     <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-8 md:mb-10 tracking-tight">Industries We Elevate</h2>
                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {[
                          { title: "Luxury F&B", sub: "Capturing culinary art and ambiance for elite dining." },
                          { title: "Fashion", sub: "High-fashion storytelling and influencer-led trends." },
                          { title: "Hospitality", sub: "Promoting exclusive global travel destinations." }
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
                            <h4 className="text-slate-900 font-bold text-sm md:text-base mb-2">How often do you post?</h4>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">We typically schedule 3-5 high-impact feed posts weekly, complemented by daily story engagement.</p>
                        </div>
                        <div>
                            <h4 className="text-slate-900 font-bold text-sm md:text-base mb-2">Do you create the content?</h4>
                            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">Absolutely. We provide in-house photography, videography, and creative direction.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-primary-50 p-10 rounded-[2.5rem] text-center border border-primary-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/50 blur-[60px] rounded-full"></div>
                    <h3 className="text-slate-900 font-black text-xl md:text-3xl mb-4 tracking-tight relative z-10">Let's Get Creative</h3>
                    <p className="text-slate-600 text-sm mb-10 font-medium leading-relaxed relative z-10">Book a strategy call to see how we can transform your social ROI.</p>
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

export default SocialPage;