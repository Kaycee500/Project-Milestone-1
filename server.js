// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Route to handle form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Form submission received: Name - ${name}, Email - ${email}, Message - ${message}`);
    
    res.status(200).send('Form submission received. Thank you for contacting me');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
