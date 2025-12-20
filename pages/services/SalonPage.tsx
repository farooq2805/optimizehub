import React from 'react';
import { Page } from '../../types';
import { 
  Sparkles, 
  Scissors, 
  Calendar, 
  UserCheck, 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  MessageCircle, 
  Instagram, 
  Heart,
  TrendingUp,
  MapPin,
  Camera,
  Zap,
  Star
} from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const SalonPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Editorial Hero - Ultra Luxury Dubai Vibe in Professional Blue */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-[0.45] scale-105" 
            alt="Ultra Luxury Dubai Spa Interior"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <button onClick={() => onNavigate(Page.SERVICES)} className="flex items-center text-white/70 hover:text-white mb-10 transition-colors text-sm font-bold group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </button>
          
          <div className="inline-block px-5 py-2 mb-8 border border-sky-400/30 rounded-full bg-sky-500/10 backdrop-blur-xl">
              <span className="text-sky-300 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">The Prestige Growth Partner</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.8] tracking-tighter">
            Elevate Your <br/> <span className="text-sky-400">Empire.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/90 max-w-2xl mb-14 font-medium leading-tight">
            We turn luxury salons into digital landmarks. Because in Dubai, "Good" isn't enough. You have to be the <span className="italic">standard.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-sky-600 hover:bg-sky-700 text-white px-14 py-6 rounded-full font-black text-xl inline-flex items-center justify-center gap-4 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(14,165,233,0.3)]">
              <MessageCircle className="w-6 h-6"/> Scale My Bookings
            </a>
          </div>
        </div>
      </section>

      {/* High-End Split Section - Editorial Layout with Sky Accents */}
      <section className="py-24 md:py-48 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-24 h-1.5 bg-sky-600 mb-12"></div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Aesthetics <br/>Meet <span className="text-sky-600">Analytics.</span></h2>
            <p className="text-xl text-slate-500 mb-14 leading-relaxed font-medium">
              We understand the delicate balance of high-end beauty. Your digital presence must feel like a 5-star concierge. We don't just "post"—we curate high-intent funnels that drive the world's most discerning clients to your chairs.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="group">
                  <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
                    <Camera className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-slate-900 font-black text-xl mb-4 uppercase tracking-tight">Visual Mastery</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">Cinematic content production that captures the soul of your treatments. We turn service into art.</p>
               </div>
               <div className="group">
                  <div className="w-12 h-12 bg-sky-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sky-600 transition-colors">
                    <Zap className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-slate-900 font-black text-xl mb-4 uppercase tracking-tight">Booking Velocity</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">Direct synchronization with platforms like Zenoti and Fresha to ensure a frictionless "Tap-to-Book" journey.</p>
               </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
             {/* Complex Image Stack */}
             <div className="relative z-10 grid grid-cols-12 gap-4 items-end">
                <div className="col-span-8 group overflow-hidden rounded-[3rem] shadow-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    alt="Luxury Hair Artistry" 
                   />
                </div>
                <div className="col-span-4 space-y-4">
                   <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square group">
                      <img 
                        src="https://images.unsplash.com/photo-1591343395582-99bf4de99764?q=80&w=1000&auto=format&fit=crop" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        alt="Skincare Detail" 
                      />
                   </div>
                   <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-[3/4] group">
                      <img 
                        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1000&auto=format&fit=crop" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                        alt="Luxury Lifestyle" 
                      />
                   </div>
                </div>
             </div>
             {/* Decorative Background Element */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-sky-50 rounded-full blur-[80px] -z-0"></div>
          </div>
        </div>
      </section>

      {/* Sensory Mood Section - Black and Blue */}
      <section className="bg-slate-950 py-32 md:py-48 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-sky-900/40 blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
           <div className="text-center mb-24">
              <span className="text-sky-500 font-bold uppercase tracking-[0.4em] text-xs mb-6 block">The Digital Storefront</span>
              <h2 className="text-white text-4xl md:text-7xl font-black tracking-tighter italic">"Your feed should feel like silk."</h2>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1000&auto=format&fit=crop", // Beauty Detail
                "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1000&auto=format&fit=crop", // Massage Mood
                "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1000&auto=format&fit=crop", // High end lifestyle
                "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=1000&auto=format&fit=crop"  // Product macro
              ].map((img, i) => (
                <div key={i} className={`group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl ${i % 2 === 1 ? 'md:mt-16' : ''}`}>
                   <img 
                    src={img} 
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                    alt="Sensory Beauty" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Strategic Value Grid - Refined Blue Cards */}
      <section className="py-24 md:py-48 max-w-7xl mx-auto px-4">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">Strategic <span className="text-sky-600">Focus.</span></h2>
          <p className="text-slate-500 font-medium text-xl max-w-2xl mx-auto">We don't just chase traffic. We chase high-margin appointments that scale your bottom line.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
           {[
             { 
                title: "Technical Artistry", 
                sub: "Color & Extensions", 
                roi: "AED 2,500+ Avg Ticket",
                img: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop"
             },
             { 
                title: "Holistic Wellness", 
                sub: "Rituals & Packages", 
                roi: "60% Recurring Yield",
                img: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop"
             },
             { 
                title: "Aesthetic Med", 
                sub: "Clinical Transformations", 
                roi: "High Authority Leads",
                img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=1000&auto=format&fit=crop"
             }
           ].map((s, i) => (
             <div key={i} className="bg-white rounded-[3rem] border border-slate-100 group hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden">
                <div className="h-64 overflow-hidden">
                    <img src={s.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={s.title} />
                </div>
                <div className="p-12">
                    <div className="w-16 h-1 bg-sky-600 mb-8 transition-all group-hover:w-full"></div>
                    <h3 className="text-slate-900 font-black text-3xl mb-3 tracking-tight">{s.title}</h3>
                    <p className="text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-8">{s.sub}</p>
                    <div className="flex items-center gap-2 text-sky-600 font-black text-xl">
                        <TrendingUp className="w-5 h-5" /> {s.roi}
                    </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Luxury CTA - Final Impact with Blue Colors */}
      <section className="py-32 md:py-48 bg-white relative">
         <div className="max-w-5xl mx-auto text-center px-4">
            <h2 className="text-6xl md:text-9xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.85]">Booked. <br/><span className="text-sky-600">Busy. Beautiful.</span></h2>
            <p className="text-xl md:text-3xl text-slate-500 mb-16 font-medium max-w-3xl mx-auto leading-relaxed">
              Your chair is waiting. Your clients are scrolling. Let's build the system that connects them to you forever.
            </p>
            <div className="flex flex-col items-center gap-8">
                <a 
                href="https://wa.me/971505975089" 
                className="bg-slate-900 hover:bg-black text-white px-16 py-7 rounded-full transition-all font-black text-2xl hover:scale-105 shadow-2xl group flex items-center gap-4"
                >
                    WhatsApp Strategy Call <Star className="w-6 h-6 fill-sky-500 text-sky-500" />
                </a>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Exclusively for Dubai-based Beauty Brands</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default SalonPage;