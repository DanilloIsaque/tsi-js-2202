//atualizar elemento
//ex: trocar h5 por h2
//var , forma global de variavel
//let forma de acertar as variabeis
//const nunca muda o valor, mas posso mudar o estado do meu objeto

//criamos um novo elemento
const novoTitulo = document.createElement('h2');
// colocamos as caraecterísticas que desejamos
novoTitulo.id='task-title';
novoTitulo.appendChild(document.createTextNode('Nova lista'))/
console.log(novoTitulo);
//capturamos o elemento h5 atual(que está originalmente nohtml)
const tituloAtual=document.getElementById('task-title');

//trocar no elemento pai(div)
//capturamos o elemento pai que desejamos atualizar
let divMaedDoTitulo = 
                        document.getElementsByClassName('card-action');

console.log(divMaedDoTitulo)/
//atualizamos o elemento
divMaedDoTitulo[0].replaceChild(novoTitulo,tituloAtual);





















































































































































































