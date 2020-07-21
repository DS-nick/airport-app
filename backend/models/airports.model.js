const pool = require("./db");

Airports = {
  async getAirportList() {
    result = await pool.query("SELECT * FROM bookings.airports_data LiMIT 10");

    return result.rows;
  },
};

module.exports = Airports;
