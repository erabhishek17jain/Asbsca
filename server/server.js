import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import connect from './database/conn.js';
import router from './router/route.js';

const app = express();

/** middlewares */
app.use(express.json({ limit: '50mb' }));
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
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

/** api routes */
app.use('/api', router)

/** start server only when we have valid connection */
connect().then(() => {
    try {
        app.listen(port, () => {
            console.log(`Server connected to http://localhost:${port}`);
        })
    } catch (error) {
        console.log('Cannot connect to the server')
    }
}).catch(error => {
    console.log("Invalid database connection...!");
})

