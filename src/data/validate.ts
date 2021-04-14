import { Chunk } from "@type/rainbow";

export const validateId = (chunk: Chunk) => {
	if (typeof chunk.id !== "number") {
		throw new Error("id is not valid");
	}
};

const dateType = "string";

export const validateDueDatetimeFrom = (chunk: Chunk) => {
	const hasYear = chunk.due.from.hasOwnProperty("year");
	const hasMonth = chunk.due.from.hasOwnProperty("month");
	const hasDate = chunk.due.from.hasOwnProperty("date");
	const isValidType =
		typeof chunk.due.from.year === dateType &&
		typeof chunk.due.from.month === dateType &&
		typeof chunk.due.from.date === dateType;
	if (!hasYear || !hasMonth || !hasDate || !isValidType) {
		throw new Error("invalid due datetime");
	}
};

export const validateDueDatetimeTo = (chunk: Chunk) => {
	const hasYear = chunk.due.to.hasOwnProperty("year");
	const hasMonth = chunk.due.to.hasOwnProperty("month");
	const hasDate = chunk.due.to.hasOwnProperty("date");
	const isValidType =
		typeof chunk.due.to.year === dateType &&
		typeof chunk.due.to.month === dateType &&
		typeof chunk.due.to.date === dateType;
	if (!hasYear || !hasMonth || !hasDate || !isValidType) {
		throw new Error("invalid due datetime");
	}
};

export const validateOfferedDatetimeFrom = (chunk: Chunk) => {
	const hasYear = chunk.offered.from.hasOwnProperty("year");
	const hasMonth = chunk.offered.from.hasOwnProperty("month");
	const hasDate = chunk.offered.from.hasOwnProperty("date");
	const isValidType =
		typeof chunk.offered.from.year === dateType &&
		typeof chunk.offered.from.month === dateType &&
		typeof chunk.offered.from.date === dateType;
	if (!hasYear || !hasMonth || !hasDate || !isValidType) {
		throw new Error("invalid offered datetime");
	}
};

export const validateOfferedDatetimeTo = (chunk: Chunk) => {
	const hasYear = chunk.offered.to.hasOwnProperty("year");
	const hasMonth = chunk.offered.to.hasOwnProperty("month");
	const hasDate = chunk.offered.to.hasOwnProperty("date");
	const isValidType =
		typeof chunk.offered.to.year === dateType &&
		typeof chunk.offered.to.month === dateType &&
		typeof chunk.offered.to.date === dateType;
	if (!hasYear || !hasMonth || !hasDate || !isValidType) {
		throw new Error("invalid offered datetime");
	}
};

export const validateTitle = (chunk: Chunk) => {
	if (chunk.title === null || typeof chunk.title !== "string") {
		throw new Error("invalid title");
	}
};

export const validateUrl = (chunk: Chunk) => {
	if (
		chunk.url === null ||
		typeof chunk.url !== "string" ||
		chunk.url.match(/(http|https):\/\/[A-Za-z.]+.\w+/g) === null
	) {
		throw new Error("invalid url");
	}
};

export const validateAvailableState = (chunk: Chunk) => {
	const states = ["신청가능", "신청마감", "교육종료", "교육중", "none"];
	if (chunk.available === null || !states.includes(chunk.available)) {
		throw new Error("invalid available state");
	}
};

export default (data: Chunk[]) => {
	data.forEach((chunk: Chunk) => {
		validateId(chunk);
		validateDueDatetimeFrom(chunk);
		validateDueDatetimeTo(chunk);
		validateOfferedDatetimeFrom(chunk);
		validateOfferedDatetimeTo(chunk);
		validateTitle(chunk);
		validateUrl(chunk);
		validateAvailableState(chunk);
	});
};
