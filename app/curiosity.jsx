import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  Pressable,
  Modal,
  TextInput,
  StyleSheet,
  Alert,
  SafeAreaView,
  Dimensions,
} from "react-native";
import SearchBar from "../components/search/Search";
import Banner from "../components/banner/Banner";

const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2;

export default function Curiosity() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [contentModalVisible, setContentModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const API_URL = "http://localhost:5000/post";

  const fetchPosts = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const reversed = data.reverse();
      setPosts(reversed);
      setFilteredPosts(reversed);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    }
  };

  const addPost = async () => {
    if (!newTitle || !newImageUrl || !newContent) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    const newPost = {
      title: newTitle,
      content: newContent,
      imageUrl: newImageUrl,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) throw new Error("Erro ao criar post");
      await fetchPosts();
      setNewTitle("");
      setNewContent("");
      setNewImageUrl("");
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao adicionar post:", error);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderItem = ({ item }) => (
    <Pressable
      onPress={() => {
        setSelectedPost(item);
        setContentModalVisible(true);
      }}
      style={styles.card}
    >
      <ImageBackground
        source={{ uri: item.imageUrl }}
        style={styles.image}
        imageStyle={{ borderRadius: 16 }}
      >
        <View style={styles.mainDoor}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.wrapper}>
      {/* Cabeçalho fixo */}
      <View style={styles.header}>
        <SearchBar value={searchQuery} onChangeText={handleSearch} />
      </View>

      <FlatList
        data={filteredPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <Banner
            style={styles.introduction}
            title="Curiosidade"
            text="Bem-vindo à seção post do Lumina."
            gradientColors={[
              "rgba(167,213,236,0.8)",
              "rgba(43,96,171,1)",
              "rgba(167,213,236,0.8)",
            ]}
          />
        }
      />

      {/* FAB fixo */}
      <Pressable style={styles.fab} onPress={() => setModalVisible(true)}>
        <Text style={styles.fabText}>+</Text>
      </Pressable>

      {/* Modal Criar */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Novo Post</Text>
            <TextInput
              placeholder="Título"
              value={newTitle}
              onChangeText={setNewTitle}
              style={styles.input}
              placeholderTextColor="#aaa"
            />
            <TextInput
              placeholder="Imagem (URL)"
              value={newImageUrl}
              onChangeText={setNewImageUrl}
              style={styles.input}
              placeholderTextColor="#aaa"
            />
            <TextInput
              placeholder="Conteúdo"
              value={newContent}
              onChangeText={setNewContent}
              style={[styles.input, { height: 80 }]}
              multiline
              placeholderTextColor="#aaa"
            />
            <Pressable style={styles.button} onPress={addPost}>
              <Text style={styles.buttonText}>Publicar</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Modal Conteúdo */}
      <Modal visible={contentModalVisible} animationType="fade" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedPost && (
              <>
                <Text style={styles.modalTitle}>{selectedPost.title}</Text>
                <Text style={styles.content}>{selectedPost.content}</Text>
                <Pressable
                  onPress={() => setContentModalVisible(false)}
                  style={styles.button}
                >
                  <Text style={styles.buttonText}>Fechar</Text>
                </Pressable>
              </>
            )}
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: "#fff",
      width: "100%",
    },
    container: {
      paddingHorizontal: 16,
      paddingBottom: 16,
      paddingTop: 10,
    },
    header: {
      paddingHorizontal: 16,
      paddingVertical: 10,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
      zIndex: 10,
    },
    columnWrapper: {
      justifyContent: "space-between",
      marginBottom: 16,
    },
    mainDoor: {
      flex: 1,
      justifyContent: "flex-end",
      padding: 10,
      backgroundColor: "rgba(0,0,0,0.3)",
    },
    card: {
      width: cardWidth,
      borderRadius: 16,
      overflow: "hidden",
      backgroundColor: "#f9f9f9",
      elevation: 3,
      marginBottom: 16,
    },
    image: {
      height: width < 400 ? 120 : 160,
      justifyContent: "flex-end",
    },
    title: {
      color: "#fff",
      fontSize: width < 350 ? 10 : 11,
      fontWeight: "600",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
    modalContent: {
      margin: 20,
      padding: 24,
      backgroundColor: "#fff",
      borderRadius: 16,
      shadowColor: "#000",
      shadowOpacity: 0.15,
      shadowRadius: 8,
      elevation: 10,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: "600",
      marginBottom: 12,
      color: "#333",
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 12,
      padding: 10,
      marginBottom: 12,
      fontSize: 14,
      color: "#444",
      backgroundColor: "#fafafa",
    },
    button: {
      backgroundColor: "#6C63FF",
      padding: 12,
      borderRadius: 12,
      alignItems: "center",
      marginBottom: 8,
    },
    buttonText: {
      color: "#fff",
      fontWeight: "600",
    },
    cancelText: {
      textAlign: "center",
      color: "#999",
      fontSize: 14,
    },
    content: {
      fontSize: 15,
      marginBottom: 16,
      color: "#444",
    },
    fab: {
      position: "absolute",
      bottom: 24,
      right: 24,
      backgroundColor: "#2b60ab",
      width: 70,
      height: 70,
      borderRadius: 32,
      justifyContent: "center",
      alignItems: "center",
      elevation: 6,
    },
    fabText: {
      color: "#fff",
      fontSize: 28,
      fontWeight: "bold",
    },
  introduction: {
    width: "100%",
    marginBottom: 16,
  },
});