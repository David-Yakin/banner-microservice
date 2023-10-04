import express, { Request, Response } from "express";
const router = express.Router();
import usersRoutes from "../users/routes/usersRoutes";
import bannersRoutes from "../banners/routes/bannersRoutes";

router.use("/api/users", usersRoutes);
router.use("/api/banners", bannersRoutes);
router.use(express.static("../../public"));

router.use("*", (req: Request, res: Response) =>
  res.status(404).send("Page not found!")
);

export default router;
