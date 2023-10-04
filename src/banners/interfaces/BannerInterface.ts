import { Types } from "mongoose";

interface BannerInterface {
  _id: Types.ObjectId;
  image: {
    url: string;
    alt: string;
  };
  text: string;
  createdAt: Date;
  author: Types.ObjectId;
}

export type BannerFromClientInterface = Omit<
  BannerInterface,
  "_id" | "createdAt" | "author"
>;

export type BannerNormalized = Omit<BannerInterface, "_id" | "createdAt">;

export default BannerInterface;
