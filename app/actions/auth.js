"use server";

import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
const key = "myPrivateKey";
export async function handleLogin(fd) {
	const name = fd.get("email");
	const password = fd.get("password");
	console.log(name, password);
	//db request api request
	if (name === "coolpisces22@gmail.com" && password === "123123123") {
		const token = jwt.sign({ name, exp: 60 * 60 * 24 }, key);

		cookies().set("session", token, {
			httpOnly: true,
			path: "/",
			maxAge: 60 * 60 * 24
		});
		redirect("/");
	}
	return {
		error: true,
		message: "Wrong Info!"
	};
}
