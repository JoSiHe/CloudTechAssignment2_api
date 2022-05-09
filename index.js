const express = require("express");
const clientRoute = require("./routes/clientRoute");
const connectDB = require("./connectDB");
var cors = require("cors");

const port = process.env.PORT || 3000;
var app = express();

app.listen(port, () => {
  console.log(`Express running at port: ${port}`);
});

//Enable all cors requests
app.use(cors());

// Establising connection to MongoDB
connectDB();

app.use("/client", clientRoute);