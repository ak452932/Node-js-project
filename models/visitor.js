const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const visiotSchema = new Schema({

    name: String,
    count: Number
})

module.exports = mongoose.model('Visitor', visiotSchema);