const passport = require("passport");
const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const nightmare = Nightmare({ show: true });

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

  app.get("/home/results", (req, res) => {
    let term = req.query[0];
    console.log(req.query);
    nightmare
      .goto("https://duckduckgo.com")
      .type("#search_form_input_homepage", "mern udemy")
      .click("#search_button_homepage")
      .wait("#r1-0 a.result__a")
      .click("#r1-0 a.result__a")
      .wait(".course-card--image-wrapper--Sxd90 img")
      .click(".course-card--image-wrapper--Sxd90 img")
      .click('button[data-purpose="expand-toggle"]')
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
      $("span.section--item-title--2k1DQ").each((i, elem) => {
        data.push($(elem).text());
      });
      return data;
    };
  });
};
