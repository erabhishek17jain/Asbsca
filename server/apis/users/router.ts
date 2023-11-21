import { Router } from "express";
import RolesAPI from "./controllers/RolesAPI";
import LoginAPI from "./controllers/LoginAPI";
import UserAPI from "./controllers/UserAPI";
import authMiddleware from "middleware/auth.middleware";
import Auth from "middleware/auth.middleware";

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
    this.router.get("/roles/list", Auth.isadmin, RolesAPI.view.get);
    this.router.post("/roles/create", Auth.isadmin, RolesAPI.view.create);
    this.router.put("/roles/update", Auth.isadmin, RolesAPI.view.update);
    this.router.delete("/roles/delete", Auth.isadmin, RolesAPI.view.delete);

    this.router.get("/list", Auth.isadmin, UserAPI.view.getUsers);
    this.router.post("/create", Auth.isadmin, UserAPI.view.addUser);
    this.router.put("/update", Auth.isadmin, UserAPI.view.updateUser);
    this.router.delete("/delete/:id", Auth.isadmin, UserAPI.view.deleteUser);

    this.router.post("/self-register", UserAPI.view.verifyUser);
    this.router.get("/self-detail", Auth.isuser, UserAPI.view.selfDetails);
    this.router.put("/self-update", Auth.isuser, UserAPI.view.selfUpdate);
  }
}


