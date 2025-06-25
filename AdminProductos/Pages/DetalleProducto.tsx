import React from 'react';
import { View, Text, Button, Alert, Image, StyleSheet } from 'react-native';
import { eliminarProducto } from '../api/productos';
import { Producto } from '../Modelos/Producto';

export default function DetalleProducto({ route, navigation }: any) {
  const { item }: { item: Producto } = route.params;

  const eliminar = async () => {
    await eliminarProducto(item.id!);
    Alert.alert('Producto eliminado');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalle</Text>
      <Text>Nombre: {item.nombre}</Text>
      <Text>Descripción: {item.descripcion}</Text>
      <Text>Precio: L {item.precio}</Text>
      <Image source={{ uri: item.foto }} style={styles.img} />
      <Button title="Eliminar" color="red" onPress={eliminar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, fontWeight: 'bold' },
  img: { width: 150, height: 150, marginTop: 10 },
});
