// Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta.
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

function mostrarCamino(origen, destino, pueblos) {
    const recorridoIda = [origen, ...pueblos, destino];
    const recorridoVuelta = [destino, ...pueblos.slice().reverse(), origen];
  
    console.log('Recorrido de Ida: ' + recorridoIda.join(' → '));
    console.log('Recorrido de Vuelta: ' + recorridoVuelta.join(' → '));
  }
  
  // Ejemplo de uso:
  const puebloOrigen = 'Pueblo Origen';
  const puebloDestino = 'Destino';
  const pueblosIntermedios = ['Pueblo 1', 'Pueblo 2'];
  
  mostrarCamino(puebloOrigen, puebloDestino, pueblosIntermedios);
  