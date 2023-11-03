// Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]

function reemplazar(pila, nuevo, viejo) {
    let encontrado = false;
  
    for (let i = pila.length - 1; i >= 0; i--) {
      if (pila[i] === viejo && !encontrado) {
        pila[i] = nuevo;
        encontrado = true;
      } else {
        pila.pop();
      }
    }
  
    return pila;
  }
  
  // Ejemplo de uso:
  const pilaOriginal = [3, 2, 3, 4, 6, 8, 1, 2, 5, 5];
  const nuevoValor = 7;
  const viejoValor = 2;
  
  const resultado = reemplazar(pilaOriginal, nuevoValor, viejoValor);
  console.log(resultado); // Salida: [3, 2, 3, 4, 6, 8, 1, 7]
  