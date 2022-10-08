sessionStorage.setItem('nome','Camila');
sessionStorage.setItem('sobrenome','Silva');

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
    sessionStorage.setItem('dadoDoUsuario', valor);


}
//para recuperar o dado do local storage
// usamos o localStorage.getItem()
document.querySelector('#mostrar').value= 
sessionStorage.getItem('dadoDoUsuario');

//e para apagar no local storage?
//removeItem()
//sessionStorage.removeItem('dadoDoUsuario');