document.
    querySelector('button').
        addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){

    const XHR = new XMLHttpRequest;

    XHR.open('GET', 'http://127.0.0.1:5500/api/api/ajax/conteudo.txt', true);

    XHR.onload = function(){

        if(this.status == 200){

           // document.querySelector('#dadoRecuperado').innerHTML 
               // = this.responseText; 

                //recupera o JSON
                let texto =JSON.parse(this.responseText);
                console.log(texto);
                //looping para ler todo o vetor

                let saida=''
                
                texto.forEach(function(aluno) {
                    //verifica a idade da pessoa
                    //para mostrar se é maior ou menor
                    console.log(aluno.idade);//chama um 'subobjeto'
                   
                   saida += aluno.idade >= 18 ?
                   `${aluno.nome} é maior de idade<br>`
                   :
                   `${aluno.nome} é menor de idade<br>`;

                  
                    //if(aluno.idade<18)
                    //{
                    //  console.log(valor.nome + " é menor");
                   // }
                    
                });

                document.querySelector('#dadoRecuperado').innerHTML=saida;
                //no json {} é objeto, e segue um padrao {"nome(variavel)": "string"        se for numeto "idade": 15}
                
        }
    }

    XHR.send();
}        