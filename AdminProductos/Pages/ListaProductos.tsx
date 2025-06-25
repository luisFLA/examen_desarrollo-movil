import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { obtenerProductos } from '../api/productos';
import { Producto } from '../Modelos/Producto';
import ProductoCard from '../Componentes/ProductoCard';

export default function ListaProductos({ navigation }: any) {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    const cargar = async () => {
      const data = await obtenerProductos();
      setProductos(data);
    };
    cargar();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id!.toString()}
        renderItem={({ item }) => (
          <ProductoCard producto={item} onVerDetalle={() => navigation.navigate('DetalleProducto', { item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  title: { fontSize: 20, marginBottom: 10 },
});
