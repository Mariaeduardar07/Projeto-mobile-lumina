import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const Banner = ({
  title = "Título padrão",
  text = "Texto padrão",
  gradientColors = ["rgba(167, 213, 236, 0.49)","rgba(167,213,236,0.8)",],
  style,
  children,
}) => {
  return (
    <View style={[styles.introduction, style]}>
      <View style={styles.bannerIntroduction}>
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
    marginTop: 15,
    marginBottom: 15,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 15,
    padding: 16,
  },
  titleIntroduction: {
    fontSize: width < 350 ? 25 : 30,
    fontWeight: "700", // mais destaque
    color: "#f4f4f4", // branco para contraste
    textAlign: "left", // ou "center"
    marginBottom: 8,
  },
  textIntroduction: {
    fontSize: width < 350 ? 15 : 18,
    color: "#ffff",
    textAlign: "justify",
    width: "100%",
  },
});

export default Banner;