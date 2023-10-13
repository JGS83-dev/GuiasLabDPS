import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import paises from "../data/paises";

const Formulario = ({ busqueda, guardarBusqueda, guardarConsulta }) => {
  const { pais } = busqueda;
  const consultarPais = () => {
    if (pais.trim() === "") {
      mostrarAlerta();
      return;
    }

    guardarConsulta(true);
  };

  const mostrarAlerta = () => {
    Alert.alert("Error", "Debe seleccionar un pais", [{ Text: "Entendido" }]);
  };

  const animacionSalida = () => {
    Animated.spring(animacionBoton, {
      toValue: 1,
      useNativeDriver: true,
      duration: 500,
    }).start();
  };

  const estiloAnimacion = () => {
    transform: [{ scale: animacionBoton }];
  };

  return (
    <>
      <View>
        <View>
          <Text style={styles.input}>Pais</Text>
        </View>
        <Picker
          style={styles.itemPais}
          selectedValue={pais}
          onValueChange={(pais) => guardarBusqueda({ ...busqueda, pais })}
          onPress={() => consultarPais()}
        >
          {paises.map((ele) => (
            <Picker.Item label={ele.label} value={ele.value} />
          ))}
        </Picker>
        <TouchableNativeFeedback
          onPressIn={() => animacionEntrada()}
          onPressOut={() => animacionSalida()}
          onPress={() => consultarPais()}
        >
          <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
            <View style={styles.btnBuscar}>
              <Text style={styles.textoBuscar}>Buscar País</Text>
            </View>
          </Animated.View>
        </TouchableNativeFeedback>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 10,
    height: 50,
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  itemPais: {
    height: 60,
    backgroundColor: "#fff",
  },
  btnBuscar: {
    marginTop: 20,
    height: 50,
    backgroundColor: "#000",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  textoBuscar: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 18,
  },
});

export default Formulario;
