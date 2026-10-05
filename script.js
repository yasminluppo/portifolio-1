function mostrar(id) {

    // Esconde todas as páginas
    const paginas = document.querySelectorAll(".pagina");

    paginas.forEach(function(pagina) {
        pagina.classList.remove("ativa");
    });

    // Mostra a página escolhida
    const paginaSelecionada = document.getElementById(id);

    paginaSelecionada.classList.add("ativa");

    // Volta para o topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}