const express = require('express')
const router = express.Router()
const controller = require('../controllers/order')


router.get('/', controller.getAll)
router.get('/', controller.create)

module.exports = router
