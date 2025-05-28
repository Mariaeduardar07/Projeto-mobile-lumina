import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
const { width, height } = Dimensions.get("window");
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "react-native-screens";
import CustomButton from "../../components/customButton/CustomButton";
import Banner from "../../components/banner/Banner";
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
        title="SKIN CARE"
        text="Bem-vindo à seção Skin Care do Lumina."
        image={{
          uri: "https://privatelabelbrazil.com.br/wp-content/uploads/2024/04/skincare-de-marca-propria-scaled.jpg",
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
        <Text style={styles.titleLiso}>Peles secas</Text>
        <Image
          style={styles.imageQuimica}
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
        <CustomButton title="Baixe PDF" />
      </View>

      {/*-----------quimica--------------*/}

      <View style={styles.containerQuimica}>
        <Text style={styles.titleQuimica}>Peles Mistas</Text>
        <Image
          style={styles.imageQuimica}
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
        <CustomButton title="Baixe PDF" />
      </View>

      {/*-----------mechas--------*/}
      <View style={styles.containerMechas}>
        <Text style={styles.titleMechas}>Peles oleosas</Text>
        <Image
          style={styles.imageMechas}
          source={require("../../assets/pele-oleosa.png")}
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
          Peles oleosas têm produção elevada de sebo, resultando em brilho
          excessivo, poros dilatados e tendência a acne e cravos. A textura
          costuma ser mais espessa e úmida ao toque.
        </Text>
      </View>
      <View style={styles.Dicas}>
        <Text style={styles.titleDicas}>Dicas:</Text>
        <Text style={styles.lineDicas}>__________________________________</Text>
        <Text style={styles.describeDicas}>
          Clique no botão abaixo para baixar nosso PDF exclusivo com dicas
          essenciais de skincare para peles oleosas! Conheça os melhores
          cuidados para controlar o brilho, reduzir poros e prevenir acne sem
          agredir a pele. Tudo para manter seu rosto limpo, sequinho e com
          aspecto saudável ao longo do dia!
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