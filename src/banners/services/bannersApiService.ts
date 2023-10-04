import {
  getBannersFromDB,
  getBannerByIdFromDB,
  getBannerByProductNameFromDB,
  addNewBanner,
} from "../dataAccessLayer/bannersDAL";
import BannerInterface, {
  BannerFromClientInterface,
  BannerNormalized,
} from "../interfaces/BannerInterface";

export const getBanners = async () => {
  try {
    const banners = getBannersFromDB();
    return banners;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerById = async (bannerId: string) => {
  try {
    const banner = await getBannerByIdFromDB(bannerId);
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBannerByProductName = async (product: string) => {
  try {
    const banner = await getBannerByProductNameFromDB(product);
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};
export const createNewBanner = async (normalizedBanner: BannerNormalized) => {
  try {
    const banner = await addNewBanner(normalizedBanner);
    return banner;
  } catch (error) {
    return Promise.reject(error);
  }
};
