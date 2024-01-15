const dia = document.querySelector('#meuInput1');
const mes = document.querySelector('#meuInput2');
const ano = document.querySelector('#meuInput3');
const btnEnviar = document.querySelector('.botao')

btnEnviar.addEventListener('click', () =>{
    if(!dia.value || !mes.value || !ano.value){
        exibiErro('Por favor, preencha o campo que está faltando');
        return
    }

    function exibiErro(){
        dia.classList.add('erro')
        mes.classList.add('erro')
        ano.classList.add('erro')
    }
})
