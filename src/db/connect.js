import mongoose from "mongoose";

let cached = global.mongoose;
if (!cached) cached = global.mongoose = { conn: null, promise: null };

export default async function connectDB() {
    cached.promise = mongoose
        .connect(process.env.MONGODB_URI)
        .then((mongoose) => {
            return mongoose;
        });

    cached.conn = await cached.promise;
    return cached.conn;
}
