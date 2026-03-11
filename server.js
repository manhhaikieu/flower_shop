const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse URL-encoded bodies for form submissions
app.use(express.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Handle register form submission
app.post('/register', (req, res) => {
    console.log('Register request received:', req.body);
    res.send('<h2>Registration successful!</h2><p><a href="/">Go back to Home</a></p>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
