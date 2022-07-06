const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const bodyParser = require("body-parser");
var timeout = require('connect-timeout')
require("./models/UserInfo");
require("./Services/PassportOauth");
require('dotenv').config()
const path = require("path");

mongoose.connect(process.env.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const publicPath = path.join(__dirname,'..', 'client', 'build');
app.use(express.static(publicPath));
app.use(timeout('120s'))
app.use(morgan("dev"));
app.use(session({resave: false, saveUninitialized: true, secret: "SECRET",}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
require("./Routes/authRoutes.js")(app);
app.get('*', (req, res) => {res.sendFile(path.join(publicPath, 'index.html'))});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("App listening on port " + port));
