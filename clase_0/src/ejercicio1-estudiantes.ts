/**
 * EJERCICIO 1: Gestión de Estudiantes
 * =====================================
 * Practica: interfaces, arrays, filter, map, reduce, sort
 *
 * Completa cada función usando los tipos definidos.
 * NO modifiques las interfaces ni las firmas de las funciones.
 */

export interface Estudiante {
  id: number;
  nombre: string;
  apellido: string;
  notas: number[]; // notas del 1 al 10
  curso: string;
}

export interface ResumenEstudiante {
  nombreCompleto: string;
  promedio: number;
  aprobado: boolean; // promedio >= 6
}

// ─── FUNCIONES A COMPLETAR ────────────────────────────────────────────────────

/**
 * 1a. Dado un array de estudiantes, retorna solo los que pertenecen a un curso dado.
 *
 * Ejemplo:
 *   filtrarPorCurso(estudiantes, "3A") => [todos los de 3A]
 */
export function filtrarPorCurso(
  estudiantes: Estudiante[],
  curso: string
): Estudiante[] {
  // TODO: implementar
  return estudiantes.filter((estudiante) => estudiante.curso === curso);
  // throw new Error("No implementado");
}

/**
 * 1b. Calcula el promedio de notas de un estudiante.
 *     Redondea a 2 decimales.
 *
 * Ejemplo:
 *   calcularPromedio({ notas: [8, 6, 10] }) => 8
 */
export function calcularPromedio(estudiante: Estudiante): number {
  // TODO: implementar
  return Math.round((estudiante.notas.reduce((acc, nota) => acc + nota, 0) / estudiante.notas.length) * 100) / 100;
  // throw new Error("No implementado");
}

/**
 * 1c. Convierte un array de Estudiante[] en ResumenEstudiante[].
 *     Usa calcularPromedio internamente.
 *
 * Ejemplo:
 *   generarResumenes([{ nombre: "Ana", apellido: "López", notas: [7, 8] }])
 *   => [{ nombreCompleto: "Ana López", promedio: 7.5, aprobado: true }]
 */
export function generarResumenes(
  estudiantes: Estudiante[]
): ResumenEstudiante[] {
  // TODO: implementar
  return estudiantes.map((estudiante) => {
    const promedio = calcularPromedio(estudiante);
    return {
      nombreCompleto: `${estudiante.nombre} ${estudiante.apellido}`,
      promedio,
      aprobado: promedio >= 6,
    };
  });
  // throw new Error("No implementado");
}

/**
 * 1d. Retorna los estudiantes ordenados por promedio de mayor a menor.
 *
 * Ejemplo:
 *   ordenarPorPromedio([ana(prom=6), bob(prom=9)]) => [bob, ana]
 */
export function ordenarPorPromedio(estudiantes: Estudiante[]): Estudiante[] {
  // TODO: implementar
  return estudiantes.sort((a, b) => calcularPromedio(b) - calcularPromedio(a));
  // throw new Error("No implementado");
}

/**
 * 1e. Retorna el promedio general de todos los estudiantes del array.
 *     Si el array está vacío, retorna 0.
 */
export function promedioGeneral(estudiantes: Estudiante[]): number {
  // TODO: implementar
  estudiantes.forEach((estudiante) => {
    if (estudiante.notas.length === 0) {
      estudiante.notas.push(0); // Evitar división por cero
    }
  });
  const totalPromedio = estudiantes.reduce((acc, estudiante) => acc + calcularPromedio(estudiante), 0);
  return estudiantes.length > 0 ? Math.round((totalPromedio / estudiantes.length) * 100) / 100 : 0;
  // throw new Error("No implementado");
}
