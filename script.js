document.getElementById("botao-acessibilidade").addEventListener("click", () => {
    const opcoes = document.getElementById("opcoes-acessibilidade");
    opcoes.classList.toggle("apresenta-lista");
});

document.getElementById("aumentar-fonte").addEventListener("click", () => {
    document.body.style.fontSize = "larger";
});

document.getElementById("diminuir-fonte").addEventListener("click", () => {
    document.body.style.fontSize = "initial";
});

// Ativar/desativar modo contraste ao pressionar "C" no teclado
document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() === "c") {
        document.body.classList.toggle("contraste-alto");
    }
});
