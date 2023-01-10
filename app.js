require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");

const { appDataSource } = require("./models/dbconfig");
const { globalErrorHandler } = require("./utils/error");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(routes);
app.use(globalErrorHandler);

app.get("/ping", (req, res) => {
  return res.status(200).json({ message: "pong" });
});
const start = async () => {
  try {
    await appDataSource
      .initialize()
      .then(() => {
        console.log("Data Source has been intialized!");
      })
      .catch((err) => {
        console.error("Error occurred during Data Source initialization", err);
      });
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
  } catch (err) {
    appDataSource.destroy();
    console.error(err);
  }
};

start();
