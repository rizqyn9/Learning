const express = require('express')
const router = express.Router()

const apiController = require('../controller/api')

router.get('/api', apiController.get_API)


module.exports = router