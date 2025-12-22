
import React from 'react';
import { Page } from '../types';
import { Instagram, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Optimize<span className="text-brand-gold">Hub</span></h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Optimization Meets Ambition. Your Digital Growth Partner in Dubai. We focus on results that matter.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-200 transition-all shadow-sm"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-200 transition-all shadow-sm"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary-600 hover:border-primary-200 transition-all shadow-sm"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate(Page.ABOUT)} className="text-slate-500 hover:text-primary-600 text-sm transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICES)} className="text-slate-500 hover:text-primary-600 text-sm transition-colors">Our Services</button></li>
              <li><button onClick={() => onNavigate(Page.CONTACT)} className="text-slate-500 hover:text-primary-600 text-sm transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Specialized</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate(Page.SERVICE_HEALTHCARE)} className="text-slate-500 hover:text-primary-600 text-sm transition-colors text-left font-bold">Healthcare Marketing</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICE_SALON)} className="text-slate-500 hover:text-primary-600 text-sm transition-colors text-left font-bold">Salon & Spa Marketing</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICE_SEO)} className="text-slate-500 hover:text-primary-600 text-sm transition-colors text-left">SEO Optimization</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICE_PAID)} className="text-slate-500 hover:text-primary-600 text-sm transition-colors text-left">Paid Marketing (PPC)</button></li>
              <li><button onClick={() => onNavigate(Page.SERVICE_SOCIAL)} className="text-slate-500 hover:text-primary-600 text-sm transition-colors text-left">Social Media Strategy</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-bold mb-8 uppercase tracking-widest text-xs">Visit Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start text-slate-500 text-sm">
                <MapPin className="w-5 h-5 mr-3 text-primary-500 shrink-0" />
                <span>Level 42, Marina Plaza,<br/>Dubai Marina, Dubai, UAE</span>
              </li>
              <li className="flex items-center text-slate-500 text-sm">
                <Mail className="w-5 h-5 mr-3 text-primary-500 shrink-0" />
                <a href="mailto:hello@optimizehub.co" className="hover:text-brand-gold transition-colors font-semibold">hello@optimizehub.co</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row justify-between architecture items-center text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} OptimizeHub. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span className="cursor-pointer hover:text-primary-600">Privacy Policy</span>
            <span className="cursor-pointer hover:text-primary-600">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
