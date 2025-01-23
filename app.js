let listaDeNomes = [];

function adicionarAmigo() {
  let input = document.getElementById('amigo');   // Seleciona o input pelo ID
  let nomesDentroDoInput = input.value.trim();  // Pega o valor digitado no input / o .trim() retira espacos desnecessarios
  listaDeNomes.push(nomesDentroDoInput); //pega a lista de nomes e adiciona os nomes que estao dentro do input / o metodo push adiciona algo a lista do array
  campoVazio();
}

function gerarNomesAleatorio() {
    let nomeAleatorio = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
    return nomeAleatorio;
}
function sortearAmigo(){
    alert(gerarNomesAleatorio());
}

function campoVazio(){
  let input = document.querySelector('input');
  input.value = '';
}