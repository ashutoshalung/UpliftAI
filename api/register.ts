import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, masterclass, track, schedule } = req.body;

  if (!email || !masterclass) {
    return res.status(400).json({ error: 'Email and masterclass are required' });
  }

  try {
    await resend.emails.send({
      from: 'Uplift AI <hello@upliftai.pro>',
      to: email,
      subject: `You're registered: ${track} Masterclass — Uplift AI`,
      html: `
        <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px; color: #1a1a1a;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 28px; font-weight: 800; margin: 0; color: #111;">
              Welcome to Uplift AI${name ? `, ${name}` : ''}!
            </h1>
          </div>

          <p style="font-size: 16px; line-height: 1.6; color: #555;">
            You've successfully registered for our free masterclass:
          </p>

          <div style="background: linear-gradient(135deg, #FFF7ED, #FFF1F2); border: 2px solid #FDBA74; border-radius: 16px; padding: 24px; margin: 24px 0;">
            <h2 style="font-size: 20px; font-weight: 700; margin: 0 0 8px 0; color: #111;">
              ${track}
            </h2>
            <p style="font-size: 14px; color: #666; margin: 0;">
              ${schedule}
            </p>
          </div>

          <h3 style="font-size: 16px; font-weight: 700; color: #111; margin: 24px 0 12px;">
            Next Steps:
          </h3>
          <ol style="font-size: 15px; line-height: 1.8; color: #555; padding-left: 20px;">
            <li>Join our Circle community (link below)</li>
            <li>Navigate to the free Masterclass space</li>
            <li>Show up live and build something real!</li>
          </ol>

          <div style="text-align: center; margin: 32px 0;">
            <a href="https://community.upliftai.pro" style="display: inline-block; background: linear-gradient(135deg, #F97316, #F43F5E); color: white; font-size: 16px; font-weight: 700; padding: 14px 32px; border-radius: 999px; text-decoration: none;">
              Join the Community
            </a>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: #888; text-align: center;">
            Questions? Reply to this email or reach us at
            <a href="mailto:hello@upliftai.pro" style="color: #F97316;">hello@upliftai.pro</a>
          </p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 32px 0;" />

          <p style="font-size: 12px; color: #aaa; text-align: center;">
            &copy; 2026 Uplift AI. Singapore. <br />
            You received this because you registered for a free masterclass at upliftai.pro.
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send confirmation email' });
  }
}
