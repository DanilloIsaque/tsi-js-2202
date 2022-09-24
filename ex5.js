//como criar elementos

//cria o elemento li
let novoItemNaLista = document.createElement('li');

//define o id do novo elemento
novoItemNaLista.id='novo-item';

//define a classe CSS do novo elemento
novoItemNaLista.className='collection-item';

//adiciona um atributo
novoItemNaLista.setAttribute('title','novo item na lista');

//adiciona um node filho
novoItemNaLista.setAttribute('value','valor qualquer');

novoItemNaLista.appendChild(
    document.createTextNode('fazer exercise fisico'));
    
    
let novolinkNaLista = document.createElement('a');

novolinkNaLista.className='delete-item secondary-content';

novolinkNaLista.setAttribute('href', '#');

//criar sub elemento <i>

let elementoIcone = document.createElement('i');

elementoIcone.className="fa fa-remove";

//adiciona o <i> em <a>

novolinkNaLista.appendChild(elementoIcone);
console.log(novolinkNaLista);

//addiciona o <a> em <li>

novoItemNaLista.appendChild(novolinkNaLista);
console.log(novoItemNaLista);

//<li> no <ul>
    // capturando o <ul> com com query selector
//let lista=document.querySelector('ul.collection');
//lista.append(novoItemNaLista);

    //capturar o <ul> pela classe
let lista=document.getElementsByClassName('collection');
lista[0].appendChild(novoItemNaLista);
console.log(lista);
