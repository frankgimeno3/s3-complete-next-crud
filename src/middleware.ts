import { withAuth } from "next-auth/middleware";

// Protect specific routes using the `withAuth` helper
export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // `token` will be present if the user is authenticated
      return !!token; // If no token, the user is not authenticated
    },
  },
});

// Configuration to define which paths to match for middleware
export const config = {
  matcher: ['/me', '/create'],  // Define protected routes here
};
