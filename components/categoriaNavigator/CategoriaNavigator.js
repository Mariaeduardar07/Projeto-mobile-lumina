import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriaMenu from './CategoriaMenu';
import Categoria1 from './Categoria1';
import Categoria2 from './Categoria2';
import Categoria3 from './Categoria3';

const Stack = createStackNavigator();

export default function CategoriaNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorias Menu" component={CategoriaMenu} />
      <Stack.Screen name="Categoria1" component={Categoria1} />
      <Stack.Screen name="Categoria2" component={Categoria2} />
      <Stack.Screen name="Categoria3" component={Categoria3} />
    </Stack.Navigator>
  );
}