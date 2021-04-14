module.exports = {
	transform: {
		"^.+\\.(t|j)sx?$": ["@swc/jest"],
	},
	moduleNameMapper: {
		"@data/(.*)$": "<rootDir>/dist/data/$1",
		"@routes/(.*)$": "<rootDir>/dist/routes/$1",
	},
};
