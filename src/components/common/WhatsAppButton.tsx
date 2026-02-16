'use client'

import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppClick = () => {
    const phoneNumber = '254XXXXXXXXX' // Replace with actual WhatsApp number
    const message = encodeURIComponent('Hello! I would like to inquire about Mastore School.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 -mt-1 w-2 h-2 bg-gray-800 transform rotate-45"></div>
          </div>
        )}
        
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-25"></div>
      </div>
    </div>
  )
}

export default WhatsAppButton
