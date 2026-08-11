import { toursData } from './toursData.js';
import { languages } from './lang.js';
const translations = languages;


document.addEventListener('DOMContentLoaded', () => {
    // Language toggle setup
    const langToggle = document.getElementById('lang-toggle');
    let currentLang = localStorage.getItem('lang') || 'es'; // load persisted language
    // Update button label according to current language
    if (langToggle) {
        langToggle.textContent = currentLang === 'es' ? 'Eng' : 'ES';
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('lang', currentLang);
            applyTranslations(currentLang);
            // Update button label after toggle
            // langToggle.textContent = currentLang === 'es' ? '' : 'ES';
            // Refresh tour details on detail page if applicable
            const detailParams = new URLSearchParams(window.location.search);
            const detailTourId = detailParams.get('tour');
            if (detailTourId) {
                populateTourDetails(detailTourId);
            }
        });
    }
    // Removed duplicate definition; currentLang is defined earlier with persisted value

    const applyTranslations = (lang) => {
        const dict = translations[lang];
        for (const selector in dict) {
            const el = document.querySelector(selector);
            if (el) {
                el.textContent = dict[selector];
            }
        }
    };
    // Initial apply
    applyTranslations(currentLang);



    // 1. Efecto Scroll en Navbar
    const header = document.querySelector('.turismo-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Menú de Navegación Móvil
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');

            // Animación simple de hamburguesa a X
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = navLinks.classList.contains('mobile-active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = navLinks.classList.contains('mobile-active') ? '0' : '1';
            spans[2].style.transform = navLinks.classList.contains('mobile-active') ? 'rotate(-45deg) translate(6px, -6px)' : 'none';
        });
    }

    // 3. Filtrado Dinámico de Experiencias
    const filterButtons = document.querySelectorAll('.filter-btn');
    const expItems = document.querySelectorAll('.exp-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Activar botón seleccionado
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            expItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filterValue === 'all' || category === filterValue) {
                    item.classList.remove('hidden');
                    // Retraso pequeño para animación de fade in
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    // Esperar a que termine la transición antes de ocultar
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 400);
                }
            });
        });
    });

    // 4. Slider de Testimonios
    const track = document.querySelector('.testimonials-track');
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.querySelector('.slider-arrow.next');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const dotsContainer = document.querySelector('.slider-dots');

    if (track && slides.length > 0) {
        let currentIndex = 0;

        // Crear Dots dinámicamente
        slides.forEach((_, idx) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(idx));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.slider-dot');

        const updateSlider = () => {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
        };

        const goToSlide = (index) => {
            currentIndex = index;
            updateSlider();
        };

        const nextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        };

        const prevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        };

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        // Auto-play opcional
        let slideInterval = setInterval(nextSlide, 8000);
        const resetInterval = () => {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 8000);
        };

        [nextBtn, prevBtn].forEach(btn => {
            if (btn) btn.addEventListener('click', resetInterval);
        });
        dots.forEach(dot => dot.addEventListener('click', resetInterval));
    }

    // 5. Animaciones al hacer Scroll (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Dejar de observar una vez revelado
                }
            });
        }, {
            threshold: 0.05,
            rootMargin: '0px 0px 50px 0px'
        });

        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('active');
            } else {
                observer.observe(el);
            }
        });
    } else {
        // Fallback si no está soportado
        revealElements.forEach(el => el.classList.add('active'));
    }

    // 6. Simulación de Buscador e Inscripciones
    const searchForm = document.querySelector('.hero-search');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const dest = searchForm.querySelector('select[name="destino"]').value;
            const type = searchForm.querySelector('select[name="tipo"]').value;
            const date = searchForm.querySelector('input[name="fecha"]').value;

            alert(`Buscando aventuras en "${dest}" para viajes de tipo "${type}" en la fecha ${date || 'Flexible'}... ¡Prepárate para explorar!`);
        });
    }

    const ctaForm = document.querySelector('.cta-form');
    if (ctaForm) {
        ctaForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = ctaForm.querySelector('input[type="email"]').value;
            if (email) {
                alert(`¡Gracias por suscribirte! Te hemos enviado un correo de bienvenida a: ${email}`);
                ctaForm.reset();
            }
        });
    }

    // 7. Carrusel de Destinos Premium
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const cPrevBtn = document.querySelector('.carousel-control.prev');
    const cNextBtn = document.querySelector('.carousel-control.next');
    const cDotsContainer = document.querySelector('.carousel-dots-container');

    if (carouselTrack && carouselSlides.length > 0) {
        let activeIndex = 0;
        let autoplayTimer = null;

        // Crear Dots dinámicamente
        carouselSlides.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            dot.setAttribute('aria-label', `Ir a destino ${idx + 1}`);
            if (idx === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                goToCarouselSlide(idx);
                resetAutoplay();
            });
            cDotsContainer.appendChild(dot);
        });

        const cDots = document.querySelectorAll('.carousel-dot');

        const updateCarousel = () => {
            // Desplazar el track
            carouselTrack.style.transform = `translateX(-${activeIndex * 100}%)`;

            // Actualizar clases active en slides para disparar transiciones de texto e imagen
            carouselSlides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === activeIndex);
            });

            // Actualizar active en dots
            cDots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === activeIndex);
            });
        };

        const goToCarouselSlide = (index) => {
            activeIndex = index;
            updateCarousel();
        };

        const nextCarouselSlide = () => {
            activeIndex = (activeIndex + 1) % carouselSlides.length;
            updateCarousel();
        };

        const prevCarouselSlide = () => {
            activeIndex = (activeIndex - 1 + carouselSlides.length) % carouselSlides.length;
            updateCarousel();
        };

        if (cNextBtn) {
            cNextBtn.addEventListener('click', () => {
                nextCarouselSlide();
                resetAutoplay();
            });
        }

        if (cPrevBtn) {
            cPrevBtn.addEventListener('click', () => {
                prevCarouselSlide();
                resetAutoplay();
            });
        }

        // Autoplay
        const startAutoplay = () => {
            autoplayTimer = setInterval(nextCarouselSlide, 6000);
        };

        const stopAutoplay = () => {
            if (autoplayTimer) {
                clearInterval(autoplayTimer);
            }
        };

        const resetAutoplay = () => {
            stopAutoplay();
            startAutoplay();
        };

        startAutoplay();

        // Pausa en Hover
        const carouselContainer = document.querySelector('.destinos-carousel');
        if (carouselContainer) {
            carouselContainer.addEventListener('mouseenter', stopAutoplay);
            carouselContainer.addEventListener('mouseleave', startAutoplay);
        }
    }

    // 8. Enrutamiento y Carga Dinámica de Detalles de Tour
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('tour');

    // Elementos del DOM del Lightbox
    const lightbox = document.getElementById('tour-lightbox');
    const lightboxImg = document.getElementById('tour-lightbox-img');
    const lightboxCaption = document.getElementById('tour-lightbox-caption');
    const lightboxClose = lightbox ? lightbox.querySelector('.tour-lightbox-close') : null;
    const lightboxPrev = lightbox ? lightbox.querySelector('.tour-lightbox-arrow.prev') : null;
    const lightboxNext = lightbox ? lightbox.querySelector('.tour-lightbox-arrow.next') : null;

    let activeTourGallery = [];
    let activeImageIndex = 0;

    // Función para Rellenar los Detalles del Tour en la Página
    const populateTourDetails = (id) => {
        const data = toursData[id];
        if (!data) {
            // Si el ID del tour no es válido, redirigir a la landing principal
            window.location.href = 'index.html';
            return;
        }

        // Use language-specific fields if present
        const title = (currentLang === 'en' && data.titleEn) ? data.titleEn : data.title;
        const duration = (currentLang === 'en' && data.durationEn) ? data.durationEn : data.duration;
        const type = (currentLang === 'en' && data.typeEn) ? data.typeEn : data.type;
        const groupSize = (currentLang === 'en' && data.groupSizeEn) ? data.groupSizeEn : data.groupSize;
        const languages = (currentLang === 'en' && data.languagesEn) ? data.languagesEn : data.languages;
        const overview = (currentLang === 'en' && data.overviewEn) ? data.overviewEn : data.overview;

        const banner = document.getElementById('modal-tour-banner');
        if (banner) {
            banner.style.backgroundImage = `url('${data.bannerImage}')`;
        }
        // Populate text fields for both language containers
        const setContent = (selector, text) => {
            document.querySelectorAll(selector).forEach(el => el.textContent = text);
        };

        setContent('#modal-tour-title', title);
        setContent('#modal-tour-overview', overview);
        setContent('#modal-tour-duration', duration);
        setContent('#modal-tour-type', type);
        setContent('#modal-tour-group-size', groupSize);
        setContent('#modal-tour-languages', languages);

        // Update page title
        document.title = `${title} | Lamira Tours`;

        // Update banner for both language containers
        document.querySelectorAll('#modal-tour-banner').forEach(banner => {
            banner.style.backgroundImage = `url('${data.bannerImage}')`;
        });
        // Removed unused titleEl reference


        const bookingTourIdEl = document.getElementById('booking-tour-id');
        if (bookingTourIdEl) bookingTourIdEl.value = id;

        // Populate key features
        const durEl = document.getElementById('modal-tour-duration');
        if (durEl) durEl.textContent = duration;
        const typeEl = document.getElementById('modal-tour-type');
        if (typeEl) typeEl.textContent = type;
        const groupEl = document.getElementById('modal-tour-group-size');
        if (groupEl) groupEl.textContent = groupSize;
        const langEl = document.getElementById('modal-tour-languages');
        if (langEl) langEl.textContent = languages;

        const overviewEl = document.getElementById('modal-tour-overview');
        if (overviewEl) overviewEl.textContent = overview;



        // Rellenar Recomendaciones (both languages)
        const recLists = document.querySelectorAll('#modal-tour-recommendations');
        recLists.forEach(recList => {
            recList.innerHTML = '';
            const recData = (currentLang === 'en' && data.recommendationsEn) ? data.recommendationsEn : data.recommendations;
            recData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                recList.appendChild(li);
            });
        });

        // Rellenar Incluidos (both languages)
        const incLists = document.querySelectorAll('#modal-tour-included');
        incLists.forEach(incList => {
            incList.innerHTML = '';
            const incData = (currentLang === 'en' && data.includedEn) ? data.includedEn : data.included;
            incData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                incList.appendChild(li);
            });
        });

        // Rellenar Excluidos (both languages)
        const exclLists = document.querySelectorAll('#modal-tour-excluded');
        exclLists.forEach(exclList => {
            exclList.innerHTML = '';
            const exclData = (currentLang === 'en' && data.excludedEn) ? data.excludedEn : data.excluded;
            exclData.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                exclList.appendChild(li);
            });
        });

        // Populate Itinerary (Accordion) (both languages)
        const itineraryContainer = document.getElementById('modal-tour-itinerary');
        if (itineraryContainer) {
            const itData = (currentLang === 'en' && data.itineraryEn) ? data.itineraryEn : data.itinerary;
            itineraryContainer.innerHTML = '';
            itData.forEach(item => {
                const accItem = document.createElement('div');
                accItem.className = 'tour-accordion-item';
                accItem.innerHTML = `
                    <div class="tour-accordion-header">
                        <span>${item.day}</span>
                        <span>${item.title}</span>
                    </div>
                    <div class="tour-accordion-content">
                        <p>${item.desc}</p>
                    </div>
                `;
                itineraryContainer.appendChild(accItem);
            });
        }

        // Populate FAQs (Accordion) (both languages)
        const faqsContainer = document.getElementById('modal-tour-faqs');
        if (faqsContainer) {
            const faqData = (currentLang === 'en' && data.faqsEn) ? data.faqsEn : data.faqs;
            faqsContainer.innerHTML = '';
            faqData.forEach(faq => {
                const accItem = document.createElement('div');
                accItem.className = 'tour-accordion-item';
                accItem.innerHTML = `
                    <div class="tour-accordion-header">
                        <span>${faq.q}</span>
                    </div>
                    <div class="tour-accordion-content">
                        <p>${faq.a}</p>
                    </div>
                `;
                faqsContainer.appendChild(accItem);
            });
        }

        // Guardar galería activa
        activeTourGallery = data.gallery;

        // Configurar acordeones (Itinerario y FAQ)
        setupAccordionEvents();
    };

    // Manejo de clicks en acordeones
    const setupAccordionEvents = () => {
        const headers = document.querySelectorAll('.tour-accordion-header');
        headers.forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const content = item.querySelector('.tour-accordion-content');
                const isOpen = item.classList.contains('active');

                // Cerrar otros acordeones en el mismo contenedor
                const container = item.parentElement;
                const siblingItems = container.querySelectorAll('.tour-accordion-item');
                siblingItems.forEach(sib => {
                    sib.classList.remove('active');
                    const sibContent = sib.querySelector('.tour-accordion-content');
                    if (sibContent) sibContent.style.maxHeight = null;
                });

                if (!isOpen) {
                    item.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    item.classList.remove('active');
                    content.style.maxHeight = null;
                }
            });
        });
    };

    // Lightbox de Galería
    const openLightbox = (index) => {
        if (activeTourGallery.length === 0 || !lightbox) return;
        activeImageIndex = index;
        const item = activeTourGallery[activeImageIndex];

        lightboxImg.setAttribute('src', item.img);
        lightboxCaption.textContent = item.caption;

        lightbox.classList.add('active');
    };

    const closeLightbox = () => {
        if (!lightbox) return;
        lightbox.classList.remove('active');
    };

    const nextLightboxImg = () => {
        if (activeTourGallery.length === 0) return;
        activeImageIndex = (activeImageIndex + 1) % activeTourGallery.length;
        const item = activeTourGallery[activeImageIndex];
        lightboxImg.setAttribute('src', item.img);
        lightboxCaption.textContent = item.caption;
    };

    const prevLightboxImg = () => {
        if (activeTourGallery.length === 0) return;
        activeImageIndex = (activeImageIndex - 1 + activeTourGallery.length) % activeTourGallery.length;
        const item = activeTourGallery[activeImageIndex];
        lightboxImg.setAttribute('src', item.img);
        lightboxCaption.textContent = item.caption;
    };

    // Detectar si estamos en la página de detalles (tour.html) y cargar los datos
    const isTourPage = document.body.classList.contains('tour-detail-page') || document.getElementById('tour-detail-container') !== null;
    if (isTourPage) {
        if (tourId) {
            populateTourDetails(tourId);
        } else {
            // Fallback: si entran a tour.html sin parámetro, cargar el clásico de 1 día
            populateTourDetails('uyuni-1-dia');
        }
    }

    // Botón de Galería en la página de detalles
    const galleryBtn = document.getElementById('modal-tour-gallery-btn');
    if (galleryBtn) {
        galleryBtn.addEventListener('click', () => {
            openLightbox(0);
        });
    }

    // Controles del Lightbox
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextLightboxImg);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightboxImg);
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Atajos de teclado para cerrar lightbox y navegar fotos
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (lightbox && lightbox.classList.contains('active')) {
                closeLightbox();
            }
        }
        if (lightbox && lightbox.classList.contains('active')) {
            if (e.key === 'ArrowRight') nextLightboxImg();
            if (e.key === 'ArrowLeft') prevLightboxImg();
        }
    });

    // Envío del formulario de reserva
    const bookingForm = document.getElementById('tour-booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const currentTourId = document.getElementById('booking-tour-id').value;
            const tourName = toursData[currentTourId] ? toursData[currentTourId].title : 'Tour';
            const clientName = document.getElementById('booking-name').value;
            const clientEmail = document.getElementById('booking-email').value;
            const travelDate = document.getElementById('booking-date').value;
            const passengers = document.getElementById('booking-passengers').value;

            alert(`¡Consulta de Reserva Recibida!\n\nCliente: ${clientName}\nTour: ${tourName}\nFecha: ${travelDate}\nPasajeros: ${passengers}\nEmail: ${clientEmail}\n\nNos pondremos en contacto contigo en las próximas 24 horas.`);

            bookingForm.reset();
        });
    }
});

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

