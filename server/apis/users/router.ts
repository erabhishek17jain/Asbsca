import { Router } from "express";
import RolesAPI from "./controllers/RolesAPI";
import LoginAPI from "./controllers/LoginAPI";
import UserAPI from "./controllers/UserAPI";
import authMiddleware from "middleware/auth.middleware";

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
    this.router.put("/roles/update", RolesAPI.view.update);
    this.router.delete("/roles/delete", RolesAPI.view.delete);

    this.router.get("/list", UserAPI.view.getUsers);
    this.router.post("/create", UserAPI.view.addUser);
    this.router.put("/update", UserAPI.view.updateUser);
    this.router.delete("/delete/:id", UserAPI.view.deleteUser);

    this.router.get("/self-detail", authMiddleware, UserAPI.view.selfDetails);
  }
}


