const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController.js')

router.get('/', commentController.findAll)
router.get('/:shareId', commentController.findByShareId)
router.get('/:userId', commentController.findByUserId)
router.get('/:idComment', commentController.findByCommentId)
router.post('/', commentController.addComment)
router.put('/:idComment', commentController.updateComment)
router.delete('/:idComment', commentController.removeComment)

module.exports = router
