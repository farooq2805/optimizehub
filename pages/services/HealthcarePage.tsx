import React from 'react';
import { Page } from '../../types';
import { 
  HeartPulse, 
  Activity, 
  ShieldPlus, 
  UserPlus, 
  ArrowLeft, 
  CheckCircle2, 
  HelpCircle, 
  MessageCircle, 
  Star, 
  Stethoscope, 
  TrendingUp,
  Search,
  Users,
  Plus
} from 'lucide-react';

interface Props {
  onNavigate: (page: Page) => void;
}

const HealthcarePage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white">
      {/* Cinematic Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover brightness-[0.4]" 
            alt="Modern Medical Facility"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <button onClick={() => onNavigate(Page.SERVICES)} className="flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm font-bold group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Services
          </button>
          <div className="inline-block px-4 py-1.5 mb-6 border border-sky-400/30 rounded-full bg-sky-500/10 backdrop-blur-md">
              <span className="text-sky-300 text-[10px] md:text-xs font-bold tracking-widest uppercase">Clinical Authority & Growth</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-[0.9] tracking-tighter max-w-4xl">
            The Science of <br/> <span className="text-sky-400">Patient Acquisition.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12 font-medium leading-relaxed">
            Dubai's premium clinics don't just need traffic. They need a system that builds trust and fills consultation rooms.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="https://wa.me/971505975089" target="_blank" rel="noopener noreferrer" className="bg-sky-600 hover:bg-sky-700 text-white px-12 py-5 rounded-full font-black text-lg inline-flex items-center justify-center gap-3 transition-all hover:scale-105 shadow-2xl shadow-sky-900/40">
              <Plus className="w-6 h-6"/> Start Growth Audit
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Authority Grid */}
      <section className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop" className="rounded-3xl shadow-2xl h-80 w-full object-cover" alt="Medical Consultation" />
               <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop" className="rounded-3xl shadow-2xl h-80 w-full object-cover mt-12" alt="Dental Tech" />
            </div>
            {/* Achievement Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-slate-100 text-center">
               <div className="text-4xl font-black text-sky-600 mb-1">12k+</div>
               <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Leads Generated</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Beyond <span className="text-sky-600">Marketing.</span></h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed font-medium">
              We specialize in the "Medical Decision Journey." Patients in the UAE are discerning; they look for clinical authority, safety, and reputation. Our system establishes your clinic as the gold standard in your specialty.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center shrink-0">
                  <Stethoscope className="w-7 h-7 text-sky-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xl mb-2">Specialist SEO Domination</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Ranking your clinic for high-intent keywords like "Best Dermatologist Jumeirah" or "Invisalign Dubai."</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                  <ShieldPlus className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xl mb-2">DHA-Compliant Creative</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">Medical marketing in Dubai requires precision. We handle the complex compliance rules so you can focus on surgery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Clinical Framework */}
      <section className="bg-slate-50 py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Clinical <span className="text-sky-600">Excellence</span> Hub</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">Visualizing the results we drive for modern medical practices.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
             {[
               { 
                title: "Cosmetic Surgery", 
                img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
                tag: "Conversion-Focused" 
               },
               { 
                title: "Premium Dental", 
                img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1000&auto=format&fit=crop",
                tag: "Map Pack Dominance" 
               },
               { 
                title: "Specialist Centers", 
                img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop",
                tag: "Authority Content" 
               }
             ].map((item, i) => (
               <div key={i} className="group relative rounded-[2.5rem] overflow-hidden shadow-xl aspect-[4/5]">
                  <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-10 left-10">
                    <div className="text-sky-400 font-bold text-xs uppercase tracking-widest mb-2">{item.tag}</div>
                    <h3 className="text-white text-3xl font-black tracking-tight">{item.title}</h3>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-tight">Scale Your <br/><span className="text-sky-600">Practice Today.</span></h2>
          <p className="text-xl text-slate-500 mb-12 font-medium">Join the ranks of Dubai's fastest-growing medical institutions.</p>
          <a 
            href="https://wa.me/971505975089" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-slate-900 hover:bg-black text-white px-12 py-6 rounded-full transition-all font-black text-xl hover:scale-105 shadow-2xl active:scale-95"
          >
              Free Growth Consultation <ArrowRight className="ml-3 w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
};

const ArrowRight = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default HealthcarePage;