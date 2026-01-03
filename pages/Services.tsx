import React from 'react';
import { ArrowRight, ShieldCheck, BarChart3 } from 'lucide-react';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 'healthcare',
      title: 'Healthcare Marketing',
      icon: "https://cdn-icons-png.flaticon.com/512/2864/2864441.png",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3NueHA0bm80bm9jNHVnY3R0ZzF2Z2V3bXF4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l41lTfuxm5z6X7lDO/giphy.gif",
      color: "bg-amber-50",
      accent: "text-amber-600",
      description: 'Specialized patient acquisition strategies for medical clinics, dental practices, and aesthetic centers in the UAE.',
      features: ['Medical SEO & Local Maps', 'Patient Reviews Management', 'DHA Compliant Campaigns', 'Video Patient Education'],
      link: Page.SERVICE_HEALTHCARE
    },
    {
      id: 'salon',
      title: 'Salon & Spa Marketing',
      icon: "https://cdn-icons-png.flaticon.com/512/10057/10057088.png",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXN6NHB6Yng1bm9jNHVnY3R0ZzF2Z2V3bXF4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpx4S01lD2oM/giphy.gif",
      color: "bg-yellow-50",
      accent: "text-amber-600",
      description: 'Visual-first marketing for luxury salons and spas. We bridge the gap between social media beauty and real-world bookings.',
      features: ['Visual Branding & Reels', 'Booking System Sync', 'Micro-Influencer Collabs', 'Local SEO Near-Me Domination'],
      link: Page.SERVICE_SALON
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      icon: "https://cdn-icons-png.flaticon.com/512/7542/7542670.png",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4NHB6Yng1bm9jNHVnY3R0ZzF2Z2V3bXF4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/vLmxP44G3A6Xu/giphy.gif",
      color: "bg-orange-50",
      accent: "text-orange-600",
      description: 'Dominating search results for your target market. We optimize for search intent and technical performance.',
      features: ['Technical SEO Audits', 'Local & Global SEO', 'Keyword Strategy', 'Authority Link Building'],
      link: Page.SERVICE_SEO
    },
    {
      id: 'paid-media',
      title: 'Paid Marketing (PPC)',
      icon: "https://cdn-icons-png.flaticon.com/512/8243/8243054.png",
      image: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenN4NHB6Yng1bm9jNHVnY3R0ZzF2Z2V3bXF4eHh4eHh4eHh4eHh4JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/l41lMv6yJ4nC7vB04/giphy.gif",
      color: "bg-amber-50",
      accent: "text-amber-600",
      description: 'Precision-targeted campaigns on Google and Social networks. We maximize your ROAS by targeting high-intent buyers.',
      features: ['Google Ads Management', 'Retargeting Strategies', 'Programmatic Advertising', 'Conversion Rate Optimization'],
      link: Page.SERVICE_PAID
    },
    {
      id: 'social',
      title: 'Social Media Strategy',
      icon: "https://cdn-icons-png.flaticon.com/512/10008/10008785.png",
      image: "https://media.giphy.com/media/azjux6zMBW3cWxK21P/giphy.gif",
      color: "bg-yellow-50",
      accent: "text-amber-600",
      description: 'End-to-end social management for Instagram, TikTok, and SnapChat. We create content that stops the scroll.',
      features: ['Content Creation & Production', 'Community Management', 'Social Strategy', 'Reels & TikTok Trends'],
      link: Page.SERVICE_SOCIAL
    }
  ];

  return (
    <div className="bg-white">
      {/* Editorial Header */}
      <div className="pt-24 pb-12 md:pt-40 md:pb-24 text-center px-4 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
          <div className="absolute top-0 right-[-10%] w-[50%] h-[100%] bg-amber-100/50 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-[-10%] w-[50%] h-[100%] bg-orange-100/30 blur-[120px] rounded-full"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="text-primary-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block">The Optimization Ecosystem</span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
            Growth <br/> <span className="text-gradient-brand italic">Redefined.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Data-backed strategies crafted for Dubai's most ambitious brands. We don't just provide services; we build revenue engines.
          </p>
        </div>
      </div>

      {/* Modern Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="space-y-32 md:space-y-64">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-16 md:gap-32 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 w-full relative group">
                <div 
                  className="relative h-[450px] md:h-[650px] w-full rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] cursor-pointer bg-slate-950 flex items-center justify-center border border-slate-900"
                  onClick={() => onNavigate(service.link)}
                >
                  <img src={service.image} className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105" alt={service.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none transition-opacity duration-700 group-hover:opacity-40"></div>
                  <div className={`absolute top-10 right-10 w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl flex items-center justify-center p-5 transform group-hover:-translate-y-2 transition-transform duration-500 border border-white/20 z-20`}>
                    <img src={service.icon} alt={`${service.title} Icon`} className="w-full h-full object-contain filter drop-shadow-2xl" />
                  </div>
                  <div className="absolute bottom-10 left-10 z-20">
                    <span className="px-6 py-3 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-full text-white text-[11px] font-black uppercase tracking-[0.25em] shadow-2xl">
                      UAE Premium Standard
                    </span>
                  </div>
                </div>
                <div className={`absolute -inset-10 ${service.color} -z-10 rounded-[6rem] blur-[100px] opacity-0 group-hover:opacity-60 transition-opacity duration-1000`}></div>
              </div>

              <div className="flex-1 space-y-10 px-4 md:px-0">
                <div className="space-y-4">
                  <span className={`text-xs font-black uppercase tracking-[0.3em] ${service.accent}`}>Strategy 0{index + 1}</span>
                  <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-none">{service.title}</h2>
                </div>
                <div className="w-24 h-2 bg-slate-900 rounded-full"></div>
                <p className="text-slate-500 text-xl md:text-2xl leading-relaxed font-medium">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-slate-800 font-bold text-sm">
                      <div className={`w-2 h-2 rounded-full mr-4 ${service.accent.replace('text', 'bg')}`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <button onClick={() => onNavigate(service.link)} className="group bg-slate-900 hover:bg-black text-white px-12 py-6 rounded-full font-black text-lg flex items-center justify-center gap-4 transition-all hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)] active:scale-95">
                    Explore Strategy <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;