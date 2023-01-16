//cuando queremos seleccionar con etiquetas que no tienen id o class

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('parrafo');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
});


// con innetHTML podemos cambiar lo que está dentro del elemento y convertirlo a código HTML
h1.innerHTML = 'Patito <br> Feo';

// con innerText podemos cambiar lo que está dentro del elemento solo agregando texto
h1.innerText = 'Patito <br> Feo';

// para saber que atributo de la etiqueta
//console.log(h1.getAttribute('class'));
// para modificar el atributo quue tiene la etiqueta
//h1.setAttribute('class', 'rojo');

//si se desea hacer algo con la clase de la etiqueta

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.condition('verde');

// para asignarle un value

input.value = "456";

// para crear un elemento en el HTML

const img = document.createElement('img');

img.setAttribute('src', 'https://static.wikia.nocookie.net/hungry-dragon/images/0/0e/Umbra_poster_clean.png/revision/latest?cb=20191213202641');

console.log(img);

pid.innerHTML = "";
pid.append(img);