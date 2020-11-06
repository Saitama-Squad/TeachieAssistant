const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});
var userProfile;
const GOOGLE_CLIENT_ID =
  "393612896443-tslk46hcp9sn55f1k63ps9cbrkl6i8ic.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "VuqxVKSDJwjKTSHpl0m_k32c";
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      userProfile = profile;
      console.log(profile);
      return done(null, userProfile);
    }
  )
);
