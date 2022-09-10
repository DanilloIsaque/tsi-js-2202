/*
criar uma calculadora de valor a ser 
cobrado do cliente
o valor do serviço pode variar conforme o prazo.
os valores e prazos devem ser armazenadis em uma matriz.
o cálculo deve ficar obrigatoriamente em uma função
*/

let tabela = [['$$$','$$','$'],//troca de oleo
['$$$$' ,'$$$','$$']//balanceamento
['--','==','$']];//cambagem

let servico=prompt('entre com o servico:\n0-troca de óleo \n1-balanceamento \n2-cambagem');
let prazo=prompt('entre com o servico:\n0-um dia \n1-dois dias \n2-3 dias');

if(validaEntrada(servico) && validaEntrada(prazo)){

    alert("o servico ficará em: "+tabela[servico][prazo])
}
else{
    alert("ERRO: verifique os valores inseridos e tente novamente!");
}

function validaEntrada(dadoUsuario){
    return dadoUsuario>=0 && dadoUsuario <=2 ? true : false;
}