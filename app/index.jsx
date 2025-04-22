import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PolaroidCard from "./components/Card";

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
          <View style={styles.cardCategoryHair}>
            <LinearGradient
              colors={["#2b60ab", "#ffffff00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.cardCategoryHair} 
            >
              <Text style={styles.titleHair}>Cuidados Capilares</Text>
              <Text style={styles.textHair}>
                Dicas e produtos para manter seus cabelos lindos e saudáveis
              </Text>
            </LinearGradient>
          </View>
          <View style={styles.cardCategoryMakeup}>
            <LinearGradient
              colors={["#2b60ab", "#ffffff00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.cardCategoryMakeup}
            >
              <Text style={styles.titleMakeup}>Maquiagem</Text>
              <Text style={styles.textMakeup}>
                Dicas práticas para realçar sua beleza com maquiagem.
              </Text>
            </LinearGradient>
          </View>
          <View style={styles.cardCategorySkinCare}>
            <LinearGradient
              colors={["#2b60ab", "#ffffff00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.cardCategorySkinCare}
            >
              <Text style={styles.titleSkinCare}>Skin Care</Text>
              <Text style={styles.textSkinCare}>
                Cuidados essenciais para uma pele bonita e bem tratada
              </Text>
            </LinearGradient>
          </View>
        </View>
      
      <View style={styles.dicasContainer}>        
        <Text style={styles.titleSectionDicas}>Dicas</Text>
        <View style={styles.slide}>
        <PolaroidCard />
        <PolaroidCard />
        <PolaroidCard />
        <PolaroidCard />
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
    backgroundColor: "white",
  },
  // Estilo para a barra de busca
  searchContainer: {
    marginTop: 80,
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
    marginTop: 20,
  },
  titleSectionCategories: {
    fontSize: 24,
    fontWeight: "500",
    color: "#2b60ab",
  },
  titleSectionDicas: {
    fontSize: 24,
    fontWeight: "500",
    color: "#2b60ab",
    marginTop: 20,
  },
  cardsCategoriesContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 15,
    marginTop: 10,
  },

  // CARD DE CABELO
  cardCategoryHair: {
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSMBIuuGYX20mZlX9zgTuaoCp7uVwaDFDbTyR_-HaDm59PmyA)",
      borderRadius: 15,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: 115, // Defina uma altura fixa ou ajustável
      justifyContent: "center",
  },
  titleHair: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    left : 10,
  },
  textHair: {
    fontSize: 14,
    color: "#fff",
    width: "90%",
    left : 10,
  },

  // CARD DE MAQUIAGEM
  cardCategoryMakeup: {
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwQqd5I0JZJ6a59nPWnT1ovC2TCAwEmhgTx9qgkviSg9PfY0UE)",
      borderRadius: 15,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: 115, // Defina uma altura fixa ou ajustável
      justifyContent: "center",
  },
  titleMakeup: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    left : 10,
  },
  textMakeup: {
    fontSize: 14,
    color: "#fff",
    width: "75%",
    left : 10,
  },

  // CARD DE SKINCARE
  cardCategorySkinCare: {
    backgroundImage:
      "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRA8nXWkNZUnwCCxM7LS-sz-LcW5-h1-3cz4K6iygQzEasfROC3)",
    borderRadius: 15,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: 115, // Defina uma altura fixa ou ajustável
    justifyContent: "center",
  },
  titleSkinCare: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    left : 10,
  },
  textSkinCare: {
    fontSize: 14,
    color: "#fff",
    width: "75%",
    left : 10,
  },
  // Estilo para a seção de dicas
  slide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
});
