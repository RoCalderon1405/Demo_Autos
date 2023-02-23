const express = require('express')
const router = express.Router()
const { getAuto, setAuto, updateAuto, deleteAuto} = require('../controller/autoController')

router.route('/').get(getAuto).post(setAuto)

router.route('/:id').put(updateAuto).delete(deleteAuto)


module.exports = router