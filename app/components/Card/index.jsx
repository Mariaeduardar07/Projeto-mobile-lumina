import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PolaroidCard = ({ imageUri, title, description }) => {
  return (
    <View style={styles.polaroidCard}>
      <Image source={{ uri: imageUri }} style={styles.polaroidImage} />
      <Text style={styles.polaroidTitle}>{title}</Text>
      <Text style={styles.polaroidDescription}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  polaroidCard: {
    width: 100,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: "center",
    padding: 20,
    marginBottom: 20,
  },
  polaroidImage: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  polaroidTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2b60ab",
    marginBottom: 5,
  },
  polaroidDescription: {
    fontSize: 14,
    color: "#8b8b8b",
    textAlign: "center",
  },
});

export default PolaroidCard;