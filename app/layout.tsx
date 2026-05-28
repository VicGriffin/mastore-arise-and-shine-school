import type { Metadata, Viewport } from 'next';
import { Open_Sans, Montserrat } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-sans' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Mastore Arise & Shine School | Quality Education',
  description: 'Excellence in education with holistic development from Play Group to Grade 9. We nurture learners spiritually, socially, and academically since 2019.',
  keywords: ['school', 'education', 'Kenya', 'junior school', 'admissions', 'quality education'],
  authors: [{ name: 'Mastore Arise & Shine School' }],
  creator: 'Mastore Arise & Shine School',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mastore.ac.ke',
    siteName: 'Mastore Arise & Shine School',
    title: 'Mastore Arise & Shine School | Quality Education',
    description: 'Excellence in education with holistic development from Play Group to Grade 9.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#1e3a8a',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`bg-background ${openSans.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}
