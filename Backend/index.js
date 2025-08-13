const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import models
const { HoldingsModel } = require("./models/HoldingsModel");
const { PositionsModel } = require("./models/PositionsModel");
const { OrdersModel } = require("./models/OrdersModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved!");
});

// Start server and connect to DB
app.listen(PORT, async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
});
