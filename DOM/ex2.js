let btnCalcular=document.getElementById('calcular');
btnCalcular.style.background="red";
//quando alguem clicar no botao, executa a função q pega o getElementById e joga em
//serv
btnCalcular.addEventListener('click',function(evento){
    evento.preventDefault();

    let serv= document.getElementById('servico');
    let prazo=document.getElementById('prazo');
    let res= document.getElementById('resultado');
    //recuperar os dados da matriz
    
    let preco= calculaPreco(serv.value,prazo.value);
   

    
    
    
    

    res.innerHTML=`o preco é ${preco}`;
    //mostra o que foi escrito, no caso 1,2,3
    console.log(serv.value);

    //ver dados do evento(click) no console
    console.log(evento);

    //obter os valores de serviço e prazo
});

function calculaPreco(serv,prazo)
{
    let tabela = [["$$$","$$","$"],//troca de oleo
    ["$$$$" ,"$$$","$$"],//balanceamento
    ["nao tem","nao tem","$"]];//cambagem

 return tabela[serv][prazo];
}
