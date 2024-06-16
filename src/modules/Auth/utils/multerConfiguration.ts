import multer, { diskStorage, storageEngine } from "multer";
import { Request } from "express";
const storage: storageEngine = ({
    destination: function (req: Request, file, cb: (error: null | Error, destination: string) => void) {
        return cb(null, "public/upload")
    },
    filename: function (req, file, cb: (error: null | Error, filename: string) => void) {
        return cb(null, Date.now() + "_" + file.originalname)
    }
})
export const uploadFile = multer({ storage });