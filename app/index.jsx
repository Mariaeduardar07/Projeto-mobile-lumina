import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Banner from "../components/banner/Banner.js";
import CategoriesCards from "../components/categoriesCards/CategoriesCards.js";
import SearchBar from "../components/search/Search.js";

export default function Home() {
  const categories = [
    {
      title: "Cuidados Capilares",
      description:
        "Dicas e produtos para manter seus cabelos lindos e saudáveis",
      route: "/cuidadosCapilares",
    },
    {
      title: "Maquiagem",
      description: "Dicas práticas para realçar sua beleza com maquiagem.",
      route: "/maquiagem",
    },
    {
      title: "Skin Care",
      description: "Cuidados essenciais para uma pele bonita e bem tratada",
      route: "/skinCare",
    },
  ];

  const handleCategoryPress = (route) => {
    router.push(route); // Navega para a rota correspondente
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar />

      <Banner
        title="Seja bem vindo ao blog Lumina"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
      />

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
  }
});
