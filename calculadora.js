document.addEventListener('DOMContentLoaded', function() {
    var btnAbrirCalculadora = document.getElementById('abrirModal'); //o botão de abrir a Calculadora
    var modal = document.getElementById('meuModal'); //o que aparece quando clica no botão de abrir a Calculadora
    var btnFecharCalculadora = document.getElementById('close'); //o botão de fechar a Calculadora
    var pagina = document.getElementById('conteudoPrincipal');
    var numeros = document.querySelectorAll('.numero')
    var operadores = document.querySelectorAll('.operador')
    var display = document.getElementById('display')

    btnAbrirCalculadora.addEventListener('click', () => {
        modal.showModal(); // funciona apenas com <dialog>
        pagina.style.filter = 'blur(2px)' //colocar o desfoque no fundo enquanto o modal da Calculadora estiver visivel
    });

    btnFecharCalculadora.addEventListener('click', () => {
        modal.close();
        pagina.style.filter = 'blur(0px)' //tirar o desfoque do fundo
        display.value = ''
    });

    document.addEventListener('keydown', function(event){
        if(event.key === "Escape" && modal.open){ //a função close funcionar também quanto apertar a tecla Esc
            modal.close();
            pagina.style.filter = 'blur(0px)'
            display.value = ''
        }
    })
     numeros.forEach(numero => {
        numero.addEventListener('click', () => {
            const valor = numero.textContent
            display.value += valor
        })
        
    });
     operadores.forEach(operador => { //vai rodar todos os elementos dentro dessa classe de operadores
        operador.addEventListener('click', () => {
            if(operador.id === 'limpar'){
            display.value = ''
        }else{
            const valor = operador.textContent
            display.value += valor
            }
        })
        
    })

    

   
})
