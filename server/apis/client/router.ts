import { Router } from "express";
import BranchAPI from "./controllers/BranchAPI";
import ClientAPI from "./controllers/ClientAPI";
import ProductAPI from "./controllers/ProductAPI";
import Auth from "middleware/auth.middleware";


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
    this.router.get("/list", Auth.isadmin, ClientAPI.view.list);
    this.router.post("/create", Auth.isadmin, ClientAPI.view.create);
    this.router.put("/update", Auth.isadmin, ClientAPI.view.update);
    this.router.delete("/delete/:id", Auth.isadmin, ClientAPI.view.delete);

    this.router.get("/branch/list", Auth.isadmin, BranchAPI.view.list);
    this.router.post("/branch/create", Auth.isadmin, BranchAPI.view.create);
    this.router.put("/branch/update", Auth.isadmin, BranchAPI.view.update);
    this.router.delete("/branch/delete/:id", Auth.isadmin, BranchAPI.view.delete);

    this.router.get("/product/list", Auth.isadmin, ProductAPI.view.list);
    this.router.post("/product/create", Auth.isadmin, ProductAPI.view.create);
    this.router.put("/product/update", Auth.isadmin, ProductAPI.view.update);
    this.router.delete("/product/delete/:id", Auth.isadmin, ProductAPI.view.delete);
    
  }
}

