import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

// Mock user data for Credentials provider
const mockUsers = [
  {
    id: "1",
    email: "user@example.com",
    password: "password123",
    name: "Test User",
  },
];

export const authOptions = {
  providers: [
    // Google Provider setup
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Credentials Provider setup for email/password login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Find user by email and validate password
        const user = mockUsers.find((u) => u.email === credentials.email);

        if (user && user.password === credentials.password) {
          // If a user is found and password matches, return the user object
          return { id: user.id, name: user.name, email: user.email };
        } else {
          // If login fails, return null
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to this page for unauthenticated users
  },
  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
