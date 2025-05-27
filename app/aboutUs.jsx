import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";

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
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", backgroundColor: "white",}}>
      {/* INÍCIO DA BARRA DE PESQUISA */}
     <SearchBar />
      {/* FIM DA BARRA DE PESQUISA */}

      <View style={styles.introduction}>
        <Text style={styles.titleIntroduction}>
          Seja bem-vinda ao nosso mundo
        </Text>
        <Text style={styles.textIntroduction}>
          Somos cinco amigas unidas pela paixão por beleza, tecnologia e
          criatividade. A Lumina nasceu para inspirar, compartilhar dicas
          sinceras e celebrar a liberdade de se sentir bem com quem você é. Com
          uma Product Owner, uma Scrum Master e três desenvolvedoras, criamos
          este cantinho com carinho — pra iluminar seu dia com conteúdo feito de
          coração.
        </Text>
      </View>

      <Carousel data={carouselData} autoplayDelay={4000} />
       <ObjetivosCarousel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  introduction: {
    width: "92%",
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 6,
    elevation: 4,
  },
  titleIntroduction: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "justify",
    color: "#2b60ab",
    marginBottom: 12,
    letterSpacing: 0.5,
    width: "100%",
  },
  textIntroduction: {
    fontSize: 17,
    color: "#333",
    marginTop: 2,
    textAlign: "justify",
    width: "100%",
    lineHeight: 24,
  },
});