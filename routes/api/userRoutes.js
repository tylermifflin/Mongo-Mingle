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

// /api/users
router.route('/').get(getAllUsers).post(createUser);

// /api/users/:id
router.route('/:id').get(getOneUser).put(updateUser).delete(deleteUser);

// /api/users/:id/friends
router.route('/:id/friends').post(addFriend).delete(removeFriend);

module.exports = router;

