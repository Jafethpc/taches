const fs = require("fs");
const path = require("path");
const pug = require("pug");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// BODY PARSER
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// VIEW ENGINE
app.set("view engine", "pug");
app.set("views", "views");

app.get("/", (req, res) => {
  // IMPORT JSON
  const data = fs.readFileSync(__dirname + "/data.json");

  // PARSED JSON
  const parsedData = JSON.parse(data);

  res.render("index", { tasks: parsedData });
});

// ADD ROUTE
app.post("/add", (req, res) => {
  // IMPORT JSON
  const data = fs.readFileSync(__dirname + "/data.json");

  // PARSED JSON
  const parsedData = JSON.parse(data);

  console.log(req.body.task);
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
app.post("/edit/:id", (req, res) => {
  const data = fs.readFileSync(__dirname + "/data.json");

  const parsedData = JSON.parse(data);
  console.log(req.params.id);
});

// SAVE ROUTE

// DELETE ROUTE

app.listen(3000);
