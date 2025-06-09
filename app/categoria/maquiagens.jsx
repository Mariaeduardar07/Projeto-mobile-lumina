import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Linking,
} from "react-native";
const { width, height } = Dimensions.get("window");
import Banner from "../../components/banner/Banner.js";
import SearchBar from "../../components/search/Search";
import CustomButton from "../../components/customButton/CustomButton.js";
import NoResults from "../../components/noResults/NoResults.js";

const dados = [
  {
    id: "1",
    tipo: "Pele",
    keywords: [
      "pele",
      "base",
      "corretivo",
      "blush",
      "contorno",
      "iluminador",
      "maquiagem pele",
    ],
    descricao:
      "A maquiagem na pele é a base de qualquer produção, sendo essencial para criar um acabamento uniforme, disfarçar imperfeições e realçar os traços naturais do rosto. Mais do que estética, ela contribui para a autoestima, oferecendo uma aparência saudável, iluminada e bem cuidada.",
    imagem: require("../../assets/pele-maquiagem.png"),
    pdf: "https://drive.google.com/file/d/1gxS3n-QyKpY3z_ekwJjCC1_0ZNWZ_Qsf/view?usp=sharing",
    dicas:
      "Clique no botão abaixo para baixar nosso PDF exclusivo com dicas essenciais para uma maquiagem perfeita na pele! Você vai encontrar orientações práticas e sugestões de produtos para usar base, corretivo, pó, blush, contorno e iluminador, aprendendo como realçar sua beleza de forma natural e duradoura. Ideal para todos os tipos de pele!",
  },
  {
    id: "2",
    tipo: "Olhos",
    keywords: [
      "olhos",
      "sombra",
      "delineador",
      "rímel",
      "mascara",
      "maquiagem olhos",
      "lápis de olho",
    ],
    descricao:
      "A maquiagem nos olhos é uma das etapas mais expressivas da make, responsável por destacar o olhar e transmitir personalidade. Com os produtos certos, é possível criar desde visuais discretos e elegantes até produções marcantes e ousadas.",
    imagem: require("../../assets/eyes.png"),
    pdf: "https://drive.google.com/file/d/1Dpra4Q583mHCIjmIqkOdRZzRBoNIkKNC/view?usp=sharing",
    dicas:
      "Clique no botão abaixo para baixar nosso PDF exclusivo com dicas essenciais para realçar ainda mais o seu olhar! Você vai encontrar orientações práticas e sugestões de produtos para usar rímel, sombra, lápis de olho e delineador, aprendendo como criar olhos sutis até marcantes e poderosos. Tudo pensado para valorizar seu estilo e destacar sua beleza!",
  },
  {
    id: "3",
    tipo: "Lábios",
    keywords: [
      "lábios",
      "labios",
      "boca",
      "batom",
      "gloss",
      "maquiagem boca",
      "batom líquido",
      "lip tint",
    ],
    descricao:
      "A maquiagem para os lábios é um dos pontos de destaque em qualquer produção. Ela pode transformar completamente o visual, transmitindo elegância, ousadia ou suavidade, tudo depende da escolha dos produtos e da forma de aplicação.",
    imagem: require("../../assets/lip.png"),
    pdf: "https://drive.google.com/file/d/18lEDRxOkx9mYV_T3vGJzPBexmaGO9eDt/view?usp=sharing",
    dicas:
      "Clique no botão abaixo para baixar nosso PDF exclusivo com dicas essenciais para destacar seus lábios com charme e estilo! Descubra truques e produtos ideais para batom, batom líquido e gloss labial, aprendendo como valorizar seus lábios com acabamento perfeito, cor intensa e longa duração. Tudo para criar desde um visual natural e delicado até uma boca poderosa e marcante!",
  },
];

export default function Maquiagens() {
  const [searchQuery, setSearchQuery] = useState("");
  const [lista, setLista] = useState(dados);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setLista(dados);
      return;
    }
    const lower = query.toLowerCase();
    const resultado = dados.filter(
      (item) =>
        item.tipo.toLowerCase().includes(lower) ||
        (item.keywords &&
          item.keywords.some((k) => k.includes(lower) || lower.includes(k)))
    );
    setLista(resultado);
  };

  const openPDF = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* INCIO DA BARRA DE PESQUISA */}
      <SearchBar onSearch={handleSearch} />
      {/* FIM DA BARRA DE PESQUISA */}

      <Banner
        style={styles.introductionBanner}
        title="Maquiagens"
        text="Bem-vinda à seção de Maquiagens do Lumina."
        gradientColors={["rgb(141, 185, 209)", "rgba(167,213,236,0.8)"]}
      />

      {lista.length === 0 ? (
        <NoResults />
      ) : (
        lista.map((item) => (
                 <View key={item.id}>
            <View style={styles.containerMakeup}>
              <Text style={styles.titleMakeup}>{item.tipo}</Text>
              <Image style={styles.imageMakeup} source={item.imagem} />
              <Text style={styles.describe1}>{item.descricao}</Text>
            </View>
            <View style={styles.Dicas}>
              <View style={styles.dicasHeader}>
                <Text style={styles.titleDicas}>Dicas:</Text>
                <View style={styles.decorativeLine} />
              </View>
              <Text style={styles.describeDicas}>
                {item.dicas}
              </Text>
              <CustomButton
                title="Baixe PDF"
                onPress={() => openPDF(item.pdf)}
              />
            </View>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  introductionBanner: {
    width: width - 32,
    alignSelf: "center",
    marginTop: 15,
  },
  containerMakeup: {
    width: width * 0.9,
    marginTop: 20,
  },
  titleMakeup: {
    fontSize: width < 350 ? 18 : 24,
    fontWeight: "500",
    color: "#2b60ab",
    alignSelf: "flex-start",
    marginTop: 5,
    width: "100%",
    textAlign: "left",
  },
  imageMakeup: {
    width: "100%",
    height: height * 0.2,
    borderRadius: 10,
    marginTop: 20,
  },
  describe1: {
    fontSize: width * 0.04,
    color: "black",
    marginTop: 15,
    width: "100%",
    textAlign: "justify",
  },
  Dicas: {
    width: width * 0.9,
    marginBottom: 30,
  },
  dicasHeader: {
    alignSelf: "flex-start",
    marginTop: 30,
    marginBottom: 8,
  },
  titleDicas: {
    fontSize: 22,
    color: "#65a2bf",
    marginBottom: 2,
  },
  decorativeLine: {
    width: 55,
    height: 4,
    backgroundColor: "#65a2bf",
    borderRadius: 2,
    marginLeft: 2,
    marginTop: 0,
  },
  describeDicas: {
    fontSize: width * 0.04,
    color: "black",
    marginTop: 5,
    width: "100%",
    textAlign: "justify",
  },
});