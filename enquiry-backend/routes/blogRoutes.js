import express from "express";
import {
  addBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/BlogController.js";
import upload from "../middleware/multer/upload.js";

const router = express.Router();

router.post(
  "/",
  upload.fields([
    { name: "bannerImage", maxCount: 1 },
    { name: "thumbnailImage", maxCount: 1 },
  ]),
  addBlog
);

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

router.put(
  "/:id",
  upload.fields([
    { name: "bannerImage", maxCount: 1 },
    { name: "thumbnailImage", maxCount: 1 },
  ]),
  updateBlog
);

router.delete("/:id", deleteBlog);

export default router;
