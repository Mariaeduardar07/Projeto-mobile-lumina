import { Stack } from "expo-router";
import { Image, Text, View, StyleSheet } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: "#fff" },
        headerTintColor: "#fff",
        headerTitle: () => (
          <View style={styles.headerContainer}>
            <Image
              source={require("../assets/menu.png")}
              style={{ width: 40, height: 40 }}
            />

            <Image
              source={require("../assets/logoPrincipal.png")}
              style={styles.logoPrincipal}
            />
          
          </View>
        ),
      }}
    >

      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="about" options={{ title: "Sobre" }} />
      <Stack.Screen name="termos" options={{ title: "Termos de Condição" }} />
  
    </Stack>

    
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logoPrincipal: {
    height: 50,
    width: 150,
    marginLeft: 80, 
    marginTop: 10,
  },
});