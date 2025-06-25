import React, { useState } from 'react';
import { Producto } from '../Modelos/Producto';
import { ProductoContext } from '../Context/ProductoContext';

interface Props {
  children: React.ReactNode;
}

export const ProductoProvider = ({ children }: Props) => {
  const [productos, setProductos] = useState<Producto[]>([]);

  const agregarProducto = (producto: Producto) => {
    setProductos([...productos, producto]);
  };

  const eliminarProducto = (id: number) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  return (
    <ProductoContext.Provider
      value={{
        productos,
        agregarProducto,
        eliminarProducto,
        setProductos,
      }}
    >
      {children}
    </ProductoContext.Provider>
  );
};
