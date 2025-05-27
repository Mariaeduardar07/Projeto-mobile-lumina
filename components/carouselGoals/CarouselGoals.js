import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import { MaterialCommunityIcons, Feather, FontAwesome, Entypo } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const objetivos = [
    {
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
        backgroundColor: '#eaf4ff',
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

export default ObjetivosCarousel;