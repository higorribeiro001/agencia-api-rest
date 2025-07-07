"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _FotoViagem = require('../models/FotoViagem'); var _FotoViagem2 = _interopRequireDefault(_FotoViagem);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('foto');

class FotoViagemController {
  store(req, res) {
    // #swagger.tags = ['Fotos de Viagens']
    // #swagger.description = 'Faz upload de uma imagem para uma viagem'
    return upload(req, res, async (error) => {
      if(error) {
        return res.status(400).json({
          errors: [error]
        })
      }

      try {
        const { originalname, filename } = req.file;
        const { viagem_id } = req.body;
        const photo = await _FotoViagem2.default.create({ originalname, filename, viagem_id });

        return res.json(photo);
      } catch (e) {
        return res.status(400).json({
          errors: ['Viagem não existe.']
        })
      }
    });
  }
}

exports. default = new FotoViagemController();