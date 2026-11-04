import { sendEnquiryEmail } from '../server/emailService.js';

export default async function handler(req, res) {
  // Allow CORS if accessed externally
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const result = await sendEnquiryEmail(body);
    return res.status(200).json(result);
  } catch (error) {
    console.error('Email API Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to dispatch email notification' });
  }
}

