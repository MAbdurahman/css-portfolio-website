





/* =============================================
            Navigation
================================================ */
$(document).ready(function() {
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