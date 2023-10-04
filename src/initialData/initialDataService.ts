import { createNewBanner } from "../banners/services/bannersApiService";
import UserInterface from "../users/interfaces/UserInterface";
import { getUsers, register } from "../users/services/usersApiService";

const data = {
  users: [
    {
      email: "regular@gmail.com",
      password: "Aa1234!",
      isAdmin: false,
      username: "regular",
    },
    {
      email: "admin@gmail.com",
      password: "Aa1234!",
      username: "admin",
      isAdmin: true,
    },
  ],
  banners: [
    {
      text: "first",
      image: {
        url: "https://cdn.pixabay.com/photo/2023/09/23/14/22/dahlia-8271071_1280.jpg",
        alt: "פרח",
      },
    },
    {
      text: "second",
      image: {
        url: "https://cdn.pixabay.com/photo/2023/09/11/13/08/dog-8246868_1280.jpg",
        alt: "dog",
      },
    },
  ],
};

const createInitialUsers = async () => {
  try {
    data.users.forEach(async (user) => await register(user));
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createInitialBanners = async () => {
  try {
    data.banners.forEach(async (banner) => {
      banner.author = "651d2a5972d7cb77fbb7c716";
      await createNewBanner(banner);
    });

    return null;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const initialData = async () => {
  try {
    await createInitialUsers();
    await createInitialBanners();
    return { message: "created initial users & banners successfully" };
  } catch (error) {
    return Promise.reject(error);
  }
};

export default initialData;
