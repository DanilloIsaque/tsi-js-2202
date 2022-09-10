console.log(window);
//como utilizar atributos de um objeto
//alert(`sua resolução e: ${window.innerHeight} x ${window.innerWidth}`);

//pede pro usuario escrever e altera a cor
let meuTitulo=document.getElementById('titulo');

let nav= window.navigator.vendor;
alert(nav);

if(confirm('Deixe uma mensagem')){
    let msg=prompt('mensagem');
    meuTitulo.innerText = msg;
    meuTitulo.style.background ='green';
}
else{
    meuTitulo.inneerText ='sem mensagem';
    meuTitulo.style.background='#dedede';
}

//para ver tudo disponivel em navigator