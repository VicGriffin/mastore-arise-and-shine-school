import React from 'react';
import Link from 'next/link';
import Button from '../Button';
import { Calendar, Mail, Phone } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary to-blue-900 text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-24" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-24" />

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-balance">
            Ready to Join Our Community?
          </h2>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Enroll your child in an environment where excellence, values, and holistic development are paramount. Let&apos;s work together to nurture the leaders of tomorrow.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
            <a
              href="tel:+254123456789"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
            >
              <Phone className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-semibold">Call Us</div>
              <div className="text-xs text-blue-100">+254 (0) 123 456 789</div>
            </a>

            <a
              href="mailto:info@mastore.ac.ke"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
            >
              <Mail className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-semibold">Email Us</div>
              <div className="text-xs text-blue-100">info@mastore.ac.ke</div>
            </a>

            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300"
            >
              <Calendar className="w-6 h-6 mx-auto mb-2" />
              <div className="text-sm font-semibold">Schedule Tour</div>
              <div className="text-xs text-blue-100">Book a campus visit</div>
            </Link>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 border-0"
              >
                Start Your Admission
              </Button>
            </Link>
            <Link href="/academics">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                Learn More About Programs
              </Button>
            </Link>
          </div>

          {/* Closing Statement */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm text-blue-100">
              Strive to Excel &mdash; Where Quality Education Meets Values
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
