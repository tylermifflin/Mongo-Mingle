const { User, Thought } = require('../models');

module.exports = {
    // get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },