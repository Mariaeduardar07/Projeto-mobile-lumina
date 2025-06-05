import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0056b3",
    marginBottom: 20,
  },
  formContainer: {
 
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
  },
  question: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#d9ecf9",
    borderRadius: 5,
    width: "100%",
   
    
  },
  selectedOption: {
    borderColor: "#0056b3",
    backgroundColor: "#d9ecf9",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
    marginLeft: 10,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#0056b3",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#0056b3",
  },
  submitButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#0056b3",
    borderRadius: 5,
    width: "100%",
    alignItems: "center",
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    color: "#0056b3",
    textDecorationLine: "underline",
  },
});