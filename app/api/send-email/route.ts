import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper function to read the email template
async function getEmailTemplate() {
  const templatePath = path.join(process.cwd(), 'app/api/send-email/assets/email-template.html');
  return fs.readFile(templatePath, 'utf-8');
}

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  try {
    let htmlContent = await getEmailTemplate();

    htmlContent = htmlContent
      .replace('{{name}}', name)
      .replace('{{email}}', email)
      .replace('{{message}}', message.replace(/\n/g, '<br>'));
    
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev', // This is a fixed address for the Resend service
      to: process.env.RESEND_RECIPIENT_EMAIL || '', // Your email address from environment variables
      subject: `New message from ${name}`,
      html: htmlContent,
    });

    return NextResponse.json({ message: 'Email sent successfully', data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
}