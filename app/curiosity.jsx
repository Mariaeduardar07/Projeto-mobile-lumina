import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  Modal,
  TextInput,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SearchBar from "../components/search/Search.js";
import Banner from "../components/banner/Banner";


const { width } = Dimensions.get("window");

export default function Curiosity() {
  const [posts, setPosts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [contentModalVisible, setContentModalVisible] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);

  const addPost = () => {
    if (!newTitle || !newImageUrl || !newContent) return;
    const newPost = {
      id: Date.now().toString(),
      title: newTitle,
      content: newContent,
      imageUrl: newImageUrl,
    };
    setPosts([newPost, ...posts]);
    setNewTitle("");
    setNewContent("");
    setNewImageUrl("");
    setModalVisible(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SearchBar />

      {/* Banner de Introdução */}
      <Banner
        title="Curiosidade"
        text="Bem-vindo à seção post do Lumina."
        image={{
          uri: "https://privatelabelbrazil.com.br/wp-content/uploads/2024/04/skincare-de-marca-propria-scaled.jpg",
        }}
        gradientColors={["rgba(0, 0, 0, 0)", "rgb(167, 213, 236)"]}
      />

      {/* Botão de adicionar post */}
      <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>+ Adicionar Post</Text>
      </Pressable>

      {/* Lista de Polaroids */}
      <View style={styles.postsContainer}>
        {posts.map((post) => (
          <Pressable
            key={post.id}
            onPress={() => {
              setSelectedPost(post);
              setContentModalVisible(true);
            }}
            style={styles.polaroidCard}
          >
            <Image
              source={{ uri: post.imageUrl }}
              style={styles.polaroidImage}
            />
            <View style={styles.polaroidCaptionContainer}>
              <Text style={styles.polaroidTitle}>{post.title}</Text>
            </View>
          </Pressable>
        ))}
      </View>

      {/* Modal de criação de post */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>+ Novo Post</Text>
            <TextInput
              placeholder="Título"
              value={newTitle}
              onChangeText={setNewTitle}
              style={styles.input}
            />
            <TextInput
              placeholder="URL da Imagem"
              value={newImageUrl}
              onChangeText={setNewImageUrl}
              style={styles.input}
            />
            <TextInput
              placeholder="Conteúdo"
              value={newContent}
              onChangeText={setNewContent}
              multiline
              style={[styles.input, { height: 80 }]}
            />
            <View style={styles.modalButtons}>
              <Pressable onPress={addPost} style={styles.saveButton}>
                <Text style={styles.saveText}>Adicionar</Text>
              </Pressable>
              <Pressable
                onPress={() => setModalVisible(false)}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de Conteúdo do Post */}
      <Modal visible={contentModalVisible} animationType="fade" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.contentModal}>
            <Text style={styles.modalTitle}>{selectedPost?.title}</Text>
            <Text style={styles.contentText}>{selectedPost?.content}</Text>
            <Pressable
              onPress={() => setContentModalVisible(false)}
              style={styles.closeButton}
            >
              <Text style={styles.closeText}>Fechar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 20,
  },
  addButton: {
    backgroundColor: "#4a90e2",
    padding: 12,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontSize: width * 0.04, // Tamanho dinâmico
    fontWeight: "bold",
  },
  postsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  polaroidCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: width * 0.44,
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    overflow: "hidden",
  },
  polaroidImage: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
  },
  polaroidCaptionContainer: {
    padding: 8,
    backgroundColor: "#fefefe",
  },
  polaroidTitle: {
    fontWeight: "bold",
    fontSize: width * 0.036, // Tamanho dinâmico
    textAlign: "center",
    color: "#333",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: width * 0.05, // Tamanho dinâmico
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  contentModal: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  contentTitle: {
    fontSize: width * 0.05, // Tamanho dinâmico
    fontWeight: "bold",
    color: "#4a90e2",
    marginBottom: 10,
    textAlign: "center",
  },
  contentText: {
    fontSize: width * 0.04, // Tamanho dinâmico
    textAlign: "justify",
    color: "#333",
  },
});