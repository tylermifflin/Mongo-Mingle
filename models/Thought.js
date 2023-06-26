const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
    thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
    },
    createdAt: {
    type: Date,
    default: Date.now,
    // Use a getter method to format the timestamp on query
    get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
    type: String,
    required: true
    },
    // use reactionSchema to validate data for a reply
    reactions: [reactionSchema]
    },
    {
        