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
  //Estilo geral da página
  container: {
    justifyContent: "center",
    alignItems: "center",
    // flex: 1,
    backgroundColor: "white",
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
