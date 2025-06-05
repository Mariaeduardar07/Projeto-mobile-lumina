import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  Linking
} from "react-native";
import CustomButton from "../../components/customButton/CustomButton";
import SearchBar from "../../components/search/Search";
import Banner from "../../components/banner/Banner.js";
const { width, height } = Dimensions.get("window");

// Adicione as palavras-chave para cada tipo de cabelo
const dados = [
  {
    id: "1",
    tipo: "Cabelos Lisos",
    keywords: ["liso", "lisos", "cabelo liso", "cabelos lisos", "reto", "sem ondas"],
    descricao: "Cabelos lisos são aqueles que possuem uma estrutura capilar reta, sem ondulações ou cachos. A textura do fio é suave e uniforme, sem curvas ou frizz.",
    imagem: {
      uri: "https://uploads.folhavitoria.com.br/2025/02/31iDrZV7-Copia-de-CORTE-DE-FOTOS-4-2-png.webp",
    },
    pdf: "https://drive.google.com/file/d/1UWC2l1SX3dUd9KzQdoPX0QZpC4IwG-D-/view?usp=sharing"
  },
  {
    id: "2",
    tipo: "Cabelos Cacheados",
    keywords: ["cacheado", "cacheados", "cabelo cacheado", "cachos", "ondulado", "ondas"],
    descricao: "Cabelos cacheados são caracterizados por fios que formam cachos ou ondas de forma natural.",
    imagem: require("../../assets/cachos.png"),
    pdf: "https://drive.google.com/file/d/1qY6NkYE6UFrVVZj6vmStgDNrdAg7pe8V/view?usp=sharing"
  },
  {
    id: "3",
    tipo: "Cabelos Crespos",
    keywords: ["crespo", "crespos", "cabelo crespo", "afro", "volumoso"],
    descricao: "Cabelos crespos são caracterizados por fios que possuem uma curvatura muito apertada, o que resulta em um formato mais compacto e volumoso.",
    imagem: require("../../assets/crespo.png"),
    pdf: "https://drive.google.com/file/d/1qY6NkYE6UFrVVZj6vmStgDNrdAg7pe8V/view?usp=sharing"
  }
];

export default function Hair() {
  const [searchQuery, setSearchQuery] = useState("");
  const [lista, setLista] = useState(dados);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setLista(dados);
      return;
    }
    const lower = query.toLowerCase();
    const resultado = dados.filter(item =>
      item.tipo.toLowerCase().includes(lower) ||
      (item.keywords && item.keywords.some(k => k.includes(lower) || lower.includes(k)))
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
        title="Cuidados Capilares"
        text="Bem-vinda à seção de Cuidados Capilares do Lumina."
        gradientColors={[
          "rgb(141, 185, 209)", "rgba(167,213,236,0.8)",
        ]}
      />

      {lista.length === 0 ? (
        <Banner
          title="Nada encontrado"
          text="Nenhum tipo de cabelo corresponde à sua pesquisa."
        />
      ) : (
        lista.map(item => (
          <View key={item.id}>
            <View style={styles.containerCabelos}>
              <Text style={styles.titleCabelos}>{item.tipo}</Text>
              <Image
                style={styles.imageCabelos}
                source={item.imagem}
              />
              <Text style={styles.describe1}>
                {item.descricao}
              </Text>
            </View>
            <View style={styles.Dicas}>
              <Text style={styles.titleDicas}>Dicas:</Text>
              <Text style={styles.lineDicas}>__________________________________</Text>
              <Text style={styles.describeDicas}>
                Clique no botão abaixo para baixar nosso PDF exclusivo com dicas
                essenciais para seu tipo ideal de cabelos contendo, produtos para
                cronograma capilar e muito mais!
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
  },
  introductionBanner: {
    width: width - 32,
    alignSelf: "center",
    marginTop: 15,
  },
  containerCabelos: {
    width: width * 0.9, // 90% da largura da tela
    margin: 10,
  },
  titleCabelos: {
   fontSize: width < 350 ? 18 : 24,
    fontWeight: "500",
    color: "#2b60ab",
    alignSelf: "flex-start",
    marginTop: 5,
    width: "100%",
    textAlign: "left", // alinhamento à esquerda
  },
  imageCabelos: {
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