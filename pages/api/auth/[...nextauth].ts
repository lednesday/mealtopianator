import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: "",
    }),
    // ...add more providers here
  ],

  // TODO Read this secret from the environment when deployed.
  // https://next-auth.js.org/configuration/options#secret
  secret: "foo",

  adapter: PrismaAdapter(prisma),
});
