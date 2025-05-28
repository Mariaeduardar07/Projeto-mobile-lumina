import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

const CategoriesCards = ({ categories, onCategoryPress }) => {
  return (
    <View style={styles.categoriasContainer}>
      <Text style={styles.titleSectionCategories}>Categorias</Text>
      <View style={styles.cardsCategoriesContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => onCategoryPress(category.route)}
            style={styles.cardCategory}
            activeOpacity={0.8}
          >
            <ImageBackground
              source={category.image}
              style={styles.cardCategoryImage}
              imageStyle={{ borderRadius: 15 }}
            >
              <LinearGradient
                colors={["#2b60abcc", "#ffffff00"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.cardCategoryGradient}
              >
                <Text style={styles.titleCategory}>{category.title}</Text>
                <Text style={styles.textCategory}>{category.description}</Text>
              </LinearGradient>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriasContainer: {
    marginTop: 5,
    width: "100%",
  },
  cardsCategoriesContainer: {
     width: "100%",
     marginTop: 10,
    alignItems: "center", // Centraliza os cards horizontalmente
    justifyContent: "center", // Opcional: centraliza verticalmente se houver espaço
  },
  titleSectionCategories: {
    fontSize: width < 350 ? 18 : 24,
    fontWeight: "500",
    color: "#2b60ab",
    alignSelf: "flex-start",
    marginLeft: 22,
    marginTop: 35,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardCategory: {
    borderRadius: 15,
    width: width * 0.9,
    height: width < 350 ? 90 : 115,
    overflow: "hidden",
    marginBottom: 15,
  },
  cardCategoryImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  cardCategoryGradient: {
    flex: 1,
    borderRadius: 15,
    padding: 16,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "100%",
    height: "100%",
  },
  titleCategory: {
    fontSize: width < 350 ? 18 : 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 8,
  },
  textCategory: {
    fontSize: width < 350 ? 12 : 14,
    color: "#fff",
    width: "95%",
  },
  imageCategory: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 8,
  },
});

export default CategoriesCards;
