import Product, {IProduct} from "model/Product.model";
import {Types} from "mongoose";

export default class ProductRepository implements Repository<IProduct> {
    private static instance: ProductRepository = new this();
    private constructor() {}
    public static get repo(): ProductRepository {
        return this.instance;
    }
    protected model = Product;

    public get = async (_id: string): Promise<IProduct | null> => {
        return await this.model.findOne({_id: new Types.ObjectId(_id)});
    }

    public list = async (): Promise<IProduct[]> => {
        return await this.model.find();
    }

    public create = async (product: IProduct): Promise<IProduct> => {
        return await this.model.create(product);
    }

    public update = async (data: IProduct): Promise<IProduct | null> => {
        const id = data._id;
        delete data._id;
        return await this.model.findOneAndUpdate({_id: new Types.ObjectId(id)}, {
            $set: data
        }, {new: true});
    }

    public delete = async (_id: string): Promise<IProduct | null> => {
        return await this.model.findOneAndDelete({_id: new Types.ObjectId(_id)});
    }
}