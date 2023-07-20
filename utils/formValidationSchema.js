/** @format */

import { z } from "zod"
import { cities } from "./operatingCities"
export const leadFormSchema = z.object({
	fullName: z
		.string()
		.min(3, "Name should have atleast 3 alphabets")
		.refine(
			value => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
			"Name should contain only alphabets"
		),
	phone: z
		.string()
		.refine(
			value => /^(0|91)?[6-9][0-9]{9}$/.test(value),
			"Please enter a valid phone number"
		),
	email: z.string().email(),
	city: z.enum(cities.map(option => option.value)),
	area: z.string().refine(value => /^[0-9]+$/.test(value)),
	details: z.string().optional(),
})

export const defaultFormValues = {
	fullName: "",
	phone: "",
	email: "",
	city: "bangalore",
	area: "",
	details: "",
}
