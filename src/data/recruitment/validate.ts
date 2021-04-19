import { Chunk } from "@type/recruit";

export const validateCompany = (chunk: Chunk) => {
	if (
		!chunk.hasOwnProperty("company") ||
		chunk.company === null ||
		typeof chunk.company !== "string"
	) {
		throw new Error("invalid company name");
	}
};

export const validateTitle = (chunk: Chunk) => {
	if (
		!chunk.hasOwnProperty("title") ||
		chunk.title === null ||
		typeof chunk.title !== "string"
	) {
		throw new Error("invalid title");
	}
};

export const validateDueDateFrom = (chunk: Chunk) => {
	const hasYear = chunk.from.hasOwnProperty("year");
	const hasMonth = chunk.from.hasOwnProperty("month");
	const hasDate = chunk.from.hasOwnProperty("date");
	if (
		!chunk.hasOwnProperty("from") ||
		chunk.from === null ||
		!hasYear ||
		!hasMonth ||
		!hasDate
	) {
		throw new Error("invalid due date lowerbound");
	}
};

export const validateDueDateTo = (chunk: Chunk) => {
	const hasYear = chunk.to.hasOwnProperty("year");
	const hasMonth = chunk.to.hasOwnProperty("month");
	const hasDate = chunk.to.hasOwnProperty("date");
	if (
		!chunk.hasOwnProperty("to") ||
		chunk.to === null ||
		!hasYear ||
		!hasMonth ||
		!hasDate
	) {
		throw new Error("invalid due date lowerbound");
	}
};

export const validateLocation = (chunk: Chunk) => {
	if (
		!chunk.hasOwnProperty("location") ||
		chunk.location === null ||
		typeof chunk.location !== "string"
	) {
		throw new Error("invalid location");
	}
};

export const validatePosition = (chunk: Chunk) => {
	const positions = ["정규직", "인턴", "계약직"];
	const parsed = chunk.position.split(",").map((p) => p.trim());
	const included = parsed.filter((p) => !positions.includes(p));
	if (
		!chunk.hasOwnProperty("position") ||
		chunk.position === null ||
		typeof chunk.position !== "string" ||
		included.length !== 0
	) {
		throw new Error("invalid position");
	}
};

export const validateCategory = (chunk: Chunk) => {
	if (
		!chunk.hasOwnProperty("category") ||
		chunk.category === null ||
		typeof chunk.category !== "string"
	) {
		throw new Error("invalid category");
	}
};

export const validate = (chunks: Chunk[]) => {
	chunks.forEach((chunk) => {
		validateCompany(chunk);
		validateTitle(chunk);
		validateDueDateFrom(chunk);
		validateDueDateTo(chunk);
		validateLocation(chunk);
		validatePosition(chunk);
		validateCategory(chunk);
	});
};
