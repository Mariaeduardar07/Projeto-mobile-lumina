import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Banner from "../components/banner/Banner.js";

export default function Home() {

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* INÍCIO DA BARRA DE PESQUISA */}
      <SearchBar />
      {/* FIM DA BARRA DE PESQUISA */}

      {/* INTRODUÇÃO DA PÁGINA */}
      <Banner
        title="Seja bem vindo ao blog Lumina"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      />

      {/* INÍCIO DA SEÇÃO DE CATEGORIAS */}
      <CategoriesCards
        categories={categories}
        onCategoryPress={handleCategoryPress}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "white",
  },
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
  categoriasContainer: {
    marginTop: 20,
  },
  titleSectionCategories: {
    fontSize: 24,
    fontWeight: "500",
    color: "#2b60ab",
  },
  cardsCategoriesContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 15,
    marginTop: 10,
  },
  cardCategoryHair: {
    borderRadius: 15,
    width: "100%",
    height: 115,
    justifyContent: "center",
  },
  titleHair: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    left: 10,
  },
  textHair: {
    fontSize: 14,
    color: "#fff",
    width: "90%",
    left: 10,
  },
  cardCategoryMakeup: {
    borderRadius: 15,
    width: "100%",
    height: 115,
    justifyContent: "center",
  },
  titleMakeup: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    left: 10,
  },
  textMakeup: {
    fontSize: 14,
    color: "#fff",
    width: "75%",
    left: 10,
  },
  cardCategorySkinCare: {
    borderRadius: 15,
    width: "100%",
    height: 115,
    justifyContent: "center",
  },
  titleSkinCare: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    left: 10,
  },
  textSkinCare: {
    fontSize: 14,
    color: "#fff",
    width: "75%",
    left: 10,
  },
});
