'use server'

import connectDB from "@/db/connect";
import CarModel from "@/db/models/car";

/**
 * Add car entry to public database
 */
export default async function add(data, user) {
    try {
        if (!user) return {
            status: false,
            message: "Please login"
        }
    
        // Check existance
        if (!data || !data?.emission || !data?.maker || !data?.model) return {
            status: false,
            message: "Please fill all necessary fields"
        }
    
        // Type check
        if (
            (data?.desc && typeof data.desc !== "string") ||
            typeof data.emission !== "number" ||
            typeof data.maker !== "string" ||
            typeof data.model !== "string"
        ) return {
            status: false,
            message: "Invalid data type"
        }

        // Add to the Database
        await connectDB();

        let obj = {
            user,
            date: new Date(),
            emission: data.emission,
            maker: data.maker,
            model: data.model,
        };

        if (data?.desc) obj["desc"] = data.desc;

        const car = new CarModel(obj);
        await car.save();

        return { status: true };

    } catch(e) {
        console.error(e);

        return {
            status: false,
            message: "An error occured"
        }
    }
}