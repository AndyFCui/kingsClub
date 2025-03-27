const express = require('express');
const router = express.Router();
const content = require('../data/content.json');

router.get('/', (req, res) => {
  res.render('about', { 
    content: content
  });
});

module.exports = router; 