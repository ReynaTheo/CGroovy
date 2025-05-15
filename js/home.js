document.addEventListener('DOMContentLoaded', function() {
    const albumGrid = document.querySelector('.album-grid');
    const albumCards = document.querySelectorAll('.album-card');
    const prevButton = document.getElementById('prev-album');
    const nextButton = document.getElementById('next-album');
    
    let currentIndex = 0;
    const cardsPerPage = 5;
    const totalPages = Math.ceil(albumCards.length / cardsPerPage);
        
    function showAlbums() {
        albumCards.forEach(card => {
            card.style.display = 'none';
        });
        
        for (let i = 0; i < cardsPerPage; i++) {
            const index = (currentIndex * cardsPerPage + i) % albumCards.length;
            if (albumCards[index]) {
                albumCards[index].style.display = 'block';
            }
        }
    }
        nextButton.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % totalPages;
            showAlbums();
        });
        
        prevButton.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + totalPages) % totalPages;
            showAlbums();
        });
        
        showAlbums();
});