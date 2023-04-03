import express from "express";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import fileUpload from 'express-fileupload'
dotenv.config({ path: __dirname + "/infrastructure/config/.env" });
import { errorHandlinig } from "./api/middlewares/errors/errorHandling";
import router from "./api/routes";

console.log(process.env.JWT_SECRET)

const app = express();

cloudinary.config({
    cloud_name: "ddknh2nry",
    api_key: "949533968722522",
    api_secret: "LvnvHwyLEq8ovjlHkVnkvtnP92Y",
})

//! Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }))
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser())

//! Routes
app.use("/api",router);

//! Error Handling
app.use(errorHandlinig);
export default app;
