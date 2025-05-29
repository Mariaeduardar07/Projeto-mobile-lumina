import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = () => {
    if (!email) {
      setMensagem("Por favor, insira um e-mail válido.");
      return;
    }
    setMensagem("Obrigado por assinar!");
    setEmail("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Receba dicas exclusivas de autocuidado</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Seu e-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Assinar</Text>
        </TouchableOpacity>
      </View>
      {mensagem ? <Text style={styles.message}>{mensagem}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f8fd",
    padding: 24,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 24,
    width: "90%",
    alignSelf: "center",
  },
  title: {
    color: "#2563ad",
    fontWeight: "600",
    marginBottom: 18,
    fontSize: 18,
    textAlign: "center",
  },
  form: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    width: "100%",
    justifyContent: "center",
  },
  input: {
    padding: 10,
    borderRadius: 4,
    fontSize: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2563ad",
    flex: 1,
    marginRight: 8,
  },
  button: {
    backgroundColor: "#2563ad",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  message: {
    marginTop: 16,
    color: "#2563ad",
    fontWeight: "500",
    textAlign: "center",
  },
});

export default Newsletter;