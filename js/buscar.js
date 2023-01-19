var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener("click", function() {

    



    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")
    xhr.send()

    xhr.addEventListener("load", function () {

        var resposta = xhr.responseText
        
        var pacientes = JSON.parse(resposta)
        

        pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente)
            
        });

    })
})
// metodo AJAX. criando uma requisição de modo assincrona pra nao siar da pagina.