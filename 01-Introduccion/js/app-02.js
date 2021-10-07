//Lo que se puede hacer con JavaScript.

//El 'prompt' es como un alert el cual en este caso, nos otorga un input y se asigna a la variable el texto asignado en el input.
const nombre = prompt('¿Cual es tu nombre?')

//'document.querySelector': permite seleccionar elementos del HTML. La sintaxis es la siguiente:
//document.querySelector
//es quien permite seleccionar contenidos de HTML.
//('.nombreDeLaClase')
//.innerHTML: dentro del HTML
//Se asigna dentro de un par de backTicks la sintaxis de template literario `${{envolviendo el nombre de la variable}}` finalizando con un ;
document.querySelector('.contenido').innerHTML = `yo ${nombre} estoy aprendiendo JavaScript moderno`;