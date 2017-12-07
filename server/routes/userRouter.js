const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController.js')

router.get('/', userController.findAll)
router.get('/:idUser', userController.findById)
router.post('/', userController.addNewUser)
router.put('/:idUser', userController.updateUser)
router.delete('/:idUser', userController.removeUser)

module.exports = router
