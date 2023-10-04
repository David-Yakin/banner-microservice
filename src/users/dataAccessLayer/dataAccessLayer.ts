import UserInterface, { LoginInterface } from "../interfaces/UserInterface";
import User from "../models/mongoose/User";

export const getUsersFromDB = async () => {
  try {
    const users = await User.find();
    if (!users.length) throw new Error("No users were found in the database");
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUserFromDB = async (userId: string) => {
  try {
    const user = await User.findById(userId);
    if (!user) throw new Error("This user is not in the database");
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const addUserToDb = async (user: UserInterface) => {
  try {
    const isExist = await User.find({ email: user.email });
    if (isExist.length) throw new Error("User already registered");

    const normalizedUser = new User(user);
    const userFromDB = await normalizedUser.save();
    return userFromDB;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const loginUser = async ({ email, password }: LoginInterface) => {
  try {
    const user = await User.findOne({ email });
    if (!user)
      throw new Error("Authentication Error: Invalid email or password");

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};
