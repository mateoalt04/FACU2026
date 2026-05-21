/**
 * EJERCICIO 2: Carrito de Compras
 * ================================
 * Practica: interfaces, arrays, find, filter, map, reduce
 *
 * Completa cada función usando los tipos definidos.
 * NO modifiques las interfaces ni las firmas de las funciones.
 */

export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
}

export interface ItemCarrito {
  producto: Producto;
  cantidad: number;
}

export interface Carrito {
  items: ItemCarrito[];
}

// ─── FUNCIONES A COMPLETAR ────────────────────────────────────────────────────

/**
 * 2a. Agrega un producto al carrito.
 *     - Si el producto ya existe, incrementa su cantidad.
 *     - Si no existe, lo agrega con la cantidad indicada.
 *     - Retorna un NUEVO carrito (no mutes el original).
 */
export function agregarProducto(
  carrito: Carrito,
  producto: Producto,
  cantidad: number
): Carrito {
  // TODO: implementar
const existente = carrito.items.find(item => item.producto.id === producto.id);

let nuevosItems;

  if (existente) {
    nuevosItems = carrito.items.map(item =>
      item.producto.id === producto.id
        ? { ...item, cantidad: item.cantidad + cantidad }
        : item
    );
  } else {
    nuevosItems = [...carrito.items, { producto, cantidad }];
  }

  const nuevoCarrito = {
    ...carrito,
    items: nuevosItems
  };

  return nuevoCarrito;
  throw new Error("No implementado");
}
  

/**
 * 2b. Elimina completamente un producto del carrito por su id.
 *     Retorna un NUEVO carrito.
 */
export function eliminarProducto(carrito: Carrito, productoId: number): Carrito {
  // TODO: implementar
const nuevosItems = carrito.items.filter(item => item.producto.id !== productoId);

const nuevoCarrito = {
  ...carrito,
  items: nuevosItems
};

return nuevoCarrito;
  throw new Error("No implementado");
}

/**
 * 2c. Calcula el total del carrito (suma de precio * cantidad de cada item).
 *     Retorna el valor redondeado a 2 decimales.
 */
export function calcularTotal(carrito: Carrito): number {
  // TODO: implementar
  const total = carrito.items.reduce((acc, item) => {
    return acc + item.producto.precio * item.cantidad;
  }, 0);

  return parseFloat(total.toFixed(2));
  throw new Error("No implementado");
}

/**
 * 2d. Retorna los nombres de los productos del carrito, en orden alfabético.
 *
 * Ejemplo:
 *   nombresOrdenados(carrito) => ["Banana", "Leche", "Pan"]
 */
export function nombresOrdenados(carrito: Carrito): string[] {
  // TODO: implementar
  const nombres = carrito.items.map(item => item.producto.nombre);
  nombres.sort((a, b) => a.localeCompare(b));
  return nombres;
  throw new Error("No implementado");
}

/**
 * 2e. Filtra los items del carrito cuyo producto pertenece a la categoría dada.
 *     Retorna un NUEVO carrito solo con esos items.
 */
export function filtrarPorCategoria(
  carrito: Carrito,
  categoria: string
): Carrito {
  // TODO: implementar
  const itemsFiltrados = carrito.items.filter(
    item => item.producto.categoria === categoria);
  return {
    ...carrito,
    items: itemsFiltrados
  };
  throw new Error("No implementado");
}
