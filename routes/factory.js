const path = require('path')

const express = require('express')

const factoryController = require("../controllers/factory.js")

const router = express.Router();

router.post('/add-factory', factoryController.postAddFactory);

module.exports = router;
