import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/user/user.routes';
import routeNotFound from './app/middlewares/routeNotFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.use(globalErrorHandler)

// not found route
app.use(routeNotFound)

export default app;
