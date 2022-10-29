fetch(`http://numbersapi.com/random/math?json`).then(resposta=>{
    return resposta.json()
}).then(dentro=>{
    document.getElementById("numero").innerHTML=dentro.number
    document.getElementById("explicacao").innerHTML=dentro.text
})