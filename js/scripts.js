/* =============================================
            Navigation
================================================ */
$(document).ready(function () {
	const hamburgerContainer = document.querySelector('#header__main-nav');
	const hamburger = document.querySelector('.header__main-nav--hamburger');
	const links = document.querySelectorAll('.header__main-nav--links li');
	const body = document.querySelector('body');

	hamburger.addEventListener('click', () => {
		hamburgerContainer.classList.toggle('opened');
		body.classList.toggle('no-scroll');
		links.forEach(link => {
			link.classList.toggle('opened');
		});
	});
});

/**
 * document
    .querySelectorAll('.nav__item a[href^="#"]')
    .forEach(trigger => {
        trigger.onclick = function(e) {
            e.preventDefault();
            let hash = this.getAttribute('href');
            let target = document.querySelector(hash);
            let headerOffset = 100;
            let elementPosition = target.offsetTop;
            let offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        };
    });









    const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
 */

/*=============================================
         testimonials
================================================*/
//   all ------------------
function initParadoxWay() {
	'use strict';

	if ($('.testimonials__carousel').length > 0) {
		var j2 = new Swiper('.testimonials__carousel .swiper-container', {
			preloadImages: false,
			slidesPerView: 1,
			spaceBetween: 20,
			loop: true,
			grabCursor: false,
			mousewheel: false,
			centeredSlides: true,
			pagination: {
				el: '.tc-pagination',
				clickable: true,
				dynamicBullets: true,
			},
			navigation: {
				nextEl: '.listing__carousel__button--next',
				prevEl: '.listing__carousel__button--prev',
			},
			breakpoints: {
				1024: {
					slidesPerView: 3,
				},
			},
		});
	}

	// bubbles -----------------

	setInterval(function () {
		var size = 10;
		$('.bubbles').append(
			'<div class="individual-bubble" style="left: ' +
				20 +
				'px; width: ' +
				size +
				'px; height:' +
				size +
				'px;"></div>'
		);
		$('.individual-bubble').animate(
			{
				bottom: '100%',
				opacity: '-=0.7',
			},
			4000,
			function () {
				$(this).remove();
			}
		);
	}, 350);
}

$(document).ready(function () {
	initParadoxWay();
});
