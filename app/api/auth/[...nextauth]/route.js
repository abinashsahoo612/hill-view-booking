import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { pool } from "@/lib/db";   // <-- your MySQL pool
import bcrypt from "bcryptjs";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          // Find user by username or email
          const [rows] = await pool.query(
            "SELECT id, name, email, password_hash, role, phone FROM users WHERE email = ? LIMIT 1",
            [credentials.email]
          );

          if (!rows.length) {
            throw new Error("User not found");
          }

          const user = rows[0];

          // Validate password
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password_hash
          );
          if (!isValid) throw new Error("Invalid password");

          // Return user object for session/jwt
          return {
            id: user.id,
            email: user.email,
            role: user.role,
            phone: user.phone,
          };
        } catch (err) {
          console.error("Auth error:", err);
          throw new Error("Authentication failed");
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
        token.phone = user.phone;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
        session.user.id = token.id;
        session.user.phone = token.phone;
      }
      return session;
    },
  },
  pages: {
    // signIn: "/login", // you can add a custom login page
  },
});

export { handler as GET, handler as POST };
