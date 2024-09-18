const express = require('express');
const cors = require('cors');
const app = express();

const corsOptions = {
  origin: 'https://MadlyAbi.github.io',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

// Define your routes here
app.get('/api/data', (req, res) => {
  res.json({ msg: 'This is CORS-enabled for the /api/data route.' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
