import express from "express";
import recruitmentController from "./recruitment.controller";

const router: express.Router = express.Router();
router.get("/", recruitmentController.findByPages);

export default router;
