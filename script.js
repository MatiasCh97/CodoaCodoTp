
const valorticket = 200;

let selectElementnombre = document.getElementById("nombre");
let selectElementapellido = document.getElementById("apellido");
let selectElementcorreo = document.getElementById("correo");
let selectElementcategoria = document.getElementById("categoria");
let selectElementcantidad = document.getElementById("cantidad");
let favDialog = document.getElementById("favDialog");
let cancelButton = document.getElementById("cancelaDialog");
let valorimporte = 0;
let confirmButton =document.getElementById("confirmaDialog");

// Agregar un listener de evento al cambio
selectElementcategoria.addEventListener("change", function () {

    // Obtener la opción seleccionada
    selectElementnombre = document.getElementById("nombre");
    selectElementapellido = document.getElementById("apellido");
    selectElementcorreo = document.getElementById("correo");

    
    let selectedOption = selectElementcategoria.options[selectElementcategoria.selectedIndex].text;
    
    if (selectedOption == "Estudiante" && selectElementcantidad.value != 0) {
        valorimporte = valorticket * 0.80 * selectElementcantidad.value;
        importeaPagar.innerText = "Total a Pagar: $" + valorimporte;




    } else if (selectedOption == "Trainee" && selectElementcantidad.value != 0) {
        valorimporte = valorticket * 0.50 * selectElementcantidad.value;
        importeaPagar.innerText = "Total a Pagar: $" + valorimporte;

    } else if (selectedOption == "Junior" && selectElementcantidad.value != 0) {
        valorimporte = valorticket * 0.15 * selectElementcantidad.value;
        importeaPagar.innerText = "Total a Pagar: $" + valorimporte;

    }
    
    

    
});
document.getElementById("buttonResumen").addEventListener("click", function(event) {
    
  
    contenidoDialog.innerHTML = "<p>Datos de la compra: </p>"+"Nombre: " + selectElementnombre.value + "<br/>" +
    "Apellido: " + selectElementapellido.value + "<br/>" +
    "Correo: " + selectElementcorreo.value + "<br/>" +
    "Cantidad: " + selectElementcantidad.value + "<br/>" +
    "Categoria: " + selectElementcategoria.value + "<br/>" +
    "Importe a pagar: $" + valorimporte;

    
    let mensaje= "Nombre: " + selectElementnombre.value + "\n" +
    "Apellido: " + selectElementapellido.value + "\n" +
    "Correo: " + selectElementcorreo.value + "\n" +
    "Cantidad: " + selectElementcantidad.value + "\n" +
    "Categoria: " + selectElementcategoria.value + "\n"+
    "Importe pagado: $" + valorimporte;



    favDialog.showModal();
    console.log(mensaje);
    
    event.preventDefault();
    // Form cancel button closes the dialog box
    cancelButton.addEventListener("click", function () {
        favDialog.close();
      });
      confirmButton.addEventListener("click", function () {
        favDialog.close();
        alert("Se ha generado exitosamente su compra")
      });
    





    // Construir el mensaje a mostrar en la alerta
 
});
document.getElementById("buttonBorrar").addEventListener("click", function() {
    // Borrar los valores de los campos del formulario
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("correo").value = "";
    document.getElementById("importe").value = "";
});







