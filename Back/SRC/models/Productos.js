import { Sequelize } from "sequelize";
import { sequelize } from "../database/database";

// Se define el modelo usuario de la base de datos
const _Producto = sequelize.define(
  "producto",
  {
    id_producto: {
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    id_usuario: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    id_topic: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    date: {
      type: Sequelize.DATE,
      allowNull: true,
    },

    logo: {
      type: Sequelize.STRING.BINARY,
      allowNull: true,
    },
  },
  { freezeTableName: true, timestamps: false }
);

export default _Producto;
