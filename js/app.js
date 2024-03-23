let amigos = [];

function adicionar(){

    let nome = document.getElementById('nome-amigo').value;

    if (nome == ''){
        alert('Informe um nome!');
        return;
    }
    if (amigos.includes(nome)){
        alert('Nome já adicionado!');
        return;
    }

    let lista = document.getElementById('lista-amigos');
    amigos.push(nome); 
    if (lista.textContent == ''){
        lista.textContent = nome;
    }else{
        lista.textContent = lista.textContent + ', ' + nome;
    }  
    document.getElementById('nome-amigo').value = '';
    document.getElementById('nome-amigo').focus(); 
}

function sortear(){
    if (amigos.length < 4){
        alert('Adicione pelo menos 4 amigos');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i <  amigos.length; i++){

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos[0];
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' -> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-sorteio').textContent = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('nome-amigo').focus(); 
}
