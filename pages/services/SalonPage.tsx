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
      {/* Editorial Hero - Liquid Gold Theme */}
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
          
          <div className="inline-block px-5 py-2 mb-8 border border-amber-400/30 rounded-full bg-amber-500/10 backdrop-blur-xl">
              <span className="text-amber-300 text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">The Prestige Growth Partner</span>
          </div>
          
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 leading-[0.8] tracking-tighter">
            Elevate Your <br/> <span className="text-amber-400">Empire.</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-white/90 max-w-2xl mb-14 font-medium leading-tight">
            We turn luxury salons into digital landmarks. Because in Dubai, "Good" isn't enough. You have to be the <span className="italic">standard.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-amber-600 hover:bg-amber-700 text-white px-14 py-6 rounded-full font-black text-xl inline-flex items-center justify-center gap-4 transition-all hover:scale-105 shadow-[0_20px_50px_rgba(245,158,11,0.3)]">
              <MessageCircle className="w-6 h-6"/> Scale My Bookings
            </a>
          </div>
        </div>
      </section>

      {/* High-End Split Section */}
      <section className="py-24 md:py-48 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="order-2 lg:order-1">
            <div className="w-24 h-1.5 bg-amber-600 mb-12"></div>
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Aesthetics <br/>Meet <span className="text-amber-600">Analytics.</span></h2>
            <p className="text-xl text-slate-500 mb-14 leading-relaxed font-medium">
              We understand the delicate balance of high-end beauty. Your digital presence must feel like a 5-star concierge. We don't just "post"—we curate high-intent funnels that drive the world's most discerning clients to your chairs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="group">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                    <Camera className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-slate-900 font-black text-xl mb-4 uppercase tracking-tight">Visual Mastery</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">Cinematic content production that captures the soul of your treatments. We turn service into art.</p>
               </div>
               <div className="group">
                  <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                    <Zap className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-slate-900 font-black text-xl mb-4 uppercase tracking-tight">Booking Velocity</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">Direct synchronization with booking systems to ensure a frictionless Tap-to-Book journey.</p>
               </div>
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
             <div className="relative z-10 grid grid-cols-12 gap-4 items-end">
                <div className="col-span-8 group overflow-hidden rounded-[3rem] shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Luxury Hair Artistry" />
                </div>
                <div className="col-span-4 space-y-4">
                   <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square group">
                      <img src="https://images.unsplash.com/photo-1591343395582-99bf4de99764?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Skincare Detail" />
                   </div>
                </div>
             </div>
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-amber-50 rounded-full blur-[80px] -z-0"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 bg-white relative">
         <div className="max-w-5xl mx-auto text-center px-4">
            <h2 className="text-6xl md:text-9xl font-black text-slate-900 mb-12 tracking-tighter leading-[0.85]">Booked. <br/><span className="text-amber-600">Busy. Beautiful.</span></h2>
            <div className="flex flex-col items-center gap-8">
                <a href="https://wa.me/971505975089" className="bg-slate-900 hover:bg-black text-white px-16 py-7 rounded-full transition-all font-black text-2xl hover:scale-105 shadow-2xl group flex items-center gap-4">
                    WhatsApp Strategy Call <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
                </a>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Exclusively for Dubai-based Beauty Brands</p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default SalonPage;