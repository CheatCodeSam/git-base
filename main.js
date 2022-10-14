import express from "express";
import { create } from "express-handlebars";

const app = express();
const hbs = create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res, next) => {
  const planets = ["Earth", "Mercury", "Sun"];
  res.render("planets", { planets: planets });
});

app.listen(3000, "localhost", () =>
  console.log("running on http://localhost:3000")
);
