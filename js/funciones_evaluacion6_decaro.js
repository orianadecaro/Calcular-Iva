//Abrir el archivo evaluacion6.html y guardarlo como evaluacion6_apellido.html (ej. evaluacion6_fernandez.html)
//Crear un archivo funciones_evaluacion6_apellido.js y asociarlo al archivo .html
//En el archivo .js
//Declarar una función que le pida al usuario ingresar un número (pueden utilizar prompt).
//Calcular el iva (21%) del número ingresado.
//Luego mostrar en pantalla el valor total con y sin el iva.
//La función debe ejecutarse desde el botón "Calcular IVA" en el archivo .html

function solicitarPrecio() {
    var precio = parseFloat(prompt('Ingrese precio'));
    var iva = 1.21;

    var precioSinIva = precio;
    var precioConIva = precio * iva;

    document.write('Precio:' + precio + '<br>');
    document.write('Total sin iva:' + precioSinIva + '<br>');
    document.write('Total con iva:' + precioConIva);



    return precio, precioSinIva, precioConIva;

}

//el return es opcional