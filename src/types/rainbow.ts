export type DateTime = {
	year: string;
	month: string;
	date: string;
}

export type DateDue = {
	from: DateTime;
	to: DateTime;
}

export type AvailableState = "신청가능" | "신청마감" | "교육종료" | "교육중" | "none";

export type Chunk = {
	id: number;
	title: string;
	url: string;
	due: DateDue;
	offered: DateDue;
	available: AvailableState | string;
}
