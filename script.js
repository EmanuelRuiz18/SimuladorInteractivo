function saludo() {
    let nombre = prompt('Ingrese su nombre: ');
    let apellido = prompt('Ingrese su apellido: ');
    alert('Hola ' + nombre + ' ' + apellido + ', bienvenido!');
}

saludo();

let acum = 0;
let total = 0;
alert('En la compra de más de 3,000 MXN, 10% de descuento, y en la compra de más de 5,000 MXN, 15% de descuento!');

let numeroProductos = parseInt(prompt("Ingrese el número de productos en el carrito: "));

while((numeroProductos == ' ') && (numeroProductos == 0)) {
    numeroProductos = parseInt(prompt('Ingrese el numero de productos en el carrito: '));
}

for(i = 1; i <= numeroProductos; i++) {
   let precioProducto = parseInt(prompt('Ingrese el precio del producto ' + i + ': '));
   acum = acum + precioProducto;
}

total = acum;

if(total >= 5000) {
    total = acum - (acum * 0.15);
} else if (total >= 3000) {
    total = acum - (acum * 0.1);
}

alert('El total a pagar sería: ' + total + ' MXN.');

