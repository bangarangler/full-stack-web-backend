const path = require('path')

const express = require('express')
const { check, body } = require('express-validator')

const factoryController = require("../controllers/factory.js")

const router = express.Router();

router.post('/add-factory', [
  check("lRange").matches([0-9]).withMessage("Must Enter a Number for High Range, Low Range, and Children to Generate").isAlphanumeric()
], factoryController.postAddFactory);

router.get('/get-factory', factoryController.getFactory);

router.delete('/remove-factory', factoryController.removeFactory);

router.put('/update-factory', factoryController.updateFactoryName);

module.exports = router;
