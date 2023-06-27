const router = require('express').Router();
const {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController.js');

