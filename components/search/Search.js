import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
  
    const handleSearch = () => {
      console.log("Buscando por:", searchQuery);
    };
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
        <Image
          source={require("../../assets/Search.png")} // Substitua pelo caminho correto da imagem
          style={{ width: 20, height: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default SearchBar;