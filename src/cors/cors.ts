import cors, { CorsOptionsDelegate } from "cors";

// const whiteList = ["http://127.0.0.1:10000"];

// const corsOptions: CorsOptionsDelegate = (req, callback) => {
//   const isExist = whiteList.find((api) => api === req.headers.origin);
//   if (!isExist)
//     return callback(
//       new Error(
//         `CORS Error: the API ${req.headers.origin} is an Unauthorized API`
//       ),
//       {
//         origin: false,
//       }
//     );
//   callback(null, { origin: true });
// };

// const corsHandler = cors(corsOptions);
const corsHandler = cors();

export default corsHandler;
