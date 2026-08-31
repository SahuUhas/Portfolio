const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "HTML")));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML', 'sahu.html'));
});
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Visit: http://localhost:${PORT}`);
    console.log(`✨ SAHU Portfolio Live!`);
});
