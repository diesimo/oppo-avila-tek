import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";

//URL para hacer post de un registro
const URI = "http://localhost:4000/api/users/register";

export default function Register(estado, cambiarEstado) {
  return (
    <div className="formulario">
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          correo: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};
          //validacion nombre
          if (!valores.nombre) {
            errores.nombre = "Por favor ingrese un nombre";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          //validacion apellido
          if (!valores.apellido) {
            errores.apellido = "Por favor ingrese un apellido";
          } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.apellido =
              "El nombre solo puede contener letras y espacios";
          }

          //validacion correo
          if (!valores.correo) {
            errores.correo = "Por favor ingrese un correo";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
              valores.correo
            )
          ) {
            errores.correo =
              "El correo solo puede tener letras, numeros, puntos y guiones bajos";
          }
          return errores;
        }}
        onSubmit={async (valores) => {
          await axios.post(URI, {
            nombre: valores.nombre,
            apellido: valores.apellido,
            email: valores.correo,
            password: valores.password,
          });

          //resetForm(); //limpia el formumario
          console.log("enviado");
          // cambiarEstado(!estado);
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div className="input">
              <label>Nombre</label>
              <Field
                className="input"
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingrese su nombre"
              ></Field>
              <ErrorMessage
                className="Error"
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              ></ErrorMessage>
            </div>
            <div>
              <label>Apellido</label>
              <Field
                className="input"
                type="text"
                id="apellido"
                name="apellido"
                placeholder="Ingrese su apellido"
              ></Field>
              <ErrorMessage
                className="Error"
                name="apellido"
                component={() => <div className="error">{errors.apellido}</div>}
              ></ErrorMessage>
            </div>
            <div>
              <label>Correo</label>
              <Field
                className="input"
                type="correo"
                id="correo"
                name="correo"
                placeholder="Ingrese su correo"
              ></Field>
              <ErrorMessage
                className="Error"
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              ></ErrorMessage>
            </div>

            <div>
              <label>Password</label>
              <Field
                className="input"
                type="password"
                id="password"
                name="password"
                placeholder="Ingrese una contraseña"
              ></Field>
            </div>
            <button type="submit"> Registrarse</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
