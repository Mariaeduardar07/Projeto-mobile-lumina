import { Image, View, StyleSheet, Dimensions } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";


const { width } = Dimensions.get("window");


export default function RootLayout() {
  return (
      <Drawer
        screenOptions={{
          // contentStyle: { backgroundColor: "red" },
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
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: "Início",
            title: "Home",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Drawer.Screen
          name="aboutUs"
          options={{
            drawerLabel: "Sobre nós",
            title: "Sobre nós",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
          }}
        />

          <Drawer.Screen
          name="login"
          options={{
            drawerLabel: "Login",
            title: "login",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="log-in-outline" size={size} color={color} />
            ),
          }}
        />
           <Drawer.Screen
          name="categoria"
          options={{
            drawerLabel: "Categoria",
            title: "Categoria",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="list" size={size} color={color} />
            ),
          }}
        />
           <Drawer.Screen
          name="curiosity"
          options={{
            drawerLabel: "Feed",
            title: "Feed",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="eye-outline" size={size} color={color} />
            ),
          }}
        />
           <Drawer.Screen
          name="contact"
          options={{
            drawerLabel: "Contato",
            title: "Contato",
            drawerIcon: ({ size, color }) => (
              <Ionicons name="call" size={size} color={color} />
            ),
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