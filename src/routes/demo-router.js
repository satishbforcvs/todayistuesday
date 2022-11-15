const express = require('express')

const router = express.Router()

const demoController = require('../controllers/demo-controller')

router.route('/').get(demoController.hello)

module.exports = router
