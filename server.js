// server/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { analyzeContent } = require('./utils');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/analyze', (req, res) => {
    const { content } = req.body;
    const analysisResults = analyzeContent(content);
    res.json(analysisResults);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
