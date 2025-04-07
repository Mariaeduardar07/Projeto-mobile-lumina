import React, { useState } from "react";
import {
  ScrollView,
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
    <ScrollView contentContainerStyle={styles.container}>
      {/* INCIO DA BARRA DE PESQUISA */}
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
      {/* FIM DA BARRA D PESQUISA */}

      {/* INTRODUÇÃO DA PÁGINA */}
      <View style={styles.introduction}>
        <Text style={styles.titleIntroduction}>
          Seja bem vindo ao blog lumina
        </Text>
        <Text style={styles.textIntroduction}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
      </View>

      {/*INICIO DA SEÇÃO DE CATEGORIAS */}
      <View style={styles.categoriasContainer}>
        <Text style={styles.titleSectionCategories}>Categorias</Text>
        <View style={styles.cardsCategoriesContainer}>
          <View style={styles.cardCategory}>
            <Image
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSMBIuuGYX20mZlX9zgTuaoCp7uVwaDFDbTyR_-HaDm59PmyA" }} // Substitua pelo link da imagem
              style={styles.imageCategory} // Defina o tamanho da imagem
            />
            <Text style={styles.titleCategory}>Cuidados Capilares</Text>
            <Text style={styles.textCategory}>Dicas e produtos para manter seus cabelos lindos e saudáveis</Text>
          </View>
          <View style={styles.cardCategory}>
            <Image
              source={{ uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTwQqd5I0JZJ6a59nPWnT1ovC2TCAwEmhgTx9qgkviSg9PfY0UE" }} // Substitua pelo link da imagem
              style={styles.imageCategory} // Defina o tamanho da imagem
            />
            <Text style={styles.titleCategory}>Maquiagem</Text>
            <Text style={styles.textCategory}>Dicas práticas para realçar sua beleza com maquiagem.</Text>
          </View>
          <View style={styles.cardCategory}>
            <Image
              source={{ uri: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRA8nXWkNZUnwCCxM7LS-sz-LcW5-h1-3cz4K6iygQzEasfROC3" }} // Substitua pelo link da imagem
              style={styles.imageCategory} // Defina o tamanho da imagem
            />
            <Text style={styles.titleCategory}>Skin Care</Text>
            <Text style={styles.textCategory}>Cuidados essenciais para uma pele bonita e bem tratada</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  //Estilo geral da página
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
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

  // Estilo para a seção de categorias
  categoriasContainer: {
    width: "90%",
    marginTop: 20,
  },
  titleSectionCategories: {
    fontSize: 24,
    fontWeight: "500",
    color: "#2b60ab",
  },
  cardsCategoriesContainer: {
    flexDirection: "column",
  },
  cardCategory: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
  
  },
  imageCategory: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    backgroundColor: "#a7d6ed",
  },
  titleCategory: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
  },
  textCategory: {
    fontSize: 14,
    color: "#000",
  },
});
