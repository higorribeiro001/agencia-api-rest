import Sequelize, { Model } from "sequelize";
import appConfig from "../config/appConfig";

export default class FotoViagem extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.'
          }
        }
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio.'
          }
        }
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }
      },
    }, {
      sequelize,
      modelName: 'FotoViagem',
      tableName: 'foto_viagens',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Viagem, { foreignKey: 'viagem_id' });
  }
}