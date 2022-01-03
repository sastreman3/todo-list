import mongoose from "mongoose";
import { config } from "./config";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = encodeURIComponent(config.dbName);

(async () => {
  try {
    const db = await mongoose.connect(
      `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`
    );
    console.log(`DB connected to ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
})();
