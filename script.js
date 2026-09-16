/* ==========================================
   1. NAVEGACIÓN Y MENÚ MÓVIL
   ========================================== */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('show');
        });
    }

    /* ==========================================
       2. BUSCADOR EN TIEMPO REAL (CENTROS PASTORALES)
       ========================================== */
    const searchInput = document.getElementById('cpSearch');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(e) {
            const term = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.cp-card');

            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(term)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

/* ==========================================
   3. CARRUSEL (PATRONA)
   ========================================== */
let slideIndex = 1;

if (document.getElementsByClassName("carousel-slide").length > 0) {
    showSlides(slideIndex);
    setInterval(function() { plusSlides(1); }, 4000);
}

function plusSlides(n) { showSlides(slideIndex += n); }
function currentSlide(n) { showSlides(slideIndex = n); }

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
/* ==========================================
   4. LIGHTBOX / MODAL PARA FOTOGRAFÍAS
   ========================================== */
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    const zoomCards = document.querySelectorAll('.zoom-card');

    zoomCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = this.getAttribute('data-lightbox');
            const captionText = this.getAttribute('data-caption');

            if (lightbox && lightboxImg && imgSrc) {
                lightbox.style.display = 'block';
                lightboxImg.src = imgSrc;
                if (lightboxCaption) lightboxCaption.textContent = captionText || '';
            }
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener('click', function() {
            lightbox.style.display = 'none';
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }

    /* ==========================================
       5. REPRODUCTOR DE VIDEO INTERACTIVO
       ========================================== */
    const video = document.getElementById('parroquiaVideo');
    const playBtn = document.getElementById('playBtn');
    const videoOverlay = document.getElementById('videoOverlay');
    const togglePlayBtn = document.getElementById('togglePlayBtn');
    const toggleMuteBtn = document.getElementById('toggleMuteBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    if (video) {
        function toggleVideo() {
            if (video.paused) {
                video.play();
                if (videoOverlay) videoOverlay.classList.add('hidden');
            } else {
                video.pause();
                if (videoOverlay) videoOverlay.classList.remove('hidden');
            }
        }

        if (playBtn) playBtn.addEventListener('click', toggleVideo);
        if (togglePlayBtn) togglePlayBtn.addEventListener('click', toggleVideo);
        if (video) video.addEventListener('click', toggleVideo);

        if (toggleMuteBtn) {
            toggleMuteBtn.addEventListener('click', function() {
                video.muted = !video.muted;
                toggleMuteBtn.textContent = video.muted ? '🔇' : '🔊';
            });
        }

        if (fullscreenBtn) {
            fullscreenBtn.addEventListener('click', function() {
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) {
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) {
                    video.msRequestFullscreen();
                }
            });
        }
    }

    /* ==========================================
       6. REVEAL AL HACER SCROLL
       ========================================== */
    const revealSections = document.querySelectorAll('.reveal-section');

    function checkReveal() {
        const triggerBottom = window.innerHeight * 0.85;

        revealSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Ejecución inicial
});
