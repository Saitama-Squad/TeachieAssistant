const passport = require("passport");
const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const mongoose = require("mongoose");
const keys = require("../config/keys");
var i = 10;
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
module.exports = (app) => {
  app.get("/", function (req, res) {
    res.render("pages/auth");
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/error" }),
    function (req, res) {
      res.redirect("http://localhost:3000/home");
    }
  );
  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log(req.query);
    console.log("Logged out");
    res.redirect("http://localhost:3000");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/success", (req, res) => res.send("success"));
  app.get("/error", (req, res) => res.send("error logging in"));

  app.put("/addgoals/:word/:id", async (req, res) => {
    const User = mongoose.model("users");
    console.log(req.params.id + req.params.word);
    const existingUser = await User.findOne({ googleId: req.params.id });
    if (existingUser) {
      let n = Object.keys(existingUser.goals).length + 2;
      console.log(n);
      existingUser.goals = { ...existingUser.goals, n: req.params.word };
      existingUser.save();
    }
    console.log(existingUser);
    res.send("success");
  });

  app.get("/results/:word", (req, res) => {
    const nightmare = Nightmare({ show: true });
    let term = req.params.word;
    term = term.replace(/\s/g, "-");
    console.log(term);
    console.log("web scraping");

    // .goto(`https://www.w3schools.com/${term}`)
    nightmare
      .goto("https://duckduckgo.com")
      .type("#search_form_input_homepage", `${term} site:w3schools.com`)
      .click("#search_button_homepage")
      .wait("#r1-0 a.result__a")
      .click("#r1-0 a.result__a")
      .wait("body")
      .wait(2000)
      .evaluate(() => document.querySelector("body").innerHTML)
      .end()
      .then((response) => {
        console.log(getData(response));
        res.send(data);
      })
      .catch((err) => {
        res.writeHead(200);
        console.log(err);
      });

    let getData = (html) => {
      data = [];
      const $ = cheerio.load(html);
      $("div#leftmenuinnerinner > a").each((i, elem) => {
        data.push($(elem).text());
      });
      return data;
    };
  });
};
