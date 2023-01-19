var botaoAdicionar = document.querySelector("#buscar-paciente")

botaoAdicionar.addEventListener("click", function(event){
    
    event.preventDefault()

    

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")
    xhr.send()

    xhr.addEventListener("load", function(){
        console.log(xhr.responseText);
    })
})