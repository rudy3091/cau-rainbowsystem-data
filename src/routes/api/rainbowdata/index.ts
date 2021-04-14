import express from "express";
import rainbowController from "./rainbow.controller";

const router: express.Router = express.Router();
router.get("/", rainbowController.findByPages);

export default router;
