import Sequelize, { Model } from "sequelize";

export default class Viagem extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      titulo: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Titulo deve ter entre 3 e 255 caracteres.'
          }
        }
      },
      descricao: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Descrição deve ter entre 3 e 255 caracteres.'
          }
        }
      },
      dias: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        validate: {
          isInt: {
            msg: 'Dias precisas ser um número inteiro.'
          }
        }
      },
      valor: {
        type: Sequelize.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Valor precisas ser um número flutuante.'
          }
        }
      },
      avaliacao: {
        type: Sequelize.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Avaliação precisas ser um número flutuante.'
          }
        }
      },
      latitude: {
        type: Sequelize.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Latitude precisas ser um número flutuante.'
          }
        }
      },
      longitude: {
        type: Sequelize.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Longitude precisas ser um número flutuante.'
          }
        }
      },
      data: {
        type: Sequelize.DATE,
        defaultValue: 1,
        validate: {
          notEmpty: {
            msg: 'A data não pode ser vazia.'
          }
        }
      },
      vagas: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        validate: {
          isInt: {
            msg: 'Dias precisas ser um número inteiro.'
          }
        }
      },
    }, {
      sequelize,
      modelName: 'Viagem',
      tableName: 'viagens',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.FotoViagem, { foreignKey: 'viagem_id' });
  }
}