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

export default function Hair() {
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
      {/* FIM DA BARRA DE PESQUISA */}

      <View style={styles.cardCategoryHairImage}>
        <LinearGradient
          colors={["#2b60ab", "#ffffff00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.cardCategoryHairGradient}
        >
          <Text style={styles.titleHair}>Cuidados Capilares</Text>
        </LinearGradient>
      </View>
      <View style={styles.cardCategoryLisos}>
        <LinearGradient
          colors={["#2b60ab", "#ffffff00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.cardCategoryLisos}
        >
          
        </LinearGradient>
      </View>
      <View style={styles.containerLiso}>
      <Text style={styles.titleLiso}>Cabelos Lisos</Text>
      <Image style={styles.imageLiso}
            source={{
              uri: "https://uploads.folhavitoria.com.br/2025/02/31iDrZV7-Copia-de-CORTE-DE-FOTOS-4-2-png.webp",
            }}
            
            />
      <Text style={styles.describe1}>Cabelos lisos são aqueles que possuem uma estrutura capilar reta, sem ondulações ou cachos. A textura do fio é suave e uniforme, sem curvas ou frizz. </Text>
      </View>
      <View style={styles.Dicas}>
        <Text style={styles.titleDicas}>Dicas:</Text>
        <Text style={styles.lineDicas}>__________________________________</Text>
        <Text style={styles.describeDicas}></Text>

      </View>
    </ScrollView>
    
  );
}
const styles = StyleSheet.create({
  //Estilo geral da página
  container: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
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
  
  // CARD DE CABELO
  cardCategoryHairImage: {
    backgroundImage:
      "url(https://a-static.mlcdn.com.br/1500x1500/shampoo-low-poo-keune-care-confident-curl-300ml/lordperfumaria/8719281109778/642a8a0c388537c7a9a7fe0c3dbdf6dc.jpeg)",
      gap: 10,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: 160, // Defina uma altura fixa ou ajustável
      justifyContent: "center",
      width: "90%",
  
  },
  cardCategoryHairGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
   
  },

  titleHair: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    left : 10,
    textAlign: "center",  
  },
  // lisos
  containerLiso: {
    flex: 1,
    display: "flex",
    marginLeft: 20,
   
  },
  titleLiso: {
    fontSize: 17,
    color: "#65a2bf",
    marginTop: 20,
    
  },

  imageLiso: {
    width: "90%",
    height: 160,
    borderRadius: 10,
    marginTop: 20,
  },
  
  describe1: {
    fontSize: 14,
    color: "#2b60ab",
    marginTop: 15,

    color: "black",
    width: "90%",
    textAlign: "justify",
    alignItems: "center",
    justifyContent: "center",

  },
  Dicas: {
    width: "90%",
  },

  titleDicas: {
    fontSize: 24,
    color: "#65a2bf",
    marginTop: 60,
  },

  lineDicas: {
    fontSize: 24,
    color: "#65a2bf",
    width: "90%",
    marginTop: -16, /**edu que colocou */
   
  },

});