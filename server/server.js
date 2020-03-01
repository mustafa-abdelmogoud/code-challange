const Express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Company = require("./companies.model");
require("dotenv").config();

async function start() {
  const server = new Express();
  server.use(cors());
  server.use(bodyParser.json());
  server.use((err, req, res, next) => {
    res.status(500).send("Server Error");
  });

  server.get("/companies", (req, res, next) =>
    Company.find({}, (err, companies) => {
      if (!err) res.send(companies);
      next(err);
    })
  );

  server.post("/companies", async (req, res, next) => {
    const { name, logo, city, specialty } = req.body;
    const company = new Company({ name, logo, specialty, city });
    company.save(company, (err, company) => {
      if (!err) res.send(company);
      next(err);
    });
  });

  await mongoose.connect(process.env.DB_URL);

  server.listen(
    process.env.PORT,
    console.log(`Server is running on ${process.env.PORT}`)
  );
}

start();
