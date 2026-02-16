const express = require('express');
const router = express.Router();


// 1. Add a new route /contact in routes/contact.js that returns the center’s contact info as JSON.
router.get('/', (req, res) => {
  res.json([
    'Art Class - Tuesday 4pm',
    'Music Class - Thursday 3pm'
  ]);
});

module.exports = router;