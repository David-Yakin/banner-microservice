import { Schema, model } from "mongoose";

const ImageSchema = new Schema({
  url: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  alt: {
    type: String,
    minLength: 2,
    maxLength: 256,
    trim: true,
    lowercase: true,
    required: true,
  },
});

const BannerSchema = new Schema({
  image: { type: ImageSchema, required: true },
  text: {
    type: String,
    required: true,
    minLength: 6,
    trim: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Banner = model("banner", BannerSchema);

export default Banner;
