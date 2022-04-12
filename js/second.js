const imagen1 = document.getElementById('imagen1');
const maps_option = document.getElementById('map_button');

const menu_icon = document.getElementById('menu_icon');
const menu = document.getElementById('menu');

const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const botonNoAceptarCookies = document.getElementById('btn-no_aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

const btnCerrarVideo = document.getElementById('close_video');
const video_pop_up = document.getElementById('video_pop-up');
const fondoVideo = document.getElementById('fondo-video');
const video = document.getElementById('video');

const gallery_sections = document.getElementById('gallery_sections');

const job_1 = document.getElementById('job_1');
const job_2 = document.getElementById('job_2');
const job_3 = document.getElementById('job_3');
const job_4 = document.getElementById('job_4');
const job_5 = document.getElementById('job_5');
const job_6 = document.getElementById('job_6');

const close_card_btn_1 = document.getElementById('close_card_btn_1');
const close_card_btn_2 = document.getElementById('close_card_btn_2');
const close_card_btn_3 = document.getElementById('close_card_btn_3');
const close_card_btn_4 = document.getElementById('close_card_btn_4');
const close_card_btn_5 = document.getElementById('close_card_btn_5');
const close_card_btn_6 = document.getElementById('close_card_btn_6');

const maps_google_iframe = document.getElementById('map_iframe');
const maps_google_button = document.getElementById('map_button');
const footer_absolute = document.getElementById('footer_absolute');

const fondoCard = document.getElementById('fondo-job');
const body = document.body;

const bot_icon = document.getElementById('chatbot_icon');
const bot_cnt = document.getElementById('chatbot_content');

const questions_container = document.getElementById('questions');
const bot_message = document.getElementById('bot_message');
const bot_answer = document.getElementById('bot_answer');
const back = document.getElementById('back');
const questions = ["¿En qué horario se reúnen para actividades?", "¿A partir de qué edad pueden participar?", "¿Dónde se ubican?", "¿Qué necesito para inscribir a mi hijo/a a los Scouts?", "¿Cuál es la cuota anual y qué incluye?", "¿A qué edad me puedo unir a los Scouts?"];
const answers = ["Nos reunimos todos los sábados a partir de las 4:00 hasta las 6:00 de la tarde", "A partir de los 7 los cumplidos", "Nos ubicamos en: 04870, C. 8 200, Espartaco, Coyoacán, Ciudad de México, CDMX", "Que su hijo/a asista a actividades tres sábados para que tome la decisión", "La cuota anual incluye seguro scout, derecho a participar en las actividades en el parque y a todas las actividades a nivel provincia y/o nacional, material para las actividades.", "Para ser muchacho/a debes tener entre 7 y 22 años cumplidos, si tienes más puedes participar como voluntario"];

try {
	const cnt = document.querySelector('.cnt');
	var sectionIndex = 0;
	const cnt_sections = cnt.children.length;

	left.addEventListener('click', () => {
		sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : cnt_sections - 1;
		cnt.style.transform = 'translateX(' + (sectionIndex) * (-100 / cnt_sections) + '%)';
	});

	right.addEventListener('click', () => {
		sectionIndex = (sectionIndex < (cnt_sections - 1)) ? sectionIndex + 1 : 0;
		cnt.style.transform = 'translateX(' + (sectionIndex) * (-100 / cnt_sections) + '%)';
	});

	left.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : cnt_sections - 1;
			cnt.style.transform = 'translateX(' + (sectionIndex) * (-100 / cnt_sections) + '%)';
		}
	});

	right.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			sectionIndex = (sectionIndex < (cnt_sections - 1)) ? sectionIndex + 1 : 0;
			cnt.style.transform = 'translateX(' + (sectionIndex) * (-100 / cnt_sections) + '%)';
		}
	});

	setInterval(function(){
		sectionIndex = (sectionIndex < (cnt_sections - 1)) ? sectionIndex + 1 : 0;
		cnt.style.transform = 'translateX(' + (sectionIndex) * (-100 / cnt_sections) + '%)';
	}, 8000);
}

catch (e) {
	null
}



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

if (video_pop_up){
	observador.observe(video_pop_up);
}

if (imagen1) {
	let imageCounter = 1;
	while (imageCounter <= 5) {
		var imageName = 'imagen' + imageCounter;
		var imageNameid = document.getElementById(imageName);
		if (imageNameid){
			observador.observe(imageNameid);
		}
		imageCounter++;
	}
}

if (maps_option) {
	observador.observe(maps_option);
}



if (gallery_sections) {
	var filter_gallery_izquierda = document.getElementsByClassName('filter_gallery izquierda');
	var filter_gallery_arriba = document.getElementsByClassName('filter_gallery arriba');
	var filter_gallery_fondo = document.getElementsByClassName('filter_gallery fondo');
	var filter_gallery_abajo = document.getElementsByClassName('filter_gallery abajo');
	var filter_gallery_derecha = document.getElementsByClassName('filter_gallery derecha');

	filter_gallery_izquierda[0].addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			filter_gallery_izquierda[0].click();
		}
	});

	filter_gallery_arriba[0].addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			filter_gallery_arriba[0].click();
		}
	});

	filter_gallery_fondo[0].addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			filter_gallery_fondo[0].click();
		}
	});

	filter_gallery_abajo[0].addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			filter_gallery_abajo[0].click();
		}
	});

	filter_gallery_derecha[0].addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			filter_gallery_derecha[0].click();
		}
	});
}

