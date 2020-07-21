const Airports = require("../models/airports.model");

exports.getAirportList = async (req, res) => {
  try {
    let result = await Airports.getAirportList();

    res.send(result);
  } catch (e) {
    console.log(e);
  }
};
