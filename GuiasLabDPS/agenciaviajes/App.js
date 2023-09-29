import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
} from "react-native";

export default function App() {
  const [modalVisiblePlaya, setModalVisiblePlaya] = useState(false);
  return (
    <>
      <ScrollView>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisiblePlaya}
          onRequestClose={() => {
            alert("El modal ha sido cerrado");
          }}
        >
          <View style={styles.vistaModal}>
            <View style={styles.Modal}>
              <Text style={styles.subtitulo}>Ir a la playa</Text>
              <Text>
                El Salvador cuenta con hermosas playas a nivel de Centroamérica.
              </Text>
              <Button
                title="Cerrar"
                onPress={() => {
                  setModalVisiblePlaya(!modalVisiblePlaya);
                }}
              ></Button>
            </View>
          </View>
        </Modal>

        <View style={{ flexDirection: "row" }}>
          <Image style={styles.banner} source={require("./img/bg.jpg")} />
        </View>
        <Text style={styles.titulo}>¿Que hacer en El Salvador</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisiblePlaya(!modalVisiblePlaya);
              }}
            >
              <Image
                style={styles.ciudad}
                source={require("./img/actividad1.jpg")}
              />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./img/actividad1.jpg")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./img/actividad2.jpg")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./img/actividad3.jpg")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./img/actividad4.jpg")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./img/actividad5.jpg")}
            ></Image>
          </View>
        </ScrollView>

        <Text style={styles.titulo}>Platillos Salvadoreños</Text>
        <View>
          <View>
            <Image
              style={styles.mejores}
              source={require("./img/mejores1.jpg")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require("./img/mejores2.jpg")}
            ></Image>
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require("./img/mejores3.jpg")}
            ></Image>
          </View>
        </View>

        <Text style={styles.titulo}>Rutas Turisticas</Text>
        <View style={styles.listado}>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./img/ruta1.jpg")}
            ></Image>
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./img/ruta2.jpg")}
            ></Image>
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./img/ruta3.jpg")}
            ></Image>
          </View>
          <View style={styles.listaItem}>
            <Image
              style={styles.mejores}
              source={require("./img/ruta4.jpg")}
            ></Image>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 250,
    flex: 1,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  ciudad: {
    width: 250,
    height: 250,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  vistaModal: {
    flex: 1,
    backgroundColor: "#000000aa",
  },
  Modal: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
  },
});
