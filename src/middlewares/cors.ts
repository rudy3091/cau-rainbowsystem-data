import express from "express";

const cors = (
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
};

export default cors;
