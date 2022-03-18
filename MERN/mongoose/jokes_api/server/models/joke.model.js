const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "must have a setup"],
        minLength: [10, "longer setup please"]
    },
    punchline: {
        type: String,
        required: [true, "need a punchline"],
        minLength: [3, "longer punchline please"]
    },

},
    { timestamps: true }
);



const Joke = mongoose.model('Joke', JokeSchema);
module.exports = Joke;