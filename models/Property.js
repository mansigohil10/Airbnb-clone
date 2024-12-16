const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        country: { type: String, required: true },
        zipCode: { type: String, required: true }
    },
    contact_number: { type: String, required: true },
    maxGuests: { type: Number, required: true },
    bedrooms: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Property', propertySchema);
