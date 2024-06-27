
//Agrega a la pantalla el valor del boton que indiquemos
function agregar(valor){
document.getElementById('pantalla').value+=valor;
}

//Borra los datos de la pantalla
function borrar () {
    document.getElementById('pantalla').value = '';
}
//calcula los datos que aparecen en la pantalla
function calcular () {
    const valorPantalla=document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value=resultado;
}