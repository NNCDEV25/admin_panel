import multer from "multer";

const storage = multer.memoryStorage();  // Storing file in memory for CDN upload
const upload = multer({ storage });

export default upload;
