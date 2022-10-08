//como trabalhar com local storage




localStorage.setItem('nome','Camila');
localStorage.setItem('sobrenome','Silva');

let btn= document.getElementById('botao');
btn.addEventListener('click' , mostrar);

function mostrar(evento){
    evento.preventDefault();

    let entrada=document.getElementById('entrada');
    let mostrar=  document.getElementById('mostrar');
    let valor=entrada.value;
    mostrar.innerText=valor;
    entrada.value='';

    //após obtermos o dado do usuário
    //vamos guardá-lo no local storage
    localStorage.setItem('dadoDoUsuario', valor);


}
//para recuperar o dado do local storage
// usamos o localStorage.getItem()
document.querySelector('#mostrar').value= 
localStorage.getItem('dadoDoUsuario');

//e para apagar no local storage?
//removeItem()
//localStorage.removeItem('dadoDoUsuario');