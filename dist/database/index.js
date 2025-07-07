"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Viagem = require('../models/Viagem'); var _Viagem2 = _interopRequireDefault(_Viagem);
var _FotoViagem = require('../models/FotoViagem'); var _FotoViagem2 = _interopRequireDefault(_FotoViagem);

const models = [_Viagem2.default, _FotoViagem2.default];

const connection = new (0, _sequelize.Sequelize)(_database2.default);

models.forEach(model => model.init(connection));
models.forEach(model => model.associate && model.associate(connection.models));