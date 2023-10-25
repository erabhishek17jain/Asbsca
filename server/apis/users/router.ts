import { Router } from "express";
import RolesAPI from "./controllers/RolesAPI";
import LoginAPI from "./controllers/LoginAPI";


export default class UserRouter {
  private router: Router = Router({
    mergeParams: true
  });
  private static _instance: UserRouter = new this();
  private constructor() {
    this.init();
  }

  public static get router(): Router {
    return this._instance.router;
  }

  private init(): void {
    this.router.post("/login", LoginAPI.view.login);
    this.router.get("/roles/list", RolesAPI.view.get);
    this.router.post("/roles/create", RolesAPI.view.create);
    this.router.post("/roles/update", RolesAPI.view.update);
    this.router.post("/roles/delete", RolesAPI.view.delete);
  };
  
}


