/** @format */

import { google } from "googleapis"

const handler = async (req, res) => {
	const { body, method } = req

	if (method !== "POST") {
		return res.status(405).json({
			success: false,
			message: "this method is not allowed!",
		})
	} else {
		try {
			// prepare auth
			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_CLIENT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
				},
				scopes: [
					"https://www.googleapis.com/auth/drive",
					"https://www.googleapis.com/auth/drive.file",
					"https://www.googleapis.com/auth/spreadsheets",
				],
			})

			const sheets = google.sheets({
				auth,
				version: "v4",
			})

			const response = await sheets.spreadsheets.values.append({
				spreadsheetId: process.env.GOOGLE_SHEET_ID,
				range: "CAMPAIGN_LEADS_KITCHEN_OFFER_01!A1:F1",
				valueInputOption: "USER_ENTERED",
				requestBody: {
					values: [
						[
							body.fullName,
							body.email,
							body.phone,
							body.city,
							body.area,
							body.details,
						],
					],
				},
			})

			if (!response) {
				return res.status(400).json({
					success: false,
					message: "Unknown error occured",
				})
			}
			return res.status(200).json({
				success: true,
				message: "successfully created new entry",
				data: response.data,
			})
		} catch (error) {
			return res.status(500).json({
				success: false,
				message: error.message ?? "There has been an error",
			})
		}
	}
}

export default handler
