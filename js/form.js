var addPaciente = document.querySelector("#adicionar-paciente")

addPaciente.addEventListener("click", function (event) {
    event.preventDefault()
    var form = document.querySelector("#form-adiciona")

    var paciente = obtemPacienteDoForm(form)

    var pacienteTr = montaTr(paciente)

    var erros = validaPaciente(paciente)


    if (erros.length > 0) {
        exibeMensagensDeErro(erros)

        mensagemErro.classList.add("paciente-invalido")
        return
    }



    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

    form.reset()
    var mensagemErro = document.querySelector("#mensagem-erro")
    mensagemErro.innerHTML = ""

}
)
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = ""
    erros.forEach(function (erro) {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });
}

function obtemPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr

}

function montaTd(dado, classe) {
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe)
    return td
}
function validaPaciente(paciente) {

    var erros = []

    if (paciente.nome == 0) {
        erros.push("o nome nao pode ser em branco.")
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("peso invalido")


    }
    if (!validaAltura(paciente.altura)) {

        erros.push("altura invalida")
    }

    if (paciente.gordura == '') {
        erros.push("gordura nao pode ficar em branco")
    }
    console.log(erros);
    return erros




}