import mongoose from "mongoose";

export const dynamic = 'force-dynamic';

const CarSchema = mongoose.Schema({
    date: Date,
    user: String,
    maker: String,
    model: String,
    desc: String,
    emission: Number
},);

const CarModel = mongoose.models.cars || mongoose.model('cars', CarSchema);
export default CarModel;
