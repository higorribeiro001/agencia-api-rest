import multer from "multer";
import multerConfig from "../config/multerConfig";
import FotoViagem from "../models/FotoViagem";

const upload = multer(multerConfig).single('foto');

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
        const photo = await FotoViagem.create({ originalname, filename, viagem_id });

        return res.json(photo);
      } catch {
        return res.status(400).json({
          errors: ['Viagem não existe.']
        })
      }
    });
  }
}

export default new FotoViagemController();