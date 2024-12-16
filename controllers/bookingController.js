const Booking = require('../models/Booking');

// Create Booking
exports.createBooking = async (req, res) => {
    const { propertyId, checkInDate, checkOutDate } = req.body;

    try {
        const newBooking = await Booking.create({ property: propertyId, user: req.user.id, checkInDate, checkOutDate });
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Bookings
exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find().populate('property user');
        res.json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Booking
exports.updateBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const updatedBooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBooking) return res.status(404).json({ message: 'Booking not found' });
        res.json(updatedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete Booking
exports.deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        await Booking.findByIdAndDelete(id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
