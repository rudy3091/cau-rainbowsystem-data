import express from "express";
import rainbowDataRouter from "@routes/api/rainbowdata";

const router: express.Router = express.Router();
router.get("/", (req: express.Request, res: express.Response) => {
	res.send("api router operational");
});
router.use("/rainbow", rainbowDataRouter);

export default router;
