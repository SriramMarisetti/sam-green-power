/**
 * SAM GREEN POWER SOLUTIONS PVT. LTD.
 * Premium Email Notification Templates
 * Designed for High-Impact Delivery across all email clients (Gmail, Outlook, Apple Mail, Mobile)
 */

export function generateAdminLeadEmail(data) {
  const {
    name = 'Valued Customer',
    mobile = 'Not provided',
    email = 'Not provided',
    solarNeed = 'Residential Solar',
    state = 'AP',
    location = 'Not specified',
    monthlyBill = 'Not specified',
    message = '',
    source = 'Website Consultation Request',
    capacity = '',
    savings = '',
    subsidy = '₹78,000',
    samDiscount = '₹22,000',
    totalBenefit = '₹1,00,000',
    netCost = '',
  } = data;

  const now = new Date();
  const formattedDate = now.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  const leadId = `SAM-${Date.now().toString().slice(-6)}`;
  const cleanMobile = mobile.replace(/[^0-9]/g, '');
  const isAP = state === 'AP' || state?.toLowerCase().includes('andhra');
  const discom = isAP ? 'APEPDCL / APSPDCL' : 'TGSPDCL / TGNPDCL';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Solar Inquiry - SAM GREEN POWER</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #101A13; -webkit-font-smoothing: antialiased;">
  
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f2; padding: 24px 12px;">
    <tr>
      <td align="center">
        
        <!-- Main Email Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 640px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(6, 59, 24, 0.08); border: 1px solid #e2ebe4;">
          
          <!-- Top Accent Bar -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #55B51F 0%, #F5A000 50%, #063B18 100%);"></td>
          </tr>

          <!-- Header Section -->
          <tr>
            <td style="background-color: #063B18; padding: 32px 32px 28px 32px; color: #ffffff;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <!-- Brand Pill -->
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 14px;">
                      <tr>
                        <td style="background-color: rgba(85, 181, 31, 0.18); border: 1px solid rgba(85, 181, 31, 0.4); border-radius: 999px; padding: 4px 12px;">
                          <span style="color: #55B51F; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                            ⚡ NEW SOLAR LEAD RECEIVED
                          </span>
                        </td>
                      </tr>
                    </table>

                    <h1 style="margin: 0 0 6px 0; font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px;">
                      SAM GREEN POWER SOLUTIONS
                    </h1>
                    <p style="margin: 0; font-size: 11px; font-weight: 700; color: #55B51F; letter-spacing: 2px; text-transform: uppercase;">
                      SOLUTIONS PRIVATE LIMITED • ENGINEERING LEAD DOSSIER
                    </p>
                  </td>
                  <td align="right" valign="top" style="padding-left: 12px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background-color: #ffffff; border-radius: 12px; padding: 6px 12px; text-align: right; border: 1px solid #55B51F;">
                          <div style="font-size: 10px; color: #718078; font-weight: 700; text-transform: uppercase;">Lead ID</div>
                          <div style="font-size: 13px; font-weight: 800; color: #063B18;">${leadId}</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Quick Action Bar -->
          <tr>
            <td style="background-color: #0d4a23; padding: 14px 32px; border-bottom: 1px solid rgba(255, 255, 255, 0.1);">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="color: #d1fae5; font-size: 12px; font-weight: 600;">
                    Immediate Action:
                  </td>
                  <td align="right">
                    <a href="tel:+91${cleanMobile}" style="display: inline-block; background-color: #55B51F; color: #ffffff; text-decoration: none; font-size: 11px; font-weight: 800; padding: 7px 14px; border-radius: 8px; margin-left: 6px;">
                      📞 Call ${mobile}
                    </a>
                    <a href="https://wa.me/91${cleanMobile}" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 11px; font-weight: 800; padding: 7px 14px; border-radius: 8px; margin-left: 6px;">
                      💬 WhatsApp
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content Area -->
          <tr>
            <td style="padding: 28px 32px 24px 32px;">
              
              <!-- Lead Highlight Banner -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f7faf5; border: 1px solid #cce5d2; border-radius: 14px; margin-bottom: 24px; padding: 18px 20px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #55B51F; letter-spacing: 0.5px; margin-bottom: 4px;">
                      Lead Summary
                    </div>
                    <div style="font-size: 18px; font-weight: 900; color: #063B18; line-height: 1.3;">
                      ${name} wants ${solarNeed} in ${location || state}
                    </div>
                    <div style="font-size: 12px; color: #718078; margin-top: 4px;">
                      Logged via <strong>${source}</strong> on ${formattedDate} (IST)
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Customer Contact Details Table -->
              <h2 style="font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #063B18; margin: 0 0 12px 0;">
                👤 Customer Contact Information
              </h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border: 1px solid #e5ede7; border-radius: 12px; overflow: hidden; margin-bottom: 24px; font-size: 13px;">
                <tr style="background-color: #ffffff;">
                  <td width="36%" style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">Customer Name</td>
                  <td width="64%" style="padding: 11px 16px; font-weight: 800; color: #063B18; border-bottom: 1px solid #edf2ee;">${name}</td>
                </tr>
                <tr style="background-color: #fcfdfc;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">Mobile Number</td>
                  <td style="padding: 11px 16px; font-weight: 800; color: #063B18; border-bottom: 1px solid #edf2ee;">
                    <a href="tel:+91${cleanMobile}" style="color: #063B18; text-decoration: none;">+91 ${mobile}</a>
                  </td>
                </tr>
                <tr style="background-color: #ffffff;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">Email Address</td>
                  <td style="padding: 11px 16px; font-weight: 700; color: #1762A5; border-bottom: 1px solid #edf2ee;">
                    <a href="mailto:${email}" style="color: #1762A5; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                <tr style="background-color: #fcfdfc;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">Target Location / City</td>
                  <td style="padding: 11px 16px; font-weight: 800; color: #063B18; border-bottom: 1px solid #edf2ee;">${location || 'Not Specified'}</td>
                </tr>
                <tr style="background-color: #ffffff;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078;">State & Grid Jurisdiction</td>
                  <td style="padding: 11px 16px; font-weight: 800; color: #063B18;">
                    ${isAP ? 'Andhra Pradesh (AP)' : 'Telangana'} • <span style="color: #55B51F;">${discom}</span>
                  </td>
                </tr>
              </table>

              <!-- Solar Requirement & Financials Table -->
              <h2 style="font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #063B18; margin: 0 0 12px 0;">
                ☀️ System Sizing & Incentive Details
              </h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border: 1px solid #e5ede7; border-radius: 12px; overflow: hidden; margin-bottom: 24px; font-size: 13px;">
                <tr style="background-color: #ffffff;">
                  <td width="36%" style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">Solar Solution Category</td>
                  <td width="64%" style="padding: 11px 16px; font-weight: 800; color: #063B18; border-bottom: 1px solid #edf2ee;">${solarNeed}</td>
                </tr>
                ${monthlyBill && monthlyBill !== 'Not specified' ? `
                <tr style="background-color: #fcfdfc;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">Current Monthly Bill</td>
                  <td style="padding: 11px 16px; font-weight: 800; color: #F5A000; border-bottom: 1px solid #edf2ee;">₹ ${monthlyBill}</td>
                </tr>` : ''}
                ${capacity ? `
                <tr style="background-color: #ffffff;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">Calculated Capacity</td>
                  <td style="padding: 11px 16px; font-weight: 800; color: #55B51F; border-bottom: 1px solid #edf2ee;">${capacity}</td>
                </tr>` : ''}
                ${savings ? `
                <tr style="background-color: #fcfdfc;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">Projected Bill Savings</td>
                  <td style="padding: 11px 16px; font-weight: 800; color: #063B18; border-bottom: 1px solid #edf2ee;">${savings}</td>
                </tr>` : ''}
                <tr style="background-color: #ffffff;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">Central Govt Subsidy</td>
                  <td style="padding: 11px 16px; font-weight: 800; color: #55B51F; border-bottom: 1px solid #edf2ee;">${subsidy} (PM Surya Ghar)</td>
                </tr>
                <tr style="background-color: #fcfdfc;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078; border-bottom: 1px solid #edf2ee;">SAM Discount / Rebate</td>
                  <td style="padding: 11px 16px; font-weight: 800; color: #F5A000; border-bottom: 1px solid #edf2ee;">${samDiscount} (Exclusive Offer)</td>
                </tr>
                <tr style="background-color: #f0f7f1;">
                  <td style="padding: 12px 16px; font-weight: 800; color: #063B18;">Total Combined Benefit</td>
                  <td style="padding: 12px 16px; font-weight: 900; color: #063B18; font-size: 15px;">${totalBenefit}</td>
                </tr>
                ${netCost ? `
                <tr style="background-color: #ffffff;">
                  <td style="padding: 11px 16px; font-weight: 700; color: #718078;">Estimated Net Plant Cost</td>
                  <td style="padding: 11px 16px; font-weight: 800; color: #063B18;">${netCost}</td>
                </tr>` : ''}
              </table>

              ${message ? `
              <!-- Customer Message / Notes -->
              <h2 style="font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #063B18; margin: 0 0 12px 0;">
                💬 Customer Message & Notes
              </h2>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; margin-bottom: 24px; padding: 16px;">
                <tr>
                  <td style="font-size: 13px; color: #334155; line-height: 1.6; font-style: italic;">
                    "${message.replace(/\n/g, '<br>')}"
                  </td>
                </tr>
              </table>` : ''}

              <!-- Engineering Dispatch Protocol Checklist -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f7faf5; border-left: 4px solid #55B51F; border-radius: 0 12px 12px 0; padding: 16px 20px; margin-bottom: 20px;">
                <tr>
                  <td>
                    <div style="font-size: 12px; font-weight: 800; color: #063B18; text-transform: uppercase; margin-bottom: 6px;">
                      📋 Mandatory 24-Hour Dispatch Checklist
                    </div>
                    <div style="font-size: 12px; color: #475569; line-height: 1.6;">
                      • Verify customer address in <strong>${location || state}</strong> and assign regional engineer.<br>
                      • Prepare preliminary satellite shadow analysis for Tier-1 550W+ module footprint.<br>
                      • Pre-fill PM Surya Ghar Portal submission with ₹78,000 central subsidy credentials.<br>
                      • Contact customer at <strong>${mobile}</strong> within standard 24 business hours.
                    </div>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Section -->
          <tr>
            <td style="background-color: #063B18; padding: 24px 32px; color: #94a3b8; font-size: 11px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
              <div style="color: #ffffff; font-weight: 800; font-size: 12px; margin-bottom: 4px;">
                SAM GREEN POWER SOLUTIONS PRIVATE LIMITED
              </div>
              <div style="color: #cbd5e1; margin-bottom: 8px;">
                D No 2-5-127, Ryathu Bazar, NTR Dist, Andhra Pradesh, India - 521456<br>
                16 Operating Hubs across AP • 12 Operating Hubs across Telangana
              </div>
              <div style="color: #55B51F; font-weight: 700;">
                📞 +91 7013204499 • ✉️ infosamgreenpower@gmail.com
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}

