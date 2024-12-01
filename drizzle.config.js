import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: "postgresql://Car%20marketplace%20db_owner:maz5CB8YdKxr@ep-nameless-bar-a54uvag2.us-east-2.aws.neon.tech/Car%20marketplace%20db?sslmode=require",
  },
});
