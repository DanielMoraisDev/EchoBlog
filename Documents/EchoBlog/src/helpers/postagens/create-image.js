import multer from "multer";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __fileName = fileURLToPath(import.meta.url);
const __dirName = path.dirname(__fileName);

const imageStore = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "";

    if (req.baseUrl.includes("posts")) {
      folder = "posts";
    } else if (req.baseUrl.includes("users")) {
      folder = "users";
    }
    cb(null, path.join(__dirName, `../../../public/images/${folder}`));
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
        return file
  },
});

const imageUpload = multer({
  storage: imageStore,
  limits: { fileSize: "500000" },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png||jpg||webp)$/)) {
      return cb(
        new Error("Por favor, envie apenas arquivos: JPG, PNG ou WEBP")
      );
    }
    cb(null, true);
  },
});

export default imageUpload