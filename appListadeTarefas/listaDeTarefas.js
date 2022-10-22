const entradaTarefa=document.querySelector('#tarefa');
const btnAddTarefa= document.querySelector('.btn');
const listaTarefa= document.querySelector('.collection');
const filtroTarefa =document.querySelector('#filtro');
const btnLimpaTudo =document.querySelector('.limpar-tarefas');




function carregaMonitoresDeEventos(){
    
    btnAddTarefa.addEventListener('click',addTarefa)
    listaTarefa.addEventListener('click',apagarTarefa)
    btnLimpaTudo.addEventListener('click',apagarTudo)
   //evento para filtrar as tarefas
    filtroTarefa.addEventListener('keyup', filtrarTarefas)

}


carregaMonitoresDeEventos();
function filtrarTarefas(evento){
    //capturamos o q o usuário esta digitando
    //passabdo tudo para minusculo
    const procurado=evento.target.value.toLowerCase();
    
    const tarefas =document.querySelectorAll('.collection-item');
    
    //para cada tarefa existente,busque adesejada
    tarefas.forEach(function(tarefa)
    {
     textoTarefa=tarefa.innerText;

     if(textoTarefa.toLowerCase().indexOf(procurado) != -1){ ///retorna a posicão do número, se ele for -1, é pq n encontrou nada
        
        tarefa.style.display='block';

     }else{
        tarefa.style.display='none';
     }
    });
  


    
}
function apagarTarefa(evento)
    {
        //se o elemento pai tiver a classe apaga tarefa ou seja, for o elemnto "a", paga "li" ou sej a tarefa 
        if (evento.target.parentElement.classList.contains('apaga-tarefa')) {
            
            //apaga o elemento pai do "a", ou seja, o li, pois o elemento alvo do evento foi o ( i )
            evento.target.parentElement.parentElement.remove();
            //evento limpar toda a lista
            
        }
    }

    function apagarTudo(evento){
        
               //evento limpar toda a lista

            //apaga o elemento pai do "a", ou seja, o li, pois o elemento alvo do evento foi o ( i )
            evento.preventDefault(evento)     //tira a função padrao do botão

            listaTarefa.innerHTML=''; //inner html imprime um valor vazio
        
            
            
       

    }

    

function addTarefa(evento){// chama o evento q acontece acima com o 
    //add tarefa
    evento.preventDefault();

//verifica se o user entrou com uma tarefa 
    if(entradaTarefa.value===''){
        alert('entre com uma  tarefa');
    }
    else{
    const li =document.createElement('li');
    li.className='collection-item';
    li.appendChild(document.createTextNode(entradaTarefa.value));

    const a = document.createElement('a');
    a.className='apaga-tarefa secondary-content';

    const i=document.createElement('i'); //chama no html a fonte
    i.className='fa fa-remove';// vem do fontawesome,icone do x
                               

    //monta o elemneto em li para colocar em ul 
    a.appendChild(i);
    li.appendChild(a);
    listaTarefa.appendChild(li);
    gravarTarefa(entradaTarefa.value);
    entradaTarefa.value='';
    }

} 

function gravarTarefa(tarefa){
    let tarefas = [];
    let tarefaDoStorage=localStorage.getItem('tarefas')
    if( tarefaDoStorage!=null){
        
        // vetor em objeto 
        tarefas = JSON.parse(tarefaDoStorage);
    }

    tarefas.push(tarefa);

    //objeto em string
    localStorage.setItem('tarefas',JSON.stringify(tarefas))
}




