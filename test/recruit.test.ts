import request from "supertest";
import app from "../src";

describe("GET /api/rainbow/recruit", () => {
	test("should return every data by default rows and page number", (done) => {
		request(app)
			.get("/api/rainbow/recruit")
			.then((res) => {
				const data = res.text;
				const defaultRows = 20;

				expect(JSON.parse(data).length).toBe(defaultRows);
				done();
			});
	});
});

describe("GET /api/rainbow/recruit?rows=3", () => {
	test("should return only 3 items", (done) => {
		request(app)
			.get("/api/rainbow/recruit?rows=3")
			.then((res) => {
				const data = res.text;
				expect(JSON.parse(data).length).toBe(3);
				done();
			});
	});
});

describe("GET /api/rainbow/recruit?rows=10", () => {
	test("should return only 10 items", (done) => {
		request(app)
			.get("/api/rainbow/recruit?rows=10")
			.then((res) => {
				const data = res.text;
				expect(JSON.parse(data).length).toBe(10);
				done();
			});
	});
});

describe("GET /api/rainbow/recruit?page=2", () => {
	test("should return different data from page 1", (done) => {
		request(app)
			.get("/api/rainbow/recruit?page=2")
			.then((res) => {
				const data = res.text;
				const defaultRows = 20;

				for (let i = 0; i < defaultRows; i++)
					expect(JSON.parse(data)[i]).not.toBe(data[i]);

				done();
			});
	});
});
