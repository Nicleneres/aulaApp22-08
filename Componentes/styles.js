import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    fontWeight: '700'
  },
  titulo: {
    fontSize: 18,
    marginBottom: 20
  },  
  texto: {
    textAlign: "center"
  },
  imagem:{
    paddingTop: 400,
    width: 400,
    height: 600,
    resizeMode: 'stretch'
  }  
});

export default estilo;