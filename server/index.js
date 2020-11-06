const express = require("express");
const app = express();
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const bodyParser = require("body-parser");
require("./services/PassportOauth");

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
app.use(bodyParser.urlencoded({ extended: false }));
// app.get("/", function (req, res) {
//   res.render("pages/auth");
// });

app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");
require("./routes/authRoutes.js")(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("App listening on port " + port));
