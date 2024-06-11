require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

const verifySignature = (req, res, next) => {
  const hubSignature = req.headers['x-hub-signature'];
  if (!hubSignature) {
    return res.status(400).send('Signature is missing');
  }

  const elements = hubSignature.split('=');
  const method = elements[0];
  const signature = elements[1];

  const hmac = crypto.createHmac(method, process.env.INSTAGRAM_APP_SECRET);
  const digest = Buffer.from(hmac.update(JSON.stringify(req.body)).digest('hex'), 'utf8');

  if (!crypto.timingSafeEqual(Buffer.from(signature), digest)) {
    return res.status(400).send('Signature is invalid');
  }

  return next();
};

app.post('/deauthorize', verifySignature, (req, res) => {
  const { user_id } = req.body;

  // Handle user data removal here
  console.log(`Deauthorizing user: ${user_id}`);
  // db.removeUser(user_id);

  res.status(200).send('User deauthorized');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
