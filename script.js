
document.addEventListener("DOMContentLoaded", () => {

    // Botão voltar ao topo
    const topButton = document.getElementById("topButton");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            topButton.style.display = "block";
        } else {
            topButton.style.display = "none";
        }
    });

    topButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Animação dos elementos
    const elementos = document.querySelectorAll(
        ".history-card, .timeline-item, .current-card, .future"
    );

    elementos.forEach(elemento => {
        elemento.classList.add("reveal");
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elementos.forEach(elemento => {
        observer.observe(elemento);
    });

});
