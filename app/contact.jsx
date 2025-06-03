import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
} from "react-native";
import CustomButton from "../components/customButton/CustomButton";
import { ImageBackground } from "react-native";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [info, setInfo] = useState("");

  async function handleContact() {
    if (!name || !email || !message) {
      setError("Preencha todos os campos.");
      return;
    }
    setError("");
    setInfo("");
    try {
      const response = await fetch("https://formspree.io/f/myzjyvdq", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      });
      if (response.ok) {
        Alert.alert("Mensagem enviada!", "Entraremos em contato em breve.");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Erro ao enviar mensagem. Tente novamente.");
      }
    } catch (err) {
      setError("Erro ao enviar mensagem. Tente novamente.");
    }
  }

  return (
    <ImageBackground
      source={require("../assets/florTransparente.png")}
      style={styles.fundoImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Entre em contato conosco</Text>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Mensagem"
            value={message}
            onChangeText={(text) => {
              setMessage(text);
              if (text.length > 0) {
                setInfo("Clique em Enviar para nos mandar sua mensagem!");
              } else {
                setInfo("");
              }
            }}
            multiline
            numberOfLines={4}
          />
          {info ? <Text style={styles.infoMessage}>{info}</Text> : null}
          {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

          <CustomButton title="Enviar" onPress={handleContact} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "transparent",
  },
  fundoImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
    marginBottom: 20,
    color: "#2b60ab",
    fontStyle: "italic",
    fontFamily: "sans-serif-light",
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 15,
    borderColor: "#a7d6ed",
    borderWidth: 1,
    marginBottom: 10,
    color: "#2b60ab",
    backgroundColor: "#fff",
    borderRadius: 5,
    textAlignVertical: "top",
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
  infoMessage: {
    color: "#2b60ab",
    marginBottom: 10,
    fontStyle: "italic",
  },
});