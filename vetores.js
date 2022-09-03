let x=["Danillo","Isaque","paulo","uitaesd","oliasd"];

console.log(x.lenght)
//looping com o vetor


for(let i=0;i<5;i++)
  {
    
    console.log(`amigo: ${x[i]}`);
    //console.log(`Linha: ${i}`);//<- template com interpolação, misturar isso com a variavel
  }
 
  //foreach for= para each= cada
  
  x.forEach(function(valor,indice){
    console.log( `${indice}: ${valor}`);
  });
    


  //map
  x.map(function(val){
    console.log(val);
  })

