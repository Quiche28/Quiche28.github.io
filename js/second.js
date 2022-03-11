const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');
const imagen5 = document.getElementById('imagen5');
const maps_option = document.getElementById('map_button');

const iconoMenu = document.querySelector('#icono-menu');
const menu = document.querySelector('#menu');

const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const botonNoAceptarCookies = document.getElementById('btn-no_aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');

const btnCerrarVideo = document.getElementById('close_video');
const video_pop_up = document.getElementById('video_pop-up');
const fondoVideo = document.getElementById('fondo-video');
const video = document.getElementById('video');

const maps_google_iframe = document.getElementById('map_iframe');
const maps_google_button = document.getElementById('map_button');
const footer_absolute = document.getElementById('footer_absolute');

const fondoCard = document.getElementById('fondo-job');
const body = document.body;

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
	threshold: 1.0
});

if (video_pop_up){
	observador.observe(video_pop_up);
}

if (imagen1){
	observador.observe(imagen1);
}

if (imagen2){
	observador.observe(imagen2);
}

if (imagen3){
	observador.observe(imagen3);
}

if (imagen4){
	observador.observe(imagen4);
}

if (imagen5){
	observador.observe(imagen5);
}

if (maps_option) {
	observador.observe(maps_option);
}



function menu_f(){
	menu.classList.toggle('active_menu');
}




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

function closeCard(number){
	var modalCard = document.getElementById('modal_job_' + number);
	modalCard.classList.remove('inside');
	setTimeout(function(){
		fondoCard.classList.remove('activo');
		modalCard.classList.remove('active');
		body.classList.remove('locked');
	}, 600);
}

