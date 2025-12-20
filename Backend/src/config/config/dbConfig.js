const sql = require('mssql');

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER, // localhost
  database: process.env.DB_NAME,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

const connectDB = async () => {
  try {
    await sql.connect(config);
    console.log('✅ Kết nối SQL Server thành công');
  } catch (err) {
    console.error('❌ Lỗi DB:', err);
  }
};

module.exports = { sql, connectDB };
