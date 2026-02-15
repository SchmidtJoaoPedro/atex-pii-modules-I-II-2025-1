/**
 * Script principal do site Go!Recycle
 * Gerencia navegação, scroll e animações
 */
$(document).ready(function() {
    // =================================
    // MENU MOBILE
    // =================================
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Fecha menu mobile ao clicar em link
    $('#mobile_nav_list a').on('click', function() {
        $('#mobile_menu').removeClass('active');
        $('#mobile_btn').find('i').removeClass('fa-x');
    });

    // Navegação suave ao clicar nos links
    $('.nav-item a, #mobile_nav_list a').on('click', function(e) {
        const href = $(this).attr('href');
        
        // Verifica se é um link de âncora (começa com #)
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = $(href);
            
            if (target.length) {
                const headerHeight = $('header').outerHeight();
                const targetPosition = target.offset().top - headerHeight - 20;
                
                $('html, body').animate({
                    scrollTop: targetPosition
                }, 350, function() {
                    // Atualiza classe active manualmente após o scroll
                    navItems.removeClass('active');
                    $('.nav-item a[href="' + href + '"]').parent().addClass('active');
                });
            }
        }
    });

    // =================================
    // NAVEGAÇÃO COM SCROLL
    // =================================
    const sections = $('section');
    const navItems = $('.nav-item');
    const backToTopBtn = $('#backToTop');
    let isScrolling;

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop();
        const headerHeight = header.outerHeight();

        // Mostra/oculta botão voltar ao topo
        if (scrollPosition > 300) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }

        // Otimiza performance com debounce
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(function() {
            updateNavigation(scrollPosition, header, headerHeight);
        }, 15);
    });

    // Evento de clique no botão voltar ao topo
    backToTopBtn.on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });

    function updateNavigation(scrollPosition, header, headerHeight) {
        let activeSectionIndex = 0;

        // Adiciona sombra ao header no scroll
        if (scrollPosition <= 0) {
            header.css('box-shadow', '0 2px 5px rgba(0, 0, 0, 0.05)');
        } else {
            header.css('box-shadow', '0 2px 5px rgba(0, 0, 0, 0.15)');
        }

        // Atualiza item ativo da navegação
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - headerHeight - 100;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    }

    // =================================
    // ANIMAÇÕES SCROLL REVEAL
    // =================================
    if (typeof ScrollReveal !== 'undefined') {
        const revealConfig = {
            duration: 600,
            distance: '20%',
            easing: 'ease-in-out',
            mobile: true
        };

        ScrollReveal().reveal('#cta', {
            ...revealConfig,
            origin: 'left',
            duration: 800
        });

        ScrollReveal().reveal('#banner', {
            ...revealConfig,
            origin: 'right',
            duration: 800
        });

        ScrollReveal().reveal('#Intro', {
            ...revealConfig,
            origin: 'top',
            duration: 800
        });

        ScrollReveal().reveal('#Ambiental', {
            ...revealConfig,
            origin: 'top',
            distance: '2.5%',
            duration: 800
        });

        ScrollReveal().reveal('#Social', {
            ...revealConfig,
            origin: 'bottom',
            distance: '2.5%',
            duration: 800
        });

        ScrollReveal().reveal('#Lixo_Eletrônico', {
            ...revealConfig,
            origin: 'left',
            distance: '10%'
        });

        ScrollReveal().reveal('#Outros', {
            ...revealConfig,
            origin: 'right',
            distance: '10%'
        });

        ScrollReveal().reveal('#content-map', {
            ...revealConfig,
            origin: 'bottom'
        });
    }
});