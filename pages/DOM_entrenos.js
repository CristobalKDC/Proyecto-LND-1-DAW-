
// Intento de sonido al hacer click

const boton1 = document.querySelector('.facil1 img');
const meterMusica = document.querySelector('body');
boton1.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/entrenos facil.mp3';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});

const boton2 = document.querySelector('.facil2 img');

boton2.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/entrenos facil.mp3';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});

const boton3 = document.querySelector('.facil3 img');

boton3.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/entrenos facil.mp3';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});


const boton4 = document.querySelector('.medio1 img');

boton4.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/carga ki.m4a';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});

const boton5 = document.querySelector('.medio2 img');

boton5.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/carga ki.m4a';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});

const boton6 = document.querySelector('.medio3 img');

boton6.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/carga ki.m4a';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});

const boton7 = document.querySelector('.dificil1 img');

boton7.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/dificil.mp3';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});


const boton8 = document.querySelector('.dificil2 img');

boton8.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/dificil.mp3';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});

const boton9 = document.querySelector('.dificil3 img');

boton9.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/dificil.mp3';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});

const boton10 = document.querySelector('.super img');

boton10.addEventListener('click', () => {
	// console.log(boton1.textContent);
    nuevoDiv = document.createElement('audio');
    nuevoDiv.src = '../archivos/sound/BROLY.mp3';
    nuevoDiv.loop = 'true';
    nuevoDiv.autoplay = "true";
    meter.appendChild(nuevoDiv);
});

document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos <a>
    var links = document.querySelectorAll('main a');
    
    // Itera sobre cada enlace y agrega un event listener para el evento clic
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Previene el comportamiento predeterminado del enlace (redirección inmediata)
        event.preventDefault();
  
       
  
        // Obtiene la URL del enlace
        var targetUrl = this.getAttribute('href');
  
        // Agrega una demora antes de redirigir a la nueva página
        setTimeout(function() {
          window.location.href = targetUrl;  // Redirige a la nueva página después de la demora
          
        }, 1000); //este 1500 indica que son 1.5 segundos(1500 milisegundos)

        setTimeout(function() {
            location.reload();
            
          }, 2500);

        
     });
    });
  });
  




// Con esto ajustamos la imagen de los videos con comentarios

// Imagen 1 de entrenos facil

const facil1 = document.querySelector('.facil1 img');
const meter = document.querySelector('.EntrenoFacil');
// creamos el evento de pasar el raton sobre la imagen 1 de 10
facil1.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion1';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "En este entrenamiento empezaremos haciendo 7 minutos de ejercicios varios como son: Jamping Jak, sentadillas, flexiones, mountain clain y burpees.";
    meter.appendChild(nuevoDiv);


});

facil1.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter.removeChild(nuevoDiv);

});


// Imagen 2
const facil2 = document.querySelector('.facil2 img');

// creamos el evento de pasar el raton sobre la imagen 2 de 10
facil2.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion2';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "Rutina perfecta si quieres algo intenso y no tienes tiempo en tu dia a dia, realizaremos cardio a muerte. Lo ideal es realizarla de 2 a 5 veces, pero puedes hacerla suelta en tu rutina de entrenamiento.";
    meter.appendChild(nuevoDiv);

});

facil2.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter.removeChild(nuevoDiv);
});

// Imagen 3
const facil3 = document.querySelector('.facil3 img');

// creamos el evento de pasar el raton sobre la imagen 3 de 10
facil3.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion3';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "Una rutina buena para acabar el entrenamiento, cardio no muy intenso con descansos donde abarcaremos principalmente grupos musculares grandes.";
    meter.appendChild(nuevoDiv);

});

facil3.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter.removeChild(nuevoDiv);
});


// Imagen 4
//  A partir de aqui es entreno medio

const medio1 = document.querySelector('.medio1 img');
const meter2 = document.querySelector('.EntrenoMedio'); 

// creamos el evento de pasar el raton sobre la imagen 4 de 10
medio1.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion4';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "texto explicando entreno";
    meter2.appendChild(nuevoDiv);

});

