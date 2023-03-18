const mongoose = require('mongoose');

const Advertisements = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        description: {
            type: String
        },
        discount: {
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

module.exports = mongoose.model('Advertisements', Advertisements);