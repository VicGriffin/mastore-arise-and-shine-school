'use client'

import { useState, useEffect } from 'react'
import { Phone, Mail, MapPin, Clock, Send, User, FileText, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '+254 XXX XXX XXX',
      description: 'Monday - Friday: 7:00 AM - 5:00 PM',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@mastoreschool.ac.ke',
      description: 'We respond within 24 hours',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Juja Sub County, Kiambu County, Kenya',
      description: 'Located along Thika Superhighway',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon - Fri: 7:00 AM - 5:00 PM',
      description: 'Saturday: 8:00 AM - 1:00 PM',
    },
  ]

  const inquiryTypes = [
    'General Inquiry',
    'Admission Information',
    'Academic Questions',
    'Partnership Opportunities',
    'Volunteer Information',
    'Children\'s Home Sponsorship',
  ]

  const faqs = [
    {
      question: 'What curriculum do you follow?',
      answer: 'We follow the Kenyan Competency-Based Curriculum (CBC) from Early Years to Grade 8, focusing on practical skills and critical thinking.',
    },
    {
      question: 'How can I enroll my child?',
      answer: 'Visit our school for admission forms, or contact us via phone or email. We offer year-round enrollment with flexible payment options.',
    },
    {
      question: 'Do you offer boarding facilities?',
      answer: 'Currently we are a day school, but we have plans to expand to include boarding facilities in the near future.',
    },
    {
      question: 'How can I support the children\'s home?',
      answer: 'You can support through one-time donations, monthly sponsorships, or by volunteering your time and skills. Every contribution makes a difference.',
    },
  ]

  return (
    <main className="min-h-screen">
<section className="py-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/mastore school bus2.jfif")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-800/80 to-pink-900/85"></div>
          </div>
        </div>

        {/* Background Animation */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className={`text-center transition-all duration-700 ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Reach out for inquiries, partnerships, 
              or to learn more about our programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us for inquiries and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={info.title} 
                className="group text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp hover-lift overflow-hidden relative"
                style={{animationDelay: `${(index + 1) * 0.1}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                    {info.title}
                  </h3>
                  <p className="text-gray-600 font-medium mb-1 group-hover:text-gray-700">
                    {info.content}
                  </p>
                  <p className="text-gray-500 text-sm group-hover:text-gray-600">
                    {info.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-transparent rounded-full blur-3xl animate-float-slow" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fadeInLeft">
              <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Message</span>
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-300"
                          placeholder="+254 XXX XXX XXX"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <div className="relative">
                        <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 appearance-none hover:border-gray-300"
                        >
                          <option value="">Select a subject</option>
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none hover:border-gray-300"
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>

                    <div className="md:col-span-2 text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/50 flex items-center justify-center gap-2 group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="md:col-span-2 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg animate-slideInDown">
                        <div className="flex items-center justify-center gap-3">
                          <CheckCircle className="w-6 h-6 text-green-600" />
                          <p className="text-green-700 font-medium">
                            Message sent successfully! We&apos;ll respond within 24 hours.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="md:col-span-2 p-4 bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-300 rounded-lg animate-slideInDown">
                        <div className="flex items-center justify-center gap-3">
                          <AlertCircle className="w-6 h-6 text-red-600" />
                          <p className="text-red-700 font-medium">
                            Error sending message. Please try again or call us directly.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div className="animate-fadeInRight">
              <div className="p-8 h-full min-h-[500px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-between overflow-hidden relative group">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10 text-center w-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                    Find Us Here
                  </h3>
                  <p className="text-gray-600 mb-6 group-hover:text-gray-700">
                    Located in Juja Sub County, along Thika Superhighway
                  </p>

                  {/* Map Placeholder with Animation */}
                  <div className="w-full h-56 bg-cover bg-center bg-no-repeat rounded-xl flex items-center justify-center overflow-hidden relative mb-6 group-hover:shadow-lg transition-shadow" style={{backgroundImage: `url("/images/mastore school bus.jfif")`}}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/90 via-purple-100/90 to-pink-100/90"></div>
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-400 rounded-full blur-2xl animate-pulse"></div>
                    </div>
                    <div className="relative z-10 text-center">
                      <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2 animate-bounce" />
                      <span className="text-gray-600 font-medium block">
                        Interactive Map
                      </span>
                      <span className="text-sm text-gray-500 block">
                        (Integration coming soon)
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm group-hover:text-gray-700">
                    Visit us Monday - Friday: 7:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url("/images/computer lab.jfif")`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-gray-50/95"></div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400 to-transparent rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our school and programs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 animate-fadeInUp group hover-lift" style={{animationDelay: `${(index + 1) * 0.1}s`}}>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Top Accent Border */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
