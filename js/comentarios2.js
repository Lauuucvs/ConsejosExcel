document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comentarios_formulario2');
    const nombreInput = document.getElementById('nombre_comentario2');
    const comentarioTextarea = document.getElementById('comentario2');
    const comentariosLista = document.getElementById('comentarios_lista2');

    // Función para cargar comentarios desde el Local Storage
    function loadComments() {
        const comments = JSON.parse(localStorage.getItem('comentarios2')) || [];
        comentariosLista.innerHTML = comments.map(comment => 
            `<div class="comentario_item2">
                <strong>${comment.nombre}</strong>: 
                <p>${comment.texto}</p>
            </div>`
        ).join('');
    }

    // Función para guardar un nuevo comentario en el Local Storage
    function saveComment(nombre, texto) {
        const comments = JSON.parse(localStorage.getItem('comentarios2')) || [];
        comments.push({ nombre, texto });
        localStorage.setItem('comentarios2', JSON.stringify(comments));
    }

    // Manejar el envío del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el comportamiento por defecto del formulario

        const nombre = nombreInput.value.trim();
        const texto = comentarioTextarea.value.trim();

        if (nombre && texto) {
            saveComment(nombre, texto);
            nombreInput.value = ''; // Limpia el campo de nombre
            comentarioTextarea.value = ''; // Limpia el campo de comentario
            loadComments(); // Vuelve a cargar los comentarios
        }
    });

    // Cargar los comentarios al cargar la página
    loadComments();
});