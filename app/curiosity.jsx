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
  Dimensions,
  Alert,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
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
      <View style={styles.bannerIntroduction}>
        <ImageBackground
          source={{
            uri: "data:image/jpeg;base64,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",
          }}
          style={styles.bannerImage}
          imageStyle={{ borderRadius: 15 }}
        >
          <LinearGradient
            colors={["#ffffff00", "#a7d5ec"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.gradient}
          >
            <Banner
              title="Seja bem vindo ao blog Lumina"
              text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
            />
          </LinearGradient>
        </ImageBackground>
      </View>}
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
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    zIndex: 10,
  },
  container: {
    paddingHorizontal: 16,
    paddingBottom: 120,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginTop: 16,
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
  },
  image: {
    height: 160,
    justifyContent: "flex-end",
  },
  gradient: {
    padding: 15,
    backgroundColor: "#a7d5ec",
  },
  title: {
    color: "#fff",
    fontSize: 10,
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
});
