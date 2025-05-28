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
// import SearchBar from "../../components/search/Search";
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