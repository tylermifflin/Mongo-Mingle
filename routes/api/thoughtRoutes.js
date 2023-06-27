const router = require('express').Router();
const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thoughts/:id
router.route('/:id').get(getOneThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
