// Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primero los contenedores que están encima de él y colocarlos en otra pila, efectuar el retiro y regresarlos a su respectivo lugar.

class Almacen {
    constructor() {
      this.pilaPrincipal = [];
      this.pilaTemporal = [];
    }
  
    agregarContenedor(id) {
      this.pilaPrincipal.push(id);
    }
  
    retirarContenedor(id) {
      // Mover contenedores sobre el contenedor deseado a la pila temporal.
      while (this.pilaPrincipal.length > 0) {
        const contenedor = this.pilaPrincipal.pop();
        if (contenedor === id) {
          // Se encontró el contenedor deseado, se retira.
          break;
        }
        this.pilaTemporal.push(contenedor);
      }
  
      // Devolver los contenedores de la pila temporal a la pila principal en orden.
      while (this.pilaTemporal.length > 0) {
        this.pilaPrincipal.push(this.pilaTemporal.pop());
      }
    }
  
    mostrarPilaPrincipal() {
      console.log('Pila Principal: ' + this.pilaPrincipal.join(' -> '));
    }
  
    mostrarPilaTemporal() {
      console.log('Pila Temporal: ' + this.pilaTemporal.join(' -> '));
    }
  }
  
  // Ejemplo de uso:
  const almacen = new Almacen();
  
  almacen.agregarContenedor(1);
  almacen.agregarContenedor(2);
  almacen.agregarContenedor(3);
  almacen.agregarContenedor(4);
  almacen.agregarContenedor(5);
  
  almacen.mostrarPilaPrincipal(); // Pila Principal: 1 -> 2 -> 3 -> 4 -> 5
  
  almacen.retirarContenedor(3);
  
  almacen.mostrarPilaPrincipal(); // Pila Principal: 1 -> 2 -> 4 -> 5
  