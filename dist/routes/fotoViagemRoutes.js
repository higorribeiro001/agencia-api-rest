"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _FotoViagemController = require('../controllers/FotoViagemController'); var _FotoViagemController2 = _interopRequireDefault(_FotoViagemController);

const router = new (0, _express.Router)();

router.post('/', _FotoViagemController2.default.store);

exports. default = router;