const { Schema, model } = require("mongoose");

const useSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    familyName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetToken: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", useSchema);
module.exports = User;
