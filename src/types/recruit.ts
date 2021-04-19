import { DateTime } from "@type/datacommon";

export type Position = "정규직" | "인턴" | "계약직" | string;

export type Chunk = {
	company: string;
	title: string;
	from: DateTime;
	to: DateTime;
	location: string;
	position: Position;
	category: string;
};
