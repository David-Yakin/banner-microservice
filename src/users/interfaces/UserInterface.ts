import { Types } from "mongoose";

interface UserInterface {
  _id?: Types.ObjectId;
  isAdmin: boolean;
  email: string;
  password: string;
  username: string;
}

export type LoginInterface = Pick<UserInterface, "email" | "password">;

export default UserInterface;
