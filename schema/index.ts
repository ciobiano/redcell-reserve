import { z } from "zod";




export const loginSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(6, "Password should be at least 6 characters"),
});

export const donorSchema = z.object({
	name: z.string().min(3, "Name should be at least 3 characters").max(50),
	address: z.string().min(3, "Address should be at least 3 characters"),
	phone: z.string().min(10, "Phone number should be at least 10 characters"),
	bloodGroup: z.string().min(2).max(10),
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(6, "Password should be at least 6 characters").max(50),
});



export const hospitalSchema = z.object({
	name: z.string().min(3, "Name should be at least 3 characters"),
	address: z.string().min(3, "Address should be at least 3 characters"),
	city: z.string().min(3, "City should be at least 3 characters"),
	state: z.string().min(3, "State should be at least 3 characters"),
	phone: z.string().min(10, "Phone number should be at least 10 characters"),
	licenseNumber: z.string().min(10, "License number should be at least 10 characters"),
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(6, "Password should be at least 6 characters"),
});
