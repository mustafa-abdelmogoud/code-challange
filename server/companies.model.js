const mongoose = require("mongoose");

const CompaniesSchema = new mongoose.Schema({
  name: {
    type: String
  },
  logo: {
    type: String
  },
  specialty: {
    type: String
  },
  city: {
    type: String
  }
});

module.exports = mongoose.model("company", CompaniesSchema);
