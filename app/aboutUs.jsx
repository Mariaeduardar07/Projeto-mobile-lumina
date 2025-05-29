import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

import Carousel from "../components/carousel/Carousel.js";
import SearchBar from "../components/search/Search.js";
import ObjetivosCarousel from "../components/carouselGoals/CarouselGoals.js";


const carouselData = [
  {
    id: "1",
    title: "Maria Eduarda Reis",
    subtitle: "Product Owner",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO8qAjlQxPw9tTb-PNp1ZC9Dr8B9F5arJb-A&s",
    },
  },
  {
    id: "2",
    title: "Mariana Cardoso",
    subtitle: "Scrum Master",
    image: {
      uri: "https://arcosmodels.com/wp-content/uploads/2022/10/AMORA-CAPA-SITE-ARCOS-MODELS-290x380.jpg",
    },
  },
  {
    id: "3",
    title: "Anna Clara",
    subtitle: "Desenvolvedora",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGL0me_PGKcII0ZfpgoFOEyNGH2xNp4a0O0Mp3DmmLEsZu0nSVIbjQT49kHCpSY79g4h4&usqp=CAU",
    },
  },
  {
    id: "4",
    title: "Sophia Gomes",
    subtitle: "Desenvolvedora",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiE1jj4QbYkci-ttq8XTrZOUPbg2G69BKml_076NpqClNjjmJ6yKhHclR1LAW3-LIoWcM&usqp=CAU",
    },
  },
  {
    id: "5",
    title: "Sophia Balico",
    subtitle: "Desenvolvedora",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Iosutfl_DXacS21AHIACfDB9GUoU7huGcb2XwuCaf8CXWEQFXYrKDjx11fpQUVI07Gk&usqp=CAU",
    },
  },
];

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* INÍCIO DA BARRA DE PESQUISA */}
      <SearchBar />
      {/* FIM DA BARRA DE PESQUISA */}

      {/* CARD DE BOAS-VINDAS */}
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeTitle}>Seja bem-vinda ao nosso mundo</Text>
        <Text style={styles.welcomeText}>
          Somos cinco amigas unidas pela paixão por beleza, tecnologia e criatividade. A Lumina nasceu para inspirar, compartilhar dicas sinceras e celebrar a liberdade de se sentir bem com quem você é. Com uma Product Owner, uma Scrum Master e três desenvolvedoras, criamos este cantinho com carinho — pra iluminar seu dia com conteúdo feito de coração.
        </Text>
      </View>
      {/* FIM DO CARD DE BOAS-VINDAS */}

      <View style={styles.carouselContainer}>
        <Carousel data={carouselData} autoplayDelay={4000} />
      </View>

      {/* OBJETIVOS LUMINA COMO CARROSSEL */}
      <View style={styles.objetivosListaContainer}>
        <ObjetivosCarousel />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#ffff",
    paddingVertical: 20,
  },
  welcomeCard: {
    width: width * 0.9,
    backgroundColor: "#e3f1fa",
    borderRadius: 18,
    padding: 22,
    marginBottom: 25,
    marginTop: 20,
    shadowColor: "#2b60ab",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  welcomeTitle: {
    fontSize: width * 0.07, // Ajustando o tamanho da fonte
    fontWeight: "bold",
    color: "#2b60ab",
    marginBottom: 12,
    textAlign: "center",
    letterSpacing: 1,
  },
  welcomeText: {
    fontSize: width * 0.04, // Ajustando o tamanho da fonte
    color: "#222",
    textAlign: "justify",
    lineHeight: 26,
  },
  carouselContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  objetivosListaContainer: {
    width: "100%",
    marginTop: 30,
    marginBottom: 30,
    alignItems: "center",
  },
});