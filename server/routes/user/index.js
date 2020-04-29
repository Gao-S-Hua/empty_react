const express = require('express');

const router = express.Router();

// Handle GET:
router.get('/', (req, res) => {
  res.json({ name: 'huahua' });
});

module.exports = router;
