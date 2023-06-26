const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/mingleDB');

module.exports = connection;