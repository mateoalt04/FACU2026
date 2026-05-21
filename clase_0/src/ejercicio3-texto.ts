/**
 * EJERCICIO 3: Análisis de Texto
 * ================================
 * Practica: strings, split, join, map, filter, reduce, sort
 *
 * Completa cada función usando los tipos definidos.
 * NO modifiques las interfaces ni las firmas de las funciones.
 */

export interface PalabraFrecuencia {
  palabra: string;
  frecuencia: number;
}

export interface AnalisisTexto {
  totalPalabras: number;
  totalCaracteres: number; // sin contar espacios
  palabrasMasFrequentes: PalabraFrecuencia[]; // top 3
  esPalindromo: boolean; // toda la frase ignorando espacios y mayúsculas
}

// ─── FUNCIONES A COMPLETAR ────────────────────────────────────────────────────

/**
 * 3a. Convierte un texto a un array de palabras en minúsculas, sin espacios vacíos.
 *     Elimina signos de puntuación: . , ! ? ; :
 *
 * Ejemplo:
 *   tokenizar("Hola, mundo!") => ["hola", "mundo"]
 */
export function tokenizar(texto: string): string[] {
  // TODO: implementar
  const palabras = texto
   .toLowerCase()
    .replace(/[.,!?;:]/g, "")
    .split(/\s+/)             
    .filter(palabra => palabra.length > 0);
  return palabras;
  throw new Error("No implementado");
}

/**
 * 3b. Cuenta cuántas veces aparece cada palabra en el array.
 *     Retorna un array de PalabraFrecuencia ordenado de mayor a menor frecuencia.
 *
 * Ejemplo:
 *   contarFrecuencias(["el", "gato", "el"]) =>
 *   [{ palabra: "el", frecuencia: 2 }, { palabra: "gato", frecuencia: 1 }]
 */
export function contarFrecuencias(palabras: string[]): PalabraFrecuencia[] {
  // TODO: implementar
  const mapaFrecuencias: Record<string, number> = palabras.reduce((acc, palabra) => {
    acc[palabra] = (acc[palabra] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  const arrayResultante = Object.entries(mapaFrecuencias).map(([palabra, frecuencia]) => {
    return { palabra, frecuencia };
  });

  arrayResultante.sort((a, b) => b.frecuencia - a.frecuencia);

  return arrayResultante;
  throw new Error("No implementado");
}

/**
 * 3c. Determina si una cadena es palíndromo.
 *     Ignora espacios y diferencias de mayúsculas/minúsculas.
 *
 * Ejemplo:
 *   esPalindromo("Anita lava la tina") => true
 *   esPalindromo("Hola")               => false
 */
export function esPalindromo(texto: string): boolean {
  // TODO: implementar
  const textoLimpio = texto.toLowerCase().replace(/\s+/g, "");

  const textoInvertido = textoLimpio.split("").reverse().join("");

  return textoLimpio === textoInvertido;
  throw new Error("No implementado");
}

/**
 * 3d. Capitaliza cada palabra del texto (primera letra mayúscula, resto minúscula).
 *
 * Ejemplo:
 *   capitalizar("hola MUNDO") => "Hola Mundo"
 */
export function capitalizar(texto: string): string {
  // TODO: implementar
  const textoCapitalizado = texto
    .split(" ")
    .map(palabra => {
      if (palabra.length === 0) return "";
      return palabra[0].toUpperCase() + palabra.slice(1).toLowerCase();
    });
  return textoCapitalizado.join(" ");
  throw new Error("No implementado");
}

/**
 * 3e. Genera un AnalisisTexto completo a partir de un texto.
 *     Usa las funciones anteriores internamente.
 */
export function analizarTexto(texto: string): AnalisisTexto {
  // TODO: implementar
  const palabrasLimpias = tokenizar(texto);
  const totalPalabras = palabrasLimpias.length;  
  const totalCaracteres = texto.replace(/\s+/g, "").length;
  const todasLasFrecuencias = contarFrecuencias(palabrasLimpias);
  const palabrasMasFrequentes = todasLasFrecuencias.slice(0, 3);

  const palindromo = esPalindromo(texto);

  return {
    totalPalabras,
    totalCaracteres,
    palabrasMasFrequentes,
    esPalindromo: palindromo
  };

  throw new Error("No implementado");
}
