const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();
const options = {
  nombre: "Josue",
  titulo: "Curso de Node",
};

const port = process.env.PORT;

// TODO: require(hbs)
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (_, res) => {
  res.render("home", options);
});

app.get("/generic", (_, res) => {
  res.render("generic", options);
});

app.get("/elements", (_, res) => {
  res.render("elements", options);
});

app.get("*", (_, res) => {
  res.sendFile(__dirname + "/public/old-html/404.html");
});

app.listen(port);
