import dotenv from "dotenv";
import https from "https";
import fs from "fs";
import express from "express";
import path from "path";

import auth from "./api/auth";
import profile from "./api/profile";

dotenv.config();

const app = express();
const isDev = app.get("env") === "development";

// Define the static files directory
app.use("/dist", express.static(path.join(__dirname, "dist")));

// Define the views handling
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


// Endpoints
auth(app);
profile(app);


// Main page renderer
app.get("/", (req, res) => {
  const state = {};
  if(req.isAuthenticated()) {
    state.auth = {
      user: {
        id: req.user.id,
        name: req.user.battletag.split("#")[0],
        hash: `#${req.user.battletag.split("#")[1]}`,
        profile: null,
      },
    };
  }

  res.render("index", {
    initialState: JSON.stringify(state),
  });
});

// Logout
app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
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
const credentials = {
  key: fs.readFileSync("sslcert/server.key", "utf8"),
  cert: fs.readFileSync("sslcert/server.crt", "utf8"),
};
https.createServer(credentials, app).listen(3000, () => {
  console.log("Overwatch LFG listening in on port 3000.");
});