function showImg(number, id){
	var showImgList = document.getElementById('photoList' + number);
	var clickedImg = document.getElementById(id);
	observador.observe(showImgList);
	setTimeout(function(){
		showImgList.classList.toggle('inside');
	}, 0.1);
	showImgList.classList.toggle('visible_photos');
	
	if (showImgList.classList.contains("visible_photos")){
		clickedImg.scrollIntoView();
		let i = 1;
		while (i <= 5){
			var actualImgList = document.getElementById("photoList" + [i]);
			if (actualImgList != showImgList){
				actualImgList.classList.remove('visible_photos');
				actualImgList.classList.remove('inside');
			}
			i++;
		}
	}
}



function menu_f(){
	menu.classList.toggle('active_menu');
	menu_icon.classList.toggle('cross');
	if (bot_cnt && bot_icon) {
		bot_icon.classList.remove('active_bot');
		bot_cnt.classList.remove('active_bot');
	}
}

menu_icon.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		menu_f();
	}
});


try {
	if(!localStorage.getItem('cookies-aceptadas')){
		avisoCookies.classList.add('activo');
		fondoAvisoCookies.classList.add('activo');
	} 
	else {
		if (localStorage.getItem('cookies-aceptadas') === 'true'){
			if (maps_google_button) {
				maps_google_button.parentNode.removeChild(maps_google_button);
			}
		}
		else if (localStorage.getItem('cookies-aceptadas') === 'false'){
			if (maps_google_iframe) {
				maps_google_iframe.parentNode.removeChild(maps_google_iframe);
				if (footer_absolute){
					footer_absolute.classList.add('absolute');
				}
			}

		}
	}

	botonAceptarCookies.addEventListener('click', () => {
		avisoCookies.classList.remove('activo');
		fondoAvisoCookies.classList.remove('activo');

		localStorage.setItem('cookies-aceptadas', true);
		if (maps_google_button){
			maps_google_button.parentNode.removeChild(maps_google_button);
		}
	});

	botonNoAceptarCookies.addEventListener('click', () => {
		avisoCookies.classList.remove('activo');
		fondoAvisoCookies.classList.remove('activo');

		localStorage.setItem('cookies-aceptadas', false);
		if (maps_google_iframe){
			maps_google_iframe.parentNode.removeChild(maps_google_iframe);
		}
	});

	document.cookie = "cookies-aceptadas; SameSite = Strict; secure;"; 
}

catch (e) {
	null
}


if (btnCerrarVideo && fondoVideo) {
	btnCerrarVideo.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			btnCerrarVideo.click();
		}
	});

	btnCerrarVideo.addEventListener('click', () => {
		video.pause()
		video_pop_up.classList.remove('inside');
		fondoVideo.classList.remove('activo');
		setTimeout(function(){
			video_pop_up.remove();
			fondoVideo.remove();
		}, 800);
	});

	fondoVideo.addEventListener('click', () => {
		video.pause()
		video_pop_up.classList.remove('inside');
		fondoVideo.classList.remove('activo');
		setTimeout(function(){
			video_pop_up.remove();
			fondoVideo.remove();
		}, 800);
	});
}

function openCard(number){
	var modalCard = document.getElementById('modal_job_' + number);
	fondoCard.classList.add('activo');
	modalCard.classList.add('active');
	modalCard.classList.add('inside');
	body.classList.add('locked');
}

if (job_1) {
	job_1.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			job_1.click();
		}
	});

	job_2.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			job_2.click();
		}
	});

	job_3.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			job_3.click();
		}
	});

	job_4.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			job_4.click();
		}
	});

	job_5.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			job_5.click();
		}
	});

	job_6.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			job_6.click();
		}
	});

	close_card_btn_1.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			close_card_btn_1.click();
		}
	});

	close_card_btn_2.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			close_card_btn_2.click();
		}
	});

	close_card_btn_3.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			close_card_btn_3.click();
		}
	});

	close_card_btn_4.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			close_card_btn_4.click();
		}
	});

	close_card_btn_5.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			close_card_btn_5.click();
		}
	});

	close_card_btn_6.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			close_card_btn_6.click();
		}
	});
}


function closeCard(number){
	var modalCard = document.getElementById('modal_job_' + number);
	modalCard.classList.remove('inside');
	setTimeout(function(){
		fondoCard.classList.remove('activo');
		modalCard.classList.remove('active');
		body.classList.remove('locked');
	}, 600);
}



if (bot_cnt && bot_icon) {

	bot_icon.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			bot_icon.click();
		}
	});

	bot_icon.addEventListener('click', () => {
		bot_icon.classList.toggle('active_bot');
		bot_cnt.classList.toggle('active_bot');
	});

	reset_questions();
}

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

if (back) {

	back.addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			back.click();
		}
	});

	back.addEventListener('click', () => {
		reset_questions();
	});
}

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
			if (event.keyCode === 13) {
				event.preventDefault();
				question_element.click();
			}
		});
		n++;
	}
}