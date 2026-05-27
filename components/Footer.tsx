import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Mastore Arise & Shine</h3>
            <p className="text-sm text-blue-100 mb-4">
              Committed to nurturing learners with knowledge, skill, and values for effective societal development.
            </p>
            <p className="text-xs text-blue-200">
              <strong>Motto:</strong> STRIVE TO EXCEL
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-blue-100 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-100 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">+254113634661</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:mariseshine4@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                  mariseshine4@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-blue-100">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h4 className="font-bold text-base mb-4 text-white">Hours</h4>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <strong className="text-white">School Days:</strong>
                <br /> Mon - Fri: 7:30 AM - 4:00 PM
              </li>
              <li>
                <strong className="text-white">Weekends:</strong>
                <br /> Closed
              </li>
              <li>
                <strong className="text-white">Office:</strong>
                <br /> 8:00 AM - 5:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-100 text-center md:text-left">
              &copy; {currentYear} Mastore Arise & Shine School. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-blue-100 hover:text-white transition-colors">
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
