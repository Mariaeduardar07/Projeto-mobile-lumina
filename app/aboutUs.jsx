import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function AboutUs() {
  return (
    <View style={styles.containerAboutUs}>
      <View styles={styles.introduction}>
        <Text style={styles.titleIntroduction}>
          Seja bem-vinda ao nosso mundo.
        </Text>
        <Text style={styles.textIntroduction}>
          Somos cinco amigas unidas pela paixão por beleza, tecnologia e
          criatividade. A Lumina nasceu para inspirar, compartilhar dicas
          sinceras e celebrar a liberdade de se sentir bem com quem você é. Com
          uma Product Owner, uma Scrum Master e três desenvolvedoras, criamos
          este cantinho com carinho — pra iluminar seu dia com conteúdo feito de
          coração.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerAboutUs: {
    backgroundColor: "white",
    padding: 20,
  },
  introduction: {
    width: "90%",
  },
  titleIntroduction: {
    fontSize: 26,
    fontWeight: "500",
    color: "#2b60ab",
  },
  textIntroduction: {
    fontSize: 16,
    color: "black",
    marginTop: 10,
    textAlign: "justify",
  },
});
