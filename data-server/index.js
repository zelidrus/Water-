const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

handler = require("./routes");
// *******connecting to the database********
mongoose
  .connect(
    "mongodb+srv://Amit:amit12199@cluster0.hxpdk.mongodb.net/water?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("[INFO] Connected to database."))
  .catch((err) => console.log(err));
// *******using cors to allow cross origin reference service*********
app.use(cors());
app.use(express.json());

app.use("/water", handler);

const PORT = 3000;

app.listen(PORT, console.log(`[INFO] Listening at ${PORT}`));
