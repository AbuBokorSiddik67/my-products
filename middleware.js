import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // `withAuth` callback function
  function middleware(req) {
    // You can inspect the user token here if you need to check roles, etc.
    // console.log("Middleware running. Token:", req.nextauth.token);
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        // `!!token` returns true if a token exists, and false if not.
        // This means the user is considered "authorized" if they have a session token.
        return !!token;
      },
    },
    pages: {
      // Unauthenticated users will be redirected to this page.
      signIn: "/login",
    },
  }
);

// This configuration specifies which routes should be handled by the middleware.
export const config = {
  matcher: ["/dashboard/:path*"],
};
