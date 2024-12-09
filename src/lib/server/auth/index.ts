import { betterAuth } from "better-auth";
import db from "../db";
import { username } from "better-auth/plugins";

const auth = betterAuth({
  database: db,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [username()],
});

export default auth;
