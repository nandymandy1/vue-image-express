import multer from "multer";
import { Router } from "express";
import { baseURL } from "../config";

const router = Router();

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${__dirname}/../public/uploads`);
  },
  filename: (req, file, cb) => {
    let lastIndex = file.originalname.lastIndexOf(".");
    // Get Original File Extension
    let extension = file.originalname.substring(lastIndex);
    // Create the file on the server
    cb(null, "img" + "-" + Date.now() + extension);
  },
});

// Image Upload function
const upload = multer({ storage });

// Controllers
const upload_single_dropzone_file = async (req, res) => {
  let imagePath = req.file.path.replace("public", baseURL);
  imagePath = imagePath.split("src")[1].substring(1, imagePath.length);
  return res.json({ img: imagePath });
};

const upload_multiple_files = async (req, res) => {
  let { files } = req;
  let resp = [];
  for (let i = 0; i < files.length; i++) {
    let file = files[i];
    let imagePath = file.path.replace("public", baseURL);
    imagePath = imagePath.split("src")[1].substring(1, imagePath.length);
    resp.push(imagePath);
  }
  return res.json(resp);
};

// Route Handlers
router.post("/multiple-upload", upload.array("files"), upload_multiple_files);
router.post(
  "/single-dropzone",
  upload.single("file"),
  upload_single_dropzone_file
);

export default router;
