const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// BODY PARSER
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// ADD ROUTE
app.post("/add", (req, res) => {
  // IMPORT JSON
  const data = fs.readFileSync(__dirname + "/data.json");

  // PARSED JSON
  const parsedData = JSON.parse(data);

  // PUSHING DATA TO JSON FILE
  parsedData.push({
    task: `${req.body.task}`,
    id: Date.now(),
  });

  // STRINGIFY JSON
  const stringifiedData = JSON.stringify(parsedData);

  // SENDING DATA BACK TO JSON FILE
  fs.writeFileSync("data.json", stringifiedData, (err) => {
    if (err) throw err;
    console.log("new data added");
  });

  // REDIRECTING
  res.redirect("/");
});

// EDIT ROUTE

// SAVE ROUTE

// DELETE ROUTE

app.listen(3000);
