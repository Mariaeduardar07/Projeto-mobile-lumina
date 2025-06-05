import { Image, View, StyleSheet, Dimensions } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";
import { BiCategory } from "react-icons/bi";


const { width } = Dimensions.get("window");


export default function RootLayout() {
  return (
      <Drawer
        screenOptions={{
          headerTintColor: "#2b60ab",
          headerStyle: {
            backgroundColor: "#ffffff",
          },
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require("../assets/logoPrincipal.png")}
                style={styles.logoPrincipal}
              />
            </View>
          ),
          drawerActiveTintColor: "#2b60ab",    // Cor do texto ativo
          drawerInactiveTintColor: "#888",  // Cor do texto inativo
          drawerItemStyle: {
            marginVertical: 8,
            borderRadius: 10,
          },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Início",
            title: "Home",
            drawerIcon: ({ size }) => (
              <Ionicons name="home" size={size} color="#2b60ab" />
            ),
          }}
        />
        <Drawer.Screen
          name="categoria"
          options={{
            drawerLabel: "Categoria",
            title: "Categoria",
            drawerIcon: ({ size }) => (
              <BiCategory size={size} color="#2b60ab" />
            ),
          }}
        />
        <Drawer.Screen
          name="aboutUs"
          options={{
            drawerLabel: "Sobre nós",
            title: "Sobre nós",
            drawerIcon: ({ size }) => (
              <Ionicons name="people-outline" size={size} color="#2b60ab" />
            ),
          }}
        />
        <Drawer.Screen
          name="curiosity"
          options={{
            drawerLabel: "Feed",
            title: "Feed",
            drawerIcon: ({ size }) => (
              <Ionicons name="eye-outline" size={size} color="#2b60ab" />
            ),
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            drawerLabel: "Contato",
            title: "Contato",
            drawerIcon: ({ size }) => (
              <Ionicons name="call" size={size} color="#2b60ab" />
            ),
          }}
        />
        <Drawer.Screen
          name="login"
          options={{
            drawerLabel: "Login",
            title: "login",
            drawerIcon: ({ size }) => (
              <Ionicons name="log-in-outline" size={size} color="#2b60ab" />
            ),
            drawerItemStyle: {
              marginTop: 480, // Espaço grande acima do Login
              borderRadius: 10,
            },
          }}
        />
      </Drawer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 60,
  },
  logoPrincipal: {
    height: 90,
    width: 160,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain",
  },
});