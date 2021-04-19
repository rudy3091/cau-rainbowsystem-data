import express from "express";
import extracurricularController from "./extracurricular.controller";

const router: express.Router = express.Router();
router.get("/", extracurricularController.findByPages);

export default router;
