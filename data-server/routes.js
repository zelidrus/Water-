const route = require("express").Router();

const Water = require("./model");

route.get("/", async (req, res) => {
  try {
    const found = await Water.find();
    res.json(found);
  } catch (err) {
    console.log(err);
  }
});

route.post("/", async (req, res) => {
  const item = new Water({
    date: req.body.date,
    name: req.body.name,
    liters: req.body.liters,
  });
  try {
    const result = await item.save();
    res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
