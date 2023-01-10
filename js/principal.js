var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"


var paciente = document.querySelector("#primeiro-paciente")

var tdPeso = paciente.querySelector(".info-peso")
var peso = tdPeso.textContent

var tdAltura = paciente.querySelector(".info-altura")
var altura = tdAltura.textContent

var tdImc = paciente.querySelector(".info-imc")

var pesoValido = true
var alturaValida = true

if (peso <= 0 || peso >= 700) {
    pesoValido = false
    tdImc.textContent = "peso invalido!"
    
 }

    if (altura <= 0 || altura > 2.50) {
        alturaValida = false
        tdImc.textContent = "altura invalida!"

    }

 if(pesoValido && alturaValida) {
    var imc = peso / (altura * altura)
    tdImc.textContent = imc
} 

