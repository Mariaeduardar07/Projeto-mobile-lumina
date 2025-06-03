import React from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const Banner = ({
  title = "Título padrão",
  text = "Texto padrão",
  image,
  gradientColors = ["rgba(0,0,0,0.6)", "rgba(167,213,236,0.8)"],
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
            start={{ x: 0, y: 1}}
            end={{ x: 0, y: 1}}
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
    justifyContent: "center",
    overflow: "hidden",
    marginTop: 50,
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
    color: "#2b60ab",
    textAlign: "justify",
    width: "100%",
    marginBottom: 8,
  },
  textIntroduction: {
    fontSize: width < 350 ? 15 : 18,
    color: "#000",
    textAlign: "justify",
    width: "100%",
  },
});

export default Banner;