var tabelaElemento = document.querySelector('#app table');
var aFazerElemento = document.getElementById('todo');
var quandoElemento = document.getElementById('when');
var botaoElemento = document.querySelector('#app button');

var tarefas = [];

function apresentarAFazer() {
    console.log(tarefas);
}

function adicionarAFazer() {
    var aFazer = aFazerElemento.value;
    var quando = quandoElemento.value;
    var tarefa = {
        aFazer: aFazer,
        quando: quando
    }
    tarefas.push(tarefa);
    aFazerElemento.value = '';
    quandoElemento.value = '';
    apresentarAFazer();
}

botaoElemento.onclick = adicionarAFazer;
apresentarAFazer();