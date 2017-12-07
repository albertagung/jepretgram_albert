const Share = require('../models/shareModel.js')

// Find all photos
let findAll = function (req, res) {
  Share.find()
  .populate('user')
  .populate('likes')
  .exec()
  .then(function (dataShare) {
    res.status(200).send(dataShare)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Find photo by id
let findPhotoById = function (req, res) {
  Share.findOne(
    {
      _id: req.params.idShare
    }
  )
  .populate('user')
  .populate('likes')
  .exec()
  .then(function (dataShare) {
    res.status(200).send(dataShare)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Add photo
let addNewShare = function (req, res) {
  let newShare = Share(
    {
      title: req.body.title,
      content: req.body.content,
      user: req.body.user,
      likeCount: 0,
      createdAt: new Date,
      updatedAt: new Date
    }
  )
  newShare.save().then(function (dataShare) {
    res.status(200).send(dataShare)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Update photo
let updateShare = function (req, res) {
  Share.findOneAndUpdate(
    {
      _id: req.params.idShare
    },
    {
      title: req.body.title,
      content: req.body.content,
      updatedAt: new Date
    }
  ).then(function (dataShare) {
    res.status(200).send(dataShare)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Delete photo
let removeShare = function (req, res) {
  Share.findOneAndRemove(
    {
      _id: req.params.idPhoto
    }
  ).then(function (dataShare) {
    res.status(200).send(dataShare)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

module.exports = {
  findAll,
  findPhotoById,
  addNewShare,
  updateShare,
  removeShare
}
