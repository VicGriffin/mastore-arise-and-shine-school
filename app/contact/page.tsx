'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import Button from '@/components/Button';

// Note: Metadata can't be used in client components, so this is a limitation.
// In production, you'd separate this into a server component for metadata.

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    studentName: '',
    gradeLevel: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, you'd send this to an API endpoint
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        studentName: '',
        gradeLevel: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main>
      {/* Page Header */}
      <section className="bg-gradient-to-br from-primary to-blue-900 text-white py-20">
        <div className="container-max">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Have questions about admissions? Ready to visit our school? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a
                href="tel:+254113634661"
                className="text-primary hover:text-blue-700 font-semibold"
              >
                +254113634661
              </a>
              <p className="text-xs text-muted-foreground mt-2">Mon-Fri, 8:00 AM - 5:00 PM</p>
            </div>

            {/* Email */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a
                href="mailto:mariseshine4@gmail.com"
                className="text-green-600 hover:text-green-700 font-semibold break-all"
              >
                mariseshine4@gmail.com
              </a>
              <p className="text-xs text-muted-foreground mt-2">We respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-purple-600 font-semibold text-sm">
                Nairobi, Kenya
              </p>
              <p className="text-xs text-muted-foreground mt-2">School directions available</p>
            </div>

            {/* Hours */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200 p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Hours</h3>
              <div className="text-sm text-orange-600 font-semibold">
                <p>7:30 AM - 4:00 PM</p>
                <p className="text-xs text-muted-foreground mt-1">School days only</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl border border-border shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
                Admissions Inquiry Form
              </h2>
              <p className="text-muted-foreground text-center mb-8">
                Complete the form below and we&apos;ll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-2">✓</div>
                  <h3 className="font-bold text-green-700 mb-2">Thank You!</h3>
                  <p className="text-sm text-green-600">
                    We&apos;ve received your inquiry. Our admissions team will contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Parent Name */}
                  <div>
                    <label htmlFor="parentName" className="block text-sm font-semibold text-foreground mb-2">
                      Parent/Guardian Name
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="parent@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+254 (0) 123 456 789"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Student Name */}
                  <div>
                    <label htmlFor="studentName" className="block text-sm font-semibold text-foreground mb-2">
                      Student Name
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  {/* Grade Level */}
                  <div>
                    <label htmlFor="gradeLevel" className="block text-sm font-semibold text-foreground mb-2">
                      Desired Grade Level
                    </label>
                    <select
                      id="gradeLevel"
                      name="gradeLevel"
                      value={formData.gradeLevel}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select grade level</option>
                      <option value="PP1">PP1</option>
                      <option value="PP2">PP2</option>
                      <option value="Grade 1">Grade 1</option>
                      <option value="Grade 2">Grade 2</option>
                      <option value="Grade 3">Grade 3</option>
                      <option value="Grade 4">Grade 4</option>
                      <option value="Grade 5">Grade 5</option>
                      <option value="Grade 6">Grade 6</option>
                      <option value="Grade 7">Grade 7</option>
                      <option value="Grade 8">Grade 8</option>
                      <option value="Grade 9">Grade 9</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Additional Questions
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your child and what you&apos;d like to know..."
                      className="w-full px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="primary" size="lg" className="w-full group">
                    Send Inquiry
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* School Visit CTA */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Schedule a School Tour</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We encourage parents and prospective students to visit our school. Experience our facilities, meet our dedicated staff, and discover why Mastore Arise & Shine is the right choice for your child&apos;s education.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-8">
              <p className="text-foreground font-semibold mb-4">
                For school tours and admissions appointments, please contact:
              </p>
              <div className="space-y-2 text-center">
                <p className="text-lg font-bold text-primary">
                  +254113634661
                </p>
                <p className="text-muted-foreground">
                  Monday to Friday, 8:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
