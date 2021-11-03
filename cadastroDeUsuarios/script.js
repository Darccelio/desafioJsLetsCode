const inputUsuario = document.querySelector('input[type="text"]');
const btnOK = document.querySelector('input[type="submit"]');  
const form = document.querySelector('form');
const ul = document.querySelector('ul');
let btnRemove;
let idLi = 0;
const LISTA_USUARIOS = 'listaUsuarios';

form.addEventListener('submit', inserirUsuarios);
function inserirUsuarios() {  
  const li = document.createElement('li');
  idLi++;
  li.textContent = inputUsuario.value;
  li.setAttribute('id',`${LISTA_USUARIOS} id${idLi}`)
  ul.appendChild(li);
  inputUsuario.value = '';
  criaBotaoRemover(li);
}

function criaBotaoRemover (itemLista) {
  btnRemove = document.createElement('button');
  btnRemove.innerText = 'Remover';
  btnRemove.setAttribute('onclick','removeUsuario(this)');  
  itemLista.appendChild(btnRemove);
}
  
function removeUsuario(elemento) {
  elemento.parentElement.remove();
};

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
})



