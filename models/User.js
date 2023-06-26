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
