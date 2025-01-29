//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []
function adicionarAmigo() {
    let amigoInput = document.querySelector("input").value
    if (typeof amigoInput != "string" || amigoInput.length < 3){
        alert("Não é um nome válido")
    }else{
        amigos.push(amigoInput);
        amigosNaLista(amigos[amigos.length -1]);
        limparCampo();
    }
}

function amigosNaLista (nomeAmigo){
    let tag = document .getElementById("listaAmigos");
    tag.innerHTML += `<li>${nomeAmigo}</li>`
}

function limparCampo(){
    let amigoInput = document.querySelector("input");
    amigoInput.value = ""
}

function sortearAmigo(){
    let resposta = amigos == 0 ? "Por favor preencha o campo antes de enviar" : "a lista de amigos está vazia ou com uma quantia insuficiente de nomes"
    if (amigos.length < 2){
        alert(resposta)
    } else{
        sorteado = parseInt(Math.random()* amigos.length)
        amigoResultado(sorteado)
    }
}

function amigoResultado(sorteado){
    let resultado = document.getElementById("resultado")
    resultado.innerHTML = `<li>${amigos[sorteado]}</li>`
}


