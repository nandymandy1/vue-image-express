import cors from "cors";
import path from "path";
import express from "express";
import consola from "consola";
// import mongoose from "mongoose";
import {
  // DB,
  PORT,
} from "./config";
import bodyParser from "body-parser";

// Routes Imports
import imageRoutes from "./routes/images";

// Initialize App
const app = express();

// Set Application Middlewares
app.use(cors());
app.use(bodyParser.json());

// Setting up the Static Directory
app.use(express.static(path.join(__dirname, "./public")));

// Routes Middlewares
app.use("/api/images", imageRoutes);

// Start Server function
const startApp = async () => {
  try {
    // await mongoose.connect(DB, {
    //   useNewUrlParser: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
    // });
    // consola.success({
    //   message: `Database connected successfully...`,
    //   badge: true,
    // });
    app.listen(PORT, () =>
      consola.success(`Server started at http://localhost:${PORT}`)
    );
  } catch (err) {
    consola.error({
      message: `Unable to start the server \n${err.message}\n${err}`,
      badge: true,
    });
  }
};

startApp();
