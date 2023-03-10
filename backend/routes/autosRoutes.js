const express = require('express')
const router = express.Router()
const { getAuto, setAuto, updateAuto, deleteAuto} = require('../controller/autoController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getAuto).post(protect, setAuto)

router.route('/:id').put(protect, updateAuto).delete(protect, deleteAuto)


module.exports = router