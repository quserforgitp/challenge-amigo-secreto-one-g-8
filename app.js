const amigos = [];
const ENTER = 13;
const SLASH = 191;

// intenta agregar amigo si se presiona enter en el input
const inputNombresDeAmigos = obtieneElemento('#amigo.input-name');

inputNombresDeAmigos
  .addEventListener('keydown',
    (e) => (e.keyCode === ENTER) ? agregaAmigo() : false);

// intenta sortear amigo si se presiona ctrl + enter en cualquier momento
obtieneElemento('body')
  .addEventListener('keydown',
    (e) => (e.keyCode === ENTER && e.ctrlKey) ? sorteaAmigo() : false);

// focus al input en cualquier momento
obtieneElemento('body')
  .addEventListener('keydown',
    (e) => {
      if (e.keyCode === SLASH && document.activeElement != inputNombresDeAmigos) {
        e.preventDefault();
        focusInput(inputNombresDeAmigos);
      }
    }
  );

// Funciones Principales
function agregaAmigo() {

  const inputNombresDeAmigos = obtieneElemento('#amigo.input-name');
  const elementoListaAmigos = obtieneElemento('#listaAmigos');

  const nombreDeAmigo = inputNombresDeAmigos.value;

  // verificar que el input no este vacio
  if (elInputEstaVacio(inputNombresDeAmigos)) return;

  if(elNombreYaApareceEnLaLista(nombreDeAmigo, amigos)) {
    alert(`"${formateaNombre(nombreDeAmigo)}" ya esta en la lista`);
    borraTextoEnInput(inputNombresDeAmigos);
    return;
  }

  agregaNombreAlista(nombreDeAmigo, amigos);

  renderizaNombreEnElemento(nombreDeAmigo, elementoListaAmigos);

  borraTextoEnInput(inputNombresDeAmigos);
}
function sorteaAmigo() {
  if (amigos.length === 0) return;
  const elementoListaResultado = obtieneElemento('#resultado');
  const indiceAleatorio = parseInt(Math.random() * amigos.length);
  elementoListaResultado.innerText = amigos[indiceAleatorio];
}

// Funciones UTILES
function obtieneElemento(selector) {
  return document.querySelector(selector);
}
function borraTextoEnInput(element) {
  element.value = '';
}
function elNombreYaApareceEnLaLista(nombre, lista) {
  const nombreEnMinusculas = nombre.toLowerCase();
  return lista.some( (nombre) => nombre.toLowerCase() === nombreEnMinusculas)
}
function formateaNombre(nombre) {
  return nombre[0].toUpperCase() + nombre.slice(1).toLowerCase();
}
function elInputEstaVacio(input) {
  return input.value.trim() === '';
}
function agregaNombreAlista(nombre, lista) {
  const nombreFormateado = formateaNombre(nombre);
  lista.push(nombreFormateado);
}
function creaElemento(nombreEtiqueta) {
  return document.createElement(nombreEtiqueta);
}
function renderizaNombreEnElemento(nombre, elemento) {
  const nombreElementoLista = creaElemento('li');
  nombreElementoLista.innerText = formateaNombre(nombre);
  elemento.appendChild(nombreElementoLista);
}
function focusInput(input) {
  input.focus();
}