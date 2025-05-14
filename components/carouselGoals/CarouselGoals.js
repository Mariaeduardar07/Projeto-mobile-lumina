import React from "react";
import { View, Text, FlatList } from "react-native";

const objetivos = [
  {
    id: "1",
    icon: (
      <MaterialCommunityIcons name="check-decagram" size={40} color="#2563eb" />
    ),
    title: "Garantir a qualidade e excelência em cada entrega.",
  },
  {
    id: "2",
    icon: <Feather name="users" size={40} color="#2563eb" />,
    title: "Promover a colaboração e o trabalho em equipe.",
  },
  {
    id: "3",
    icon: <Feather name="lightbulb" size={40} color="#2563eb" />,
    title: "Inovar e criar soluções criativas para nossos desafios.",
  },
  {
    id: "4",
    icon: <FontAwesome name="star" size={40} color="#2563eb" />,
    title: "Alcançar reconhecimento por meio de resultados excepcionais.",
  },
  {
    id: "5",
    icon: <Entypo name="heart" size={40} color="#2563eb" />,
    title: "Fomentar um ambiente de trabalho saudável e inclusivo.",
  },
];

const CarouselGoals = () => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={objetivos}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default CarouselGoals;
