import * as validate from "../src/data/extracurricular/validate";
import data from "../src/data/extracurricular/extracurricular.json";

describe("validate function's", () => {
	test("id validation is valid", () => {
		expect(() => validate.validateId({ id: "none" })).toThrow();
		expect(() => validate.validateId({ id: null })).toThrow();
		expect(() => validate.validateId({ id: "10" })).toThrow();
		expect(() => validate.validateId({ id: " " })).toThrow();
		expect(() => validate.validateId({ id: "" })).toThrow();

		expect(() => validate.validateId({ id: 1401 })).not.toThrow();
		expect(() => validate.validateId({ id: 1 })).not.toThrow();
		expect(() => validate.validateId({ id: 100 })).not.toThrow();
	});

	test("due date.from's validation is valid", () => {
		expect(() =>
			validate.validateDueDatetimeFrom({
				due: {
					from: {
						year: "2021",
						month: "04",
						date: "14",
					},
				},
			})
		).not.toThrow();

		expect(() =>
			validate.validateDueDatetimeFrom({
				due: {
					from: {
						year: 2021,
						month: 4,
						date: 14,
					},
				},
			})
		).toThrow();
	});

	test("due date.to's validation is valid", () => {
		expect(() =>
			validate.validateDueDatetimeTo({
				due: {
					to: {
						year: "2021",
						month: "04",
						date: "14",
					},
				},
			})
		).not.toThrow();

		expect(() =>
			validate.validateDueDatetimeTo({
				due: {
					to: {
						year: 2021,
						month: 4,
						date: 14,
					},
				},
			})
		).toThrow();
	});

	test("offered date.from validation is valid", () => {
		expect(() =>
			validate.validateOfferedDatetimeFrom({
				offered: {
					from: {
						year: "2021",
						month: "04",
						date: "14",
					},
				},
			})
		).not.toThrow();

		expect(() =>
			validate.validateOfferedDatetimeFrom({
				offered: {
					from: {
						year: 2021,
						month: 4,
						date: 14,
					},
				},
			})
		).toThrow();
	});

	test("offered date.to validation is valid", () => {
		expect(() =>
			validate.validateOfferedDatetimeTo({
				offered: {
					to: {
						year: "2021",
						month: "04",
						date: "14",
					},
				},
			})
		).not.toThrow();

		expect(() =>
			validate.validateOfferedDatetimeTo({
				offered: {
					to: {
						year: 2021,
						month: 4,
						date: 14,
					},
				},
			})
		).toThrow();
	});

	test("title's validation is valid", () => {
		expect(() => validate.validateTitle({})).toThrow();
		expect(() =>
			validate.validateTitle({
				title: "test title",
			})
		).not.toThrow();
	});

	test("url's validation is valid", () => {
		expect(() => validate.validateUrl({})).toThrow();
		expect(() =>
			validate.validateUrl({
				url: "https://cau.ac.kr",
			})
		).not.toThrow();
	});

	test("available state's validation is valid", () => {
		expect(() => validate.validateAvailableState({})).toThrow();
		expect(() =>
			validate.validateAvailableState({
				available: "신청가능",
			})
		).not.toThrow();
		expect(() =>
			validate.validateAvailableState({
				available: "신청마감",
			})
		).not.toThrow();
		expect(() =>
			validate.validateAvailableState({
				available: "교육종료",
			})
		).not.toThrow();
		expect(() =>
			validate.validateAvailableState({
				available: "교육중",
			})
		).not.toThrow();
		// none is also truthy value
		expect(() =>
			validate.validateAvailableState({
				available: "none",
			})
		).not.toThrow();

		expect(() =>
			validate.validateAvailableState({
				available: null,
			})
		).toThrow();
		expect(() =>
			validate.validateAvailableState({
				available: "안됨",
			})
		).toThrow();
	});
});

describe("extracurricular json data", () => {
	test("is valid", () => {
		expect(() => validate.default(data)).not.toThrowError();
	});
});
