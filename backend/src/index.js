import app from "./app";
import { config } from "./config";
import "./database";

app.listen(config.port, () => {
  console.log(`Listening in http://localhost:${config.port}`);
});
