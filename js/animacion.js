const imagen1 = document.getElementById('imagen1');
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');
const imagen5 = document.getElementById('imagen5');
const maps_option = document.getElementById('map_button');

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