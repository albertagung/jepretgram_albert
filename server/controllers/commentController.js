const Comment = require('../models/commentModel.js')

// Find all comment
let findAll = function (req, res) {
  Comment.find()
  .populate('shareId')
  .populate('userId')
  .exec()
  .then(function (dataComment) {
    res.status(200).send(dataComment)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Find comment by share id
let findByShareId = function (req, res) {
  Comment.find(
    {
      shareId: req.params.shareId
    }
  )
  .populate('shareId')
  .populate('userId')
  .exec()
  .then(function (dataComment) {
    res.status(200).send(dataComment)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Find comment by user id
let findByUserId = function (req, res) {
  Comment.find(
    {
      userId: req.params.userId
    }
  )
  .populate('shareId')
  .populate('userId')
  .exec()
  .then(function (dataComment) {
    res.status(200).send(dataComment)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Find comment by id
let findByCommentId = function (req, res) {
  Comment.findOne(
    {
      _id: req.params.idComment
    }
  )
  .populate('shareId')
  .populate('userId')
  .exec()
  .then(function (dataComment) {
    res.status(200).send(dataComment)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Insert new comment
let addComment = function (req, res) {
  let newComment = Comment(
    {
      comment: req.body.comment,
      shareId: req.body.shareId,
      userId: req.body.userId,
      createdAt: new Date,
      updatedAt: new Date
    }
  )
  newComment.save().then(function (dataComment) {
    res.status(200).send(dataComment)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Update comment
let updateComment = function (req, res) {
  Comment.findOneAndUpdate(
    {
      _id: req.params.idComment
    },
    {
      comment: req.body.comment
    }
  ).then(function (dataComment) {
    res.status(200).send(dataComment)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Delete comment
let removeComment = function (req, res) {
  Comment.findOneAndRemove(
    {
      _id: req.params.idComment
    }
  ).then(function (dataComment) {
    res.status(200).send(dataComment)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

module.exports = {
  findAll,
  findByShareId,
  findByUserId,
  findByCommentId,
  addComment,
  updateComment,
  removeComment
}
