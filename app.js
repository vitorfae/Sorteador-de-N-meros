function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de >= ate){
        alert('Campo "Do número" deve ser inferior ao campo "Até o Número". Verifique!');
        return valoresZerados();
    }

    let sorteados = [];
    let numero; 

    for(let i = 0; i < quantidade; i++){
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
            return valoresZerados();
        }
        
        sorteados.push(numero);
    }
  let resultado = document.getElementById('resultado')
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
  alterarStatusDoBotao()
}

function obterNumeroAleatorio(min, max) {
    //return parseInt(Math.random() * (max - min) + min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusDoBotao(){
    let botao = document.getElementById('btn-reiniciar')
    if(botao.classList.contains('container__botao-desabilitado')){
       botao.classList.remove('container__botao-desabilitado');
       botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado')
    }
}

function reiniciar() {
    valoresZerados()
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: Nenhum até agora </label>';
    alterarStatusDoBotao()
}

function valoresZerados(){
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''  
}