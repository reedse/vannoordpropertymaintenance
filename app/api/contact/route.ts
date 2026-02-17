import { EmailTemplate } from "@/components/email-template"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)
const toEmail = process.env.RESEND_EMAIL || "josh@vannoordlandscape.com"

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields" },
        { status: 400 }
      )
    }

    // Format service selection
    const formattedService = service ? service.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()) : "Not specified"

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `Contact Form <info@vannoordpropertymaintenance.com>`,
      to: [toEmail],
      subject: `New Contact Form Submission from ${name}`,
      react: EmailTemplate({
        name,
        email,
        phone: phone || "Not provided",
        service: formattedService,
        message
      }),
      replyTo: email,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
