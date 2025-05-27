import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    FlatList,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const Carousel = ({ data, autoplayDelay = 3000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const flatListRef = useRef(null);
    const router = useRouter();

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    });

    useEffect(() => {
        if (!data || data.length === 0) return; // Retorna se o data estiver vazio
        const interval = setInterval(() => {
            const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
            try {
                flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
            } catch (error) {
                console.error("Erro ao rolar para o índice:", error);
            }
        }, autoplayDelay);
        return () => clearInterval(interval);
    }, [activeIndex, data.length, autoplayDelay]);

    const renderItem = ({ item }) => (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
                router.push({
                    pathname: '/details',
                    params: { id: item.id, title: item.title }
                })
            }
            style={styles.slide}
        >
            {item.image && (
                <Image
                    source={item.image}
                    style={styles.slideImage}
                    resizeMode="cover"
                />
            )}
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                {item.subtitle && <Text style={styles.subtitle}>{item.subtitle}</Text>}
            </View>
        </TouchableOpacity>
    );

    const renderPagination = () => (
        <View style={styles.paginationContainer}>
            {data.map((_, i) => (
                <View
                    key={i}
                    style={[
                        styles.paginationDot,
                        { backgroundColor: i === activeIndex ? '#2196F3' : '#D1D1D1' }
                    ]}
                />
            ))}
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={data}
                renderItem={renderItem}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewConfigRef.current}
                keyExtractor={(item, index) => item.id?.toString() || index.toString()}
            />
            {renderPagination()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
        height: width * 0.8,
        marginBottom: 20,
    },
    slide: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slideImage: {
        width: "90%", // Largura da imagem
        height: "100%", // Altura da imagem
        borderRadius: 10, // Bordas arredondadas
    },
    textContainer: {
        position: 'absolute', // Sobrepõe a imagem
        bottom: 0, // Fixa na parte inferior da imagem
        width: "90%", // Mesma largura da imagem
        backgroundColor: 'rgba(167, 214, 237, 0.8)', // Fundo azul translúcido
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomLeftRadius: 10, // Bordas arredondadas no canto inferior esquerdo
        borderBottomRightRadius: 10, // Bordas arredondadas no canto inferior direito
        alignItems: 'center',
    },
    title: {
        color: '#2b60ab', // Azul escuro
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        color: '#2b60ab', // Azul escuro
        fontSize: 14,
        textAlign: 'center',
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
        backgroundColor: '#D1D1D1',
    },
});

export default Carousel;