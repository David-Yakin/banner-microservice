import { connect } from "mongoose";

const connectToMongoDb = async () => {
  try {
    await connect(
      "mongodb+srv://david:banner@banner-microservice.gzuztzl.mongodb.net/banners-microservice"
    );
    return "Connect to mongoDB successfully!";
  } catch (error) {
    return Promise.reject(error);
  }
};
// const connectToMongoDb = async () => {
//   try {
//     await connect("mongodb://127.0.0.1:27017/banner-microservice");
//     return "Connect to mongoDB successfully!";
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

export default connectToMongoDb;
