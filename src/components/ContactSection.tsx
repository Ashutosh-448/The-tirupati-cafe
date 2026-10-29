import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Clock, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { WhatsAppButton } from './WhatsAppButton';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    messageType: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#fbf8f3] border-t border-[#e7decb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8c6d48] mb-3">
            <span>Connect & Inquire</span>
            <span aria-hidden="true">·</span>
            <span>Visitor Information</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#163824] tracking-tight mb-4">
            Contact & Visiting Hours
          </h2>

          <p className="text-base sm:text-lg text-[#554336] leading-relaxed">
            Have a question, feedback on this concept redesign, or wishing to connect with the cafe?
            Find our location details and reach out below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Placeholders */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Address Box */}
            <div className="bg-white p-6 rounded-xl border border-[#ded3be] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#edf5ef] text-[#163824] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#163824] mb-1">
                    Cafe Address
                  </h4>
                  <p className="text-sm text-[#4a3b32] leading-relaxed">
                    {RESTAURANT_INFO.address.shop}, {RESTAURANT_INFO.address.landmark},<br />
                    {RESTAURANT_INFO.address.phase},<br />
                    {RESTAURANT_INFO.address.city}, {RESTAURANT_INFO.address.state} {RESTAURANT_INFO.address.postalCode}
                  </p>
                  <a
                    href={RESTAURANT_INFO.links.googleMapsSearch}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs font-semibold text-[#163824] hover:underline"
                  >
                    View Directions on Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Telephone & WhatsApp Status Box */}
            <div className="bg-white p-6 rounded-xl border border-[#ded3be] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#f7f1e6] text-[#8c6d48] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="font-serif text-base font-bold text-[#163824]">
                      Telephone & WhatsApp
                    </h4>
                  </div>
                  <p className="text-sm text-[#66503f] mb-3">
                    {RESTAURANT_INFO.contactConfig.phonePlaceholder}.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <WhatsAppButton variant="button" label="WhatsApp Inquiry" />
                  </div>
                  <p className="text-xs text-[#8c6d48] mt-2 italic">
                    Configurable contact line: When the owner confirms their number, direct WhatsApp chat activates seamlessly without code rebuilds.
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Status Box */}
            <div className="bg-white p-6 rounded-xl border border-[#ded3be] shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-[#f7f1e6] text-[#8c6d48] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-[#163824] mb-1">
                    Operating Hours
                  </h4>
                  <p className="text-sm text-[#66503f]">
                    {RESTAURANT_INFO.contactNotice.hoursPlaceholder}.
                  </p>
                  <p className="text-xs text-[#8c6d48] mt-1.5 italic">
                    Typically open for breakfast, lunch, and evening snacks. Check in person for daily service timings.
                  </p>
                </div>
              </div>
            </div>

            {/* Online Ordering Note */}
            <div className="p-4 bg-[#f4ece0] rounded-xl border border-[#decbb2] flex items-start gap-3 text-xs text-[#6e5746]">
              <AlertCircle className="w-4 h-4 text-[#163824] shrink-0 mt-0.5" />
              <div>
                <strong>Dining Note:</strong> Online delivery and payment gateways are not integrated into this demonstration site. Please visit the cafe in person opposite Cricket Stadium.
              </div>
            </div>

          </div>

          {/* Right Column: Contact & Owner Feedback Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-[#ded3be] shadow-md text-left">
            
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-[#163824]" />
              <h3 className="font-serif text-2xl font-bold text-[#163824]">
                Leave a Note or Inquire
              </h3>
            </div>
            
            <p className="text-sm text-[#66503f] mb-6">
              Are you the owner of The Tirupati Cafe wishing to claim/update this listing, or a customer wanting to share your favourite dish? Send a note below.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-[#f7f3ec] rounded-xl border border-[#ded3be]">
                <CheckCircle2 className="w-12 h-12 text-[#163824] mx-auto mb-3" />
                <h4 className="font-serif text-xl font-bold text-[#163824] mb-2">
                  Thank You for Your Message!
                </h4>
                <p className="text-sm text-[#554336] max-w-md mx-auto mb-5">
                  Your inquiry has been received. This concept preview demonstrates full working form validation and state handling.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', messageType: 'general', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#163824] rounded-md hover:bg-[#102b1c] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-name" className="block text-xs font-semibold text-[#3b2d24] mb-1">
                      Your Name *
                    </label>
                    <input
                      id="c-name"
                      type="text"
                      required
                      placeholder="e.g. Gurpreet Singh"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#fcfaf7] border border-[#d9ccb6] rounded-lg text-sm text-[#2c221c] focus:outline-none focus:ring-2 focus:ring-[#163824] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-email" className="block text-xs font-semibold text-[#3b2d24] mb-1">
                      Email Address *
                    </label>
                    <input
                      id="c-email"
                      type="email"
                      required
                      placeholder="e.g. name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#fcfaf7] border border-[#d9ccb6] rounded-lg text-sm text-[#2c221c] focus:outline-none focus:ring-2 focus:ring-[#163824] focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="c-phone" className="block text-xs font-semibold text-[#3b2d24] mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      id="c-phone"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#fcfaf7] border border-[#d9ccb6] rounded-lg text-sm text-[#2c221c] focus:outline-none focus:ring-2 focus:ring-[#163824] focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="c-type" className="block text-xs font-semibold text-[#3b2d24] mb-1">
                      Purpose of Message
                    </label>
                    <select
                      id="c-type"
                      value={formData.messageType}
                      onChange={(e) => setFormData({ ...formData, messageType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#fcfaf7] border border-[#d9ccb6] rounded-lg text-sm text-[#2c221c] focus:outline-none focus:ring-2 focus:ring-[#163824] focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="owner">I am the Restaurant Owner (Update Menu/Phone)</option>
                      <option value="feedback">Food & Dish Suggestion</option>
                      <option value="catering">Bulk / Event Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="c-message" className="block text-xs font-semibold text-[#3b2d24] mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="c-message"
                    required
                    rows={4}
                    placeholder="Tell us what you'd like to share or verify..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#fcfaf7] border border-[#d9ccb6] rounded-lg text-sm text-[#2c221c] focus:outline-none focus:ring-2 focus:ring-[#163824] focus:border-transparent resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#163824] hover:bg-[#102b1c] rounded-md shadow-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
