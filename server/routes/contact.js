import express from 'express';

const router = express.Router();

// Email regex pattern for basic RFC 5322 validation
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Simple in-memory message store for demonstration & inquiries logging
const messages = [];

router.post('/', (req, res) => {
  try {
    const { name, email, message, subject } = req.body;

    // Validate name
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name.'
      });
    }

    if (name.trim().length > 100) {
      return res.status(400).json({
        success: false,
        error: 'Name must be under 100 characters.'
      });
    }

    // Validate email
    if (!email || typeof email !== 'string' || !EMAIL_REGEX.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.'
      });
    }

    // Validate message
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a message.'
      });
    }

    if (message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        error: 'Message should be at least 5 characters long.'
      });
    }

    if (message.trim().length > 3000) {
      return res.status(400).json({
        success: false,
        error: 'Message cannot exceed 3000 characters.'
      });
    }

    // Sanitize input
    const sanitizedEntry = {
      id: Date.now().toString(),
      name: name.trim().replace(/[<>]/g, ''),
      email: email.trim().toLowerCase(),
      subject: (subject || 'Portfolio Inquiry').trim().replace(/[<>]/g, ''),
      message: message.trim().replace(/[<>]/g, ''),
      receivedAt: new Date().toISOString()
    };

    messages.push(sanitizedEntry);
    console.log(`[Contact API] New message received from ${sanitizedEntry.name} (${sanitizedEntry.email}):`, sanitizedEntry.message.substring(0, 60) + '...');

    return res.status(200).json({
      success: true,
      message: 'Thank you! Your message has been received. Sravani will connect with you shortly.'
    });
  } catch (error) {
    console.error('[Contact API] Error processing message:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred. Please try again later or email sravanig905@gmail.com directly.'
    });
  }
});

// Health / status endpoint for contact route
router.get('/', (req, res) => {
  res.json({
    status: 'online',
    endpoint: '/api/contact',
    method: 'POST',
    fields: ['name', 'email', 'message', 'subject']
  });
});

export default router;
