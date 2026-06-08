'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo & Branding */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 group focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded-lg">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg overflow-hidden flex items-center justify-center hover:shadow-md transition-shadow flex-shrink-0">
              <Image
                src="/images/SCHOOL LOG.webp"
                alt="Mastore Arise & Shine School Logo"
                width={64}
                height={64}
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs sm:text-sm md:text-base font-bold text-primary">MASTORE ARISE</span>
              <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">& SHINE SCHOOL</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm md:text-base h-12 flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring rounded"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button variant="primary" size="md">
                Admissions
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 md:p-3 hover:bg-muted rounded-lg transition-colors h-12 w-12 md:h-14 md:w-14 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 md:w-7 md:h-7 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 md:pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 md:py-4 min-h-12 md:min-h-14 text-foreground hover:bg-muted rounded-lg transition-colors font-medium text-sm md:text-base flex items-center focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3 md:py-4 pt-4 md:pt-6 border-t border-border">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="primary" size="md" className="w-full">
                    Admissions
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
