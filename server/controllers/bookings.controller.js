const Booking = require("../models/booking.model");

const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createBooking = async (req, res) => {
  const { name, lastName, email, bookingDate } = req.body;
  const emailRegexp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const booking = new Booking({
    name,
    lastName,
    email,
    bookingDate,
  });

  try {
    if (emailRegexp.test(email)) {
      const newBooking = await booking.save();
      res.status(201).json(newBooking);
    } else {
      return res.status(404).json({ message: "Please enter a valid email" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllBookings, createBooking };
