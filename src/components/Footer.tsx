'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#features' },
    { label: 'Programs', href: '#features' },
    { label: 'Contact', href: '#contact' },
    { label: 'Admissions', href: '#contact' },
  ];

  const resources = [
    { label: 'Student Portal', href: '#' },
    { label: 'Parent Dashboard', href: '#' },
    { label: 'Faculty Resources', href: '#' },
    { label: 'Library', href: '#' },
  ];

  const social = [
    { label: 'Twitter', icon: '𝕏', href: '#' },
    { label: 'Facebook', icon: 'f', href: '#' },
    { label: 'Instagram', icon: '📷', href: '#' },
    { label: 'LinkedIn', icon: 'in', href: '#' },
  ];

  return (
    <footer className="bg-background border-t border-primary/10">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-gradient">Arise & Shine</span>
            </h3>
            <p className="text-foreground/70 mb-4">
              Empowering the next generation of leaders and innovators through modern education.
            </p>
            <div className="flex gap-3">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  title={item.label}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-smooth hover:scale-110"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Stay Updated</h4>
            <p className="text-foreground/70 text-sm mb-3">
              Subscribe to our newsletter for updates and news.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-lg bg-foreground/5 border border-primary/30 text-sm focus:outline-none focus:border-primary transition-smooth placeholder:text-foreground/40"
              />
              <button className="px-4 py-2 bg-gradient-primary text-white rounded-lg text-sm font-semibold hover-lift transition-smooth">
                →
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-foreground/70 text-sm">
            <p>
              © {currentYear} MaStore Arise & Shine School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
