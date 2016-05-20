import express from "express";
import path from "path";

const app = express();
const isDev = app.get("env") === "development";

// Define the static files directory
app.use("/dist", express.static(path.join(__dirname, "dist")));

// Define the views handling
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Main page renderer
app.get("/", (req, res) => {
  res.render("index", {

  });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render("error", {
    message: err.message,
    error: isDev ? err : {},
  });
});

// 404 handler
app.use((req, res, next) => {
  res.status(404);
  res.render("404");
});

// Fire it up
app.listen(3000, function() {
  console.log("Overwatch LFG listening in on port 3000.");
});
