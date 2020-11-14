const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserInfo = new Schema({
  name: String,
  googleId: String,
  email: String,
  userImage: String,
  currentGoals: Object,
  completedGoals: Number,
  goals: Object,
});
mongoose.model("users", UserInfo);
