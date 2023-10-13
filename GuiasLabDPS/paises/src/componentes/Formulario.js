import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";
import { paises } from "../data/paises";

const Formulario = ({ busqueda, guardarBusqueda }) => {
  const { pais } = busqueda;
  return (
    <>
      <View>
        <View>
          <Text style={styles.input}>Pais</Text>
        </View>
        <Picker style={styles.itemPais} selectedValue={pais}>
          {paises.map((ele) => (
            <Picker.Item label={ele.label} value={ele.value} />
          ))}
        </Picker>
        <TouchableNativeFeedback>
          <View style={styles.btnBuscar}>
            <Text style={styles.textoBuscar}>Buscar País</Text>
          </View>
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
