import axios from 'axios';
import { Producto } from '../Modelos/Producto';

const BASE_URL = 'http://localhost:3000'; // Ajusta a tu backend

export const obtenerProductos = async (): Promise<Producto[]> => {
  const res = await axios.get(`${BASE_URL}/productos`);
  return res.data;
};

export const crearProducto = async (producto: Producto) => {
  const res = await axios.post(`${BASE_URL}/productos`, producto);
  return res.data;
};

export const eliminarProducto = async (id: number) => {
  const res = await axios.delete(`${BASE_URL}/productos/${id}`);
  return res.data;
};
