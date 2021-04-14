import "module-alias/register";
import express from "express";
import apiRouter from "@routes/api";
import cors from "./middlewares/cors";

const PORT = 8080;

const app: express.Application = express();

app.use("/", cors);

app.use("/api", apiRouter);
app.get("/", (req: express.Request, res: express.Response) => {
	res.send("server operational");
});

if (process.env.NODE_ENV !== "test")
	app.listen(PORT, () => console.log(`listening on port ${PORT}`));

export default app;
