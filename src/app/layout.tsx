import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/common/WhatsAppButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mastore Arise and Shine School - Quality Education in Juja, Kiambu',
  description: 'Mastore Arise and Shine School provides quality education and a caring children\'s home in Juja Sub County, Kiambu County. Nurturing excellence, character, and hope.',
  keywords: 'school, education, children\'s home, Juja, Kiambu, Kenya, CBC curriculum, primary education',
  authors: [{ name: 'Mastore School' }],
  openGraph: {
    title: 'Mastore Arise and Shine School',
    description: 'Quality education and caring home for children in Juja Sub County',
    type: 'website',
    locale: 'en_KE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mastore Arise and Shine School',
    description: 'Quality education and caring home for children in Juja Sub County',
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
