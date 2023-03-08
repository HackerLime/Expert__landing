/*Слайдер SWIPER */
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
/*===========================================*/
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
/*========================================================*/



/*Управление выпадающимися карточками services*/
const servicesCardBodys = document.querySelectorAll('.services__card-body')
const servicesIcons = document.querySelectorAll('.services__card-icon')
const contents = document.querySelectorAll('.services__card-body-content')
for (i = 0; i < 3; i++) {
	const servicesIcon = servicesIcons[i]
	const cardBody = servicesCardBodys[i]
	const content = contents[i]
	const heightCl = content.clientHeight
	servicesIcon.addEventListener('click', function () {
		servicesIcon.classList.toggle('_active')
		cardBody.classList.toggle('_active')
		content.classList.toggle('_active')
		if (content.classList.contains('_active')) {
			cardBody.style.cssText = `
		height:${heightCl + 'px'};
		transition: height 2s ease 0s;
		`
		} else {
			cardBody.style.cssText = `
		height:0px;
		transition: height 2s ease 0s;
		`
		}
	})
}
/*==================================================*/






