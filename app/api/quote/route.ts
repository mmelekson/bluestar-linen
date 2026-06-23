import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// TODO: GHL inbound webhook — uncomment and set GHL_WEBHOOK_URL env var when ready
// async function notifyGhl(data: Record<string, string>) {
//   const url = process.env.GHL_WEBHOOK_URL
//   if (!url) return
//   await fetch(url, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data),
//   })
// }

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body = await req.json()
    const { businessName, contactName, businessType, city, volume, email, phone, message } =
      body as Record<string, string>

    if (!email || !businessName || !contactName) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const text = [
      'New Quote Request — Blue Star Linen',
      '',
      `Business Name:     ${businessName}`,
      `Contact Name:      ${contactName}`,
      `Business Type:     ${businessType || 'Not specified'}`,
      `Location / City:   ${city || 'Not specified'}`,
      `Approx. Volume:    ${volume || 'Not specified'}`,
      `Email:             ${email}`,
      `Phone:             ${phone || 'Not provided'}`,
      '',
      'Message:',
      message || 'No message provided',
    ].join('\n')

    await resend.emails.send({
      from: 'Blue Star Linen <noreply@bluestarlinen.com>',
      to: 'leads@mpowersourcing.com',
      replyTo: email,
      subject: `Quote Request from ${businessName} — Blue Star Linen`,
      text,
    })

    // await notifyGhl({ businessName, contactName, businessType, city, volume, email, phone, message })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[api/quote]', err)
    return NextResponse.json({ error: 'Failed to send quote request' }, { status: 500 })
  }
}
