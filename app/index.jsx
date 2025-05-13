import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router"; // Importação do router

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Inicialização do router

  const handleSearch = () => {
    console.log("Buscando por:", searchQuery);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* INÍCIO DA BARRA DE PESQUISA */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
          <Image
            source={require("../assets/Search.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>
      {/* FIM DA BARRA DE PESQUISA */}

      {/* INTRODUÇÃO DA PÁGINA */}
      <View style={styles.introduction}>
        <Text style={styles.titleIntroduction}>
          Seja bem vindo ao blog Lumina
        </Text>
        <Text style={styles.textIntroduction}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </Text>
      </View>

      {/* INÍCIO DA SEÇÃO DE CATEGORIAS */}
      <View style={styles.categoriasContainer}>
        <Text style={styles.titleSectionCategories}>Categorias</Text>
        <View style={styles.cardsCategoriesContainer}>
          {/* Card de Cuidados Capilares */}
          <TouchableOpacity
            onPress={() => router.push("/cuidadosCapilares")} // Navegação para a página
            style={styles.cardCategoryHair}
          >
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
          </TouchableOpacity>

          {/* Card de Maquiagem */}
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

          {/* Card de Skin Care */}
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
      </View>
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