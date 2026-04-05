// Vercel Serverless Function — Independent of Astro build
// This handles the email transmission via Resend HTTP API.

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = request.body;

    if (!name || !email || !message) {
      return response.status(400).json({ error: 'Please provide name, email, and message.' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.RESEND_RECIPIENT_EMAIL || 'anggaradifans@gmail.com';

    if (!apiKey) {
      console.error('[contact] API Key is missing on Vercel');
      return response.status(500).json({ error: 'Configuration Error: Contact API failed.' });
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: [toEmail],
        reply_to: email,
        subject: `[radifans.my.id] New message from ${name}`,
        html: `
          <div style="font-family:monospace;background:#11131e;color:#e1e1f2;padding:24px;border:4px solid #4fffb0;max-width:600px;">
            <h2 style="color:#4fffb0;font-size:14px;margin-bottom:16px;">NEW TRANSMISSION — radifans.my.id</h2>
            <p style="margin-bottom:8px;"><strong style="color:#bf5af2;">From:</strong> ${name}</p>
            <p style="margin-bottom:16px;"><strong style="color:#bf5af2;">Email:</strong> ${email}</p>
            <hr style="border:none;border-top:2px solid #3b4a40;margin-bottom:16px;"/>
            <p style="white-space:pre-wrap;color:#bacbbe;line-height:1.7;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('[contact] Resend API error:', errorText);
      return response.status(502).json({ error: 'Third-party email service failed.' });
    }

    return response.status(200).json({ ok: true });

  } catch (error) {
    console.error('[contact] Critical internal error:', error);
    return response.status(500).json({ error: 'Internal Server Error' });
  }
}
