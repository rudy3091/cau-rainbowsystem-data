import * as validate from "../src/data/recruitment/validate";
import data from "../src/data/recruitment/recruitment.json";

describe("validate function's", () => {
	test("company validation is valid", () => {
		expect(() =>
			validate.validateCompany({
				company: "test",
			})
		).not.toThrow();
		expect(() => validate.validateCompany({})).toThrow();
	});

	test("title validation is valid", () => {
		expect(() =>
			validate.validateTitle({
				title: "test",
			})
		).not.toThrow();
		expect(() => validate.validateTitle({})).toThrow();
	});

	test("due date lowerbound validation is valid", () => {
		expect(() =>
			validate.validateDueDateFrom({
				from: {
					year: "2021",
					month: "04",
					date: "19",
				},
			})
		).not.toThrow();
		expect(() => validate.validateDueDateFrom({})).toThrow();
	});

	test("due date upperbound validation is valid", () => {
		expect(() =>
			validate.validateDueDateTo({
				to: {
					year: "2021",
					month: "04",
					date: "19",
				},
			})
		).not.toThrow();
		expect(() => validate.validateDueDateTo({})).toThrow();
	});

	test("location validation is valid", () => {
		expect(() =>
			validate.validateLocation({
				location: "경기",
			})
		).not.toThrow();
		expect(() => validate.validateLocation({})).toThrow();
	});

	test("position validation is valid", () => {
		expect(() =>
			validate.validatePosition({
				position: "정규직",
			})
		).not.toThrow();
		expect(() =>
			validate.validatePosition({
				position: "인턴",
			})
		).not.toThrow();
		expect(() =>
			validate.validatePosition({
				position: "계약직",
			})
		).not.toThrow();
		expect(() =>
			validate.validatePosition({
				position: "계약직, 인턴",
			})
		).not.toThrow();
		expect(() =>
			validate.validatePosition({
				position: "정규직, 계약직",
			})
		).not.toThrow();

		expect(() => validate.validatePosition({ position: "원딜" })).toThrow();
		expect(() => validate.validatePosition({})).toThrow();
	});

	test("category validation is valid", () => {
		expect(() =>
			validate.validateCategory({
				category: "전체",
			})
		).not.toThrow();
		expect(() => validate.validateCategory({})).toThrow();
	});
});

describe("recruitment json data", () => {
	test("is valid", () => {
		expect(() => validate.validate(data)).not.toThrow();
	});
});
