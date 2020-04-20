const express = require('express');

const getAll = require('./getAll');

const router = express.Router();

router
  .route('/')
  .get(getAll)

module.exports = router;