// import multer, { diskStorage, storageEngine } from "multer";
// import { Request } from "express";
// const storage: storageEngine = multer.diskStorage({
//   destination: function (
//     req: Request,
//     file,
//     cb: (error: null | Error, destination: string) => void
//   ) {
//     return cb(null, "public/upload");
//   },
//   filename: function (
//     req: Request,
//     file,
//     cb: (error: null | Error, filename: string) => void
//   ) {
//     return cb(null, Date.now() + "_" + file.originalname);
//   },
// });
// export const uploadFile = multer({ storage });
import multer from "multer";
import { Request } from "express";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();
// Configure Cloudinary with your account credentials
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure the Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    public_id: (req: Request, file) => Date.now() + "_" + file.originalname, // specify a unique filename
  },
});

export const uploadFile = multer({ storage });