medio1.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter2.removeChild(nuevoDiv);
});

// Imagen 5

const medio2 = document.querySelector('.medio2 img');


// creamos el evento de pasar el raton sobre la imagen 5 de 10
medio2.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion5';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "texto explicando entreno";
    meter2.appendChild(nuevoDiv);

});

medio2.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter2.removeChild(nuevoDiv);
});

// Imagen 6
//  A partir de aqui es entreno medio

const medio3 = document.querySelector('.medio3 img');


// creamos el evento de pasar el raton sobre la imagen 6 de 10
medio3.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion6';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "texto explicando entreno";
    meter2.appendChild(nuevoDiv);

});

medio3.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter2.removeChild(nuevoDiv);
});

// Imagen 7
//  A partir de aqui es entreno dificicl

const dificil1 = document.querySelector('.dificil1 img');
const meter3 = document.querySelector('.EntrenoDificil'); 

// creamos el evento de pasar el raton sobre la imagen 7 de 10
dificil1.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion7';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "texto explicando entreno";
    meter3.appendChild(nuevoDiv);

});

dificil1.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter3.removeChild(nuevoDiv);
});

// Imagen 8

const dificil2 = document.querySelector('.dificil2 img');

// creamos el evento de pasar el raton sobre la imagen 9 de 10
dificil2.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion8';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "texto explicando entreno";
    meter3.appendChild(nuevoDiv);

});

dificil2.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter3.removeChild(nuevoDiv);
});

// Imagen 9

const dificil3 = document.querySelector('.dificil3 img');

// creamos el evento de pasar el raton sobre la imagen 10 de 10
dificil3.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion9';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "texto explicando entreno";
    meter3.appendChild(nuevoDiv);

});

dificil3.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter3.removeChild(nuevoDiv);
});


// Imagen 10
//  A partir de aqui es entreno SUPER SAIYAN

const saiyan = document.querySelector('.super img');
const meter4 = document.querySelector('.SuperEntreno'); 

// creamos el evento de pasar el raton sobre la imagen 7 de 10
saiyan.addEventListener('mouseenter', (event) => {

    nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'descripcion10';
    nuevoDiv.id = 'nuevo-div';
    nuevoDiv.textContent = "texto explicando entrenoooooooooooooo";
    meter4.appendChild(nuevoDiv);

});

saiyan.addEventListener('mouseout',(event) => {
    //console.log('Has salido');
    meter4.removeChild(nuevoDiv);
});


//con esto hacemos fixed la barra de navegacion de la izquierda en movil

window.addEventListener('scroll', function() {

    
    var barrita = document.querySelector('.barraLateral');
    var info = document.querySelector('.info');

    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth; //con esto cogemos la medida del width que se muestre

    if (windowWidth > 768) {
        // Código para pc
        if (window.scrollY > info.offsetHeight) {
            barrita.style.position = 'fixed';
            barrita.style.top = '8rem';
        } else {
            barrita.style.position = 'absolute';
            barrita.style.top = '24rem';
    }
    }else if (windowWidth <= 576 && windowWidth > 328) {
            // Código para dispositivos con pantalla de hasta 576px de ancho
        if (window.scrollY > info.offsetHeight) {
            barrita.style.position = 'fixed';
            barrita.style.top = '8rem';
        } else {
            barrita.style.position = 'absolute';
            barrita.style.top = '45rem';
        }
    } else if (windowWidth <= 328) {
        // Código para dispositivos con pantalla de hasta 328px de ancho
       
        if (window.scrollY > info.offsetHeight) {
            barrita.style.position = 'fixed';
            barrita.style.top = '-5rem';
        } else {
            barrita.style.position = 'absolute';
            barrita.style.top = '47rem';
        }
        
    }else if (windowWidth <= 794 && windowHeight <= 414) {
        // Código para movil horizontal
       
        if (window.scrollY > info.offsetHeight) {
            barrita.style.position = 'fixed';
            barrita.style.top = '-1.3rem';
        } else {
            barrita.style.position = 'absolute';
            barrita.style.top = '20rem';
        }
        
    }
  });
