import { createContext } from 'react';
import { Producto } from '../Modelos/Producto';

interface ProductoContextType {
  productos: Producto[];
  agregarProducto: (producto: Producto) => void;
  eliminarProducto: (id: number) => void;
  setProductos: (productos: Producto[]) => void;
}

export const ProductoContext = createContext<ProductoContextType>({
  productos: [],
  agregarProducto: () => {},
  eliminarProducto: () => {},
  setProductos: () => {},
});
