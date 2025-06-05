import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.78;
const CARD_SPACING = 16;

const objetivos = [
  {
    id: '1',
    icon: <Ionicons name="book-outline" size={48} color="#fff" />,
    title: "Entregar conteúdos de qualidade que inspirem o autocuidado..",
  },
  {
    id: '2',
    icon: <Ionicons name="chatbubbles-outline" size={48} color="#fff" />,
    title: "Promover a colaboração e o trabalho em equipe.",
  },
  {
    id: '3',
    icon: <Ionicons name="bulb-outline" size={48} color="#fff" />,
    title: "Construir uma comunidade acolhedora e colaborativa.",
  },
  {
    id: '4',
    icon: <Ionicons name="ribbon-outline" size={48} color="#fff" />,
    title: "Inspirar e transformar vidas por meio de experiências significativas.",
  },
  {
    id: '5',
    icon: <Ionicons name="heart-outline" size={48} color="#fff" />,
    title: "Cultivar um espaço digital saudável, inclusivo e elegante.",
  },
];

const BlogObjectives = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index);
    }
  });

  useEffect(() => {
    if (!objetivos || objetivos.length === 0) return;
    const interval = setInterval(() => {
      const nextIndex = activeIndex === objetivos.length - 1 ? 0 : activeIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }, 4000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const scrollToIndex = (index) => {
    if (index >= 0 && index < objetivos.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
    }
  };

  const renderItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * (CARD_WIDTH + CARD_SPACING),
      index * (CARD_WIDTH + CARD_SPACING),
      (index + 1) * (CARD_WIDTH + CARD_SPACING),
    ];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.92, 1, 0.92],
      extrapolate: 'clamp',
    });
    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.6, 1, 0.6],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={[styles.card, { transform: [{ scale }], opacity }]}>
        <View style={styles.iconCircle}>{item.icon}</View>
        <Text style={styles.cardText}>{item.title}</Text>
      </Animated.View>
    );
  };

  // Removido o renderPagination

  return (
    <View style={styles.container}>
      <Text style={styles.header}>#OBJETIVOSLUMINA</Text>

      <View style={styles.carouselWrapper}>
        <TouchableOpacity
          onPress={() => scrollToIndex(activeIndex - 1)}
          style={styles.arrowButton}
        >
          <Ionicons name="chevron-back" size={28} color="#2563eb" />
        </TouchableOpacity>

        <Animated.FlatList
          ref={flatListRef}
          data={objetivos}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          snapToInterval={CARD_WIDTH + CARD_SPACING}
          decelerationRate="fast"
          contentContainerStyle={{
            paddingHorizontal: (width - CARD_WIDTH) / 2,
          }}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          onViewableItemsChanged={onViewableItemsChanged.current}
          viewabilityConfig={viewConfigRef.current}
          keyExtractor={(item) => item.id}
          getItemLayout={(_, index) => ({
            length: CARD_WIDTH + CARD_SPACING,
            offset: (CARD_WIDTH + CARD_SPACING) * index,
            index,
          })}
        />

        <TouchableOpacity
          onPress={() => scrollToIndex(activeIndex + 1)}
          style={styles.arrowButton}
        >
          <Ionicons name="chevron-forward" size={28} color="#2563eb" />
        </TouchableOpacity>
      </View>
      {/* Bolinhas removidas */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
    backgroundColor: '#f4f8fb',
  },
  header: {
    fontSize: 24,
    color: '#2b60ab',
    fontWeight: 'bold',
    marginBottom: 28,
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  carouselWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowButton: {
    padding: 8,
    zIndex: 10,
  },
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 36,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: CARD_SPACING / 2,
    shadowColor: '#2b60ab',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.13,
    shadowRadius: 24,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#e0e7ef',
  },
  iconCircle: {
    backgroundColor: '#2b60ab',
    borderRadius: 60,
    padding: 22,
    marginBottom: 22,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2b60ab',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.18,
    shadowRadius: 10,
    elevation: 4,
  },
  cardText: {
    fontSize: 20,
    color: '#1e293b',
    textAlign: 'center',
    fontWeight: '700',
    letterSpacing: 0.5,
    lineHeight: 28,
    marginTop: 8,
  },
  // Os estilos de paginação podem ser removidos se quiser
});

export default BlogObjectives;