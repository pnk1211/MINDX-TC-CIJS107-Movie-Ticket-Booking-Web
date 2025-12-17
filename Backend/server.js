const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { connectDB } = require('./src/config/dbConfig');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});