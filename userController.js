const { User, Thought } = require('../models');

module.exports = {
    // get all users
    async getAllUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // get one user by id
    async getOneUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.id })
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .select('-__v');
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },
    // create a new user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },
