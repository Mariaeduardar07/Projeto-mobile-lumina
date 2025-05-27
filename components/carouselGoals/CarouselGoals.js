import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const objetivos = [
    {
    id: '1',
    icon: <Ionicons name="book-outline" size={40} color="#2563eb" />,
    title: "Entregar conteúdos de qualidade que inspirem o autocuidado.",
},
{
    id: '2',
    icon: <Ionicons name="chatbubbles-outline" size={40} color="#2563eb" />,
    title: "Construir uma comunidade acolhedora e colaborativa.",
},
{
    id: '3',
    icon: <Ionicons name="bulb-outline" size={40} color="#2563eb" />,
    title: "Criar soluções criativas que promovam o autoconhecimento.",
},
{
    id: '4',
    icon: <Ionicons name="ribbon-outline" size={40} color="#2563eb" />,
    title: "Inspirar e transformar vidas por meio de experiências significativas.",
},
{
    id: '5',
    icon: <Ionicons name="heart-outline" size={40} color="#2563eb" />,
    title: "Cultivar um espaço digital saudável, inclusivo e elegante.",
}

];

const ObjetivosCards = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.header}>#OBJETIVOSLUMINA</Text>
            <ScrollView
                contentContainerStyle={{ alignItems: 'center' }}
                showsVerticalScrollIndicator={false}
            >
        id: '1',
        icon: <MaterialCommunityIcons name="check-decagram" size={40} color="#2563eb" />,
        title: "Garantir a qualidade e excelência em cada entrega.",
    },
    {
        id: '2',
        icon: <Feather name="users" size={40} color="#2563eb" />,
        title: "Promover a colaboração e o trabalho em equipe.",
    },
    {
        id: '3',
        icon: <Feather name="lightbulb" size={40} color="#2563eb" />,
        title: "Inovar e criar soluções criativas para nossos desafios.",
    },
    {
        id: '4',
        icon: <FontAwesome name="star" size={40} color="#2563eb" />,
        title: "Alcançar reconhecimento por meio de resultados excepcionais.",
    },
    {
        id: '5',
        icon: <Entypo name="heart" size={40} color="#2563eb" />,
        title: "Fomentar um ambiente de trabalho saudável e inclusivo.",
    },
];

const ObjetivosCarousel = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.header}>#OBJETIVOSLUMINA</Text>
            <View style={styles.lista}>
                {objetivos.map((item) => (
                    <View key={item.id} style={styles.card}>
                        {item.icon}
                        <Text style={styles.cardText}>{item.title}</Text>
                    </View>
                ))}
            </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        marginTop: 30,
        width: '100%',
    },
    header: {
        fontSize: 18,
        color: '#1e3a8a',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    lista: {
        width: '100%',
        alignItems: 'center',
    },
    card: {
        width: width * 0.9,
        backgroundColor: '#e3f1fa',
        borderRadius: 20,
        padding: 24,
        marginBottom: 18,
        justifyContent: 'center',
        alignItems: 'center',
        height: 180,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardText: {
        marginTop: 12,
        fontSize: 14,
        color: '#374151',
        textAlign: 'center',
    },
});

export default ObjetivosCards;