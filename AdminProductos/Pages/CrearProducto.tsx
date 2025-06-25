import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert, Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Producto } from '../Modelos/Producto';
import { crearProducto } from '../api/productos';

export default function CrearProducto({ navigation }: any) {
  const [form, setForm] = useState<Producto>({
    nombre: '',
    descripcion: '',
    precio: 0,
    estado: '',
    categoria: '',
    foto: '',
  });

  const tomarFoto = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permiso denegado para cámara');
      return;
    }
    const result = await ImagePicker.launchCameraAsync();
    if (!result.canceled && result.assets && result.assets[0]) {
      setForm({ ...form, foto: result.assets[0].uri });
    }
  };

  const guardar = async () => {
    try {
      await crearProducto(form);
      Alert.alert('Producto guardado');
      setForm({ nombre: '', descripcion: '', precio: 0, estado: '', categoria: '', foto: '' });
    } catch (error) {
      Alert.alert('Error al guardar');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Nombre" style={styles.input} onChangeText={(t) => setForm({ ...form, nombre: t })} value={form.nombre} />
      <TextInput placeholder="Descripción" style={styles.input} onChangeText={(t) => setForm({ ...form, descripcion: t })} value={form.descripcion} />
      <TextInput placeholder="Estado" style={styles.input} onChangeText={(t) => setForm({ ...form, estado: t })} value={form.estado} />
      <TextInput placeholder="Categoría" style={styles.input} onChangeText={(t) => setForm({ ...form, categoria: t })} value={form.categoria} />
      <TextInput placeholder="Precio" style={styles.input} keyboardType="numeric" onChangeText={(t) => setForm({ ...form, precio: Number(t) })} value={form.precio.toString()} />

      <TouchableOpacity onPress={tomarFoto}>
        <Text style={styles.link}>Fotografiar Item</Text>
      </TouchableOpacity>
      {form.foto ? <Image source={{ uri: form.foto }} style={styles.img} /> : null}

      <Button title="Guardar" onPress={guardar} />
      <Button title="Detalle Items" onPress={() => navigation.navigate('ListaProductos')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 10, borderRadius: 5 },
  link: { color: 'blue', marginBottom: 10, textAlign: 'center' },
  img: { width: 100, height: 100, alignSelf: 'center' },
});
