import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Formulario from "./src/componentes/Formulario";

export default function App() {
  const [busqueda, setBusqueda] = useState({ pais: "" });

  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <View style={styles.contenido}>
        <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} />
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
