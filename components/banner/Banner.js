import React from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const Banner = ({
  title = "Título padrão",
  text = "Texto padrão",
  image,
  gradientColors = ["#ffffff00", "#a7d5ec"],
  style,
  imageStyle,
  children,
}) => {
  return (
    <View style={[styles.introduction, style]}>
      <View style={styles.bannerIntroduction}>
        <ImageBackground
          source={image}
          style={styles.bannerImage}
          imageStyle={[{ borderRadius: 15 }, imageStyle]}
        >
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
          >
            {children ? children : (
              <>
                <Text style={styles.titleIntroduction}>{title}</Text>
                <Text style={styles.textIntroduction}>{text}</Text>
              </>
            )}
          </LinearGradient>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  introduction: {
    width: "90%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  bannerIntroduction: {
    borderRadius: 15,
    width: "100%",
    height: 200,
    minHeight: 150,
    justifyContent: "center",
    overflow: "hidden",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    padding: 16,
  },
  titleIntroduction: {
    fontSize: width < 350 ? 25 : 30,
    fontWeight: "500",
    color: "white",
    textAlign: "justify",
    width: "100%",
    marginBottom: 8,
  },
  textIntroduction: {
    fontSize: width < 350 ? 15 : 18,
    color: "#2b60ab",
    textAlign: "justify",
    width: "100%",
  },
});

export default Banner;