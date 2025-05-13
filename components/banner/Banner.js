import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
    width: "90%",
    height: 200,
    backgroundColor: "#a7d6ed",
    borderRadius: 15,
    padding: 20,
  },
  titleIntroduction: {
    fontSize: 26,
    fontWeight: "500",
    color: "#fff",
  },
  textIntroduction: {
    fontSize: 16,
    color: "#2b60ab",
  },
});

export default Banner;