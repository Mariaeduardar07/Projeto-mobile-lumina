import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function CategoriaLayout() {
  return (
    <Drawer
      screenOptions={{
        headerTintColor: "#2b60ab",
        headerStyle: { backgroundColor: "#ffffff" },
      }}
    >
      <Drawer.Screen
        name="cabelo"
        options={{
          drawerLabel: "Cabelo",
          title: "Cabelo",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="cut" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="maquiagem"
        options={{
          drawerLabel: "Maquiagem",
          title: "Maquiagem",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="color-palette" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="skincare"
        options={{
          drawerLabel: "Skin Care",
          title: "Skin Care",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="leaf" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}