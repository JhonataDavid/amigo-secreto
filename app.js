let listaDeNomes = [];

function adicionarAmigo() {
  let input = document.getElementById('amigo');   // Seleciona o input pelo ID
  let nomesDentroDoInput = input.value.trim();  // Pega o valor digitado no input / o .trim() retira espacos desnecessarios
  listaDeNomes.push(nomesDentroDoInput); //pega a lista de nomes e adiciona os nomes que estao dentro do input / o metodo push adiciona algo a lista do array
  console.log(listaDeNomes);
}

function gerarNomesAleatorio() {
    let nomeAleatorio = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
    console.log(nomeAleatorio);
}
function sortearAmigo(){
    
}