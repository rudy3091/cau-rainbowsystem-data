import express from "express";
import extracurricularRounter from "./extracurricular";
import recruitmentRouter from "./recruitment";

const router: express.Router = express.Router();
router.get("/", (req: express.Request, res: express.Response) => {
	res.send("rainbowsystem data api operational");
});
router.use("/excur", extracurricularRounter);
router.use("/recruit", recruitmentRouter);

export default router;
