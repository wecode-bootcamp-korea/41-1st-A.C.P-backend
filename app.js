const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const routes = require("./routes");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
// app.use(routes);
app.use(cors());
app.use(morgan("dev"));

const { DataSource } = require("typeorm");

const appDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
});

module.exports = {
  appDataSource,
};


app.get("/ping", (req, res) => {
  return res.status(200).json({ message: "pong" });
});

const start = async () => {
  try {
    app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch(() => {
    console.log("Promise Rejected!");
  });

start();
