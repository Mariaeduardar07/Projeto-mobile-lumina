import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import { Link } from "expo-router";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Buscando por:", searchQuery);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Image
            source={require("../assets/Search.png")} // Substitua pelo caminho correto da imagem
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.introduction}>
        <Text style={styles.titleIntroduction}>
          Seja bem vindo ao blog lumina
        </Text>
        <Text style={styles.textIntroduction}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
      </View>

      <View style={styles.categoriesContainer}>
        <Text style={styles.titleSection}>Categorias</Text>
        <View style={styles.cardContainer}>
          <Link href="/" asChild>
            <Pressable style={styles.cardCategories}>
              <Image
                source={{
                  uri: "https://img.freepik.com/fotos-premium/garrafa-de-oleo-para-restaurar-e-recuperar-cabelos-danificados-cachos-de-cabelo-e-oleo-de-cabelo-vista-superior_132254-2492.jpg",
                }}
                style={styles.imageCategories}
              />
              <View style={styles.textContainerCategories}>
                <Text style={styles.titleCategories}>Cuidados capilares</Text>
                <Text style={styles.textCategories}>
                  Dicas e produtos para manter seus cabelos lindos e saudáveis
                </Text>
              </View>
            </Pressable>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Estilo geral da página
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 20,
  },
  // Estilo para a barra de busca
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    width: "90%",
    height: 40,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: "#8b8b8b",
    color: "#8b8b8b",
  },
  searchButton: {
    backgroundColor: "#a7d5ec",
    borderRadius: 20,
    padding: 10,
    marginLeft: 5,
  },
  // Estilo para a introdução da página
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
  // Estilo para as categorias
  categoriesContainer: {
    flexDirection: "column",
    gap: 10,
    width: "90%",
  },
  titleSection: {
    fontSize: 24,
    fontWeight: "500",
    color: "#2b60ab",
    marginTop: 15,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  cardContainer: {
    gap: 10,
    width: "100%",
    height: "100%",
  },
  cardCategories: {
    flexDirection: "row",
    borderRadius: 15,
    overflow: "hidden",
    width: "100%",
    height: 120,
    alignItems: "center",
    padding: 10,
  },
  imageCategories: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: "#2b60ab",
  },
  textContainerCategories: {
    flex: 1,
  },
  titleCategories: {
    fontSize: 20,
    fontWeight: "500",
    color: "#fff",
    marginTop: 10,
  },
  textCategories: {
    fontSize: 14,
    color: "#fff",
  },
});