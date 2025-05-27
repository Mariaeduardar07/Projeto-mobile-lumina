import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CustomButton from "../components/customButton/CustomButton";
import { ImageBackground } from "react-native";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const url = "https://api.example.com/login"; // Substituir pela a API verdadeira e depois testar

  async function handleLogin() {
    try {
      const response = await axios.post(url, {
        email,
        password,
      });

      if (response.data) {
        Alert.alert("Login realizado com sucesso!");
        console.log("Token:", response.data.token); // ou salve no AsyncStorage
        // Aqui você pode redirecionar o usuário para outra tela
      }
    } catch (err) {
      console.error("Erro no login:", err);
      setError("Falha no login. Verifique suas credenciais.");
      Alert.alert(
        "Erro no login",
        err.response?.data?.message || "Falha na conexão"
      );
    }
  }

  return (
    <ImageBackground
      source={require("../assets/florTransparente.png")}
      style={styles.fundoImage}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Faça seu login</Text>
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
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {error ? <Text style={styles.errorMessage}>{error}</Text> : null}

          <CustomButton title="Entrar" onPress={handleLogin} />
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={styles.registerText}>Não tem uma conta?</Text>
            <TouchableOpacity
              onPress={() => {
                /* Navegar para cadastrar */
              }}
            >
              <Text style={styles.registerLink}> Cadastre-se</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: "transparent", // Deixe transparente para mostrar a imagem de fundo
  },
  fundoImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 60,
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
  },
  errorMessage: {
    color: "red",
    marginBottom: 10,
  },
  registerText: {
    fontSize: 14,
    textAlign: "center",
  },
  registerLink: {
    color: "#2196F3",
    fontWeight: "bold",
    fontSize: 14,
  },
});
