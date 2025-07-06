import { Sequelize } from "sequelize";
import databaseConfig from '../config/database';
import Viagem from "../models/Viagem";
import FotoViagem from "../models/FotoViagem";

const models = [Viagem, FotoViagem];

const connection = new Sequelize(databaseConfig);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));