if (next && prev && document.querySelector(".slide")) {
    next.addEventListener("click", function () {
        let items = document.querySelectorAll(".item");
        if (items.length > 0) {
            document.querySelector(".slide").appendChild(items[0]);
        }
    });

    prev.addEventListener("click", function () {
        let items = document.querySelectorAll(".item");
        if (items.length > 0) {
            document.querySelector(".slide").prepend(items[items.length - 1]);
        }
    });
}




//galeria
(function () {
    // ----- ELEMENTOS -----
    const track = document.getElementById('carruselTrack');
    const slides = track.querySelectorAll('.carrusel-slide');
    const totalSlides = slides.length;
    const indicatorsContainer = document.getElementById('indicatorsContainer');
    const counterEl = document.getElementById('slideCounter');

    // ----- ESTADO -----
    let currentIndex = 0;
    let intervalId = null;
    const INTERVAL_MS = 3500;

    // ----- FUNCIONES -----

    function moveToSlide(index, smooth = true) {
        if (index < 0) index = 0;
        if (index >= totalSlides) index = totalSlides - 1;

        currentIndex = index;
        const offset = -currentIndex * 100;
        track.style.transition = smooth ? 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
        track.style.transform = `translateX(${offset}%)`;

        updateIndicators();
        updateCounter();
    }

    function nextSlide() {
        const next = (currentIndex + 1) % totalSlides;
        moveToSlide(next, true);
    }

    function prevSlide() {
        const prev = (currentIndex - 1 + totalSlides) % totalSlides;
        moveToSlide(prev, true);
    }

    function updateIndicators() {
        const dots = indicatorsContainer.querySelectorAll('.dot');
        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    function updateCounter() {
        if (counterEl) {
            counterEl.textContent = `${currentIndex + 1} / ${totalSlides}`;
        }
    }

    function createIndicators() {
        indicatorsContainer.innerHTML = '';
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.setAttribute('aria-label', `Ir a la imagen ${i + 1}`);
            dot.dataset.index = i;
            dot.addEventListener('click', function (e) {
                const index = parseInt(this.dataset.index, 10);
                if (index !== currentIndex) {
                    moveToSlide(index, true);
                    resetAutoPlay();
                }
            });
            indicatorsContainer.appendChild(dot);
        }
    }

    function resetAutoPlay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        intervalId = setInterval(nextSlide, INTERVAL_MS);
    }

    function stopAutoPlay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function initCarrusel() {
        createIndicators();

        track.style.transition = 'none';
        track.style.transform = 'translateX(0%)';
        currentIndex = 0;
        updateIndicators();
        updateCounter();

        void track.offsetHeight;

        resetAutoPlay();

        const viewport = track.parentElement;
        viewport.addEventListener('mouseenter', function () {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        });
        viewport.addEventListener('mouseleave', function () {
            if (!intervalId) {
                resetAutoPlay();
            }
        });

        viewport.addEventListener('touchstart', function () {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        }, { passive: true });
        viewport.addEventListener('touchend', function () {
            if (!intervalId) {
                resetAutoPlay();
            }
        }, { passive: true });
    }

    // ----- LANZAR -----
    initCarrusel();

    window.carrusel = {
        next: nextSlide,
        prev: prevSlide,
        goTo: (index) => moveToSlide(index, true),
        pause: stopAutoPlay,
        resume: resetAutoPlay,
    };

})();