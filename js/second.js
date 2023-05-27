const imagen1 = document.getElementById('imagen1');

const menu_icon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');
const menuLinks = document.querySelectorAll('.menu-link');

const bot_icon = document.getElementById('chatbot_icon');
const bot_cnt = document.getElementById('chatbot_content');
const tooltip = document.getElementById('tooltip');

const questions_container = document.getElementById('questions');
const bot_message = document.getElementById('bot_message');
const bot_answer = document.getElementById('bot_answer');
const back = document.getElementById('back');
const questions = ["¿En qué horario se reúnen para actividades?", "¿Dónde se ubican?", "¿Qué necesito para inscribir a mi hijo/a a los Scouts?", "¿Cuál es la cuota anual y qué incluye?", "¿A qué edad me puedo unir a los Scouts?", "¿Tienes una pregunta que no está aquí?"];
const answers = ["Nos reunimos todos los sábados a partir de las 4:00 hasta las 6:00 de la tarde", "Nos ubicamos en: 04870, C. 8 200, Espartaco, Coyoacán, Ciudad de México, CDMX.", "Que su hijo/a asista a actividades tres sábados para que tome la decisión", "La cuota anual incluye seguro scout, derecho a participar en las actividades en el parque y a todas las actividades a nivel provincia y/o nacional, material para las actividades.", "Para ser muchacho/a debes tener entre 7 y 22 años cumplidos, si tienes más puedes participar como voluntario", "Puedes mandar un mensaje por WhatsApp al siguiente número y te responderemos con gusto: <a class='chatbot_phone' href='https://api.whatsapp.com/send?phone=525513638299&app'>5513638299</a>"];

const copyright = document.querySelector('.copyright');
const close_menu = document.getElementById('close_menu');

const cargarImagen = (entradas, observador) => {
	entradas.forEach((entrada) => {
		if(entrada.isIntersecting){
			entrada.target.classList.add('inside');
		}
	});
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px 0px 0px 0px',
	threshold: 0.8
});

if (imagen1) {
	let imageCounter = 1;
	while (imageCounter <= 6) {
		var imageName = 'imagen' + imageCounter;
		var imageNameid = document.getElementById(imageName);
		if (imageNameid){
			observador.observe(imageNameid);
		}
		imageCounter++;
	}
}

// Obtenemos todos los enlaces del header
const links = document.querySelectorAll('.header-link');

// Removemos el foco y el efecto hover al hacer clic en un enlace
links.forEach(link => {
  link.addEventListener('click', () => {
	link.blur(); // Removemos el foco
	link.classList.remove('hover-effect'); // Removemos la clase del efecto hover
  });
});

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
	  	menu.classList.remove('active_menu');
	  	menu_icon.classList.remove('cross');
		close_menu.classList.remove('active');
	});
});

// Obtén todos los enlaces de desplazamiento suave en tu página
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

// Agrega un evento de clic a cada enlace
smoothScrollLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento de desplazamiento predeterminado

    const targetId = link.getAttribute('href'); // Obtiene el valor del atributo href del enlace
    const targetElement = document.querySelector(targetId); // Obtiene el elemento al que se desea desplazar

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave hacia el elemento
    }
  });
});

$(document).ready(function() {
	const targetPosition = $('#Inicio').offset().top + $('#Inicio').outerHeight(); // Punto específico del documento

	$(window).scroll(function() {
	  const scrolled = $(window).scrollTop();

	  if (scrolled >= targetPosition) {
		$('#header-intro').css('background-color', 'rgba(102, 153, 204, 1.0)'); // 100% de valor alpha
		$('#header-intro').css('box-shadow', '0px 5px 20px rgba(0, 0, 0, 0.16)'); // Valor alpha de la sombra
	  } else {
		const alphaValue = scrolled / targetPosition;
		$('#header-intro').css('background-color', `rgba(102, 153, 204, ${alphaValue})`);
		$('#header-intro').css('box-shadow', '0px 5px 20px rgba(0, 0, 0, 0)');
	  }
	});
});

const carousel = document.querySelector('.carousel-inner');
const image = carousel.querySelector('img');
let currentIndex = 1;
const maxIndex = 10; // Número máximo de imágenes
const interval = 5000; // Intervalo en milisegundos (5 segundos)
let intervalId; // Variable para almacenar el ID del intervalo
let pausedIndex; // Variable para almacenar el índice cuando se pausa el carrusel

function getNextImage() {
  const imagePath = `https://scouts28quiche.org/assets/tropas_de_scouts_${currentIndex}.jpeg`;
  image.src = imagePath;
}

