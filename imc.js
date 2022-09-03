let peso=parseFloat(prompt("digite seu peso"));
let altura=parseFloat(prompt("digite sua altura"));

let resultado = calcimc(peso,altura);
alert(resultado);

function calcimc(peso,altura){

    let imc=peso/(altura^2);
    let retorno='';

   if (imc>25)
   {
    retorno='acima do peso,obeso'
   }else if(imc>=18 &&imc<=25){
    retorno='peso ideal';
   }else{
    retorno='abaixo do peso';
   }

   return retorno;
}