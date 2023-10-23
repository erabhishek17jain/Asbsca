import mongoose from "mongoose";
import Client from "./Client.model";

export interface IProduct extends mongoose.Document {
    name: string;
    client: mongoose.Types.ObjectId;
    status: Status;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema = new mongoose.Schema<IProduct>({
    name: { type: String, required: true },
    client: { type: mongoose.Schema.Types.ObjectId, ref: Client, required: true },
    status: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model<IProduct>('product', ProductSchema);
export default Product;

