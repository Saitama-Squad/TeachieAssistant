const passport = require("passport");

module.exports = (app) => {
  app.get("/", function (req, res) {
    res.render("pages/auth");
  });
  app.get("/success", (req, res) => res.send(userProfile));
  app.get("/error", (req, res) => res.send("error logging in"));

  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/error" }),
    function (req, res) {
      res.redirect("/success");
    }
  );

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
