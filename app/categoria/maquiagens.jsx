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
import { SearchBar } from "react-native-screens";
import Banner from "../../components/banner/Banner.js";

export default function Hair() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Buscando por:", searchQuery);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* INCIO DA BARRA DE PESQUISA */}
      <SearchBar />
      {/* FIM DA BARRA DE PESQUISA */}

     <Banner
        title="Maquiagem"
        text="Bem-vindo à seção Maquiagens do Lumina."
        image={{
          uri: "https://www.estadao.com.br/recomenda/wp-content/uploads/2024/06/AdobeStock_273553300_Preview.jpeg.webp",
        }}
        gradientColors={["rgba(0, 0, 0, 0)", "rgb(167, 213, 236)"]}
      />
      <View style={styles.cardCategoryLisos}>
        <LinearGradient
          colors={["#2b60ab", "#ffffff00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.cardCategoryLisos}
        ></LinearGradient>
      </View>
      <View style={styles.containerLiso}>
        <Text style={styles.titleLiso}>Pele</Text>
         <Image
          style={styles.imageLiso}
          source={require("../../assets/pele-maquiagem.png")}
        />
        <Text style={styles.describe1}>
          A maquiagem na pele é a base de qualquer produção, sendo essencial para criar um acabamento uniforme, disfarçar imperfeições e realçar os traços naturais do rosto. Mais do que estética, ela contribui para a autoestima, oferecendo uma aparência saudável, iluminada e bem cuidada.{" "}
        </Text>
      </View>
      <View style={styles.Dicas}>
        <Text style={styles.titleDicas}>Dicas:</Text>
        <Text style={styles.lineDicas}>__________________________________</Text>
        <Text style={styles.describeDicas}>
          Clique no botão abaixo para baixar nosso PDF exclusivo com dicas essenciais para uma maquiagem perfeita na pele!
          Você vai encontrar orientações práticas e sugestões de produtos para usar base, corretivo, pó, blush, contorno e iluminador, aprendendo como realçar sua beleza de forma natural e duradoura. Ideal para todos os tipos de pele!
        </Text>
      </View>

      {/*-----------quimica--------------*/}

      <View style={styles.containerQuimica}>
        <Text style={styles.titleQuimica}>Olhos</Text>
        <Image
          style={styles.imageQuimica}
          source={require("../../assets/eyes.png")}
        />
        <Text style={styles.describe1}>
          A maquiagem nos olhos é uma das etapas mais expressivas da make, responsável por destacar o olhar e transmitir personalidade. Com os produtos certos, é possível criar desde visuais discretos e elegantes até produções marcantes e ousadas.
        </Text>
      </View>
      <View style={styles.Dicas}>
        <Text style={styles.titleDicas}>Dicas:</Text>
        <Text style={styles.lineDicas}>__________________________________</Text>
        <Text style={styles.describeDicas}>
          Clique no botão abaixo para baixar nosso PDF exclusivo com dicas essenciais para realçar ainda mais o seu olhar!
          Você vai encontrar orientações práticas e sugestões de produtos para usar rímel, sombra, lápis de olho e delineador, aprendendo como criar olhos sutis até marcantes e poderosos. Tudo pensado para valorizar seu estilo e destacar sua beleza!
        </Text>
      </View>

      {/*-----------mechas--------*/}
      <View style={styles.containerMechas}>
        <Text style={styles.titleMechas}>Boca</Text>
        <Image
          style={styles.imageMechas}
          source={require("../../assets/lip.png")}
        />

        <Text style={styles.describe1}>
          A maquiagem para a boca é um dos pontos de destaque em qualquer produção. Ela pode transformar completamente o visual, transmitindo elegância, ousadia ou suavidade, tudo depende da escolha dos produtos e da forma de aplicação.
        </Text>
      </View>
      <View style={styles.Dicas}>
        <Text style={styles.titleDicas}>Dicas:</Text>
        <Text style={styles.lineDicas}>__________________________________</Text>
        <Text style={styles.describeDicas}>
          Clique no botão abaixo para baixar nosso PDF exclusivo com dicas essenciais para destacar sua boca com charme e estilo!
          Descubra truques e produtos ideais para batom, batom líquido e gloss labial, aprendendo como valorizar seus lábios com acabamento perfeito, cor intensa e longa duração. Tudo para criar desde um visual natural e delicado até uma boca poderosa e marcante!
        </Text>
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
    left: 10,
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
    marginTop: -16 /**edu que colocou */,
  },

  describeDicas: {
    fontSize: 14,
    color: "black",
    marginTop: 15,
    width: "90%",
    textAlign: "justify",
    alignItems: "center",
    justifyContent: "center",
  },

  // quimica

  containerQuimica: {
    flex: 1,
    display: "flex",
    marginLeft: 20,
  },
  titleQuimica: {
    fontSize: 17,
    color: "#65a2bf",
    marginTop: 20,
  },

  imageQuimica: {
    width: "90%",
    height: 160,
    borderRadius: 10,
    marginTop: 20,
  },

  // mechas

  containerMechas: {
    flex: 1,
    display: "flex",
    marginLeft: 20,
  },
  titleMechas: {
    fontSize: 17,
    color: "#65a2bf",
    marginTop: 20,
  },

  imageMechas: {
    width: "90%",
    height: 160,
    borderRadius: 10,
    marginTop: 20,
  },

  // cachos

  containerCachos: {
    flex: 1,
    display: "flex",
    marginLeft: 20,
  },
  titleCachos: {
    fontSize: 17,
    color: "#65a2bf",
    marginTop: 20,
  },

  imageCachos: {
    width: "90%",
    height: 160,
    borderRadius: 10,
    marginTop: 20,
  },

  //ondulados

  containerOndulado: {
    flex: 1,
    display: "flex",
    marginLeft: 20,
  },
  titleOndulado: {
    fontSize: 17,
    color: "#65a2bf",
    marginTop: 20,
  },

  imageOndulado: {
    width: "90%",
    height: 160,
    borderRadius: 10,
    marginTop: 20,
  },

  //crespos

  containerCrespo: {
    flex: 1,
    display: "flex",
    marginLeft: 20,
  },
  titleCrespo: {
    fontSize: 17,
    color: "#65a2bf",
    marginTop: 20,
  },

  imageCrespo: {
    width: "90%",
    height: 160,
    borderRadius: 10,
    marginTop: 20,
  },
});