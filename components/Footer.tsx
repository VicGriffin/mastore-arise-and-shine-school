import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max py-12 sm:py-16 md:py-20 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 mb-8 md:mb-12">
          {/* School Info */}
          <div>
            <h3 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white">Mastore Arise & Shine</h3>
            <p className="text-xs sm:text-sm md:text-base text-blue-100 mb-3 sm:mb-4 leading-relaxed">
              Committed to nurturing learners with knowledge, skill, and values for effective societal development.
            </p>
            <p className="text-[10px] sm:text-xs md:text-sm text-blue-200">
              <strong>Motto:</strong> STRIVE TO EXCEL
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors h-10 flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded px-1">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors h-10 flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded px-1">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-primary-foreground/80 hover:text-white transition-colors h-10 flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded px-1">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-primary-foreground/80 hover:text-white transition-colors h-10 flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded px-1">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-primary-foreground/80 hover:text-white transition-colors h-10 flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded px-1">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base">
              <li className="flex items-start gap-2 md:gap-3">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                <span className="text-blue-100">+254113634661</span>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                <a href="mailto:mariseshine4@gmail.com" className="text-blue-100 hover:text-white transition-colors break-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded px-1">
                  mariseshine4@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 md:gap-3">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 mt-1 flex-shrink-0" />
                <span className="text-blue-100">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-bold text-base sm:text-lg md:text-xl mb-3 sm:mb-4 text-white">Hours</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-blue-100">
              <li>
                <strong className="text-white text-xs sm:text-sm md:text-base">School Days:</strong>
                <br /> Mon - Fri: 7:30 AM - 4:00 PM
              </li>
              <li>
                <strong className="text-white text-xs sm:text-sm md:text-base">Weekends:</strong>
                <br /> Closed
              </li>
              <li>
                <strong className="text-white text-xs sm:text-sm md:text-base">Office:</strong>
                <br /> 8:00 AM - 5:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-200 pt-6 sm:pt-8 md:pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-xs sm:text-sm md:text-base text-blue-100 text-center md:text-left">
              &copy; {currentYear} Mastore Arise & Shine School. All rights reserved.
            </p>
            <div className="flex gap-4 md:gap-6 text-xs sm:text-sm md:text-base">
              <Link href="#" className="text-blue-100 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded px-1">
                Privacy Policy
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded px-1">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
