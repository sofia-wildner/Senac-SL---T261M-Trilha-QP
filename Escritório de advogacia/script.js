// =========================================
// FORMULÁRIO DE CONTATO
// =========================================

const form = document.getElementById('form-contato');

form.addEventListener('submit', function (evento) {

    // Impede o formulário de recarregar a página
    evento.preventDefault();


    // =========================================
    // PEGANDO OS ELEMENTOS
    // =========================================

    const nome = document.getElementById('nome');
    const erroNome = document.getElementById('erro-nome');

    const email = document.getElementById('email');
    const erroEmail = document.getElementById('erro-email');

    const termos = document.getElementById('termos');
    const erroTermos = document.getElementById('erro-termos');


    // =========================================
    // VERIFICAÇÃO
    // =========================================

    let tudoCerto = true;


    // =========================================
    // NOME
    // =========================================

    if (nome.value.trim() === '') {

        erroNome.textContent = 'Por favor, preencha seu nome.';

        tudoCerto = false;

    } else {

        erroNome.textContent = '';

    }


    // =========================================
    // E-MAIL
    // =========================================

    if (email.value.trim() === '') {

        erroEmail.textContent = 'Por favor, preencha seu e-mail.';

        tudoCerto = false;

    } else {

        erroEmail.textContent = '';

    }


    // =========================================
    // TERMOS
    // =========================================

    if (termos.checked === false) {

        erroTermos.textContent = 'Você precisa aceitar os termos.';

        tudoCerto = false;

    } else {

        erroTermos.textContent = '';

    }


    // =========================================
    // SUCESSO
    // =========================================

    if (tudoCerto) {

        alert('Mensagem enviada com sucesso!');

        form.reset();

    }

});