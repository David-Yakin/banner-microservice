import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    minLength: 5,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 7,
    maxLength: 256,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 256,
    trim: true,
    lowercase: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

const User = model("user", UserSchema);

export default User;
