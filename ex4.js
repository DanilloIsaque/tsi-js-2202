        let e;
        //com getElementbyClassName
     e= document.getElementsByClassName('collector-item');
     let vetor=Array.from(e);
        //foreach é um metodo de vetor

    vetor.forEach(function(val){

    console.log(val.innerText);
});


//com queryselecetorall
e=document.querySelectorAll('li');


e.forEach(function(val){
    console.log(val.innerText)
});

//somente impares (para pares, even)
e=document.querySelectorAll('li:nth-child(odd)');


e.forEach(function(val){
    val.style.background ='#dedede'
    console.log(val.innerText);
})


e.forEach(fazAlgumaCoisa);

function fazAlgumaCoisa(val){
    console.log(val);
}


e=document.querySelector('ul.collection');
console.log(e.childElementCount);//conta quantos tem
                                //e.firstChild/
 console.log(e.children[3]) ;            