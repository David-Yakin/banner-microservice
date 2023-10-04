import BannerInterface, {
  BannerNormalized,
} from "../interfaces/BannerInterface";
import Banner from "../models/mongoose/Banner";

export const getBannersFromDB = async () => {
  try {
    const banners = await Banner.find();
    return banners;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByIdFromDB = async (bannerId: string) => {
  try {
    const banner = await Banner.findById(bannerId);
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByProductNameFromDB = async (productName: string) => {
  try {
    const banner = await Banner.findOne({ "image.alt": productName });
    if (!banner)
      throw new Error(
        `The banner for the product "${productName}" is not in the database`
      );
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addNewBanner = async (normalizedBanner: BannerNormalized) => {
  try {
    const bannerToDB = new Banner(normalizedBanner);
    const bannerFromDB: BannerInterface = await bannerToDB.save();
    return bannerFromDB;
  } catch (error) {
    return Promise.reject(error);
  }
};
