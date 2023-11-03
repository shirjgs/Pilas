// Hacer una función que reciba como parámetros una pila, y un número.
// La función debe retornar tantos elementos como diga el número (segundo parámetro).
// Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
// Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’]

function obtenerElementos(pila, numero) {
    if (numero <= 0) {
      return []; // Devuelve un array vacío si el número es 0 o negativo.
    } else if (numero >= pila.length) {
      return pila.slice(); // Devuelve una copia de la pila completa si el número es mayor o igual a la longitud de la pila.
    } else {
      return pila.slice(0, numero); // Devuelve los primeros "n" elementos de la pila.
    }
  }
  
  // Ejemplo de uso:
  const pilaOriginal = ['Manzana', 'Cebolla', 'Apio', 'Naranja', 'Papaya', 'Sandía', 'Melón'];
  const numeroElementos = 4;
  
  const resultado = obtenerElementos(pilaOriginal, numeroElementos);
  console.log(resultado); // Salida: ['Manzana', 'Cebolla', 'Apio', 'Naranja']
  