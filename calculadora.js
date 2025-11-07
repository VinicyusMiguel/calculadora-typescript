document.addEventListener('DOMContentLoaded', function() {
    var btnAbrirCalculadora = document.getElementById('abrirModal'); //o botão de abrir a Calculadora
    var modal = document.getElementById('meuModal'); //o que aparece quando clica no botão de abrir a Calculadora
    var btnFecharCalculadora = document.getElementById('close'); //o botão de fechar a Calculadora
    var pagina = document.getElementById('conteudoPrincipal');
    var numeros = document.querySelectorAll('.numero')
    var operadores = document.querySelectorAll('.operador:not(#igual):not(#limpar)');
    var display = document.getElementById('display')
    var igual = document.getElementById('igual')
    var limpar = document.getElementById('limpar')

    let numeroAtual = ""
    let numeroAnterior = ""
    let operacao = null
    let resultado

    btnAbrirCalculadora.addEventListener('click', () => {
        modal.showModal(); // funciona apenas com <dialog>
        pagina.style.filter = 'blur(2px)' //colocar o desfoque no fundo enquanto o modal da Calculadora estiver visivel
    });

    btnFecharCalculadora.addEventListener('click', () => {
        modal.close();
        pagina.style.filter = 'blur(0px)' //tirar o desfoque do fundo
        display.value = ''
        numeroAtual = ""
        numeroAnterior= ""
        operacao = null
    });

    document.addEventListener('keydown', function(event){
        if(event.key === "Escape" && modal.open){ //a função close funcionar também quanto apertar a tecla Esc
            modal.close();
            pagina.style.filter = 'blur(0px)'
            display.value = ''
            numeroAtual = ""
            numeroAnterior= ""
            operacao = null
        }
    })
     numeros.forEach(numero => {
        numero.addEventListener('click', () => {
            const valor = numero.textContent
            numeroAtual += valor
            display.value = numeroAtual
        })
        
    });
    operadores.forEach(operador => { // vai rodar todos os elementos dentro dessa classe de operadores
    operador.addEventListener('click', () => {
        if (numeroAtual && !numeroAnterior) {
            numeroAnterior = numeroAtual
            numeroAtual = "" 
            const valor = operador.textContent;
            operacao = valor
            display.value += valor;
            }else if(numeroAnterior && !numeroAtual){
            const valor = operador.textContent;
            operacao = valor
            display.value += valor;
            }else if(numeroAnterior && numeroAtual){
            numeroAnterior = numeroAtual
            numeroAtual = "" 
            const valor = operador.textContent;
            operacao = valor
            display.value += valor;
            }else{
                alert("Escolha um número")
            }
            
        
    });
}); // <-- fecha certinho aqui o forEach
igual.addEventListener('click', () => {
    if(numeroAnterior && numeroAtual){
        switch(operacao){
            case "+": 
            resultado = parseFloat(numeroAnterior) + parseFloat(numeroAtual)
            display.value = resultado
            numeroAnterior = resultado
            numeroAtual = ""
            operacao = null
            break;
            case "-":
            resultado = parseFloat(numeroAnterior) - parseFloat(numeroAtual)
            display.value = resultado
            numeroAnterior = resultado
            operacao = null
            numeroAtual = ""
            break;
            case "/":
            resultado = parseFloat(numeroAnterior) / parseFloat(numeroAtual)
            display.value = resultado
            numeroAnterior = resultado
            operacao = null
            numeroAtual = ""
            break;
            case "x":
            resultado = parseFloat(numeroAnterior) * parseFloat(numeroAtual)
            display.value = resultado
            numeroAnterior = resultado
            operacao = null
            numeroAtual = ""
        }
    }else{
        alert("Você precisa escolher numeros antes de apertar em igual")
    }

})
limpar.addEventListener('click', () => {
    
    operacao = null
    numeroAnterior = ""
    numeroAtual = ""
    display.value = ""
})

display.addEventListener('input', () => {
    const length = display.value.length;
    console.log(length);

    if (length >= 5) {
        display.style.fontSize = '30px';
    }
})})
