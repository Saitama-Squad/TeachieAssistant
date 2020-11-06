const passport = require("passport");

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
      res.redirect("http://localhost:3000");
    }
  );
  app.get("/api/logout", (req, res) => {
    req.logout();
    console.log("Logged out");
    res.redirect("http://localhost:3000");
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });

  app.get("/success", (req, res) => res.send("success"));
  app.get("/error", (req, res) => res.send("error logging in"));
};
