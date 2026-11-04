/**
 * SAM GREEN POWER SOLUTIONS PVT. LTD.
 * Unified Enquiry API Client
 */

export async function submitEnquiry(enquiryData) {
  try {
    const response = await fetch('/api/send-enquiry', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(enquiryData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Server responded with status ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ Enquiry API Response:', data);
    return { success: true, data };
  } catch (error) {
    console.warn('Enquiry submission network note:', error.message);
    // Return gracefully so the UI can proceed with the success modal/confetti experience
    return { success: false, error: error.message };
  }
}

