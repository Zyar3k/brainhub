const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  createBooking,
} = require("../controllers/bookings.controller");

router.route("/").get(getAllBookings).post(createBooking);

module.exports = router;
