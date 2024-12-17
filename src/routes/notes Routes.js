const express = require('express');
const router = express.Router();

// Example route
router.get('/notes', (req, res) => {
  res.send('Notes list');
});

module.exports = router;
