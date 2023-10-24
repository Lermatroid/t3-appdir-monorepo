import { type Config } from "drizzle-kit";

import * as dotenv from "dotenv";

dotenv.config({
	path: "../../.env",
});

export default {
	schema: "./src/server/db/schema.ts",
	driver: "pg",
	dbCredentials: {
		connectionString: process.env.DATABASE_URL as string,
	},
	tablesFilter: ["web_*"],
} satisfies Config;
