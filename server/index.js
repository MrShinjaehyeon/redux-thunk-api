const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const port = 3001;
const app = express();

app.use(cors());
app.use(express.json());
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Server running" });
});

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Router
app.use("/member", require("./routes/member"));
// app.use("/member/:id", require("./routes/member"));
