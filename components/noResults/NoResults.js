import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const NoResults = ({
  title = "Nada encontrado",
  text = "Nenhuma página corresponde à sua pesquisa.",
  gradientColors = ["#b6c6e2", "#e3eaf7"],
  style,
}) => {
  return (
    <View style={[styles.card, style]}>
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 16,
    marginVertical: 24,
    shadowRadius: 8,
    elevation: 3,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  gradient: {
    padding: 28,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: width < 350 ? 22 : 26,
    fontWeight: "bold",
    color: "#2b60ab",
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    fontSize: width < 350 ? 15 : 17,
    color: "#1e293b",
    textAlign: "center",
  },
});

export default NoResults;