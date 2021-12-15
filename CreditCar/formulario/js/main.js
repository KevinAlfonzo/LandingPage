const tarjeta = document.querySelector('#Tarjeta'),
    btnAbrirFormulario =  document.querySelector('#btn-abrir-formulario');
    formulario = document.querySelector('#formulario-tarjeta');

tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
});

btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active')
});
