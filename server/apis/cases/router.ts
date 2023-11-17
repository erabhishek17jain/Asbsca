import { Router } from "express";
import AddCasesAPI from "./controllers/AddCasesAPI";
import ListCasesAPI from "./controllers/ListCasesAPI";
import AssignCaseAPI from "./controllers/AssignCaseAPI";
import AnalyticsAPI from "./controllers/AnalyticsAPI";
import Auth from "middleware/auth.middleware";


export default class CasesRouter {
    private router: Router = Router({
        mergeParams: true
    });

    private static _instance: CasesRouter = new this();
    private constructor() {
        this.init();
    }

    public static get router(): Router {
        return this._instance.router;
    }

    private init(): void {
        this.router.get("/list", Auth.isuser, ListCasesAPI.api.get);
        this.router.post("/create", Auth.isadmin, AddCasesAPI.api.post);
        this.router.post("/assign", Auth.isadmin, AssignCaseAPI.api.assign);
        this.router.get("/analytics", Auth.isuser, AnalyticsAPI.api.get)
    }
}