/**
 * Generates tailored Customer Confirmation Email based on which form was submitted:
 * - 'consultation': Book a Free Consultation / Sizing Tool
 * - 'promo': Limited Period Solar Offer Popup
 * - 'contact': Contact & Feasibility Assessment Form
 */
export function generateCustomerConfirmationEmail(data) {
  const {
    name = 'Valued Customer',
    mobile = '',
    solarNeed = 'Residential Solar',
    state = 'AP',
    location = '',
    monthlyBill = '',
    totalBenefit = '₹1,00,000',
    message = '',
    formType = 'consultation',
  } = data;

  const isAP = state === 'AP' || state?.toLowerCase().includes('andhra');
  const regionText = location ? `${location}, ${isAP ? 'AP' : 'Telangana'}` : (isAP ? 'Andhra Pradesh' : 'Telangana');

  // Customize badge, heading & message according to formType
  let badgeText = '✓ SOLAR CONSULTATION CONFIRMED';
  let headingText = 'Solar Consultation Confirmed!';
  let introMessage = `Thank you for choosing <strong>SAM GREEN POWER SOLUTIONS PVT. LTD.</strong> We have successfully received your solar consultation request for <strong>${solarNeed}</strong> in <strong>${regionText}</strong>.`;

  if (formType === 'promo') {
    badgeText = '✓ PROMO OFFER CLAIM REGISTERED';
    headingText = 'Solar Offer Benefit Locked In!';
    introMessage = `Thank you for claiming our exclusive Limited Period Solar Offer! Your <strong>${totalBenefit}</strong> combined benefit claim for <strong>${solarNeed}</strong> in <strong>${regionText}</strong> has been successfully registered.`;
  } else if (formType === 'contact') {
    badgeText = '✓ INQUIRY RECEIVED';
    headingText = 'Feasibility Assessment Received!';
    introMessage = `Thank you for reaching out to <strong>SAM GREEN POWER SOLUTIONS PVT. LTD.</strong> We have received your feasibility assessment request regarding <strong>${solarNeed}</strong>.`;
  }

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Solar Consultation Confirmed — SAM GREEN POWER SOLUTIONS PVT. LTD.</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f2; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #101A13; -webkit-font-smoothing: antialiased;">
  
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f1f5f2; padding: 24px 12px;">
    <tr>
      <td align="center">
        
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(6, 59, 24, 0.08); border: 1px solid #e2ebe4;">
          
          <!-- Top Accent -->
          <tr>
            <td style="height: 6px; background: linear-gradient(90deg, #55B51F 0%, #F5A000 50%, #063B18 100%);"></td>
          </tr>

          <!-- Header -->
          <tr>
            <td style="background-color: #063B18; padding: 32px 32px 28px 32px; text-align: center; color: #ffffff;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin-bottom: 12px;">
                <tr>
                  <td style="background-color: rgba(85, 181, 31, 0.18); border: 1px solid rgba(85, 181, 31, 0.4); border-radius: 999px; padding: 4px 14px;">
                    <span style="color: #55B51F; font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;">
                      ${badgeText}
                    </span>
                  </td>
                </tr>
              </table>

              <h1 style="margin: 0 0 6px 0; font-size: 24px; font-weight: 900; color: #ffffff;">
                ${headingText}
              </h1>
              <p style="margin: 0; font-size: 12px; color: #55B51F; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;">
                SAM GREEN POWER SOLUTIONS PVT. LTD. • Clean Energy. Better Future.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding: 28px 32px 24px 32px;">
              <p style="font-size: 15px; color: #063B18; font-weight: 700; margin: 0 0 12px 0;">
                Dear ${name},
              </p>
              <p style="font-size: 14px; color: #475569; line-height: 1.6; margin: 0 0 20px 0;">
                ${introMessage}
              </p>

              <!-- Highlight Benefit Box -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(135deg, #063B18 0%, #0d4a23 100%); border-radius: 14px; padding: 20px; color: #ffffff; margin-bottom: 24px;">
                <tr>
                  <td>
                    <div style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: #55B51F; letter-spacing: 1px; margin-bottom: 4px;">
                      Direct Savings Guarantee
                    </div>
                    <div style="font-size: 24px; font-weight: 900; color: #ffffff; margin-bottom: 6px;">
                      ₹78,000 Central Subsidy + ₹22,000 SAM Discount
                    </div>
                    <div style="font-size: 12px; color: #cbd5e1; line-height: 1.5;">
                      Total <strong>₹1,00,000</strong> direct benefit deducted from turnkey installation costs.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- What Happens Next -->
              <h2 style="font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #063B18; margin: 0 0 14px 0;">
                🚀 What Our Team Will Do Next
              </h2>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 24px;">
                <tr>
                  <td valign="top" width="36" style="padding-bottom: 12px;">
                    <div style="width: 28px; height: 28px; border-radius: 8px; background-color: #55B51F; color: #ffffff; font-weight: 900; font-size: 13px; text-align: center; line-height: 28px;">1</div>
                  </td>
                  <td style="padding-bottom: 12px; padding-left: 10px;">
                    <strong style="color: #063B18; font-size: 13px;">Dedicated Engineer Callback within 24 Hours</strong>
                    <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                      Our regional engineer will call you at <strong>${mobile || 'your phone number'}</strong> to discuss your roof space and DISCOM net-metering approvals.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td valign="top" width="36" style="padding-bottom: 12px;">
                    <div style="width: 28px; height: 28px; border-radius: 8px; background-color: #063B18; color: #ffffff; font-weight: 900; font-size: 13px; text-align: center; line-height: 28px;">2</div>
                  </td>
                  <td style="padding-bottom: 12px; padding-left: 10px;">
                    <strong style="color: #063B18; font-size: 13px;">Zero-Cost Shadow Analysis & Sizing</strong>
                    <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                      We provide a complimentary 3D satellite / physical survey showing your exact kilowatt capacity and 30-year ROI.
                    </div>
                  </td>
                </tr>
                <tr>
                  <td valign="top" width="36">
                    <div style="width: 28px; height: 28px; border-radius: 8px; background-color: #F5A000; color: #ffffff; font-weight: 900; font-size: 13px; text-align: center; line-height: 28px;">3</div>
                  </td>
                  <td style="padding-left: 10px;">
                    <strong style="color: #063B18; font-size: 13px;">Turnkey Subsidy Disbursement</strong>
                    <div style="font-size: 12px; color: #64748b; margin-top: 2px;">
                      We manage all portal filings so your ₹78,000 PM Surya Ghar subsidy is credited directly to your bank account.
                    </div>
                  </td>
                </tr>
              </table>

              <!-- Help & Contact CTA -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f7faf5; border: 1px solid #cce5d2; border-radius: 12px; padding: 16px 20px; text-align: center;">
                <tr>
                  <td>
                    <div style="font-size: 12px; font-weight: 700; color: #063B18; margin-bottom: 8px;">
                      Need immediate assistance or have urgent rooftop questions?
                    </div>
                    <a href="tel:+917013204499" style="display: inline-block; background-color: #55B51F; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 9px 20px; border-radius: 999px; margin-right: 6px;">
                      📞 Call +91 7013204499
                    </a>
                    <a href="https://wa.me/message/EOIRUNXSVLOMC1" style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; font-size: 12px; font-weight: 800; padding: 9px 20px; border-radius: 999px;">
                      💬 WhatsApp Us
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #063B18; padding: 22px 32px; color: #cbd5e1; font-size: 11px; text-align: center;">
              <div style="font-weight: 800; color: #ffffff; margin-bottom: 4px;">
                SAM GREEN POWER SOLUTIONS PRIVATE LIMITED
              </div>
              <div style="margin-bottom: 6px;">
                D No 2-5-127, Ryathu Bazar, NTR Dist, Andhra Pradesh, India - 521456
              </div>
              <div style="color: #55B51F; font-weight: 700;">
                Clean Energy. Better Future.
              </div>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
  `.trim();
}
