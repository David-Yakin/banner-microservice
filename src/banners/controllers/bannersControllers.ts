import { Request, Response } from "express";
import { handleError } from "../../utils/handleErrors";
import {
  getBanners,
  getBannerById,
  getBannerByProductName,
  createNewBanner,
} from "../services/bannersApiService";
import { UserRequest } from "../../auth/providers/jwt";
import {
  BannerFromClientInterface,
  BannerNormalized,
} from "../interfaces/BannerInterface";
import { Types } from "mongoose";

export const handleGetAllBanners = async (req: Request, res: Response) => {
  try {
    const { product } = req.query;

    if (!product) {
      const banners = await getBanners();
      return res.send(banners);
    }

    const banner = await getBannerByProductName(String(product));
    return res.send(banner);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error);
  }
};

export const handleGetBannerById = async (req: Request, res: Response) => {
  try {
    const { bannerId } = req.params;
    const banner = await getBannerById(bannerId);
    return res.send(banner);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error);
  }
};

export const handleCreateNewBanner = async (req: Request, res: Response) => {
  try {
    const bannerFromClient: BannerFromClientInterface = req.body;
    const reqUser = req as UserRequest;
    const { _id: authorId } = reqUser.user;

    const normalizedBanner: BannerNormalized = {
      ...bannerFromClient,
      author: authorId as unknown as Types.ObjectId,
    };

    const banner = await createNewBanner(normalizedBanner);
    res.status(201).send(banner);
  } catch (error) {
    if (error instanceof Error) return handleError(res, error);
  }
};
