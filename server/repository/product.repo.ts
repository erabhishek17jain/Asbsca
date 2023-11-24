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
        return await this.model.findOne({_id: new Types.ObjectId(_id)}).populate("client");
    }

    public list = async (query: ListQuery): Promise<IProduct[]> => {
        const { limit = 10, page = 1 } = query;
        const skip = (page - 1) * limit;
        return await this.model.find().skip(skip).limit(limit).populate("client");
    }

    public count = async (query: ListQuery): Promise<number> => {
        return await this.model.countDocuments();
    }

    public create = async (product: IProduct): Promise<IProduct> => {
        return await this.model.create(product);
    }

    public update = async (data: IProduct): Promise<IProduct | null> => {
        const id = data._id;
        delete data._id;
        return await this.model.findOneAndUpdate({_id: new Types.ObjectId(id)}, {
            $set: data
        }, {new: true}).populate("client");
    }

    public delete = async (_id: string): Promise<IProduct | null> => {
        return await this.model.findOneAndDelete({_id: new Types.ObjectId(_id)});
    }
}