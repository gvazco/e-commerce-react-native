import React from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyles } from "../../styles";

export default function RegisterForm(props) {
  const { changeForm } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: (formData) => {
      console.log("Registro del usuario enviado");
      console.log(formData);
    },
  });

  return (
    <View>
      <TextInput
        onChangeText={(text) => formik.setFieldValue("email", text)}
        label="Email"
        style={formStyles.input}
      />
      <TextInput
        onChangeText={(text) => formik.setFieldValue("username", text)}
        label="Nombre de Usuario "
        style={formStyles.input}
      />
      <TextInput
        onChangeText={(text) => formik.setFieldValue("password", text)}
        label="Contraseña"
        style={formStyles.input}
        secureTextEntry
      />
      <TextInput
        onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
        label="Repetir Contraseña"
        style={formStyles.input}
        secureTextEntry
      />
      <Button
        mode="contained"
        style={formStyles.btnSuccess}
        onPress={formik.handleSubmit}
      >
        Registrarse
      </Button>
      <Button
        mode="text"
        style={formStyles.btnText}
        labelStyle={formStyles.btnTextLabel}
        onPress={changeForm}
      >
        Iniciar Sesión
      </Button>
    </View>
  );
}

function initialValues() {
  return {
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  };
}
