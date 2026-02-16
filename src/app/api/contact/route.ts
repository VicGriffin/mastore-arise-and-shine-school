import { NextRequest, NextResponse } from 'next/server'

interface ContactFormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate form data
function validateFormData(data: ContactFormData): { valid: boolean; error?: string } {
  if (!data.name || data.name.trim().length === 0) {
    return { valid: false, error: 'Name is required' }
  }

  if (!data.email || !isValidEmail(data.email)) {
    return { valid: false, error: 'Valid email is required' }
  }

  if (!data.subject || data.subject.trim().length === 0) {
    return { valid: false, error: 'Subject is required' }
  }

  if (!data.message || data.message.trim().length === 0) {
    return { valid: false, error: 'Message is required' }
  }

  return { valid: true }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as ContactFormData

    // Validate form data
    const validation = validateFormData(body)
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      )
    }

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Send confirmation email to user

    // For now, we'll simulate saving the data
    console.log('Contact Form Submission:', {
      ...body,
      timestamp: new Date().toISOString(),
    })

    // Simulate async operation
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been received. We will respond within 24 hours.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)

    return NextResponse.json(
      { error: 'Failed to process your request. Please try again.' },
      { status: 500 }
    )
  }
}