function slideToNext() {
  carousel.style.transform = `translateX(200%)`;
  setTimeout(() => {
    getNextImage();
    carousel.style.transform = 'translateX(0)';
  }, 500);
  currentIndex = (currentIndex % maxIndex) + 1;
}

function startCarousel() {
  intervalId = setInterval(slideToNext, interval);
}

function pauseCarousel() {
  clearInterval(intervalId);
  pausedIndex = currentIndex; // Almacenar el índice actual cuando se pausa el carrusel
}

function handleWindowResize() {
  if (window.innerWidth < 767) {
    pauseCarousel();
    carousel.style.transform = 'none'; // Restablecer la transformación al detener el carrusel
  } else {
    if (intervalId) {
		// El carrusel está en funcionamiento pero la pantalla es mayor o igual a 767
		pauseCarousel(); // Pausar el carrusel
		getNextImage(); // Cargar la imagen actual
		startCarousel(); // Iniciar el carrusel
	}
  }
}

getNextImage(); // Cargar la primera imagen

if (window.innerWidth < 767) {
  pauseCarousel(); // Detener el carrusel si la pantalla es menor a 767
  carousel.style.transform = 'none'; // Restablecer la transformación al cargar la página
} else {
  startCarousel(); // Iniciar el carrusel si la pantalla es mayor o igual a 767
}

window.addEventListener('resize', handleWindowResize);

function menu_icon_pressed() {
	menu.classList.toggle('active_menu');
	menu_icon.classList.toggle('cross');
	close_menu.classList.toggle('active');
	if (bot_cnt && bot_icon) {
		bot_icon.classList.remove('active_bot');
		bot_cnt.classList.remove('active_bot');
	}
}

menu_icon.addEventListener("keyup", function(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		menu_icon_pressed();
	}
});

menu_icon.addEventListener('click', () => {
	menu_icon_pressed();
});

bot_icon.addEventListener("keyup", function(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		bot_icon.click();
	}
});

bot_icon.addEventListener('click', () => {
	if(!tooltip.classList.contains('hidden')){
		tooltip.classList.add('hidden');
	}
	bot_icon.classList.toggle('active_bot');
	bot_cnt.classList.toggle('active_bot');
});

reset_questions();

function question_answer(number, id) {

	let n = 0;
	let i = 0;
	const actual_question = document.getElementById(id);

	if (questions_container.children.length > 1) {
		while (n <= questions.length - 1) {
			var child = questions_container.children[i];
			var question_id = child.getAttribute("id");
			if (question_id === id) {
				i++;
				bot_message.classList.add("element_hidden");
				actual_question.classList.remove("hoverable");
				actual_question.removeAttribute("onclick");
				actual_question.removeAttribute("tabindex");
				bot_answer.innerHTML = answers[number];
				bot_answer.classList.remove("element_hidden");
				back.classList.remove("element_hidden");
			}
			else {
				child.remove();
			}
			n++;
		}
	}
}

back.addEventListener("keyup", function(event) {
	if (event.key === 'Enter') {
		event.preventDefault();
		back.click();
	}
});

back.addEventListener('click', () => {
	reset_questions();
});

function reset_questions() {
	let n = 0;

	while (questions_container.firstChild) {
		questions_container.firstChild.remove();
	}

	bot_message.classList.remove("element_hidden");
	bot_answer.innerHTML = "";
	bot_answer.classList.add("element_hidden");
	back.classList.add("element_hidden");

	while (n <= questions.length - 1) {
		let question_element = document.createElement('div');
		question_element.classList.add('question');
		question_element.classList.add('hoverable');
		questions_container.appendChild(question_element);
		question_element.textContent= questions[n];
		question_element.setAttribute("onclick", "question_answer("+ n + ", this.id);");
		question_element.setAttribute("id", "question_" + n);
		question_element.setAttribute("tabindex", "0");

		question_element.addEventListener("keyup", function(event) {
			if (event.key === 'Enter') {
				event.preventDefault();
				question_element.click();
			}
		});
		n++;
	}
}

copyright.innerHTML = 'Quiché - ' + new Date().getFullYear() + ' Copyright &copy;. Todos los derechos reservados.';

var swiper = new Swiper('.scouts-slider', {
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	mousewheel: {
	  invert: false,
	},
	// autoHeight: true,
	pagination: {
	  el: '.scouts-slider__pagination',
	  clickable: true,
	}
});

close_menu.addEventListener('click', () => {
	menu_icon_pressed();
});