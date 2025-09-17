const productos = [
  { id: "1", nombre: "Remera Negra", categoria: "ropa", precio: 3000 },
  { id: "2", nombre: "Zapatillas", categoria: "calzado", precio: 12000 },
  { id: "3", nombre: "Campera", categoria: "ropa", precio: 15000 },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 1000);
  });
};

export const getProductoById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos.find(p => p.id === id)), 1000);
  });
};

export default productos;