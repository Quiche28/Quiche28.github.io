const botonAceptarCookies = document.getElementById('btn-aceptar-cookies');
const botonNoAceptarCookies = document.getElementById('btn-no_aceptar-cookies');
const avisoCookies = document.getElementById('aviso-cookies');
const fondoAvisoCookies = document.getElementById('fondo-aviso-cookies');
const maps_google_iframe = document.getElementById('map_iframe');
const maps_google_button = document.getElementById('map_button');
const footer_absolute = document.getElementById('footer_absolute');

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
	else {
		console.log("failed to hide something");
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