import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sendEnquiryEmail } from './server/emailService.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API Endpoint for Enquiry Emails
app.post('/api/send-enquiry', async (req, res) => {
  try {
    const data = req.body;
    const result = await sendEnquiryEmail(data);
    res.status(200).json(result);
  } catch (error) {
    console.error('Email error in server:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', company: 'SAM GREEN POWER SOLUTIONS PVT. LTD.' });
});

// Serve frontend static build if available
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Catch-all route to serve index.html for SPA client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`⚡ SAM GREEN POWER server running on http://localhost:${PORT}`);
});

