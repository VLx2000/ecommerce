import express, { Application } from 'express';
import routes from './routes';
import cors from 'cors';

const cors_config = cors();
const port = process.env.PORT || '9000';

export const start = () => {
    const app: Application = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors_config);
    app.use('/', routes);

    try {
        app.listen(port, () => {
            console.log(`Running on port: ${port}`);
        })
    } catch (error: any) {
        console.log(error)
    }
}

start();