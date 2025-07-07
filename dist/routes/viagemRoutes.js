"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ViagemController = require('../controllers/ViagemController'); var _ViagemController2 = _interopRequireDefault(_ViagemController);

const router = new (0, _express.Router)();

router.get('/', _ViagemController2.default.index);
router.post('/', _ViagemController2.default.store);
router.get('/:id', _ViagemController2.default.show);
router.patch('/:id', _ViagemController2.default.update);
router.delete('/:id', _ViagemController2.default.delete);

exports. default = router;