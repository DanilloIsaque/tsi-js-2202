document.
    querySelector('button').
        addEventListener('click',recuperaDados);

        function recuperaDados(evento){
            evento.preventDefault();
            //fazemos a chama  da                                          
            fetch('http://127.0.0.1:5500/api/api/ajax/conteudo.txt').then(function(ret){

            //pegamos apenas o conteúdo do retorno

            console.log(ret);
            return ret.text();

            }).then(function(cont){

                //trabalhamos com o conteudo retornado
                console.log(cont);
                let texto =JSON.parse(cont);
                let saida=''
                
                texto.forEach(function(aluno) {
                    //verifica a idade da pessoa
                    //para mostrar se é maior ou menor
                    console.log(aluno.idade);//chama um 'subobjeto'
                   
                   saida += aluno.idade >= 18 ?
                   `${aluno.nome} é maior de idade<br>`
                   :
                   `${aluno.nome} é menor de idade<br>`;
                });
                document.querySelector('#dadoRecuperado').innerHTML=saida;
            });
        }