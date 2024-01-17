// Date
const fechaActual = new Date();
const fechaNacimiento = new Date('2002-10-23');
const diferenciaTiempo = fechaActual.getTime() - fechaNacimiento.getTime();
const edad = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24 * 365));
document.getElementById("age").innerHTML = edad;