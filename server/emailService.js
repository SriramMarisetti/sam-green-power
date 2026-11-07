import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { generateAdminLeadEmail, generateCustomerConfirmationEmail } from './emailTemplates.js';

dotenv.config();

// In-memory deduplication cache: guarantees exactly 1 email within a 15-second window
const recentSubmissions = new Map();

function isDuplicateSubmission(key) {
  const now = Date.now();
  if (recentSubmissions.has(key)) {
    const lastTimestamp = recentSubmissions.get(key);
    if (now - lastTimestamp < 15000) {
      return true;
    }
  }
  recentSubmissions.set(key, now);

  // Periodic cleanup of keys older than 60 seconds
  for (const [k, timestamp] of recentSubmissions.entries()) {
    if (now - timestamp > 60000) {
      recentSubmissions.delete(k);
    }
  }
  return false;
}

export function getTransporter() {
  const user = (process.env.EMAIL_USER || 'infosamgreenpower@gmail.com').trim();
  // Strip any accidental spaces from Gmail App Password
  const pass = (process.env.EMAIL_PASS || 'xaxpgwqczkjoowvr').replace(/\s+/g, '');

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Send full notification email package:
 * 1. Rich Admin Lead Notification to configured admin email (e.g. infosamgreenpower@gmail.com)
 * 2. Elegant, tailored Confirmation Email to customer's email (if valid and not matching admin)
 */
export async function sendEnquiryEmail(data) {
  const transporter = getTransporter();
  const adminEmail = (process.env.EMAIL_TO || process.env.EMAIL_USER || 'infosamgreenpower@gmail.com').trim();

  const customerName = (data.name || data.fullName || 'Valued Customer').trim();
  const customerMobile = (data.mobile || data.phoneNumber || 'Not provided').trim();
  const customerEmail = (data.email || data.emailAddress || data.emailId || '').trim();
  const solarNeed = data.solarNeed || data.interestedSolution || 'Residential Solar';
  const location = data.location || data.city || data.state || 'AP / Telangana';
  const formType = data.formType || 'consultation'; // 'consultation' | 'promo' | 'contact'

  const normalizedData = {
    ...data,
    name: customerName,
    mobile: customerMobile,
    email: customerEmail,
    solarNeed,
    location,
    formType,
  };

  // 15-Second Deduplication Guard: Ignore rapid repeated submissions from the same user
  const dedupeKey = `${customerMobile}_${customerEmail}_${solarNeed}`.toLowerCase().replace(/[^a-z0-9@._]/g, '');
  if (isDuplicateSubmission(dedupeKey)) {
    console.log(`⚠️ [Deduplication Guard] Ignored duplicate submission for key: ${dedupeKey} within 15 seconds.`);
    return {
      success: true,
      duplicateIgnored: true,
      message: 'Duplicate submission blocked within 15-second window. Email already sent.',
    };
  }

  // 1. Dispatch Admin Notification to infosamgreenpower@gmail.com
  const adminSubject = `⚡ New Solar Lead: ${customerName} | ${solarNeed} | ${location}`;
  const adminHtml = generateAdminLeadEmail(normalizedData);

  const adminMailOptions = {
    from: `"SAM GREEN POWER Lead Portal" <${process.env.EMAIL_USER || 'infosamgreenpower@gmail.com'}>`,
    to: adminEmail,
    replyTo: customerEmail || undefined,
    subject: adminSubject,
    html: adminHtml,
  };

  const adminResult = await transporter.sendMail(adminMailOptions);

  // 2. Dispatch Tailored Customer Confirmation Email directly to the user's email
  let customerMailResult = null;
  const isValidEmail = customerEmail && customerEmail.includes('@') && customerEmail.includes('.');

  if (isValidEmail) {
    try {
      // Exact subject line required: "Solar Consultation Confirmed — SAM GREEN POWER SOLUTIONS PVT. LTD."
      const customerSubject = `Solar Consultation Confirmed — SAM GREEN POWER SOLUTIONS PVT. LTD.`;

      const customerHtml = generateCustomerConfirmationEmail(normalizedData);
      const customerText = `Dear ${customerName},

Thank you for choosing SAM GREEN POWER SOLUTIONS PVT. LTD.

We have successfully received your solar consultation booking for ${solarNeed} in ${location}.
Our dedicated engineering specialist will review your site and contact you within 24 hours at ${customerMobile}.

Benefits Included:
- Central Subsidy: ₹78,000 (PM Surya Ghar)
- SAM Direct Discount: ₹22,000
- Total Benefit: ₹1,00,000 deducted directly from turnkey installation costs.

For immediate assistance or questions:
Phone: +91 7013204499
Email: infosamgreenpower@gmail.com
Corporate Office: D No 2-5-127, Ryathu Bazar, NTR Dist, Andhra Pradesh, India - 521456

SAM GREEN POWER SOLUTIONS PVT. LTD.
Clean Energy. Better Future.`;

      customerMailResult = await transporter.sendMail({
        from: `"SAM GREEN POWER" <${process.env.EMAIL_USER || 'infosamgreenpower@gmail.com'}>`,
        to: customerEmail,
        subject: customerSubject,
        text: customerText,
        html: customerHtml,
      });
      console.log(`✅ [${customerSubject}] sent successfully to customer: ${customerEmail} (MessageId: ${customerMailResult.messageId})`);
    } catch (custErr) {
      console.error('❌ Customer confirmation email failed:', custErr);
    }
  } else {
    console.warn(`⚠️ Skipped customer confirmation email: invalid or missing email "${customerEmail}"`);
  }

  return {
    success: true,
    leadId: adminResult.messageId,
    customerNotified: !!customerMailResult,
  };
}
