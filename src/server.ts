import express from "express";
import router from "./router/router";
const app = express();
import chalk from "chalk";
import morgan from "./logger/morgan";
import cors from "./cors/cors";
import connectToMongoDb from "./dataAccessLayer/mongoDb";
import { handleServerError } from "./utils/handleErrors";
// import { generateInitialUsers } from "./initialData/initialDataService";

app.use(morgan);
app.use(cors);
app.use(express.json());
app.use(express.text());
app.use(router);
app.use(handleServerError);

const DNS = "localhost";
const PORT = 8181;

app.listen(PORT, () => {
  console.log(chalk.blueBright(`Server listening on: http://${DNS}:${PORT}`));

  connectToMongoDb()
    .then((message) => {
      console.log(chalk.magentaBright(message));
    })
    .catch((error) =>
      console.log(chalk.redBright("Connect to mongoDB Error: ", error.message))
    );

  // generateInitialUsers()
  //   .then(() => console.log(chalk.magentaBright("Initial Users Created!")))
  //   .catch((error) => console.log(error));
});
