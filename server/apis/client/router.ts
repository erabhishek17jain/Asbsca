import { Router } from "express";
import BranchAPI from "./controllers/BranchAPI";
import ClientAPI from "./controllers/ClientAPI"


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

  }
}

