import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prismaClient";

let userAccount;
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const userCredentials = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/user/login`, {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const user = await res.json();

        if (res.ok && user) {
          userAccount = user;
          console.log(userAccount);
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  theme: {
    colorScheme: "auto",
    brandColor: "#FFFFFF",
    logo: "/favicon.ico",
    buttonText: "#000000",
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      session.user.id = token.user.id;

      return session;
    },
    async jwt({ token, account, user }) {
      if (user) {
        if (!token.user) {
          token.user = {
            id: "",
          };
        }

        token.user.id = user.id;
      }
      return token;
    },
  },
});
