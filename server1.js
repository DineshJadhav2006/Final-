const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { exec } = require('child_process');
const weatherRoutes = require('./routes');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/weather', weatherRoutes);
app.use(express.static('.'));

// Home route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  const url = `http://localhost:${PORT}`;
  console.log(`Opening browser at: ${url}`);
  exec(`start ${url}`);
});
