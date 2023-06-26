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
    // get one thought by id
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.id })
            .select('-__v');
            if (!thought) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            res.json(thought);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },