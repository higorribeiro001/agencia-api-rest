"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _viagemRoutes = require('./routes/viagemRoutes'); var _viagemRoutes2 = _interopRequireDefault(_viagemRoutes);
var _fotoViagemRoutes = require('./routes/fotoViagemRoutes'); var _fotoViagemRoutes2 = _interopRequireDefault(_fotoViagemRoutes);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);
var _swaggeroutputjson = require('./swagger-output.json'); var _swaggeroutputjson2 = _interopRequireDefault(_swaggeroutputjson);
var _bodyparser = require('body-parser'); var _bodyparser2 = _interopRequireDefault(_bodyparser);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_cors2.default.call(void 0, {
      origin: ['http://localhost:3000'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      credentials: true,
    }));

    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use(_bodyparser2.default.json());
    this.app.use('/docs', _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(_swaggeroutputjson2.default));
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, '..', 'uploads', 'images')));
  }

  routes() {
    this.app.use('/api/v1/viagens/', _viagemRoutes2.default);
    this.app.use('/api/v1/foto-viagens/', _fotoViagemRoutes2.default);
  }
}

exports. default = new App().app;