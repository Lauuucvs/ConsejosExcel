
(function(){
    const titleQuestions = [...document.querySelectorAll('.preguntas_titulo')];//Obtiene todas las preguntas que tenemos, en forma de array
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{ //para iterar cada elemento, obteniendolas individualmente
        question.addEventListener('click', ()=>{//Al dar clic arroja una alerta
            let height = 0;//Alto del elemento
            let answer = question.nextElementSibling;//Para obtener la respuesta
            let addPadding = question.parentElement.parentElement;

            addPadding.classList.toggle('preguntas_padding--add');//Para darle un efecto
            question.children[0].classList.toggle('preguntas_arrow--rotate');//Permite rotar la flecha

            if(answer.clientHeight === 0){//Si el parrafo está en cero, hacer que se muestre el contenido
                height = answer.scrollHeight; //solo da el alto minimo
            }

            answer.style.height = `${height}px`; //Dandole alto
        });
    });
})();