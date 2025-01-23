let listaDeNomes = [];

// Função para adicionar amigo
function adicionarAmigo() {
    let input = document.getElementById('amigo'); // Seleciona o input pelo ID
    let nomesDentroDoInput = input.value.trim();  // Pega o valor digitado no input e remove espaços extras

    if (nomesDentroDoInput) { // Valida se o campo não está vazio
        listaDeNomes.push(nomesDentroDoInput); // Adiciona o nome ao array
        atualizarLista(); // Atualiza a lista exibida no HTML
        campoVazio(); // Limpa o campo de input
    } else {
        alert("Digite um nome antes de adicionar!");
    }
}

// Função para gerar um nome aleatório
function gerarNomesAleatorio() {
    if (listaDeNomes.length > 0) {
        let nomeAleatorio = listaDeNomes[Math.floor(Math.random() * listaDeNomes.length)];
        return nomeAleatorio;
    } else {
        return "A lista está vazia! Adicione amigos antes de sortear.";
    }
}

// Função para sortear amigo
function sortearAmigo() {
    alert(gerarNomesAleatorio());
}

// Função para atualizar a lista no HTML
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpa o conteúdo atual da lista

    listaDeNomes.forEach(nome => {
        let listItem = document.createElement('li'); // Cria um elemento <li>
        listItem.textContent = nome; // Define o texto como o nome do amigo
        lista.appendChild(listItem); // Adiciona o <li> na lista <ul>
    });
}

// Função para limpar o campo de input
function campoVazio() {
    let input = document.getElementById('amigo');
    input.value = ''; // Limpa o valor do input
}
