const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String
        },
        price: {
            type: Number
        },
        brand: {
            type: String
        },
        category: {
            type: String
        },
        image: {
            type: String
        },
        status: {
            type: Boolean
        },
        user_id: {
            type: String
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model('Products', ProductsSchema);