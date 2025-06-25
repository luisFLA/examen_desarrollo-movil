// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CrearProducto from './Pages/CrearProducto';
import ListaProductos from './Pages/ListaProductos';
import DetalleProducto from './Pages/DetalleProducto';
import { ProductoProvider } from './Provider/ProductoProvider';
import { RootStackParamList } from './types'; // Ajusta la ruta si está en otra carpeta

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <ProductoProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CrearProducto">
          <Stack.Screen name="CrearProducto" component={CrearProducto} />
          <Stack.Screen name="ListaProductos" component={ListaProductos} />
          <Stack.Screen name="DetalleProducto" component={DetalleProducto} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProductoProvider>
  );
}
