const { Schema, model } = require('mongoose');


const userSchema = new Schema(
    {
    username: {
    type: String,
    unique: true,
    required: true,
    trim: true
    },
    email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
    },
    thoughts: [
    {
    type: Schema.Types.ObjectId,
    ref: 'Thought'
    }
    ],
    friends: [
    {
    type: Schema.Types.ObjectId,
    ref: 'User'
    }
    ]
    },
    { 
    toJSON: {
    virtuals: true,
    getters: true
    },
    id: false
    }
    );

    // get total count of friends on retrieval
    userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
    }
    );
