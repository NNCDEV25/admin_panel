import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  bannerImage: { type: String, required: true },
  thumbnailImage: { type: String, required: true },
  redirectLink: { type: String, required: true },
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model("Blog", BlogSchema);
    