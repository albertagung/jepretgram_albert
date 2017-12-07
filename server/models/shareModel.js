const mongoose = require('mongoose')
const Schema = mongoose.Schema

let shareSchema = new Schema(
  {
    title: String,
    content: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    },
    likes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    likeCount: Number
  }
)

let Share = mongoose.model('Share', shareSchema)
module.exports = Share
