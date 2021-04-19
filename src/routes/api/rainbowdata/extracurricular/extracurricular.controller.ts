import express from "express";
import data from "@data/extracurricular/extracurricular.json";
import { Chunk } from "@type/excur";

const controller = {
	findAll(req: express.Request, res: express.Response) {
		res.send(data);
	},
	findByPages(req: express.Request, res: express.Response) {
		const rows: number = parseInt((req.query.rows as string) ?? 20);
		const page: number = parseInt((req.query.page as string) ?? 1);

		const lowerBound: number = page > 0 ? (page - 1) * rows : 1;
		const chunk: Chunk[] = data.slice(lowerBound, lowerBound + rows);
		res.send(chunk);
	},
};

export default controller;
