import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const Banner = ({ title, text }) => {
  return (
    <View style={styles.introduction}>
      <Text style={styles.titleIntroduction}>{title}</Text>
      <Text style={styles.textIntroduction}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
   introduction: {
    width: "100%",
    borderRadius: 15,
    paddingHorizontal: 10,// Ajusta o espaçamento
    paddingVertical: 2, // Ajusta o espaçamento
    justifyContent: "center", 
    alignItems: "center",    
  },
  titleIntroduction: {
    fontSize: width < 350 ? 20 : 26,
    fontWeight: "500",
    color: "#fff",
    textAlign: "justify",      // Centraliza o título
    width: "100%",            // Garante centralização
    marginBottom: 8,
  },
  textIntroduction: {
    fontSize: width < 350 ? 13 : 16,
    color: "#2b60ab",
    textAlign: "justify",     // Justifica o texto
    width: "100%",            // Garante centralização visual
  },
});
export default Banner;