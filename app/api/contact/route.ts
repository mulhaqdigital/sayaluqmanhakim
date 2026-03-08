import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
    }

    // TODO: wire up an email service here (e.g. Resend, Nodemailer, or SendGrid)
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'noreply@sayaluqmanhakim.com',
    //   to: 'hello@sayaluqmanhakim.com',
    //   subject: `[Contact] ${subject} — from ${name}`,
    //   html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Subject:</strong> ${subject}</p><p><strong>Message:</strong><br/>${message}</p>`,
    // })

    console.log('Contact form submission:', { name, email, subject, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }
}
