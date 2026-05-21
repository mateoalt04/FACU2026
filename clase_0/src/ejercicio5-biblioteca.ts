/**
 * EJERCICIO 5: Biblioteca
 * ========================
 * Practica: interfaces anidadas, arrays, flatMap, every, some, reduce, groupBy
 *
 * Completa cada función usando los tipos definidos.
 * NO modifiques las interfaces ni las firmas de las funciones.
 */

export interface Autor {
  nombre: string;
  apellido: string;
  nacionalidad: string;
}

export interface Libro {
  isbn: string;
  titulo: string;
  autor: Autor;
  anio: number;
  generos: string[];
  disponible: boolean;
}

export interface EstadisticasBiblioteca {
  totalLibros: number;
  librosDisponibles: number;
  generos: string[];         // lista de géneros únicos, ordenados alfabéticamente
  autorMasLibros: string;    // "Apellido, Nombre" del autor con más libros
}

// ─── FUNCIONES A COMPLETAR ────────────────────────────────────────────────────

/**
 * 5a. Retorna los libros disponibles de un género específico.
 *     La comparación de géneros NO distingue mayúsculas/minúsculas.
 */
export function buscarPorGenero(libros: Libro[], genero: string): Libro[] {
  // TODO: implementar
  const generoLower = genero.toLowerCase();
  return libros.filter(libro => 
    libro.disponible && 
    libro.generos.some(g => g.toLowerCase() === generoLower)
  );
}

/**
 * 5b. Retorna todos los libros de un autor (por apellido, case insensitive).
 */
export function buscarPorAutor(libros: Libro[], apellido: string): Libro[] {
  // TODO: implementar
  const apellidoLower = apellido.toLowerCase();
  return libros.filter(libro => 
    libro.autor.apellido.toLowerCase() === apellidoLower
  );
}

/**
 * 5c. Retorna los libros publicados entre dos años (inclusive).
 *     Ordena el resultado por año de publicación ascendente.
 */
export function buscarPorRangoAnio(
  libros: Libro[],
  desde: number,
  hasta: number
): Libro[] {
  // TODO: implementar
  return libros.filter(libro => libro.anio >= desde && libro.anio <= hasta).sort((a, b) => a.anio - b.anio);
}

/**
 * 5d. Retorna una lista de géneros únicos presentes en el catálogo,
 *     ordenados alfabéticamente.
 *
 * Pista: usa flatMap para extraer todos los géneros y luego elimina duplicados.
 */
export function generosUnicos(libros: Libro[]): string[] {
  // TODO: implementar
  const generosSet = new Set(libros.flatMap(libro => libro.generos.map(g => g.toLowerCase())));
  return Array.from(generosSet).sort();
}

/**
 * 5e. Genera las estadísticas completas de la biblioteca.
 *     Usa las funciones anteriores donde sea posible.
 */
export function obtenerEstadisticas(libros: Libro[]): EstadisticasBiblioteca {
  // TODO: implementar
    const totalLibros = libros.length;
    const librosDisponibles = libros.filter(libro => libro.disponible).length;
    const generos = generosUnicos(libros);
    const autorCuenta: Record<string, number> = {};

    libros.forEach(libro => {
      const autorKey = `${libro.autor.apellido}, ${libro.autor.nombre}`;
      autorCuenta[autorKey] = (autorCuenta[autorKey] || 0) + 1;
    });

    const autorMasLibros = Object.entries(autorCuenta).reduce((max, [autor, count]) => {
      return count > max.count ? { autor, count } : max;
    }, { autor: "", count: 0 }).autor;

    return {
      totalLibros,
      librosDisponibles,
      generos,
      autorMasLibros
    };

}
