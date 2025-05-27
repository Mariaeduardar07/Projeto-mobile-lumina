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