$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#Intro', {
        origin: 'top',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#Ambiental', {
        origin: 'top',
        duration: 2000,
        distance: '2.5%'
    });

    ScrollReveal().reveal('#Social', {
        origin: 'bottom',
        duration: 2000,
        distance: '2.5%'
    });

    ScrollReveal().reveal('#Lixo_Eletrônico', {
        origin: 'left',
        duration: 1000,
        distance: '10%'
    });

    ScrollReveal().reveal('#Outros', {
        origin: 'right',
        duration: 1000,
        distance: '10%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('#content-map', {
        origin: 'bottom',
        duration: 1000,
        distance: '20%'
    });
});