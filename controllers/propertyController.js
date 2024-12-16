const Property = require('../models/Property');

// create Property
exports.addProperty = async (req, res) => {
    const { title, description, price, address, contact_number, maxGuests, bedrooms } = req.body;

    try {
        const newProperty = await Property.create({ title, description, price, owner: req.user.id, address, contact_number, maxGuests, bedrooms });
        res.status(201).json(newProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// get Property
exports.getProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.json(properties);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// update Property
exports.updateProperty = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedProperty = await Property.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedProperty) return res.status(404).json({ message: 'Property not found' });
        res.json(updatedProperty);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Property
exports.deleteProperty = async (req, res) => {
    const { id } = req.params;

    try {
        await Property.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};