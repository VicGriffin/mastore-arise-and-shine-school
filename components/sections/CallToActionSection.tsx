import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../Button';
import { Calendar, Mail, Phone } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="section-padding text-white relative overflow-hidden bg-blue-950">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/mastore/WhatsApp Image 2026-05-28 at 10.55.08.jpeg"
          alt="Mastore Arise & Shine School Activity"
          fill
          className="object-cover object-center brightness-[0.25]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-slate-900/95 to-black/95" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-24 z-0" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-24 z-0" />

      <div className="container-max relative z-10 px-4 sm:px-0">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
            Ready to Join Our Community?
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Enroll your child in an environment where excellence, values, and holistic development are paramount. Let&apos;s work together to nurture the leaders of tomorrow.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 my-8 md:my-10">
            <a
              href="tel:+254113634661"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg md:rounded-xl p-5 sm:p-6 md:p-7 min-h-32 sm:min-h-36 hover:bg-white/25 hover:border-white/40 transition-all duration-300 flex flex-col justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
            >
              <Phone className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mx-auto mb-2 sm:mb-3 text-blue-300 flex-shrink-0" />
              <div className="text-xs sm:text-sm md:text-base font-semibold">Call Us</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-blue-100 mt-1 sm:mt-2">+254 113 634 661</div>
            </a>

            <a
              href="mailto:mariseshine4@gmail.com"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg md:rounded-xl p-5 sm:p-6 md:p-7 min-h-32 sm:min-h-36 hover:bg-white/25 hover:border-white/40 transition-all duration-300 flex flex-col justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
            >
              <Mail className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mx-auto mb-2 sm:mb-3 text-blue-300 flex-shrink-0" />
              <div className="text-xs sm:text-sm md:text-base font-semibold">Email Us</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-blue-100 mt-1 sm:mt-2 break-all">mariseshine4@gmail.com</div>
            </a>

            <Link
              href="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg md:rounded-xl p-5 sm:p-6 md:p-7 min-h-32 sm:min-h-36 hover:bg-white/25 hover:border-white/40 transition-all duration-300 flex flex-col justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
            >
              <Calendar className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 mx-auto mb-2 sm:mb-3 text-blue-300 flex-shrink-0" />
              <div className="text-xs sm:text-sm md:text-base font-semibold">Schedule Tour</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-blue-100 mt-1 sm:mt-2">Book a school visit</div>
            </Link>
          </div>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8 md:pt-10">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-blue-50 border-0 w-full sm:w-auto"
              >
                Start Your Admission
              </Button>
            </Link>
            <Link href="/academics" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
              >
                Learn More About Programs
              </Button>
            </Link>
          </div>

          {/* Closing Statement */}
          <div className="pt-6 sm:pt-8 md:pt-10 border-t border-white/20">
            <p className="text-xs sm:text-sm md:text-base text-blue-100">
              Strive to Excel &mdash; Where Quality Education Meets Values
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
