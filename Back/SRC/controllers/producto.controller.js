import _Producto from "../models/Productos";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Crear un usuario
export async function createProducto(req, res) {
  const { id_usuario, nombre, id_topic, descripcion, logo } = req.body;

  try {
    let newProducto = await _Producto.create(
      {
        id_topic,
        id_usuario,
        nombre,
        descripcion,
        date,
        logo,
      },
      {
        fields: [
          "id_topic",
          "id_usuario",
          "nombre",
          "descripcion",
          "date",
          "logo",
        ],
      }
    );
    if (newProducto) {
      return res.json({
        message: "Project created successfully",
        data: newProducto,
      });
    }
  } catch (error) {
    //para observar el error
    console.log(error);
    res.status(500).json({
      message: "Algo ha salido mal",
      data: [],
    });
  }
}

//Obtener todos los productos
export async function getProducto(req, res) {
  try {
    const productos = await _Producto.findAll();
    res.json({
      data: productos,
    });
  } catch (error) {
    console.log(error);
  }
}
