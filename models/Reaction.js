const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
    // set custom id to avoid confusion with parent comment's _id field
    reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
    },
    reactionBody: {
    type: String,
    required: true,
    maxlength: 280
    },
    username: {
    type: String,
    required: true
    },
    createdAt: {
    type: Date,
    default: Date.now
    }
    },
    {
    toJSON: {
    getters: true
    }
    }
);

module.exports = reactionSchema;