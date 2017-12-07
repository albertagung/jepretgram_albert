const User = require('../models/userModel.js')

// Find all user
let findAll = function (req, res) {
  User.find().then(function (dataUser) {
    res.status(200).send(dataUser)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Find user by id
let findById = function (req, res) {
  User.findOne(
    {
      _id: req.params.idUser
    }
  ).then(function (dataUSer) {
    res.status(200).send(dataUser)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Insert new user
let addNewUser = function (req, res) {
  let newUser = User(
    {
      username: req.body.username,
      password: req.body.password
    }
  )
  newUser.save().then(function (dataUser) {
    res.status(200).send(dataUser)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Update user
let updateUser = function (req, res) {
  User.findOneAndUpdate(
    {
      _id: req.params.idUser
    },
    {
      username: req.body.username
    }
  ).then(function (dataUser) {
    res.status(200).send(dataUser)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

// Delete user
let removeUser = function (req, res) {
  User.findOneAndRemove(
    {
      _id: req.params.idUser
    }
  ).then(function (dataUser) {
    res.status(200).send(dataUser)
  }).catch(function (err) {
    res.status(500).send(err)
  })
}

module.exports = {
  findAll,
  findById,
  addNewUser,
  updateUser,
  removeUser
}
