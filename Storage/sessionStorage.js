//como trabalhar com session storage

sessionStorage.setItem('nome','Danillo');
sessionStorage.setItem('sobrenome','Isaque');

let btn = document.getElementById('botao');

btn.addEventListener('click',mostrar);

function mostrar(evento){

    evento.preventDefault();

    let valor = document.getElementById('entrada').value;
    document.getElementById('mostrar').innerText =
     valor;
    document.getElementById('entrada').value= '';

    //apos obtermos o dado do usuario 
    //vamos guarda-lo no session storage
    sessionStorage.setItem('dadoDoUsuario',valor);
}

//para recuperar o dado do session storage
//usamos o sessionStorage.getItem()
//get item serve p colocar na tela
//set item inserir o dado no banco
document.querySelector('#mostrar').innerText = 
sessionStorage.getItem('dadoDoUsuario');

// p/ apagar 
//sessionStorage.removeItem();

// session 
// x 
//local
//qual a diferença entre eles
//Utilize localStorage para uso a longo prazo e sessionStorage 
//quando você precisa armazenar algo temporário
//(ie dados de uma sessão). Ambos também são escopo por fabricantes de navegadores.





let vetor=['pera','banana','manga'];

//para guardar algo que não seja uma string
//no localstorage ou sessionStorage, temos que converter
//para string.com o metodo Json.stringify() transformamos
//vetores e objetos em strings


sessionStorage.setItem('frutas',
                        JSON.stringify(vetor));

//let recuperaDado=sessionStorage.getItem('frutas')//guarda no banco

//para recuperar uma string JSON do 
//localstorage ou sessionStorage e 
//transformar em um objeto ou vetor novamente
//use JSON.parse()
let recupDado=JSON.parse(
                    sessionStorage.
                            getItem('frutas'));//JSON transforma vetor para string


//alterações no vetor recuperadi
//do sessionStorage
recupDado[3]='morango';
recupDado[1]='parchita';
console.log(recupDado);


let strRecupDados=JSON.stringify(recupDado);

console.log(strRecupDados);

//atualiza o item fruta no sessionStorage
sessionStorage.setItem('frutas',strRecupDados);
//console.log(recupera[10]);