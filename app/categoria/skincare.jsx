import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Linking,
} from "react-native";
const { width, height } = Dimensions.get("window");
import CustomButton from "../../components/customButton/CustomButton";
import Banner from "../../components/banner/Banner";
import SearchBar from "../../components/search/Search";
import NoResults from "../../components/noResults/NoResults";

const dados = [
  {
    id: "1",
    tipo: "Peles secas",
    keywords: [
      "seca",
      "secas",
      "pele seca",
      "peles secas",
      "ressecada",
      "descamação",
      "descamacao",
    ],
    descricao:
      "Peles secas são caracterizadas por uma textura mais áspera, falta de viço e tendência ao ressecamento e descamação. A superfície da pele costuma ser mais fina e sem oleosidade natural, o que pode deixá-la com aparência opaca e sensação de repuxamento.",
    imagem: require("../../assets/pele-seca.png"),
    dicas:
      "Clique no botão abaixo para baixar nosso PDF exclusivo com dicas essenciais de skincare para peles secas! Descubra cuidados e produtos ideais para restaurar a hidratação, fortalecer a barreira cutânea e manter a pele nutrida e macia. Tudo para conquistar uma pele saudável, luminosa e protegida contra o ressecamento!",
    pdf: "https://drive.google.com/file/d/1zqi0gFte0yLMTtnMVykS7FByXIxZIq2l/view?usp=sharing",
  },
  {
    id: "2",
    tipo: "Peles Mistas",
    keywords: [
      "mista",
      "mistas",
      "pele mista",
      "peles mistas",
      "zona t",
      "oleosidade",
      "seca e oleosa",
    ],
    descricao:
      "Peles mistas apresentam características de dois tipos de pele: oleosidade concentrada na zona T (testa, nariz e queixo) e ressecamento nas outras áreas do rosto, como bochechas.",
    imagem: require("../../assets/pele-mista.png"),
    dicas:
      "Clique no botão abaixo para baixar nosso PDF exclusivo com dicas essenciais de skincare para peles mistas! Aprenda como equilibrar a oleosidade da zona T e hidratar as áreas mais secas com os produtos certos. Tudo para deixar sua pele uniforme, fresca e saudável em todas as regiões do rosto!",
    pdf: "https://drive.google.com/file/d/1a529P5lW1embPWvdu55h2miF3fcC_spP/view?usp=sharing",
  },
  {
    id: "3",
    tipo: "Peles oleosas",
    keywords: [
      "oleosa",
      "oleosas",
      "pele oleosa",
      "peles oleosas",
      "brilho",
      "poros",
      "cravos",
      "espinhas",
    ],
    descricao:
      "Pele oleosa é caracterizada pelo excesso de produção de sebo, o que causa brilho intenso, poros dilatados e maior tendência a cravos e espinhas.",
    imagem: require("../../assets/pele-oleosa.png"),
    dicas:
      "Clique no botão abaixo para baixar nosso PDF exclusivo com dicas essenciais de skincare para peles oleosas! Aprenda como controlar o brilho excessivo, reduzir poros dilatados e prevenir cravos e espinhas com os produtos certos. Tudo para deixar sua pele sequinha, equilibrada e saudável ao longo do dia!",
    pdf: "https://drive.google.com/file/d/14ftjEB6fP4wdGZbLIGUj7wo9P2dOP8CL/view?usp=sharing",
  },
];

export default function Skincare() {
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
        title="Skincare"
        text="Bem-vinda à seção de Skicare do Lumina."
        gradientColors={["rgb(141, 185, 209)", "rgba(167,213,236,0.8)"]}
      />

      {lista.length === 0 ? (
        <NoResults />
      ) : (
        lista.map((item) => (
          <View key={item.id}>
            <View style={styles.containerSkincare}>
              <Text style={styles.titleSkincare}>{item.tipo}</Text>
              <Image style={styles.imageSkincare} source={item.imagem} />
              <Text style={styles.describe1}>{item.descricao}</Text>
            </View>
            <View style={styles.Dicas}>
              <View style={styles.dicasHeader}>
                <Text style={styles.titleDicas}>Dicas:</Text>
                <View style={styles.decorativeLine} />
              </View>
              <Text style={styles.describeDicas}>{item.dicas}</Text>
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
  containerSkincare: {
    width: width * 0.9,
    marginTop: 20,
  },
  titleSkincare: {
    fontSize: width < 350 ? 18 : 24,
    fontWeight: "500",
    color: "#2b60ab",
    alignSelf: "flex-start",
    marginTop: 5,
    width: "100%",
    textAlign: "left",
  },
  imageSkincare: {
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
