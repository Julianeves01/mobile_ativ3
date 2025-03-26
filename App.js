import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { TextInput } from "react-native-web";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Arrasei mores!</Text>
      <TextInput placeholder="Digite seu nome" style={styles.input} ></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Clique aqui!</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.enviar}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2B8C6",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },

  input: {
    width: '80%',
    height: 40,
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#eb9ac0',
    padding: 10,
    borderRadius: 7,
    marginTop: 10,
    alignItems: 'center',
  },

  enviar: {
    backgroundColor: '#eb9ac0',
    padding: 10,
    borderRadius: 7,
    marginTop: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



