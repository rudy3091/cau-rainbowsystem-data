import * as fs from "fs";
import * as path from "path";
import { Chunk } from "@type/excur";
import data from "@data/extracurricular/extracurricular.json";

// data.due.from.month 기준으로 슬라이스
const slice = (data: Chunk[]): Chunk[][] => {
	const sliced: Chunk[][] = [];
	let buf: Chunk[] = [];

	data.sort((a: Chunk, b: Chunk): number => {
		if (+a.due.from.year < +b.due.from.year) {
			if (+a.due.from.month < +b.due.from.month) {
				return -1;
			}
		}
		return 1;
	});

	let year: string = data[0].due.from.year;
	let month: string = data[0].due.from.month;

	data.forEach((d: Chunk) => {
		const { due } = d;

		if (due.from.year !== year) {
			year = due.from.year;
			sliced.push(buf);
			buf = [];
		}
		if (due.from.month !== month) {
			month = due.from.month;
			sliced.push(buf);
			buf = [];
		}

		buf.push(d);
	});

	return sliced;
};

export const write = (data: Chunk[][]) => {
	data.forEach((chunk: Chunk[], idx) => {
		fs.writeFile(
			path.join(__dirname, `../data/chunk${idx + 1}.json`),
			JSON.stringify(chunk, null, "\t"),
			(err) => {
				if (err) console.error(err);
			}
		);
	});
};
