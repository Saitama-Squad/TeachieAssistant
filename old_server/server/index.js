const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./models/UserInfo");
require("./Services/PassportOauth");
const keys = require("./config/keys");

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

app.use(
  cors({
    origin: "http://localhost:3000",
    // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);
app.use(morgan("dev"));
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
require("./Routes/authRoutes.js")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("App listening on port " + port));
