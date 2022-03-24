const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "must have a name for author."],
        minLength: [3, "name must be longer than 2 characters"]
    },


},
    { timestamps: true }
);


const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;