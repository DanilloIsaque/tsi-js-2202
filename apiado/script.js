
document.
querySelector('button').
    addEventListener('click',recuperaDados);

    function recuperaDados(evento){
        evento.preventDefault();
fetch(`http://numbersapi.com/random/math?json`).then(resposta=>{
    return resposta.json()
}).then(dentro=>{
    document.getElementById("numero").innerHTML=dentro.number
    document.getElementById("explicacao").innerHTML=dentro.text
})
    }