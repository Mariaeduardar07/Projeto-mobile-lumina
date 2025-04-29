import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import Carousel from "react-native-reanimated-carousel"; // Certifique-se de instalar e importar corretamente

// Dados para o carrossel
const data = [
  { id: 1, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8qAjlQxPw9tTb-PNp1ZC9Dr8B9F5arJb-A&s" },
  { id: 2, imageUrl: "https://arcosmodels.com/wp-content/uploads/2022/10/AMORA-CAPA-SITE-ARCOS-MODELS-290x380.jpg" },
  { id: 3, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGL0me_PGKcII0ZfpgoFOEyNGH2xNp4a0O0Mp3DmmLEsZu0nSVIbjQT49kHCpSY79g4h4&usqp=CAU" },
  { id: 4, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiE1jj4QbYkci-ttq8XTrZOUPbg2G69BKml_076NpqClNjjmJ6yKhHclR1LAW3-LIoWcM&usqp=CAU" },
  { id: 5, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Iosutfl_DXacS21AHIACfDB9GUoU7huGcb2XwuCaf8CXWEQFXYrKDjx11fpQUVI07Gk&usqp=CAU" },
];

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.containerAboutUs}>
        <View style={styles.introduction}>
          <Text style={styles.titleIntroduction}>
            Seja bem-vinda ao nosso mundo
          </Text>
          <Text style={styles.textIntroduction}>
            Somos cinco amigas unidas pela paixão por beleza, tecnologia e
            criatividade. A Lumina nasceu para inspirar, compartilhar dicas
            sinceras e celebrar a liberdade de se sentir bem com quem você é.
            Com uma Product Owner, uma Scrum Master e três desenvolvedoras,
            criamos este cantinho com carinho — pra iluminar seu dia com
            conteúdo feito de coração.
          </Text>
        </View>

        {/* Carrossel */}
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.carouselContainer}>
              <Carousel
                width={320}
                height={300}
                data={data}
                autoPlay={true}
                autoPlayInterval={1500}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={styles.image}
                      accessibilityLabel={`Imagem ${item.id}`}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerAboutUs: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  introduction: {
    width: "90%",
    marginBottom: 20,
  },
  titleIntroduction: {
    fontSize: 26,
    fontWeight: "400",
    textAlign: "justify",
    width: "100%",
    color: "#2b60ab",
  },
  textIntroduction: {
    fontSize: 18,
    color: "black",
    marginTop: 10,
    textAlign: "justify",
    width: "100%",
  },
  // CSS do carrossel
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
  },
  carouselContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "100%",
    height: 260,
    resizeMode: "contain",
  },
});