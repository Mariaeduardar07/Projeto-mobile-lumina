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
        const interval = setInterval(() => {
            const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
            flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
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
                keyExtractor={(item) => item.id.toString()}
            />
            {renderPagination()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width,
        height: width * 0.8,
        marginBottom: 20
    },
    slide: {
        width,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    slideImage: {
        width: '100%',
        height: '80%',
        borderRadius: 10
    },
    textContainer: {
        position: 'absolute',
        bottom: 30,
        left: 20,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 10,
        borderRadius: 8
    },
    title: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    subtitle: {
        color: '#fff',
        fontSize: 14
    },
    paginationContainer: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4
    }
});

export default Carousel;
