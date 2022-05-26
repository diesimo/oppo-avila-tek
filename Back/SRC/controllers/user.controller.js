import _User from "../models/Users";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Crear un usuario
export async function createUser(req, res) {
  const { email, nombre, apellido, password } = req.body;

  try {
    let newUser = await _User.create(
      {
        email,
        nombre,
        apellido,
        password: bcrypt.hashSync(password, 10), //ciframos contraseña
      },
      {
        fields: ["email", "nombre", "apellido", "password"],
      }
    );
    if (newUser) {
      return res.json({
        message: "Project created successfully",
        data: newUser,
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

//Obtener los usuarios
export async function getUsers(req, res) {
  try {
    const usuarios = await _User.findAll();
    res.json({
      data: usuarios,
    });
  } catch (error) {
    console.log(error);
  }
}

// Obtener un usuario
export async function getOneUser(req, res) {
  try {
    const { id_usuario } = req.params;
    const usuario = await _User.findOne({
      where: {
        id_usuario: id_usuario,
      },
    });
    res.json(usuario);
  } catch (error) {
    console.log(error);
  }
}

// Obtener usuario para logeuar
export async function getOneUserEmail(req, res) {
  try {
    const { email, password } = req.body;

    _User
      .findOne({
        where: {
          email: email,
        },
      })
      .then((user) => {
        if (!user) {
          res.status(404).json({ msg: "Usuario no encontrado" });
        } else {
          // Se comparan las contraseñas

          if (bcrypt.compareSync(password, user.password)) {
            // Devolvemos token si la contraseña es la misma
            jwt.sign({ user }, "secretkey", (err, token) => {
              res.json({
                user: user,
                token: token,
              });
            });
          } else {
            res.status(401).json({ msg: "Contraseña incorrecta" });
          }
        }
      });
  } catch (error) {
    console.log(error);
  }
}

//Actualizar usuario
export async function updateUser(req, res) {
  const { id_usuario } = req.params;
  const { email, nombre, apellido, headline, password, picture } = req.body;

  const usuarios = await _User.findAll({
    attibutes: ["nombre", "apellido", "password", "headline", "picture"],
    where: {
      id_usuario: id_usuario,
    },
  });

  if (usuarios.length > 0) {
    usuarios.forEach(async (usuario) => {
      await usuario.update({
        nombre,
        apellido,
        password,
        headline,
        picture,
      });
    });
  }
  return res.json({
    message: "Project Update Succesfully",
    data: usuarios,
  });
}
