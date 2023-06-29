const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction.js');

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
    default: Date.now
    },
    username: {
    type: String,
    required: true
    },
    // use reactionSchema to validate data for a reply
    reactions: [reactionSchema]
    },
    { 
    toJSON: {
    virtuals: true,
    getters: true
    },
    id: false
    }
    );

    // get total count of reactions on retrieval
    thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
    }
    );

    // create the Thought model using the thoughtSchema
    const Thought = model('Thought', thoughtSchema);

    // export the Thought model
    module.exports = Thought;

