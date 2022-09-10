let btnCalcular=document.getElementById('calcular');
btnCalcular.style.background="red";

btnCalcular.addEventListener('click',function(evento){
    evento.preventDefault();
    console.log(evento);
})

