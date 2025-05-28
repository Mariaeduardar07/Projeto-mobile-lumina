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
        image={{
          uri: "https://media.istockphoto.com/id/1024577076/pt/foto/full-frame-of-professional-hair-dresser-tools-on-white-background.jpg?s=170667a&w=0&k=20&c=xbXLKh6xn3iqWJ23tni9CuDlxxhKP89n6Y8UZCJ401U=",
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
        <Text style={styles.titleLiso}>Cabelos Lisos</Text>
        <Image
          style={styles.imageLiso}
          source={{
            uri: "https://uploads.folhavitoria.com.br/2025/02/31iDrZV7-Copia-de-CORTE-DE-FOTOS-4-2-png.webp",
          }}
        />
        <Text style={styles.describe1}>
          Cabelos lisos são aqueles que possuem uma estrutura capilar reta, sem
          ondulações ou cachos. A textura do fio é suave e uniforme, sem curvas
          ou frizz.{" "}
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

      {/*-----------quimica--------------*/}

      <View style={styles.containerQuimica}>
        <Text style={styles.titleQuimica}>Cabelos com Química</Text>
        <Image
          style={styles.imageQuimica}
          source={require("../../assets/quimica.png")}
        />
        <Text style={styles.describe1}>
          Cabelos com química, referem-se a cabelos que passaram por processos
          químicos para alterar sua estrutura ou cor.{"#"}
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

      {/*-----------mechas--------*/}
      <View style={styles.containerMechas}>
        <Text style={styles.titleMechas}>Cabelos com Mechas</Text>
        <Image
          style={styles.imageMechas}
          source={require("../../assets/mechas.png")}
        />

        <Text style={styles.describe1}>
          Cabelos com mechas, são aqueles que passam por um processo de
          coloração onde algumas seções do cabelo recebem tons mais claros ou
          mais escuros do que a cor natural dos fios.{" "}
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

      {/*-----------cachos--------*/}
      <View style={styles.containerCachos}>
        <Text style={styles.titleCachos}>Cabelos Cacheados</Text>
        <Image
          style={styles.imageCachos}
          source={require("../../assets/cachos.png")}
        />

        <Text style={styles.describe1}>
          Cabelos cacheados são caracterizados por fios que formam cachos ou
          ondas de forma natural.{" "}
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

      {/*-----------ondulados--------*/}
      <View style={styles.containerOndulado}>
        <Text style={styles.titleOndulado}>Cabelos Ondulados</Text>
        <Image
          style={styles.imageOndulado}
          source={require("../../assets/ondulado.png")}
        />

        <Text style={styles.describe1}>
          Os cabelos ondulados, possuem uma textura que se situa entre os fios
          lisos e os cacheados. Eles formam ondas suaves, com movimento natural.{" "}
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

      {/*-----------crespos--------*/}
      <View style={styles.containerCrespo}>
        <Text style={styles.titleCrespo}>Cabelos Crespos</Text>
        <Image
          style={styles.imageCrespo}
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
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  containerLiso: {
    width: width * 0.9, // 90% da largura da tela
    margin: 10,
  },
  titleLiso: {
    fontSize: width * 0.05, // Tamanho da fonte baseado na largura da tela
    color: "#65a2bf",
    marginTop: 20,
  },
  imageLiso: {
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
    marginTop: 60,
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
  // quimica

  containerQuimica: {
    width: width * 0.9, // 90% da largura da tela
    margin: 10,
  },
  titleQuimica: {
    fontSize: width * 0.05, // Tamanho da fonte baseado na largura da tela
    color: "#65a2bf",
    marginTop: 20,
  },

  imageQuimica: {
    width: "100%", // Largura total do contêiner
    height: height * 0.2, // Altura em proporção à altura da tela
    borderRadius: 10,
    marginTop: 20,
  },

  // mechas

  containerMechas: {
    width: width * 0.9, // 90% da largura da tela
    margin: 10,
  },
  titleMechas: {
    fontSize: width * 0.05, // Tamanho da fonte baseado na largura da tela
    color: "#65a2bf",
    marginTop: 20,
  },

  imageMechas: {
    width: "100%", // Largura total do contêiner
    height: height * 0.2, // Altura em proporção à altura da tela
    borderRadius: 10,
    marginTop: 20,
  },

  // cachos

  containerCachos: {
    width: width * 0.9, // 90% da largura da tela
    margin: 10,
  },
  titleCachos: {
    fontSize: width * 0.05, // Tamanho da fonte baseado na largura da tela
    color: "#65a2bf",
    marginTop: 20,
  },

  imageCachos: {
    width: "100%", // Largura total do contêiner
    height: height * 0.2, // Altura em proporção à altura da tela
    borderRadius: 10,
    marginTop: 20,
  },

  //ondulados

  containerOndulado: {
    width: width * 0.9, // 90% da largura da tela
    margin: 10,
  },
  titleOndulado: {
    fontSize: width * 0.05, // Tamanho da fonte baseado na largura da tela
    color: "#65a2bf",
    marginTop: 20,
  },

  imageOndulado: {
    width: "100%", // Largura total do contêiner
    height: height * 0.2, // Altura em proporção à altura da tela
    borderRadius: 10,
    marginTop: 20,
  },

  //crespos

  containerCrespo: {
    width: width * 0.9, // 90% da largura da tela
    margin: 10,
  },
  titleCrespo: {
    fontSize: width * 0.05, // Tamanho da fonte baseado na largura da tela
    color: "#65a2bf",
    marginTop: 20,
  },

  imageCrespo: {
    width: "100%", // Largura total do contêiner
    height: height * 0.2, // Altura em proporção à altura da tela
    borderRadius: 10,
    marginTop: 20,
  },
});
