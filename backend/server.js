const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');  // Import the post routes
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api', authRoutes);
app.use('/api/posts', postRoutes);  // Use the post routes here

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
