'use server'

import connectDB from "@/db/connect";
import CarModel from "@/db/models/car";

/**
 * Get car entries from the public database
 */
export default async function get() {
    try {
        // Get from  Database
        await connectDB();

        const entries = await CarModel.find().lean();

        return { data: entries };

    } catch(e) {
        console.error(e);
        return { data: [] };
    }
}
