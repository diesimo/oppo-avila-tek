import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import axios from "axios";

const URI = "http://localhost:4000/api/users/login/";

export default function Login(estado, cambiarEstado) {
  return (
    <>
      <Formik
        initialValues={{
          correo: "",
          password: "",
        }}
        validate={(valores) => {
          let errores = {};

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
          const res = await axios.get(URI);

          //resetForm(); //limpia el formumario
          console.log("enviado");
        }}
      >
        {({ errors }) => (
          <Form className="formulario">
            <div>
              <label>Correo</label>
              <Field
                type="correo"
                id="correo"
                name="correo"
                placeholder="Ingrese su correo"
              ></Field>
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              ></ErrorMessage>
            </div>

            <div>
              <label>Password</label>
              <Field
                type="text"
                id="password"
                name="password"
                placeholder="Ingrese una contraseña"
              ></Field>
            </div>
            <button type="submit"> Registrarse</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
