(function() {
    // Selecciona todos los testimonios y los botones
    const sliders = [...document.querySelectorAll('.testimonio_cuerpo')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;

    // Maneja el evento de clic en el botón "Next"
    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    // Maneja el evento de clic en el botón "Before"
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    // Cambia la posición del testimonio actual
    const changePosition = (add)=>{
        // Obtiene el testimonio actual mostrado
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        value = Number(currentTestimony);//Para que sume en vez de concatenar
        value+= add;

        // Elimina la clase 'testimony_body--show' del testimonio actual
        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show');

        // Ajusta el índice si sale del rango
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;//Para que mande al primer slider
        }

        // Agrega la clase 'testimony_body--show' al nuevo testimonio
        sliders[value-1].classList.add('testimony_body--show');
    }
})();