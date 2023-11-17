import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import connect from './database/conn';
import UserRouter from 'apis/users/router';
import mongoSanitize from 'express-mongo-sanitize';
import swaggerUi from "swagger-ui-express";
import docs from "api.doc"
import ClientRouter from 'apis/client/router';
import CasesRouter from 'apis/cases/router';


const app = express();

/** middlewares */
app.use(express.json({ limit: '50mb' }));
// mongo sanitize to prevent nosql injection attacks
app.use(mongoSanitize());
app.use(
    cors({
        origin: ['http://localhost:3000', 'http://localhost:5173'],
        methods: 'GET,POST,PUT,DELETE',
        credentials: true,
    })
);
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const port = 8080;

/** HTTP GET Request */
app.get('/', (_, res) => {
    res.status(201).json("Home GET Request");
});

app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(docs, {
          customSiteTitle: "API Docs",
          customCss: ".swagger-ui .topbar { display: none }",
          customfavIcon:
            "https://cdn.pixabay.com/photo/2019/10/23/13/45/cloud-server-4571653_960_720.png",
}))

app.use("/api/v1/users", UserRouter.router)
app.use("/api/v1/clients", ClientRouter.router)
app.use("/api/v1/cases", CasesRouter.router)

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(() => {
    console.log("Invalid database connection...!");
})

