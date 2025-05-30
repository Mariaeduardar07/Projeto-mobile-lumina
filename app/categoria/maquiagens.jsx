import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "react-native-screens";
import Banner from "../../components/banner/Banner.js";
import CustomButton from "../../components/customButton/CustomButton.js";

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
        gradientColors={["rgba(0, 0, 0, 0)", "rgb(167, 213, 236)"]}
      />
      <View style={styles.containerMakeup}>
        <Text style={styles.titleMakeup}>Pele</Text>
         <Image
          style={styles.imageMakeup}
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
        <CustomButton title="Baixe PDF" />
      </View>

      <View style={styles.containerMakeup}>
        <Text style={styles.titleMakeup}>Olhos</Text>
        <Image
          style={styles.imageMakeup}
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
        <CustomButton title="Baixe PDF" />
      </View>

      <View style={styles.containerMakeup}>
        <Text style={styles.titleMakeup}>Boca</Text>
        <Image
          style={styles.imageMakeup}
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
        <CustomButton title="Baixe PDF" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  containerMakeup: {
    width: width * 0.9, // 90% da largura da tela
    margin: 20,
  },
  titleMakeup: {
    fontSize: width * 0.05, // Tamanho da fonte baseado na largura da tela
    color: "#65a2bf",
    marginTop: 55,
  },
  imageMakeup: {
    width: "100%", // Largura total do contêiner
    height: height * 0.2, // Altura em proporção à altura da tela
    borderRadius: 10,
    marginTop: 20,
  },
  describe1: {
    fontSize: width * 0.04, // Tamanho da fonte dinâmico
    color: "black",
    marginTop: 15,
    width: "100%",
    textAlign: "justify",
  },
  Dicas: {
    width: width * 0.9,
  },
  titleDicas: {
    fontSize: width * 0.05,
    color: "#65a2bf",
    marginTop: 10,
  },
  lineDicas: {
    fontSize: width * 0.05,
    color: "#65a2bf",
    width: "100%",
    marginTop: -16,
  },
  describeDicas: {
    fontSize: width * 0.04,
    color: "black",
    marginTop: 15,
    width: "100%",
    textAlign: "justify",
  },
});