import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function CustomButton({ title, onPress, style, textStyle }) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#a7d5ec",
    paddingVertical: 14,
    paddingHorizontal: 32,
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    padding: 15,
    marginBottom: 10,
  },
  buttonText: {
    color: "#2b60ab",
    fontSize: 18,
    fontWeight: "bold",
  },
});
