
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keyup', performSearch);

    // Función que realiza la búsqueda
    function performSearch() {
        // Obtiene el valor de la barra de búsqueda y lo convierte a minúsculas
        const query = searchInput.value.toLowerCase();
        let resultsHTML = '';
        let hasResults = false;

         // Si el campo de búsqueda está vacío, limpia los resultados y muestra el mensaje de no resultados
         if (query.trim() === '') {
            searchResults.innerHTML = '';// Limpiar el contenedor de resultados
            noResults.style.display = 'none';
            return;
        }

        // Obtiene todos los artículos del blog
        const articles = document.querySelectorAll('.blog-categ');

        // Recorre todos los artículos para buscar coincidencias
        articles.forEach(article => {
            const title = article.querySelector('h3').textContent.toLowerCase();
            const content = article.querySelector('p').textContent.toLowerCase();

            // Comprueba si la consulta de búsqueda está en el título o en el contenido del artículo
            if (title.includes(query) || content.includes(query)) {
                hasResults = true;
                resultsHTML += `<article>
                                    <h3>${article.querySelector('h3').textContent}</h3>
                                    <p>${article.querySelector('p').textContent}</p>
                                    <a href="${article.querySelector('.read-more').getAttribute('href')}" class="read-more">Leer más</a>
                                 </article>`;
            }
        });

         // Muestra los resultados o el mensaje de no resultados
        if (hasResults) {
            searchResults.innerHTML = resultsHTML;
            noResults.style.display = 'none';
        } else {
            searchResults.innerHTML = '';
            noResults.style.display = 'block';
        }
    }
});

