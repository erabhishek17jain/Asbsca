import ProductRepository from "repository/product.repo";
import { Request, Response } from "express";

interface IProductAPI {
  list: (req: Request, res: Response) => Promise<Response>;
  create: (req: Request, res: Response) => Promise<Response>;
  update: (req: Request, res: Response) => Promise<Response>;
  delete: (req: Request, res: Response) => Promise<Response>;
}


export default class ProductAPI implements IProductAPI {
    private static instance: ProductAPI = new this();
    private productRepo: ProductRepository = ProductRepository.repo;
    private constructor() {}
    public static get view(): ProductAPI {
        return this.instance;
    }
    
    public list = async (req: Request, res: Response): Promise<Response> => {
        try {
        const products = await this.productRepo.list(req.query);
        const count = await this.productRepo.count(req.query);
        return res.status(200).json({
            products,
            meta: {
                page: req.query.page,
                limit: req.query.limit,
                count,
            },
        });
        } catch (error) {
        return res.status(500).json({ error });
        }
    };
    
    public create = async (req: Request, res: Response): Promise<Response> => {
        try {
        const product = await this.productRepo.create(req.body);
        return res.status(200).json(product);
        } catch (error) {
        return res.status(500).json({ error });
        }
    }
    
    public update = async (req: Request, res: Response): Promise<Response> => {
        try {
        const product = await this.productRepo.update(req.body);
        return res.status(200).json(product);
        } catch (error) {
        return res.status(500).json({ error });
        }
    }
    
    public delete = async (req: Request, res: Response): Promise<Response> => {
        try {
        const product = await this.productRepo.delete(req.params.id);
        return res.status(200).json(product);
        } catch (error) {
        return res.status(500).json({ error });
        }
    }
}
