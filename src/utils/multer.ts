import multer from "multer";
import path from "path";
import {Request} from "express";
let genStorage = (storagePath: string) => {
  return multer.diskStorage({
    destination: path.resolve(storagePath),
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + "." + file.originalname.split(".").at(-1));
    }
  });
};
let parseFilePath = (req: Request) => {
  return req.file?.path.split("public")[1].replaceAll("\\", "/");
};

export {genStorage, parseFilePath};
