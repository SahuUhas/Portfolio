const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

// Serve only the portfolio files (not package.json, index.js, .git, etc.)
const publicFiles = ['sahu.html', 'sahu.css', 'sahu.js'];
publicFiles.forEach(file => {
    app.get('/' + file, (req, res) => res.sendFile(path.join(__dirname, file)));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'sahu.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Visit: http://localhost:${PORT}`);
    console.log(`✨ SAHU Portfolio Live!`);
});
