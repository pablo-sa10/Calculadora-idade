const diaInput = document.querySelector('#meuInput1');
const mesInput = document.querySelector('#meuInput2');
const anoInput = document.querySelector('#meuInput3');
const btnEnviar = document.querySelector('.botao');
const data = new Date();
const barraDia = document.querySelector('#barraDia');
const barraMes = document.querySelector('#barraMes');
const barraAno = document.querySelector('#barraAno');

btnEnviar.addEventListener('click', function () {
    document.getElementById('erroDia').textContent = '';
    document.getElementById('erroMes').textContent = '';
    document.getElementById('erroAno').textContent = '';
    exibeErro('Campo obrigatório');
    validarData();
});

function exibeErro(mensagem) {
    if (!diaInput.value) {
        document.getElementById('erroDia').textContent = mensagem;
    }
    if (!mesInput.value) {
        document.getElementById('erroMes').textContent = mensagem;
    }
    if (!anoInput.value) {
        document.getElementById('erroAno').textContent = mensagem;
    }
}

function validarData() {
    const mensagem = 'Valor inválido';

    if (mesInput.value < 1 || mesInput.value > 12) {
        document.getElementById('erroMes').textContent = mensagem;
    } else if (
        (mesInput.value == 1 || mesInput.value == 3 || mesInput.value == 5 || mesInput.value == 7 || mesInput.value == 8 || mesInput.value == 10 || mesInput.value == 12) &&
        (diaInput.value < 1 || diaInput.value > 31)
    ) {
        document.getElementById('erroDia').textContent = mensagem;

    } else if ((mesInput.value == 4 || mesInput.value == 6 || mesInput.value == 9 || mesInput.value == 11) && (diaInput.value < 1 || diaInput.value > 30)) {
        document.getElementById('erroDia').textContent = mensagem;

    } else if (mesInput.value == 2) {
        if ((anoInput.value % 4 == 0 && anoInput.value % 100 != 0) || anoInput.value % 400 == 0) {
            if (diaInput.value < 1 || diaInput.value > 29) {
                document.getElementById('erroDia').textContent = mensagem;
            }
        } else {
            if (diaInput.value < 1 || diaInput.value > 28) {
                document.getElementById('erroDia').textContent = mensagem;
            }
        }
    } else if (anoInput.value < 0 || anoInput.value > data.getFullYear()) {
        document.getElementById('erroAno').textContent = mensagem;
    } else {
        calculo();
    }
}

function calculo() {
    let diaUser = parseInt(diaInput.value);
    let mesUser = parseInt(mesInput.value);
    let anoUser = parseInt(anoInput.value);

    let difDia = data.getDate() - diaUser;
    let difMes = data.getMonth() + 1 - mesUser;
    let difAno = data.getFullYear() - anoUser;

    // Verifica se o dia ou mês de nascimento é posterior ao dia ou mês atuais
    if (difMes < 0 || (difMes === 0 && difDia < 0)) {
        const ultimoDiaMesAnterior = new Date(data.getFullYear(), data.getMonth(), 0).getDate();
        difDia = ultimoDiaMesAnterior + difDia;
        difMes = difMes + 12 - 1;
        difAno--;
    }

    const resultado = {
        dia: difDia < 10 ? '0' + difDia : difDia,
        mes: difMes < 10 ? '0' + difMes : difMes,
        ano: difAno
    };

    barraDia.textContent = resultado.dia;
    barraMes.textContent = resultado.mes;
    barraAno.textContent = resultado.ano;
}
