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
            const user = await User.findOne({ _id: req.params.id });
            res.json(user);
        }
        catch (err) {
            res.status(400).json(err);
        }
    },