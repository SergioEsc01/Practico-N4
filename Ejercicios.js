function Obtener(obj) {
    //Obtener y Recorrer las Llaves de un Objeto
    //Aqui tu codigo

   return Object.keys(obj).forEach((valor)=>{
console.log(valor)
   })
    
}
Obtener(a={a:"aa",b:"bb",c:"cc",d:"dd"})

function Fecha(num) {
    //Escriba una función de JavaScript para obtener el día de una fecha en particular.
    //Aqui tu codigo
var fecha= new Date(num)
var dia= fecha.getDay();
switch(dia){
case 0:
    console.log("El dia es domingo");
    break;
    case 1:
    console.log("El dia seria lunes")
    break;
    case 2:
    console.log("El dia seria martes")
    break;
    case 3:
    console.log("El dia seria miercoles")
    break;
    case 4:
    console.log("El dia seria jueves")
    break;
    case 5:
    console.log("El dia seria viernes")
    break;
    case 6:
        console.log("El dia seria sabado")
        break;
}
}
Fecha('december 25,2020')

function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
if(usuario.password===password){
    return true
}else{
    return false
}
}
console.log(verificarPassword(a={nombre:"aa",edad:19,password:123456},1256))

function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
var gato={
    nomb:nombre,
    ed:edad,
    meow:function(){
        console.log("Meow!")
    }
}
return gato
}
console.log(crearGato("michi",4))

function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:
    
    return producto.calcularpreciodescuento
}
console.log(agregarMetodoCalculoDescuento({precio:100,porcentajedescuento:0.2,calcularpreciodescuento:function(){console.log(producto.precio-(producto.precio*producto.porcentajedescuento))}}))

function ordenar(array) {
    // A partir del array pasado por parametros, ordenarlo (ascendente o descendente) de la forma que tu quieras
    // Mostrar array ordenado.
    // Tu código:
return array.sort((a,b)=>a-b);
}

console.log(ordenar([11,3,45,6,89,65,4,32]))