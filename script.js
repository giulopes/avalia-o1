document.getElementById('botao-acessibilidade').addEventListener('click', function() {
    const opcoes = document.getElementById('opcoes-acessibilidade');
    opcoes.classList.toggle('apresenta-lista');
});

document.getElementById('aumentar-fonte').addEventListener('click', function() {
    document.body.style.fontSize = 'larger';
});

document.getElementById('diminuir-fonte').addEventListener('click', function() {
    document.body.style.fontSize = 'smaller';
});