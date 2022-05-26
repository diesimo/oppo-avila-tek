import { Sequelize } from "sequelize";
import { sequelize } from "../database/database";

// Se define el modelo usuario de la base de datos
const _User = sequelize.define(
  "usuario",
  {
    email: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    apellido: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tipo: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    headline: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    picture: {
      type: Sequelize.STRING.BINARY,
      allowNull: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

export default _User;
