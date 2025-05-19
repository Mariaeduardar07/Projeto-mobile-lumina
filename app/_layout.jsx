import { Image, View, StyleSheet } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

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
              <Ionicons name="people-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: '60%',
    flex: 1,
  },
  logoPrincipal: {
    height: 50,
    width: 150,
  },
});
