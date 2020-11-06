const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserInfo = new Schema({
  name: String,
  timeOfJoining: String,
  googleId: String,
  lastVisit: String,
});
mongoose.model("users", UserInfo);
