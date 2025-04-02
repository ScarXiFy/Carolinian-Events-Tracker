// server.js (in backend)
const express = require('express');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const { body, validationResult } = require('express-validator');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

// Dummy users array (Replace this with MongoDB later)
const users = [];

const path = require('path');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Catch-all route to serve the React app for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

// Nodemailer setup (for sending registration emails)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

// Register Route
app.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
  body('confirmPassword').custom((value, { req }) => value === req.body.password),
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstName, lastName, email, password } = req.body;

  // Check if the user already exists
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ firstName, lastName, email, password: hashedPassword });

  // Send confirmation email
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Welcome to Carolinian Events',
    text: 'Thank you for registering with Carolinian Events!',
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    console.log('Email sent: ' + info.response);
  });

  res.status(201).send('User registered');
});

// Login Route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(400).json({ message: 'User not found' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  res.status(200).send('Logged in');
});

// Start Server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
