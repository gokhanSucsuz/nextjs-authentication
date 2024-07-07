import { NextResponse } from "next/server";
import { jwtDecode } from "jwt-decode";

const key = "myPrivateKey";

export function middleware(request) {
	let tokenPass = false;
	const currentUser = request.cookies.get("session");
	if (currentUser) {
		const decoded = jwtDecode(currentUser.value);
		if (decoded) {
			console.log(decoded);
			tokenPass = true;
		} else {
			tokenPass = false;
		}
	}
	if (
		!currentUser &&
		tokenPass === false &&
		!request.nextUrl.pathname.startsWith("/auth/login")
	) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}
}

export const config = {
	matcher: ["/((?!_next).*)"]
};
