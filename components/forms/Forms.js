import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export default function Forms() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    "Excelente, estou adorando!",
    "Muito bom, mas pode melhorar",
    'razoável, espero mais conteúdo',
    "Não gostei, preciso de mais informações",
   
  ];

  const handleSubmit = () => {
    console.log("Resposta enviada:", options[selectedOption]);
    
    Alert.alert("Enviando resposta...");
    if (selectedOption !== null) {
      Alert.alert("Resposta enviada!", `Você selecionou: ${options[selectedOption]}`);
    } else {
      Alert.alert("Por favor, selecione uma opção.");
    }

    setSelectedOption(null)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>#QuizNoLumina</Text>
      <View style={styles.formContainer}>
        <Text style={styles.question}>o que você está achando do Lumina?</Text>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === index && styles.selectedOption,
            ]}
            onPress={() => setSelectedOption(index)}
          >
            <View style={styles.radioCircle}>
              {selectedOption === index && <View style={styles.selectedCircle} />}
            </View>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Avançar</Text>
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5faff",
    padding: width * 0.05,
    minHeight: height * 0.8,
  },
  title: {
    fontSize: width < 350 ? 20 : 24,
    fontWeight: "bold",
    color: "#0056b3",
    marginBottom: 20,
    textAlign: "center",
  },
  formContainer: {
    borderRadius: 10,
    padding: width * 0.05,
    width: width * 0.92,
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  question: {
    fontSize: width < 350 ? 16 : 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: width * 0.03,
    marginVertical: 5,
    backgroundColor: "#d9ecf9",
    borderRadius: 5,
    width: "100%",
  },
  selectedOption: {
    borderColor: "#0056b3",
    backgroundColor: "#b3d8f7",
    borderWidth: 1,
  },
  optionText: {
    fontSize: width < 350 ? 14 : 16,
    color: "#333",
    marginLeft: 10,
    flexShrink: 1,
  },
  radioCircle: {
    height: width < 350 ? 16 : 20,
    width: width < 350 ? 16 : 20,
    borderRadius: width < 350 ? 8 : 10,
    borderWidth: 2,
    borderColor: "#0056b3",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCircle: {
    height: width < 350 ? 8 : 10,
    width: width < 350 ? 8 : 10,
    borderRadius: width < 350 ? 4 : 5,
    backgroundColor: "#0056b3",
  },
  submitButton: {
    marginTop: 20,
    padding: width * 0.04,
    backgroundColor: "#0056b3",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: width < 350 ? 14 : 16,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 20,
    fontSize: width < 350 ? 14 : 16,
    color: "#0056b3",
    textDecorationLine: "underline",
  },
});