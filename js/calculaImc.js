var titulo = document.querySelector(".titulo")
titulo.textContent = "Aparecida Nutricionista"


var pacientes = document.querySelectorAll(".paciente")

for (var i = 0; i < pacientes.length; i++) {


    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura")
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc")

    var pesoValido = validaPeso(peso) //true or false
    var alturaValida = validaAltura(altura)//true or false

    if (!pesoValido) {
        pesoValido = false
        tdImc.textContent = "peso invalido!"
        paciente.classList.add("paciente-invalido")

    }

    if (!alturaValida) {
        alturaValida = false
        tdImc.textContent = "altura invalida!"
        paciente.classList.add("paciente-invalido")

    }

    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

function validaAltura() {
    if (altura > 0.0 && altura < 3.0) {
        return true
    } else {
        return false
    }
}

function validaPeso(peso) {
    if (peso > 0 && peso < 750) {
        return true
    } else {
        return false
    }
}

function calculaImc(peso, altura) {
    var imc = 0

    imc = peso / (altura * altura)
    return imc.toFixed(2)

}





