import { Router } from "express";
import BranchAPI from "./controllers/BranchAPI";
import ClientAPI from "./controllers/ClientAPI";
import ProductAPI from "./controllers/ProductAPI";


export default class ClientRouter {
  private router: Router = Router({
    mergeParams: true
  });
  private static _instance: ClientRouter = new this();
  private constructor() {
    this.init();
  }

  public static get router(): Router {
    return this._instance.router;
  }

  private init() {
    this.router.get("/list", ClientAPI.view.list);
    this.router.post("/create", ClientAPI.view.create);
    this.router.put("/update", ClientAPI.view.update);
    this.router.delete("/delete/:id", ClientAPI.view.delete);

    this.router.get("/branch/list", BranchAPI.view.list);
    this.router.post("/branch/create", BranchAPI.view.create);
    this.router.put("/branch/update", BranchAPI.view.update);
    this.router.delete("/branch/delete/:id", BranchAPI.view.delete);

    this.router.get("/product/list", ProductAPI.view.list);
    this.router.post("/product/create", ProductAPI.view.create);
    this.router.put("/product/update", ProductAPI.view.update);
    this.router.delete("/product/delete/:id", ProductAPI.view.delete);
    
  }
}

