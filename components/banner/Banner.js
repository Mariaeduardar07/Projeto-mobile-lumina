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
    width: width * 0.9,
    height: 200,
    backgroundColor: "#a7d6ed",
    borderRadius: 15,
    padding: 20,
  },
  titleIntroduction: {
    fontSize: width < 350 ? 20 : 26,
    fontWeight: "500",
    color: "#fff",
  },
  textIntroduction: {
    fontSize: width < 350 ? 13 : 16,
    color: "#2b60ab",
  },
});

export default Banner;