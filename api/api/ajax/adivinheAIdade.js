document.
    querySelector('button').
        addEventListener('click',recuperaDados);

        function recuperaDados(evento){
            evento.preventDefault();

            let nome=document.getElementById('nome').value;

            //fazemos a chama  da                                          
            fetch(`https://api.agify.io?name=${nome}`).then(function(ret){

            //pegamos apenas o conteúdo do retorno

            console.log(ret);
            return ret.text();

            }).then(function(cont){

                //trabalhamos com o conteudo retornado
             let dados = JSON.parse(cont)

             

             let saida=`${dados.name} tem ${dados.age} anos`;
                document.querySelector('#dadoRecuperado').innerHTML=saida;
            });
        }