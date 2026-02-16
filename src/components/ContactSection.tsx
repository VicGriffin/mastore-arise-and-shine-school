'use client';

import { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.3 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Reset after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 gradient-cool rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 gradient-warm rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-smooth ${
            isVisible ? 'animate-fade-in-down' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form Container */}
        <div
          className={`transition-smooth ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-12 rounded-2xl card-glass backdrop-blur-lg border border-primary/20"
          >
            {/* Success Message */}
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-accent-green/20 border border-accent-green text-accent-green animate-fade-in-down">
                ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name Field */}
              <div className={`transition-smooth ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ transitionDelay: '0.1s' }}>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth placeholder:text-foreground/50"
                />
              </div>

              {/* Email Field */}
              <div className={`transition-smooth ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ transitionDelay: '0.2s' }}>
                <label className="block text-sm font-semibold mb-2 text-foreground">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth placeholder:text-foreground/50"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div className={`mb-6 transition-smooth ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '0.3s' }}>
              <label className="block text-sm font-semibold mb-2 text-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth placeholder:text-foreground/50"
              />
            </div>

            {/* Message Field */}
            <div className={`mb-6 transition-smooth ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ transitionDelay: '0.4s' }}>
              <label className="block text-sm font-semibold mb-2 text-foreground">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your inquiry..."
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-primary/30 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-smooth placeholder:text-foreground/50 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || submitted}
              className={`w-full md:w-auto px-8 py-3 bg-gradient-primary text-white font-semibold rounded-lg hover-lift transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                loading ? 'animate-pulse' : ''
              }`}
            >
              {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className={`text-center transition-smooth ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.5s' }}>
            <div className="text-4xl mb-3">📍</div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-foreground/70">123 Education Lane, Learning City, LC 12345</p>
          </div>
          <div className={`text-center transition-smooth ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.6s' }}>
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-foreground/70">+1 (555) 123-4567</p>
          </div>
          <div className={`text-center transition-smooth ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ transitionDelay: '0.7s' }}>
            <div className="text-4xl mb-3">✉️</div>
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-foreground/70">info@arisingshine.edu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
