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
export default function Hair() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Buscando por:", searchQuery);
  };

  const openPDF = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* INCIO DA BARRA DE PESQUISA */}
      <SearchBar />
      {/* FIM DA BARRA DE PESQUISA */}

      <Banner
        style={styles.introductionBanner}
        title="SKIN CARE"
        text="Bem-vindo à seção Skin Care do Lumina."
        gradientColors={["rgb(141, 185, 209)", "rgba(167,213,236,0.8)"]}
      />
      <View style={styles.containerSkincare}>
        <Text style={styles.titleSkincare}>Peles secas</Text>
        <Image
          style={styles.imageSkincare}
          source={require("../../assets/pele-seca.png")}
        />
        <Text style={styles.describe1}>
          Peles secas são caracterizadas por uma textura mais áspera, falta de
          viço e tendência ao ressecamento e descamação. A superfície da pele
          costuma ser mais fina e sem oleosidade natural, o que pode deixá-la
          com aparência opaca e sensação de repuxamento.
        </Text>
      </View>
      <View style={styles.Dicas}>
        <Text style={styles.titleDicas}>Dicas:</Text>
        <Text style={styles.lineDicas}>__________________________________</Text>
        <Text style={styles.describeDicas}>
          Clique no botão abaixo para baixar nosso PDF exclusivo com dicas
          essenciais de skincare para peles secas! Descubra cuidados e produtos
          ideais para restaurar a hidratação, fortalecer a barreira cutânea e
          manter a pele nutrida e macia. Tudo para conquistar uma pele saudável,
          luminosa e protegida contra o ressecamento!
        </Text>
        <CustomButton
          title="Baixe PDF"
          onPress={() =>
            openPDF(
              "https://drive.google.com/file/d/1zqi0gFte0yLMTtnMVykS7FByXIxZIq2l/view?usp=sharing"
            )
          }
        />
      </View>

      <View style={styles.containerSkincare}>
        <Text style={styles.titleSkincare}>Peles Mistas</Text>
        <Image
          style={styles.imageSkincare}
          source={require("../../assets/pele-mista.png")}
        />
        <Text style={styles.describe1}>
          Peles mistas apresentam características de dois tipos de pele:
          oleosidade concentrada na zona T (testa, nariz e queixo) e
          ressecamento nas outras áreas do rosto, como bochechas.
        </Text>
      </View>
      <View style={styles.Dicas}>
        <Text style={styles.titleDicas}>Dicas:</Text>
        <Text style={styles.lineDicas}>__________________________________</Text>
        <Text style={styles.describeDicas}>
          Clique no botão abaixo para baixar nosso PDF exclusivo com dicas
          essenciais de skincare para peles mistas! Aprenda como equilibrar a
          oleosidade da zona T e hidratar as áreas mais secas com os produtos
          certos. Tudo para deixar sua pele uniforme, fresca e saudável em todas
          as regiões do rosto!
        </Text>
        <CustomButton
          title="Baixe PDF"
          onPress={() =>
            openPDF(
              "https://drive.google.com/file/d/1a529P5lW1embPWvdu55h2miF3fcC_spP/view?usp=sharing"
            )
          }
        />
      </View>

      <View style={styles.containerSkincare}>
        <Text style={styles.titleSkincare}>Peles oleosas</Text>
        <Image
          style={styles.imageSkincare}
          source={require("../../assets/pele-oleosa.png")}
        />
        <Text style={styles.describe1}>
          Pele oleosa é caracterizada pelo excesso de produção de sebo, o que
          causa brilho intenso, poros dilatados e maior tendência a cravos e
          espinhas.
        </Text>
      </View>
      <View style={styles.Dicas}>
        <Text style={styles.titleDicas}>Dicas:</Text>
        <Text style={styles.lineDicas}>__________________________________</Text>
        <Text style={styles.describeDicas}>
          Clique no botão abaixo para baixar nosso PDF exclusivo com dicas
          essenciais de skincare para peles oleosas! Aprenda como controlar o
          brilho excessivo, reduzir poros dilatados e prevenir cravos e espinhas
          com os produtos certos. Tudo para deixar sua pele sequinha,
          equilibrada e saudável ao longo do dia!
        </Text>
        <CustomButton
          title="Baixe PDF"
          onPress={() =>
            openPDF(
              "https://drive.google.com/file/d/14ftjEB6fP4wdGZbLIGUj7wo9P2dOP8CL/view?usp=sharing"
            )
          }
        />
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
  introductionBanner: {
    width: width - 32,
    alignSelf: "center",
    marginTop: 15,
  },
  containerSkincare: {
    width: width * 0.9, // 90% da largura da tela
    margin: 10,
  },
  titleSkincare: {
    fontSize: width * 0.05, // Tamanho da fonte baseado na largura da tela
    color: "#65a2bf",
    marginTop: 10,
  },
  imageSkincare: {
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
