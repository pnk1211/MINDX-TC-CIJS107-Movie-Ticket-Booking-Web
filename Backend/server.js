const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./src/config/routes/auth.routes');
const { connectDB } = require('./src/config/config/dbConfig');

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
