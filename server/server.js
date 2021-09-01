require("dotenv").config();
/* ==== External Modules ==== */
const path = require("path");
const express = require("express");
const cors = require("cors");

/* ==== Internal Modules ==== */
const routes = require("./routes");

/* ==== Instanced Modules  ==== */
const app = express(); // create express app

/* ====  Configuration  ==== */
const PORT = process.env.PORT || 5000; // dynamically assign, 5000 if nothing chosen!

/* ====  Middleware  ==== */
//Cors
app.use(cors());
// to serve static files and to serve the react build
app.use(express.static(path.join(__dirname, "..", "build")));
app.use(express.static("public"));
// JSON parsing middleware
app.use(express.json());
//custom logger to show the url and req.body if one exists
app.use((req, res, next) => {
    console.log(req.url);
    // is there an auth header
    console.log("AUTH HEADER: ", req.headers.authorization);
    if (req.body) {
        console.log("BODY BEING SENT: ", req.body);
    }
    next();
});

/* ====  Routes & Controllers  ==== */
// All of our routes will start with "/api", we're going to route them through index.js
app.use("/api", routes);

//This is to catch anything that's trying to hit an api route that isn't made
app.all("/api/*", function (req, res, next) {
    res.send("THIS IS NOT AN API ROUTE");
});

//IS THE REACT FULL STACK MAGIC MIDDLEWARE
/*
ANY REQUEST not covered by routes express makes -- will get piped to this middleware
and this middleware's job is to handover control to react
*/
app.use((req, res, next) => {
    console.log(req.headers);
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
}); // this says: if you have a path requestingbuild, .., or index, just serve it up!

/* ====  Server Listener / Connection ==== */
// start express server on port 5000
app.listen(PORT, () => {
    console.log("server started on port 5000");
});

/* Easily update me on Heroku!

$ git add .
$ git commit -am "make it better"
$ git push heroku main

Remember, for testing: npm start runs what the package.json file says to run!
*/