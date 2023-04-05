import mongoose from "mongoose";
import config from "./config";

const dbConnection = () => {
  mongoose
    .connect(config.dbURL)
    .then(() => {
      console.log("mongodb atlas is connected");
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });
};

export default dbConnection;
