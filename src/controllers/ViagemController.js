import Viagem from "../models/Viagem";
import FotoViagem from "../models/FotoViagem";

const select = {
  attributes: ['id', 'titulo', 'descricao', 'dias', 'valor', 'avaliacao', 'data', 'latitude', 'longitude'],
  order: [['data', 'DESC'], [FotoViagem, 'created_at', 'DESC']],
  include: {
    model: FotoViagem,
    attributes: ['url', 'filename']
  }
}

class ViagemController {
  async index(req, res) {
    // #swagger.tags = ['Viagens']
    // #swagger.description = 'Retorna todas as viagens'
    const trips = await Viagem.findAll(select);

    return res.json(trips);
  }

  async store(req, res) {
    // #swagger.tags = ['Viagens']
    // #swagger.description = 'Cria uma nova viagem'
    /*
      #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
          titulo: 'Rio de Janeiro',
          descricao: 'Viagem para o Rio com hotel incluso',
          dias: 5,
          valor: 1500.0,
          avaliacao: 4,
          latitude: -22.9035,
          longitude: -43.2096,
          data: '2025-10-02',
          vagas: 100
        }
      }
    */
    try {
      const trip = await Viagem.create(req.body);

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
      const trip = await Viagem.findByPk(id, select);

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
    /*
      #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
          id: '94c67a6b-ccbb-4ab3-a683-3ce924592aa0',
          titulo: 'Rio de Janeiro',
          descricao: 'Viagem para o Rio com hotel incluso',
          dias: 5,
          valor: 1500.0,
          avaliacao: 4,
          latitude: -22.9035,
          longitude: -43.2096,
          data: '2025-10-02',
          vagas: 100
        }
      }
    */
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Envie o ID']
        });
      }

      const trip = await Viagem.findByPk(id, select);

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

      const trip = await Viagem.findByPk(id, select);

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

export default new ViagemController();