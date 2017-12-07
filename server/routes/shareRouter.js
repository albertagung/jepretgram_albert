const express = require('express')
const router = express.Router()
const shareController = require('../controllers/shareController.js')

router.get('/', shareController.findAll)
router.get('/:idShare', shareController.findPhotoById)
router.post('/', shareController.addNewShare)
router.put('/:idShare', shareController.updateShare)
router.delete('/:idShare', shareController.removeShare)

module.exports = router
