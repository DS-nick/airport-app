const express = require("express");

const router = express.Router();
const airports = require("../controllers/airports.controller");
router.get("/airports", airports.getAirportList);

module.exports = router;
