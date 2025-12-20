import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    revenue: 'new',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Profit Audit Request: ${formData.name} (${formData.phone}). Current Stage: ${formData.revenue}. Message: ${formData.message}`;
    window.open(`https://wa.me/971505975089?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className="min-h-screen py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Soft Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-[120px] opacity-60"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          
          {/* Direct Value Side */}
          <div>
            <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
              Let's Fix Your <br/>
              <span className="text-gradient-brand">Growth Engine.</span>
            </h1>
            <p className="text-xl text-slate-500 mb-12 leading-relaxed">
              Don't fill out a form to get a generic sales deck. Get a direct audit of your current marketing channels from a senior specialist.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-primary-50 p-4 rounded-2xl">
                  <Calendar className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-xl">Quick Call (15-30 min)</h3>
                  <p className="text-slate-500 mt-2">No hard sales. We look at your goals, your current spend, and tell you if we can help.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary-50 p-4 rounded-2xl">
                  <ShieldCheck className="w-8 h-8 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-bold text-xl">Audit included</h3>
                  <p className="text-slate-500 mt-2">We'll identify at least 3 areas where you're wasting budget right now.</p>
                </div>
              </div>

              <div className="pt-10 border-t border-slate-100">
                <div className="flex flex-col sm:flex-row gap-6 md:gap-10 text-slate-400 font-bold uppercase tracking-widest text-xs">
                  <div className="flex items-center gap-2 text-slate-700"><Phone className="w-4 h-4 text-primary-500"/> +971 50 597 5089</div>
                  <div className="flex items-center gap-2 text-slate-700"><Mail className="w-4 h-4 text-primary-500"/> hello@optimizehub.co</div>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 relative">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Request Your Free Audit</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Phone</label>
                  <input
                    type="tel"
                    required
                    placeholder="+971..."
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">Business Stage</label>
                <select
                  value={formData.revenue}
                  onChange={(e) => setFormData({...formData, revenue: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner"
                >
                  <option value="new">New Business / Startup</option>
                  <option value="scaling">Existing Business Scaling</option>
                  <option value="rebranding">Rebranding / Expansion</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-widest">What's your biggest hurdle?</label>
                <textarea
                  rows={3}
                  placeholder="e.g. Getting traffic but no leads..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-slate-900 focus:outline-none focus:border-primary-500 focus:bg-white transition-all shadow-inner resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-primary-500/20 flex items-center justify-center gap-3 text-lg"
              >
                Book My Audit Now <Send className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center gap-2 mt-4">
                 <MessageCircle className="w-4 h-4 text-[#25D366]" />
                 <span className="text-slate-400 text-xs italic">Submits directly to our WhatsApp</span>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;