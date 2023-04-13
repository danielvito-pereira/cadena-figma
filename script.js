/* Quando clico no .button, .nav TOGGLE 'activo' */
const button = document.querySelector('button');/*me permite selecionar os dois elementos  */
const nav    = document.querySelector('navigation');

button.addEventListener('click',()=>{
  nav.classList.toggle('ativo')
})