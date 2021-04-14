import request from "supertest";
import app from "../src";

describe("GET /", () => {
	test("should return string", (done) => {
		request(app)
			.get("/")
			.then((res) => {
				expect(res.text).toBe("server operational");
				done();
			});
	});
});

describe("GET /api", () => {
	test("should return string", (done) => {
		request(app)
			.get("/api")
			.then((res) => {
				expect(res.text).toBe("api router operational");
				done();
			});
	});
});
