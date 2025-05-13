import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
          >
            <LinearGradient
              colors={["#2b60ab", "#ffffff00"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.cardCategory}
            >
              <Text style={styles.titleCategory}>{category.title}</Text>
              <Text style={styles.textCategory}>{category.description}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoriasContainer: {
    marginTop: 20,
  },
  titleSectionCategories: {
    fontSize: 24,
    fontWeight: "500",
    color: "#2b60ab",
  },
  cardsCategoriesContainer: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: 15,
    marginTop: 10,
  },
  cardCategory: {
    borderRadius: 15,
    width: "100%",
    height: 115,
    justifyContent: "center",
  },
  titleCategory: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginTop: 20,
    left: 10,
  },
  textCategory: {
    fontSize: 14,
    color: "#fff",
    width: "90%",
    left: 10,
  },
});

export default CategoriesCards;