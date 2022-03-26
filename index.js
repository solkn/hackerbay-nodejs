const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const userRouter = require("./routes/user");
const thumbnailsRouter = require("./routes/thumbnails");


dotenv.config();

const app = express();


 
/**
 * Connection to the database
 */

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log("database is connected successfully!");
  });





app.use(cors());
app.use(express.json());


/**
 * Route Middleware
 */


app.use("/api/v1/users", userRouter);
app.use("/api/v1/thumbnails",thumbnailsRouter,express.static(path.join(__dirname, "./uploads")));


app.use("*", (req, res, next) => {
  res.status(400).json({
    status: "error",
    message: `The requested url ${req.originalUrl} does not exist`,
  });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running at port: ${port}`);
});