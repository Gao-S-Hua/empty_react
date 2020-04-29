const express = require('express');

const router = express.Router();

// Handle GET:
router.get('/', (req, res) => {
  res.json({ teamName: 'Win-Win' });
});

module.exports = router;
