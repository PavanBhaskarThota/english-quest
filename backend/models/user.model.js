const mongoose = require("mongoose");

let userSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ["creater", "viewer"] },
  },
  { timestamps: true },
  { versionkey: false }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
