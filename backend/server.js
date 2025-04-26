const express = require('express');
const cors = require('cors');  // <-- ADD this
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

app.use(cors()); // <-- ADD this line

app.use(express.json());

connectDB();

app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
