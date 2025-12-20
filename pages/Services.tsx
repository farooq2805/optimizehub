import React from 'react';
import { Target, TrendingUp, Users, BarChart3, Search, Share2, ArrowRight, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      id: 'healthcare',
      title: 'Healthcare Marketing',
      icon: <HeartPulse className="w-12 h-12 text-sky-600" />,
      color: "bg-sky-50",
      description: 'Specialized patient acquisition strategies for medical clinics, dental practices, and aesthetic centers.',
      features: ['Medical SEO & Local Maps', 'Patient Reviews Management', 'DHA Compliant Campaigns', 'Video Patient Education'],
      link: Page.SERVICE_HEALTHCARE
    },
    {
      id: 'salon',
      title: 'Salon & Spa Marketing',
      icon: <Sparkles className="w-12 h-12 text-rose-600" />,
      color: "bg-rose-50",
      description: 'Visual-first marketing for luxury salons and spas. We bridge the gap between social media beauty and real-world bookings.',
      features: ['Visual Branding & Reels', 'Booking System Sync (Fresha/Mindbody)', 'Micro-Influencer Collabs', 'Local SEO Near-Me Domination'],
      link: Page.SERVICE_SALON
    },
    {
      id: 'seo',
      title: 'SEO Optimization',
      icon: <Search className="w-12 h-12 text-blue-600" />,
      color: "bg-blue-50",
      description: 'Dominating search results for your target market. We optimize for search intent and technical performance.',
      features: ['Technical SEO Audits', 'Local & Global SEO', 'Keyword Strategy', 'Authority Link Building'],
      link: Page.SERVICE_SEO
    },
    {
      id: 'paid-media',
      title: 'Paid Marketing (PPC)',
      icon: <Target className="w-12 h-12 text-indigo-600" />,
      color: "bg-indigo-50",
      description: 'Precision-targeted campaigns on Google and Social networks. We maximize your ROAS by targeting high-intent buyers.',
      features: ['Google Ads Management', 'Retargeting Strategies', 'Programmatic Advertising', 'Conversion Rate Optimization'],
      link: Page.SERVICE_PAID
    },
    {
      id: 'social',
      title: 'Social Media Marketing',
      icon: <Share2 className="w-12 h-12 text-violet-600" />,
      color: "bg-violet-50",
      description: 'End-to-end social management for Instagram, TikTok, and SnapChat. We create content that stops the scroll.',
      features: ['Content Creation & Production', 'Community Management', 'Social Strategy', 'Reels & TikTok Trends'],
      link: Page.SERVICE_SOCIAL
    }
  ];

  return (
    <div className="pt-10 pb-20 bg-white">
      {/* Header */}
      <div className="py-20 md:py-32 text-center px-4 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-blue-50 blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[100%] bg-indigo-50 blur-[100px]"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight">Our <span className="text-gradient-brand">Services</span></h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
            Comprehensive digital solutions designed to elevate your brand's presence in the global market.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 md:mt-32">
        <div className="space-y-24 md:space-y-40 mb-32">
          {services.map((service, index) => (
            <div key={service.id} className={`flex flex-col md:flex-row gap-12 md:gap-20 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image/Icon Area */}
              <div className="flex-1 w-full">
                <div className={`${service.color} rounded-[3rem] p-12 md:p-20 flex items-center justify-center relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700`} onClick={() => onNavigate(service.link)}>
                  <div className="relative z-10 transform group-hover:scale-125 transition-transform duration-700">
                    {service.icon}
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">{service.title}</h2>
                <div className="w-20 h-2 bg-primary-600 rounded-full"></div>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-600 font-semibold">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-4"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-10">
                  <button 
                    onClick={() => onNavigate(service.link)}
                    className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all hover:gap-6 shadow-xl"
                  >
                    Explore Strategy <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
            <div className="bg-slate-50 p-12 rounded-[2.5rem] relative overflow-hidden group hover:bg-white border border-slate-100 transition-all hover:shadow-2xl">
                <div className="relative z-10">
                    <ShieldCheck className="w-12 h-12 text-primary-600 mb-8" />
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">ROI-First Philosophy</h3>
                    <p className="text-slate-500 leading-relaxed text-lg">
                        We focus on metrics that matter. For salons, it's chair occupancy. For clinics, it's consultation volume. Every campaign is built to drive a physical or digital transaction.
                    </p>
                </div>
            </div>
             <div className="bg-slate-50 p-12 rounded-[2.5rem] relative overflow-hidden group hover:bg-white border border-slate-100 transition-all hover:shadow-2xl">
                <div className="relative z-10">
                    <TrendingUp className="w-12 h-12 text-teal-600 mb-8" />
                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">Digital Prestige</h3>
                    <p className="text-slate-500 leading-relaxed text-lg">
                       Your online presence should be as premium as your physical space. We ensure your brand looks, feels, and acts world-class on every digital touchpoint.
                    </p>
                </div>
            </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center px-4 py-20 rounded-[3rem] bg-primary-600 text-white shadow-2xl">
            <h3 className="text-3xl md:text-5xl font-black mb-8">Ready for a Custom Strategy?</h3>
             <a 
              href="https://wa.me/971505975089" 
              className="inline-flex items-center justify-center bg-white text-primary-600 px-12 py-5 rounded-full transition-all font-bold text-xl hover:scale-105 shadow-xl"
            >
                Contact us on WhatsApp
            </a>
        </div>
      </div>
    </div>
  );
};

export default Services;