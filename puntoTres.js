String.prototype.concatenarPalabra = function(palabra) {
  return `${this} ${palabra}`;
};

const nombre = "Tomas";
const nombreCompleto = nombre.concatenarPalabra("Exequiel");

console.log(nombreCompleto); 