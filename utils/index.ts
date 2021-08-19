// Database and other utilities.

import { MealPlan } from "../models/mealplan.model";
import { getConnection, createConnection } from "typeorm";

// TODO This duplicates the config in pages/api/auth/[...nextauth].ts.
export async function getOrCreateConnection() {
    try {
        const conn = getConnection();
        return conn;
    } catch (e) {
        return createConnection({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "mealtopianator",
            password: process.env.DATABASE_PASSWORD as string,
            database: "mealtopianator",
            entities: [MealPlan],
            synchronize: true,
            logging: false
        });
    }
}