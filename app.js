const express = require('express');
const path = require('path');
const app = express();
const port = 4442;
console.log('hello');
// Set the public folder as the static folder
app.use(express.static(path.join(__dirname, 'public')));

// Route to render index.html (base page)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to render aboutus.html
app.get('/aboutus', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Route to render dashboard.html
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// Route to render login.html
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});
app.get('/Msg', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Msg.html'));
});


// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
