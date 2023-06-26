const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
    // set custom id to avoid confusion with parent comment's _id field
    reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
    },
    