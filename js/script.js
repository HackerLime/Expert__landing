const mainSwiper = new Swiper('.inspection__slide-container', {
	direction: 'vertical',
	effect: 'coverflow',
	coverflowEffect: {
		rotate: 0,
		slideShadows: true,
		stretch: 0,
		depth: 200,
		modifier: 1,
	},



	navigation: {
		nextEl: '.inspection__button-down',
		prevEl: '.inspection__button-up'
	},
	allowTouchMove: false,

	loop: true,
	centeredSlides: true,
	slidesPerView: 1.5,
});
function getSlideNum() {
	const currentEl = document.querySelector('.swiper-slide-active')
	const menuLinks = document.querySelectorAll('.inspection__name')
	const nextEl = document.querySelector('.swiper-slide-next')
	const prevEl = document.querySelector('.swiper-slide-prev')
	const currentIndex = currentEl.getAttribute('data-swiper-slide-index')
	const nextElIndex = nextEl.getAttribute('data-swiper-slide-index')
	const prevElIndex = prevEl.getAttribute('data-swiper-slide-index')
	menuLinks[currentIndex].classList.add('active')
	if (menuLinks[prevElIndex].classList.contains('active')) {
		menuLinks[prevElIndex].classList.remove('active')
	}
	if (menuLinks[nextElIndex].classList.contains('active')) {
		menuLinks[nextElIndex].classList.remove('active')
	}
};
getSlideNum()


const button = document.querySelectorAll('.inspection__button')
if (button.length > 0) {
	button.forEach(getNum => {
		getNum.addEventListener('click', getSlideNum)
	}
	)
};
