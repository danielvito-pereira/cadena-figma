/* Quando clico no .button, .nav TOGGLE 'activo' *//*
const button = document.querySelector('button');me permite selecionar os dois elementos  
const nav = document.querySelector('navigation');

button.addEventListener('click',()=>{
  nav.classList.toggle('ativo');
})
*/

// Adiciona ou remove a classe "ativo" no elemento de navegação ao clicar no botão.
const button = document.querySelector('button');
const nav = document.querySelector('nav');

if (button && nav) {
  button.addEventListener('click', () => {
    nav.classList.toggle('ativo');
  });}else {
  console.log("não funcionou")
}
