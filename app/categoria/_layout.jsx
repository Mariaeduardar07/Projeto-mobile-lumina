import { Drawer } from "expo-router/drawer";
import { Ionicons } from "@expo/vector-icons";

export default function CategoriaLayout() {
  return (
    <Drawer
      screenOptions={{
        headerTintColor: "#2b60ab",
        headerStyle: {
          backgroundColor: "#ffffff",
        },
        drawerActiveTintColor: "#2b60ab",
        drawerInactiveTintColor: "#888",
        drawerItemStyle: {
          marginVertical: 8,
          borderRadius: 12,
        },
        drawerContentContainerStyle: {
          paddingTop: 32, // Espaço entre o topo e o primeiro item
        },
      }}
    >
      <Drawer.Screen
        name="cuidadosCapilares"
        options={{
          drawerLabel: "Cuidados Capilares",
          title: "Cuidados Capilares",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="cut-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="maquiagens"
        options={{
          drawerLabel: "Maquiagens",
          title: "Maquiagens",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="sparkles-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="skincare"
        options={{
          drawerLabel: "Skincare",
          title: "Skincare",
          drawerIcon: ({ size, color }) => (
            <Ionicons name="leaf" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
}