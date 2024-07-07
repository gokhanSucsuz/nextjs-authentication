"use server";

export async function handleLogin(formData) {
	const email = formData.get("email");
	const password = formData.get("password");
	console.log(email, password);
}
