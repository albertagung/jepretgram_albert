const mongoose = require('mongoose')
const Schema = mongoose.Schema

let commentSchema = new Schema(
  {
    comment: String,
    shareId: [{
      type: Schema.Types.ObjectId,
      ref: 'Share'
    }],
    userId: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    createdAt: {
      type: Date,
      ref: Date.now
    },
    updatedAt: {
      type: Date,
      ref: Date.now
    }
  }
)

let Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
