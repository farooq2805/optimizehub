
import React, { useState } from 'react';
import { Page } from '../types';
import { Menu, X, Phone, Mail, MapPin, Compass } from 'lucide-react';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Services', value: Page.SERVICES },
    { label: 'About Us', value: Page.ABOUT },
    { label: 'Contact', value: Page.CONTACT },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-lg border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo with Enhanced Hover Interaction */}
          <div className="relative group py-4">
            <div 
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => handleNav(Page.HOME)}
            >
              <span className="font-black text-2xl tracking-tight text-slate-900 flex items-center">
                Optimize<span className="hub-animated ml-0.5">Hub</span>
              </span>
            </div>

            {/* Invisible Bridge to maintain hover state between logo and card */}
            <div className="absolute top-full left-0 w-full h-4 bg-transparent invisible group-hover:visible"></div>

            {/* Premium Hover Contact Card */}
            <div className="absolute top-[calc(100%+8px)] left-0 w-[360px] bg-white shadow-[0_30px_70px_-15px_rgba(0,0,0,0.2)] rounded-[2rem] p-8 opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-500 ease-out z-[100] border border-slate-100/50">
              
              <div className="space-y-6">
                {/* Business Enquiries - Highlighted for 'Stickiness' */}
                <a 
                  href="tel:+971505975089"
                  className="flex gap-5 group/item p-3 -m-3 rounded-2xl hover:bg-slate-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-orange-100 transition-all">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-1">Direct Growth Line</h4>
                    <p className="text-slate-900 text-lg font-black leading-none mb-1">+971 50 597 5089</p>
                    <p className="text-slate-400 text-[10px] font-bold">Mon-Fri : 9AM-6PM (UAE TIME)</p>
                  </div>
                </a>

                <div className="h-px w-full bg-slate-100/80"></div>

                {/* Email Inquiry */}
                <a 
                  href="mailto:hello@optimizehub.co"
                  className="flex gap-5 group/item p-3 -m-3 rounded-2xl hover:bg-slate-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 group-hover/item:scale-110 group-hover/item:bg-blue-100 transition-all">
                    <Mail className="w-5 h-5 text-primary-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-1">Official Support</h4>
                    <p className="text-slate-900 text-lg font-black leading-none truncate">hello@optimizehub.co</p>
                  </div>
                </a>

                <div className="h-px w-full bg-slate-100/80"></div>

                {/* Headquarters */}
                <div className="flex gap-5 p-3 -m-3 rounded-2xl">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5 text-slate-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mb-1">Our HQ</h4>
                    <p className="text-slate-500 text-xs leading-relaxed font-bold">
                      Level 42, Marina Plaza, Dubai Marina,<br/>Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Bottom Decorative Label */}
              <div className="mt-8 pt-4 border-t border-slate-50 text-center">
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Premium Dubai Marketing Agency</span>
              </div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`text-sm font-black uppercase tracking-widest transition-all duration-200 ${
                  currentPage === item.value
                    ? 'text-primary-600'
                    : 'text-slate-400 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
             <button 
                onClick={() => handleNav(Page.CONTACT)}
                className="bg-slate-900 hover:bg-black text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] active:scale-95"
             >
               Get Started
             </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => handleNav(item.value)}
                className={`block w-full text-left px-3 py-4 rounded-xl text-base font-semibold ${
                   currentPage === item.value
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4">
               <button 
                  onClick={() => handleNav(Page.CONTACT)}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold"
               >
                 Get Started
               </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
