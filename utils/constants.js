/** @format */

export const baseRef =
	process.env.NODE_ENV == "production"
		? "https://www.opuvlence.com/api"
		: "http://localhost:3000/api"
