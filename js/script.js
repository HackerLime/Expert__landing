
/*Слайдер SWIPER */

const inspectionSlider = new Swiper('.inspection__slide-container', {
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

/*Navigation of example*/

const slideButtons = document.querySelectorAll('.slider__button')
for (i = 0; i < slideButtons.length; i++) {
	const slideButton = slideButtons[i]
	slideButton.addEventListener('mouseover', function () {
		slideButton.classList.add('_active')
		if (slideButton.nextElementSibling) {
			slideButton.nextElementSibling.classList.add('_active')
			slideButton.nextElementSibling.childNodes[1].classList.add('_active')
			slideButton.childNodes[1].classList.add('_active')
		} else {
			slideButton.previousElementSibling.classList.add('_active')
			slideButton.previousElementSibling.childNodes[1].classList.add('_active')
			slideButton.childNodes[1].classList.add('_active')
		}
	})
}



/*Swiper-slider */

const exampleSlider = new Swiper('.example__body-slider', {
	navigation: {
		nextEl: '.example__slider-right',
		prevEl: '.example__slider-left',
	},
	scrollbar: {
		el: '.example__slider-scrollbar',

	},

	loop: true,
	spaceBetween: 30,
	slidesPerView: 3,
},

)
const popupSlider = new Swiper('.popup__slider-container', {
	loop: true,
	scrollbar: {
		el: '.popup__slide-scrollbar',
	},
	autoHeight: true,
	navigation: {
		prevEl: '.popup__slide-left',
		nextEl: '.popup__slide-right'
	}
})
//popup settings
const body = document.querySelector('body')
const lockPadding = document.querySelectorAll('.lock-padding')
const popupLinks = document.querySelectorAll('.popup__link')
if (popupLinks.length > 0) {
	for (i = 0; i < popupLinks.length; i++) {
		const popupLink = popupLinks[i]
		popupLink.addEventListener('click', function (e) {
			const currentLink = popupLink.getAttribute('href')
			const currentPopupName = currentLink.replace('#', '')
			const currentPopup = document.querySelector(`.${currentPopupName}`)
			const scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
			console.log(scrollWidth)
			body.classList.add('lock')
			for (i = 0; i < lockPadding.length; i++) {
				lockPadding[i].style.paddingRight = scrollWidth
			}
			console.log(scrollWidth)
			currentPopup.classList.add('open')
			e.preventDefault();
		})
	}
}

const popupCloseIcons = document.querySelectorAll('.popup-close');
if (popupCloseIcons.length > 0) {
	for (let i = 0; i < popupCloseIcons.length; i++) {
		const popupCloseIcon = popupCloseIcons[i];
		const activePopup = popupCloseIcon.closest('.popup')
		popupCloseIcon.addEventListener('click', function (e) {
			body.classList.remove('lock')
			for (i = 0; i < lockPadding.length; i++) {
				lockPadding[i].style.paddingRight = '0px'
			}
			activePopup.classList.remove('open')
			e.preventDefault()
		})
	}
}
//===================
//question animation

const questionBtns = document.querySelectorAll('.question__item-icon')
for (i = 0; i < questionBtns.length; i++) {
	const questionBtn = questionBtns[i]
	const closestItem = questionBtn.closest('.question__item')
	const hiddenText = closestItem.querySelector('p')
	questionBtn.addEventListener('click', function () {
		questionBtn.classList.toggle('_active')
		if (hiddenText) {
			function showHidden() {
				hiddenText.classList.toggle('_active')
			}
			const closestItemHeight = closestItem.offsetHeight
			if (questionBtn.classList.contains('_active')) {
				closestItem.style.height =
					closestItemHeight + hiddenText.scrollHeight + 'px'
				setTimeout(function showHidden() {
					hiddenText.classList.toggle('_active')
				}, 800)
			} else {
				closestItem.style.height = ''
				showHidden()
			}
		}
	})
}
//================================
