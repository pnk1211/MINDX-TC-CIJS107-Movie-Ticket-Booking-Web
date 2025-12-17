const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const connectDB = async () => {
    try {
        let pool = await sql.connect(config);
        console.log("Database connected successfully");
        return pool;
    } catch (err) {
        console.log("Database connection failed", err);
    }
};

module.exports = { sql, connectDB };