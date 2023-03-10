const express = require('express')
const router = express.Router()
const { registrarUser, loginUser, dataUser } = require('../controller/userAutosController')
const { protect } = require('../middleware/authMiddleware')


router.post('/', registrarUser)
router.post('/login', loginUser)
router.get('/data', protect, dataUser)


module.exports = router