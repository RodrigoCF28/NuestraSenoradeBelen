/* ==========================================
   1. MENÚ HAMBURGUESA (MÓVIL)
   ========================================== */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }
});

/* ==========================================
   2. CARRUSEL DE IMÁGENES (PÁGINA PATRONA)
   ========================================== */
let slideIndex = 1;

// Solo ejecuta el carrusel si existen slides en el DOM actual
if (document.getElementsByClassName("carousel-slide").length > 0) {
    showSlides(slideIndex);

    // Cambio automático cada 4 segundos
    setInterval(function() {
        plusSlides(1);
    }, 4000);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndex - 1].className += " active";
    }
}
