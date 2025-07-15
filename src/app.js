import dotenv from 'dotenv';
import { resolve } from 'path';
import cors from 'cors';

dotenv.config();

import './database';

import express from 'express';
import viagemRoutes from './routes/viagemRoutes';
import fotoViagemRoutes from './routes/fotoViagemRoutes';
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger-output.json';
import bodyParser from 'body-parser';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors({
      origin: ['*'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      credentials: true,
    }));

    this.app.options('*', cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(bodyParser.json());
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
    this.app.use('/images/', express.static(resolve(__dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/api/v1/viagens/', viagemRoutes);
    this.app.use('/api/v1/foto-viagens/', fotoViagemRoutes);
  }
}

export default new App().app;