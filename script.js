document.addEventListener("DOMContentLoaded", function() {

    // Animação ao rolar
    const secoes = document.querySelectorAll("section");
    secoes.forEach(secao => {
        secao.style.opacity = "0";
        secao.style.transform = "translateY(30px)";
        secao.style.transition = "all 0.8s ease";
    });

    function verificarScroll() {
        secoes.forEach(secao => {
            const topo = secao.getBoundingClientRect().top;
            if (topo < window.innerHeight * 0.85) {
                secao.style.opacity = "1";
                secao.style.transform = "translateY(0)";
            }
        });
    }

    window.addEventListener("scroll", verificarScroll);
    verificarScroll();

       // Flashcards
    const flashcards = document.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });
    });

    console.log("✅ Site Agrinho 2026 carregado com sucesso!");
});
