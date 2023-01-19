var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener("click", function (event) {






    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")
    xhr.send()

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax")
        if (xhr.status == 200) {


            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)


            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente)

            });
        } else {
            console.log(xhr.responseText)

            erroAjax.classList.remove("invisivel")

        }


    })
})
// metodo AJAX. criando uma requisição de modo assincrona pra nao siar da pagina.