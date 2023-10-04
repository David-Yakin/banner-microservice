import express from "express";

import { auth } from "../../auth/providers/jwt";
import {
  handleCreateNewBanner,
  handleGetAllBanners,
  handleGetBannerById,
} from "../controllers/bannersControllers";
const router = express.Router();

router.get("/", handleGetAllBanners);
router.get("/:bannerId", handleGetBannerById);
router.post("/", auth, handleCreateNewBanner);
// router.put("/:id", auth, handleEditBanner);
// router.delete("/:id", auth, handleDeleteBanner);
// router.post("/login", handleLogin);
// router.post("/add-product/:id", auth, handleAddProductToBanner);

export default router;
