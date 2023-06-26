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
    // update user by id
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, { new: true, runValidators: true });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // delete user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.id });
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            // remove user's associated thoughts from User.thoughts
            await Thought.deleteMany({ username: user.username });
            res.json({ message: 'User and associated thoughts deleted!' });
        } catch (err) {
            res.status(400).json(err);
        }
    },
    // add friend
    async addFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );
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
    // remove friend
    async removeFriend(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.id },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );
            if (!user) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            res.json(user);
        }
        catch (err) {
            res.status(400).json(err);
        }
    }
};


