import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Formulario from "./src/componentes/Formulario";

export default function App() {
  const [busqueda, setBusqueda] = useState({ pais: "" });
  const [consultar, setconsultar] = useState(false);
  const [resultado, setresultado] = useState({});

  useEffect(() => {
    const { pais } = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        const url = `https://servicodados.ibge.gov.br/api/docs/paises/${pais}`;
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setresultado(resultado);
          setconsultar(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarPais();
  }, [consultar]);

  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <View style={styles.contenido}>
        <Formulario
          busqueda={busqueda}
          guardarBusqueda={setBusqueda}
          guardarConsulta={setconsultar}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(71,149,212)",
    justifyContent: "center",
  },
  contenido: {
    margin: "2.5%",
  },
});
