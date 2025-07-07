"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Viagem extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      id: {
        type: _sequelize2.default.UUID,
        defaultValue: _sequelize2.default.UUIDV4,
        primaryKey: true,
      },
      titulo: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Titulo deve ter entre 3 e 255 caracteres.'
          }
        }
      },
      descricao: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Descrição deve ter entre 3 e 255 caracteres.'
          }
        }
      },
      dias: {
        type: _sequelize2.default.INTEGER,
        defaultValue: 1,
        validate: {
          isInt: {
            msg: 'Dias precisas ser um número inteiro.'
          }
        }
      },
      valor: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Valor precisas ser um número flutuante.'
          }
        }
      },
      avaliacao: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Avaliação precisas ser um número flutuante.'
          }
        }
      },
      latitude: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Latitude precisas ser um número flutuante.'
          }
        }
      },
      longitude: {
        type: _sequelize2.default.FLOAT,
        defaultValue: 1,
        validate: {
          isFloat: {
            msg: 'Longitude precisas ser um número flutuante.'
          }
        }
      },
      data: {
        type: _sequelize2.default.DATE,
        defaultValue: 1,
        validate: {
          notEmpty: {
            msg: 'A data não pode ser vazia.'
          }
        }
      },
      vagas: {
        type: _sequelize2.default.INTEGER,
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
} exports.default = Viagem;