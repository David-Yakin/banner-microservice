import UserInterface, { LoginInterface } from "../interfaces/UserInterface";
import { comparePassword, generateUserPassword } from "../helpers/bcrypt";
import { generateAuthToken } from "../../auth/providers/jwt";
import {
  addUserToDb,
  getUserFromDB,
  getUsersFromDB,
  loginUser,
} from "../dataAccessLayer/dataAccessLayer";

// type UserResult = Promise<UserInterface | Error>;

export const getUsers = async () => {
  try {
    const users = await getUsersFromDB();
    return users;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getUser = async (userId: string) => {
  try {
    const user = await getUserFromDB(userId);
    return user;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const register = async (user: UserInterface) => {
  try {
    user.password = generateUserPassword(user.password);
    const userFromDB = await addUserToDb(user);
    return userFromDB;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const login = async (userFromClient: LoginInterface) => {
  try {
    const user = await loginUser(userFromClient);

    const validPassword = comparePassword(
      userFromClient.password,
      user.password
    );
    if (!validPassword)
      throw new Error("Authentication Error: Invalid email or password");

    const token = generateAuthToken(user);
    return Promise.resolve(token);
  } catch (error) {
    return Promise.reject(error);
  }
};

// export const editUser = async (
//   userId: string,
//   userForUpdate: UserInterface
// ) => {
//   try {
//     // const users = await getCollectionFromJsonFile("users");
//     // if (users instanceof Error)
//     //   throw new Error("Oops... Could not get the users from the Database");
//     // const index = users.findIndex((user) => user._id === userId);
//     // if (index === -1) throw new Error("Could not find user with this ID!");
//     // const usersCopy = [...users];
//     // const userToUpdate = { ...usersCopy[index], ...userForUpdate };
//     // usersCopy[index] = userToUpdate;
//     // const data = await modifyCollection("users", usersCopy);
//     // if (!data)
//     //   throw new Error("Oops... something went wrong Could not Edit this user");
//     // return userToUpdate;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// export const deleteUser = async (userId: string) => {
//   try {
//     // const users = await getCollectionFromJsonFile("users");
//     // if (users instanceof Error)
//     //   throw new Error("Oops... Could not get the users from the Database");
//     // const user = users.find((user) => user._id === userId);
//     // if (!user) throw new Error("Could not find user with this ID!");
//     // const filteredUser = users.filter((user) => user._id !== userId);
//     // const data = await modifyCollection("users", filteredUser);
//     // if (!data)
//     //   throw new Error("Oops... something went wrong Could not Edit this user");
//     // return user;
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };
