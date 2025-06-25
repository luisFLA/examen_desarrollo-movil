import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Producto } from '../Modelos/Producto';

interface Props {
  producto: Producto;
  onVerDetalle: () => void;
}

export default function ProductoCard({ producto, onVerDetalle }: Props) {
  return (
    <View style={styles.card}>
      <Text>{producto.nombre}</Text>
      <Text>L {producto.precio}</Text>
      <Button title="Ver" onPress={onVerDetalle} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 5,
    borderBottomWidth: 1,
  },
});

