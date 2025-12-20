const express = require('express');
const bcrypt = require('bcrypt');
const { sql } = require('../config/dbConfig');

const router = express.Router();

/* REGISTER */
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hash = await bcrypt.hash(password, 10);

    await sql.query`
      INSERT INTO Users (username, email, password_hash)
      VALUES (${username}, ${email}, ${hash})
    `;

    res.json({ message: 'Đăng ký thành công' });
  } catch (err) {
    res.status(400).json({ error: 'Email hoặc username đã tồn tại' });
  }
});

/* LOGIN */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const result = await sql.query`
    SELECT * FROM Users WHERE email = ${email}
  `;

  if (result.recordset.length === 0) {
    return res.status(400).json({ error: 'Sai email' });
  }

  const user = result.recordset[0];
  const ok = await bcrypt.compare(password, user.password_hash);

  if (!ok) {
    return res.status(400).json({ error: 'Sai mật khẩu' });
  }

  res.json({
    message: 'Đăng nhập thành công',
    user: {
      id: user.user_id,
      username: user.username,
      email: user.email,
    },
  });
});

module.exports = router;
