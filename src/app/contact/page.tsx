'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, User, FileText } from 'lucide-react'

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch {
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">Us</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;d love to hear from you. Reach out for inquiries, partnerships, 
              or to learn more about our programs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Multiple ways to reach us for inquiries and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info) => (
              <div key={info.title} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-gray-500 text-sm">
                  {info.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="p-8 bg-white rounded-xl shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a <span className="text-blue-600">Message</span>
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
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
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Tell us how we can help..."
                      ></textarea>
                    </div>

                    <div className="md:col-span-2 text-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200"
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="w-5 h-5 ml-2" />
                      </button>
                    </div>

                    {submitStatus === 'success' && (
                      <div className="md:col-span-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-700 font-medium text-center">
                          ✓ Message sent successfully! We&apos;ll respond within 24 hours.
                        </p>
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="md:col-span-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-700 font-medium text-center">
                          ✗ Error sending message. Please try again or call us directly.
                        </p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>

            <div>
              <div className="p-8 h-full min-h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Find Us Here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Located in Juja Sub County, along Thika Superhighway
                  </p>
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 font-medium">
                      Interactive Map
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Visit us Monday - Friday: 7:00 AM - 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our school and programs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
