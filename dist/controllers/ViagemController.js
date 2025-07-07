"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Viagem = require('../models/Viagem'); var _Viagem2 = _interopRequireDefault(_Viagem);
var _FotoViagem = require('../models/FotoViagem'); var _FotoViagem2 = _interopRequireDefault(_FotoViagem);

const select = {
  attributes: ['id', 'titulo', 'descricao', 'dias', 'valor', 'avaliacao', 'data', 'latitude', 'longitude'],
  order: [['data', 'DESC'], [_FotoViagem2.default, 'created_at', 'DESC']],
  include: {
    model: _FotoViagem2.default,
    attributes: ['url', 'filename']
  }
}

class ViagemController {
  async index(req, res) {
    // #swagger.tags = ['Viagens']
    // #swagger.description = 'Retorna todas as viagens'
    const trips = await _Viagem2.default.findAll(select);

    return res.json(trips);
  }

  async store(req, res) {
    // #swagger.tags = ['Viagens']
    // #swagger.description = 'Cria uma nova viagem'
    try {
      const trip = await _Viagem2.default.create(req.body);

      return res.status(201).json(trip);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async show(req, res) {
    // #swagger.tags = ['Viagens']
    // #swagger.description = 'Retorna uma viagem pelo seu ID'
    try {
      const { id } = req.params;
      const trip = await _Viagem2.default.findByPk(id, select);

      if (!trip) {
        return res.status(400).json({
          errors: ['Esta viagem não existe']
        });
      }

      return res.json(trip);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async update(req, res) {
    // #swagger.tags = ['Viagens']
    // #swagger.description = 'Edita uma viagem pelo seu ID'
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Envie o ID']
        });
      }

      const trip = await _Viagem2.default.findByPk(id, select);

      if (!trip) {
        return res.status(400).json({
          errors: ['Esta viagem não existe']
        });
      }

      const tripUpdated = await trip.update(req.body);

      return res.json(tripUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }

  async delete(req, res) {
    // #swagger.tags = ['Viagens']
    // #swagger.description = 'Deleta uma viagem pelo seu ID'
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Envie o ID']
        });
      }

      const trip = await _Viagem2.default.findByPk(id, select);

      if (!trip) {
        return res.status(400).json({
          errors: ['Esta viagem não existe']
        });
      }

      await trip.destroy();
      return res.json({
        mensagem: 'Viagem deletada com sucesso.'
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      });
    }
  }
}

exports. default = new ViagemController();