const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "must have a title for product."],
        minLength: [2, "Title must be longer than 2 characters"]
    },
    price: {
        type: Number,
        required: [true, "A Price is required."]
    },
    description: {
        type: String,
        required: [true, "Description is needed!"],
        minLength: [3, "Please elaborate"]
    },

},
    { timestamps: true }
);


const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;