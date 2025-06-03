import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "react-native-screens";
import CustomButton from "../../components/customButton/CustomButton";
// import SearchBar from "../../components/search/Search";
import Banner from "../../components/banner/Banner.js";
const { width, height } = Dimensions.get("window");

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
        title="Cuidados Capilares"
        text="Bem-vindo à seção Cuidado Capilar do Lumina."
        gradientColors={[
          "rgba(167,213,236,0.8)",
          "rgba(43,96,171,1)",
          "rgba(167,213,236,0.8)"
        ]}
      />
      <View style={styles.containerCabelos}>
        <Text style={styles.titleCabelos}>Cabelos Lisos</Text>
        <Image
          style={styles.imageCabelos}
          source={{
            uri: "https://uploads.folhavitoria.com.br/2025/02/31iDrZV7-Copia-de-CORTE-DE-FOTOS-4-2-png.webp",
          }}
        />
        <Text style={styles.describe1}>
          Cabelos lisos são aqueles que possuem uma estrutura capilar reta, sem
          ondulações ou cachos. A textura do fio é suave e uniforme, sem curvas
          ou frizz.
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
        <CustomButton title="Baixe PDF" />
      </View>

      <View style={styles.containerCabelos}>
        <Text style={styles.titleCabelos}>Cabelos Cacheados</Text>
        <Image
          style={styles.imageCabelos}
          source={require("../../assets/cachos.png")}
        />

        <Text style={styles.describe1}>
          Cabelos cacheados são caracterizados por fios que formam cachos ou
          ondas de forma natural.
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
        <CustomButton title="Baixe PDF" />
      </View>

      <View style={styles.containerCabelos}>
        <Text style={styles.titleCabelos}>Cabelos Crespos</Text>
        <Image
          style={styles.imageCabelos}
          source={require("../../assets/crespo.png")}
        />
        <Text style={styles.describe1}>
          Cabelos crespos são caracterizados por fios que possuem uma curvatura
          muito apertada, o que resulta em um formato mais compacto e volumoso.{" "}
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
        <CustomButton title="Baixe PDF" />
      </View>
      <View style={styles.containerCabelos}>
        <Text style={styles.titleCabelos}>Cabelos com Química</Text>
        <Image
          style={styles.imageCabelos}
          source={require("../../assets/quimica.png")}
        />
        <Text style={styles.describe1}>
          Cabelos com química, referem-se a cabelos que passaram por processos
          químicos para alterar sua estrutura ou cor.
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
  containerCabelos: {
    width: width * 0.9, // 90% da largura da tela
    margin: 10,
  },
  titleCabelos: {
    fontSize: width * 0.05, // Tamanho da fonte baseado na largura da tela
    color: "#65a2bf",
    marginTop: 55,
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
