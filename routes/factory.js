const path = require('path')

const express = require('express')

const factoryController = require("../controllers/factory.js")

const router = express.Router();

router.post('/add-factory', factoryController.postAddFactory);

router.get('/get-factory', factoryController.getFactory);

router.delete('/remove-factory', factoryController.removeFactory);

module.exports = router;
